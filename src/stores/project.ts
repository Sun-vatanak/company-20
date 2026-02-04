import { defineStore } from "pinia";
import axios from "axios";

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: number;
  category_id: number;
  title: string;
  slug: string;
  client_name: string;
  description: string;
  thumbnail_url: string;
  tech_stack: string[] | null;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
  category: Category;
}

interface ProjectsResponse {
  success?: boolean;
  current_page: number;
  data: Project[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: any[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

interface CategoryProjectsResponse {
  success: boolean;
  category: Category;
  data: ProjectsResponse;
  message: string;
}

export const useProjectStore = defineStore('project_store', {
  state: () => ({
    projects: [] as Project[],
    categories: [] as Category[],
    isLoading: false,
    currentPage: 1,
    totalPages: 1,
    totalRecords: 0,
    selectedCategory: null as number | null,
  }),

  getters: {
    // Get all projects
    allProjects: (state) => state.projects,

    // Get featured projects
    featuredProjects: (state) => state.projects.filter(p => p.is_featured),

    // Get projects by category
    projectsByCategory: (state) => (categoryId: number) => {
      return state.projects.filter(p => p.category_id === categoryId);
    },

    // Check if loading
    loading: (state) => state.isLoading,

    // Get pagination info
    paginationInfo: (state) => ({
      currentPage: state.currentPage,
      totalPages: state.totalPages,
      totalRecords: state.totalRecords,
    }),
  },

  actions: {
    // Fetch all categories
    async fetchCategories() {
      console.log('🔄 Fetching categories...');

      try {
        // Try to fetch from API endpoint
        const response = await axios.get<{ data: Category[] }>('/api/categories');
        this.categories = response.data.data || [];
        console.log('✅ Categories loaded:', this.categories);
      } catch (error) {
        console.warn("⚠️ Categories endpoint not available, will extract from projects");
        // Categories will be extracted from projects
      }
    },

    // Fetch all projects
    async fetchAllProjects(page: number = 1) {
      this.isLoading = true;
      console.log('🔄 Fetching all projects (page:', page, ')...');

      try {
        const response = await axios.get<ProjectsResponse>('/api/projects', {
          params: { page }
        });

        console.log('✅ API Response:', response.data);

        this.projects = response.data.data;
        this.currentPage = response.data.current_page;
        this.totalPages = response.data.last_page;
        this.totalRecords = response.data.total;
        this.selectedCategory = null;

        console.log('✅ Projects loaded:', this.projects.length);
        console.log('📊 Total records:', this.totalRecords);

        // Extract unique categories from projects
        this.extractCategoriesFromProjects();
      } catch (error) {
        console.error("❌ Error fetching projects:", error);
        this.projects = [];
        this.totalRecords = 0;
      } finally {
        this.isLoading = false;
        console.log('🏁 Loading finished');
      }
    },

    // Fetch projects by category
    async fetchProjectsByCategory(categoryId: number, page: number = 1) {
      this.isLoading = true;
      console.log(`🔄 Fetching projects for category ${categoryId} (page: ${page})...`);

      try {
        const response = await axios.get<CategoryProjectsResponse>(
          `/api/projects/category/${categoryId}`,
          { params: { page } }
        );

        console.log('✅ API Response:', response.data);

        if (response.data.success) {
          this.projects = response.data.data.data;
          this.currentPage = response.data.data.current_page;
          this.totalPages = response.data.data.last_page;
          this.totalRecords = response.data.data.total;
          this.selectedCategory = categoryId;

          console.log('✅ Projects loaded:', this.projects.length);
          console.log('📊 Total records:', this.totalRecords);
        }
      } catch (error) {
        console.error("❌ Error fetching projects by category:", error);
        this.projects = [];
        this.totalRecords = 0;
      } finally {
        this.isLoading = false;
        console.log('🏁 Loading finished');
      }
    },

    // Extract categories from loaded projects
    extractCategoriesFromProjects() {
      if (this.categories.length === 0 && this.projects.length > 0) {
        const uniqueCategories = new Map<number, Category>();
        this.projects.forEach(project => {
          if (project.category && !uniqueCategories.has(project.category.id)) {
            uniqueCategories.set(project.category.id, project.category);
          }
        });
        this.categories = Array.from(uniqueCategories.values());
        console.log('📂 Extracted categories:', this.categories);
      }
    },

    // Change page
    async changePage(page: number) {
      if (this.selectedCategory) {
        await this.fetchProjectsByCategory(this.selectedCategory, page);
      } else {
        await this.fetchAllProjects(page);
      }
    },

    // Get image full URL
    getImageUrl(path: string): string {
      if (!path) {
        console.warn('⚠️ No image path provided');
        return 'https://via.placeholder.com/400x300?text=No+Image';
      }

      // If it's already a full URL, return it
      if (path.startsWith('http://') || path.startsWith('https://')) {
        console.log('✅ Using full URL:', path);
        return path;
      }

      // Get base URL from environment or axios defaults
      const baseURL = import.meta.env.VITE_API_BASE_URL ||
                      axios.defaults.baseURL ||
                      window.location.origin;

      // Ensure path starts with /
      const cleanPath = path.startsWith('/') ? path : `/${path}`;

      const fullUrl = `${baseURL}${cleanPath}`;
      console.log('🖼️ Image URL:', fullUrl);

      return fullUrl;
    },

    // Get year from date string
    getYear(dateString: string): number {
      return new Date(dateString).getFullYear();
    },

    // Reset store
    resetStore() {
      this.projects = [];
      this.categories = [];
      this.isLoading = false;
      this.currentPage = 1;
      this.totalPages = 1;
      this.totalRecords = 0;
      this.selectedCategory = null;
    }
  }
});
