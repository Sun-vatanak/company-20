import { defineStore } from "pinia";
import axios from "axios";
import type { Service, ServicesResponse } from "@/types/service";

export const useserviceStore = defineStore('service_store', {
  state: () => ({
    services: [] as Service[],
    isLoading: false,
    currentPage: 1,
    totalPages: 1,
    total_records: 0,
  }),

  actions: {
    async fetchServices() {
      this.isLoading = true;
      console.log('🔄 Fetching services...');

      try {
        const response = await axios.get<ServicesResponse>('/api/services');
        console.log('✅ API Response:', response.data);

        if (response.data.success) {
          this.services = response.data.data;
          this.total_records = response.data.data.length;
          console.log('✅ Services loaded:', this.services);
          console.log('📊 Total records:', this.total_records);
        } else {
          console.log('❌ API returned success: false');
        }
      } catch (error) {
        console.error("❌ Error fetching services:", error);
        this.services = [];
      } finally {
        this.isLoading = false;
        console.log('🏁 Loading finished. isLoading:', this.isLoading);
      }
    },
  }
});
