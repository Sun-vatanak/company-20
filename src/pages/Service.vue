<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useserviceStore } from '@/stores/service'

const store = useserviceStore()

const getServiceIcon = (title: string) => {
  const iconMap: Record<string, string> = {
    'SEO': '🔍',
    'Social Media': '📱',
    'Content': '✍️',
    'PPC': '💰',
    'Email': '📧',
    'Web': '🌐',
    'Development': '💻',
    'Design': '🎨',
    'Marketing': '📊',
  }

  for (const [key, icon] of Object.entries(iconMap)) {
    if (title.toLowerCase().includes(key.toLowerCase())) {
      return icon
    }
  }

  return '⭐'
}

// Get full image URL from API
const getImageUrl = (imagePath: string) => {
  const baseUrl = import.meta.env.VITE_API_HOST || 'http://localhost:8000'
  return `${baseUrl}/storage/${imagePath}`
}

onMounted(async () => {
  await store.fetchServices()
})

const handleImageError = (e: Event) => {
  const img = e.target as HTMLImageElement
  img.src = 'https://via.placeholder.com/400x300?text=No+Image'
}

const services = computed(() => {
  return store.services.map(service => ({
    id: service.id,
    title: service.title,
    description: service.description,
    image: service.image,
    icon: getServiceIcon(service.title),
    features: service.features.map(f => f.name),
    button_link: service.button_link || '#'
  }))
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <section class="relative overflow-hidden bg-gradient-to-br from-white to-gray-lighter py-20 px-5 md:px-20">
      <div class="mx-auto max-w-6xl">
        <div class="flex flex-col gap-8 animate-fade-in">
          <h1 class="text-5xl md:text-6xl font-bold text-dark leading-tight animate-slide-down">
            Our Services
          </h1>
          <p class="text-xl text-gray max-w-2xl animate-slide-down" style="animation-delay: 0.1s">
            We offer a comprehensive suite of digital marketing services designed to help your
            business succeed online.
          </p>
        </div>
      </div>
    </section>

    <section v-if="store.isLoading" class="px-5 md:px-20 py-20">
      <div class="mx-auto max-w-6xl text-center">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p class="mt-4 text-gray">Loading services...</p>
      </div>
    </section>

    <section v-else class="px-5 md:px-20 py-20">
      <div class="mx-auto max-w-6xl">
        <div v-if="services.length === 0" class="text-center py-12">
          <p class="text-xl text-gray">No services available at the moment.</p>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(service, index) in services"
            :key="service.id"
            class="group rounded-[20px] bg-white border-2 border-gray-lighter overflow-hidden hover:border-primary hover:shadow-xl transition transform hover:scale-105 animate-fade-in"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <!-- Service Image -->
            <div class="relative h-48 overflow-hidden bg-gray-100">
              <img
                v-if="service.image"
                :src="getImageUrl(service.image)"
                :alt="service.title"
                class="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                @error="handleImageError"
              />
              <div
                v-else
                class="w-full h-full flex items-center justify-center text-6xl"
              >
                {{ service.icon }}
              </div>
            </div>

            <!-- Service Content -->
            <div class="p-8">
              <h3 class="text-2xl font-bold text-dark mb-3">
                {{ service.title }}
              </h3>
              <p class="text-gray mb-6">
                {{ service.description }}
              </p>
              <div v-if="service.features.length > 0" class="space-y-2">
                <h4 class="text-sm font-semibold text-dark uppercase tracking-wide">Key Features</h4>
                <ul class="space-y-2">
                  <li
                    v-for="(feature, fIndex) in service.features"
                    :key="fIndex"
                    class="text-sm text-gray flex items-center gap-2"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {{ feature }}
                  </li>
                </ul>
              </div>

              <a
                :href="service.button_link"
                class="mt-8 w-full block text-center rounded-[50px] bg-dark text-white py-3 font-semibold hover:bg-dark/90 transition transform hover:scale-105 active:scale-95"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-dark px-5 md:px-20 py-20 animate-fade-in">
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to transform your digital presence?
        </h2>
        <p class="text-lg text-gray-lighter mb-8">
          Let's work together to create a strategy that drives real results for your business.
        </p>
        <button
          class="rounded-[50px] bg-primary text-dark px-8 py-4 font-bold hover:bg-primary/90 transition transform hover:scale-105 active:scale-95"
        >
          Get Started Today
        </button>
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
</style>
