<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useProjectStore } from '@/stores/project';

const projectStore = useProjectStore();
const selectedCategoryId = ref<number | 'all'>('all');

// Computed properties from store
const projects = computed(() => projectStore.projects);
const categories = computed(() => projectStore.categories);
const isLoading = computed(() => projectStore.isLoading);
const currentPage = computed(() => projectStore.currentPage);
const totalPages = computed(() => projectStore.totalPages);
const totalRecords = computed(() => projectStore.totalRecords);

// Category options with "All"
const categoryOptions = computed(() => [
  { id: 'all' as const, name: 'All Projects' },
  ...categories.value.map(cat => ({ id: cat.id, name: cat.name }))
]);

// Handle category change
const handleCategoryChange = async (categoryValue: number | 'all') => {
  selectedCategoryId.value = categoryValue;

  if (categoryValue === 'all') {
    await projectStore.fetchAllProjects(1);
  } else {
    await projectStore.fetchProjectsByCategory(categoryValue, 1);
  }
};

// Handle page change
const handlePageChange = async (page: number) => {
  await projectStore.changePage(page);
};

// Handle image loading error
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  console.error('❌ Image failed to load:', img.src);
  img.src = 'https://via.placeholder.com/400x300?text=No+Image';
};

// Handle image load success
const handleImageLoad = (projectTitle: string) => {
  console.log('✅ Image loaded for:', projectTitle);
};

// Initialize data on mount
onMounted(async () => {
  console.log('🚀 Component mounted, loading projects...');
  await projectStore.fetchAllProjects();
});
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden bg-gradient-to-br from-white to-gray-lighter py-20 px-5 md:px-20"
    >
      <div class="mx-auto max-w-6xl">
        <div class="flex flex-col gap-8 animate-fade-in">
          <h1 class="text-5xl md:text-6xl font-bold text-dark leading-tight animate-slide-down">
            Case Studies
          </h1>
          <p class="text-xl text-gray max-w-2xl animate-slide-down" style="animation-delay: 0.1s">
            Explore real-world examples of how we've helped companies achieve their goals.
          </p>
          <p class="text-sm text-gray animate-slide-down" style="animation-delay: 0.2s">
            Total Projects: {{ totalRecords }}
          </p>
        </div>
      </div>
    </section>

    <!-- Category Filter -->
    <section class="px-5 md:px-20 py-16">
      <div class="mx-auto max-w-6xl">
        <div class="flex flex-wrap gap-3 justify-center animate-fade-in">
          <button
            v-for="category in categoryOptions"
            :key="category.id"
            @click="handleCategoryChange(category.id)"
            :class="[
              'rounded-[50px] px-6 py-3 font-semibold transition hover:scale-105 active:scale-95',
              selectedCategoryId === category.id
                ? 'bg-primary text-dark'
                : 'border-2 border-dark text-dark hover:bg-dark/10',
            ]"
            :disabled="isLoading"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Loading State -->
    <section v-if="isLoading" class="px-5 md:px-20 py-20">
      <div class="mx-auto max-w-6xl text-center">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p class="text-xl text-gray mt-4">Loading projects...</p>
      </div>
    </section>

    <!-- Case Studies Grid -->
    <section v-else class="px-5 md:px-20 py-20">
      <div class="mx-auto max-w-6xl">
        <!-- Empty State -->
        <div v-if="projects.length === 0" class="text-center py-20">
          <p class="text-xl text-gray">No projects found in this category.</p>
        </div>

        <!-- Projects Grid -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in projects"
            :key="project.id"
            class="rounded-[20px] overflow-hidden bg-white border-2 border-gray-lighter hover:border-primary hover:shadow-xl transition transform hover:scale-105 animate-fade-in"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="h-48 bg-gray-lighter overflow-hidden relative">
              <img
                :src="projectStore.getImageUrl(project.thumbnail_url)"
                :alt="project.title"
                class="w-full h-full object-cover hover:scale-110 transition duration-500"
                @error="handleImageError"
                @load="() => handleImageLoad(project.title)"
              />
              <!-- Debug overlay - Remove in production -->
              <!-- <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white text-xs p-2 truncate">
                {{ projectStore.getImageUrl(project.thumbnail_url) }}
              </div> -->
            </div>
            <div class="p-6">
              <p class="text-xs text-primary font-bold uppercase tracking-wide mb-2">
                {{ project.client_name }} • {{ projectStore.getYear(project.created_at) }}
              </p>
              <h3 class="text-xl font-bold text-dark mb-3">{{ project.title }}</h3>
              <p class="text-gray text-sm mb-4 line-clamp-3">{{ project.description }}</p>

              <div class="space-y-3 border-t border-gray-lighter pt-4 mt-4">
                <div>
                  <p class="text-xs font-semibold text-dark uppercase">Category</p>
                  <p class="text-sm text-gray">{{ project.category.name }}</p>
                </div>
                <div v-if="project.tech_stack && project.tech_stack.length > 0">
                  <p class="text-xs font-semibold text-dark uppercase">Tech Stack</p>
                  <div class="flex flex-wrap gap-2 mt-1">
                    <span
                      v-for="tech in project.tech_stack"
                      :key="tech"
                      class="inline-block bg-gray-lighter text-dark text-xs px-2 py-1 rounded"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
                <div v-if="project.is_featured">
                  <span class="inline-block bg-primary text-dark text-xs font-bold px-3 py-1 rounded-full">
                    ⭐ Featured
                  </span>
                </div>
              </div>

              <button
                class="w-full mt-6 rounded-[50px] bg-dark text-white py-3 font-semibold hover:bg-dark/90 transition transform hover:scale-105 active:scale-95"
              >
                View Details
              </button>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div v-if="totalPages > 1" class="mt-12 flex justify-center items-center gap-2 flex-wrap">
          <button
            @click="handlePageChange(currentPage - 1)"
            :disabled="currentPage === 1 || isLoading"
            class="px-4 py-2 rounded-lg font-semibold transition bg-gray-lighter text-dark hover:bg-gray-light disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          <button
            v-for="page in totalPages"
            :key="page"
            @click="handlePageChange(page)"
            :disabled="isLoading"
            :class="[
              'px-4 py-2 rounded-lg font-semibold transition',
              currentPage === page
                ? 'bg-primary text-dark'
                : 'bg-gray-lighter text-dark hover:bg-gray-light',
              'disabled:opacity-50 disabled:cursor-not-allowed'
            ]"
          >
            {{ page }}
          </button>

          <button
            @click="handlePageChange(currentPage + 1)"
            :disabled="currentPage === totalPages || isLoading"
            class="px-4 py-2 rounded-lg font-semibold transition bg-gray-lighter text-dark hover:bg-gray-light disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

.animate-slide-down {
  animation: slide-down 0.6s ease-out forwards;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
