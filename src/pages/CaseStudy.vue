<script setup lang="ts">
import { ref } from 'vue'

const selectedCategory = ref('all')

const caseStudies = [
  {
    id: 1,
    title: 'Ai Wave - Ai Chatbot Mobile App',
    category: 'app',
    client: 'Ai Corporation',
    year: 2023,
    challenge: 'Build an innovative AI chatbot application with intuitive UX.',
    result: '+250% user engagement',
    description:
      'Developed a cutting-edge AI chatbot mobile application with seamless user experience and advanced AI capabilities.',
  },
  {
    id: 2,
    title: 'App Lancer - Freelance Mobile App',
    category: 'app',
    client: 'Lancer Corporation',
    year: 2023,
    challenge: 'Create a competitive freelance marketplace platform.',
    result: '+180% app downloads',
    description:
      'Built a comprehensive freelance marketplace with advanced matching algorithms and payment integration.',
  },
  {
    id: 3,
    title: 'E-commerce Platform Optimization',
    category: 'ecommerce',
    client: 'TechStore Inc',
    year: 2023,
    challenge: 'Increase online sales and customer retention.',
    result: '+320% revenue growth',
    description:
      'Optimized e-commerce platform with improved UX, faster checkout, and personalized recommendations.',
  },
  {
    id: 4,
    title: 'SaaS Marketing Campaign',
    category: 'marketing',
    client: 'CloudSync',
    year: 2023,
    challenge: 'Increase brand awareness in competitive SaaS market.',
    result: '+450% qualified leads',
    description:
      'Executed multi-channel marketing campaign including content, SEO, and paid advertising.',
  },
  {
    id: 5,
    title: 'Local Restaurant Chain Branding',
    category: 'branding',
    client: 'Taste & Flavor',
    year: 2023,
    challenge: 'Rebrand and increase customer acquisition.',
    result: '+210% foot traffic',
    description:
      'Complete brand refresh including logo, website, social media, and local marketing strategy.',
  },
  {
    id: 6,
    title: 'Healthcare Digital Transformation',
    category: 'digital',
    client: 'MediCare Plus',
    year: 2023,
    challenge: 'Modernize patient engagement and online services.',
    result: '+340% online appointments',
    description:
      'Developed patient portal, telemedicine integration, and digital marketing strategy.',
  },
]

const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'app', label: 'Mobile Apps' },
  { value: 'ecommerce', label: 'E-Commerce' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'branding', label: 'Branding' },
  { value: 'digital', label: 'Digital' },
]

const filteredCaseStudies = computed(() => {
  if (selectedCategory.value === 'all') {
    return caseStudies
  }
  return caseStudies.filter((study) => study.category === selectedCategory.value)
})

import { computed } from 'vue'
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
        </div>
      </div>
    </section>

    <!-- Category Filter -->
    <section class="px-5 md:px-20 py-16">
      <div class="mx-auto max-w-6xl">
        <div class="flex flex-wrap gap-3 justify-center animate-fade-in">
          <button
            v-for="category in categories"
            :key="category.value"
            @click="selectedCategory = category.value"
            :class="[
              'rounded-[50px] px-6 py-3 font-semibold transition hover:scale-105 active:scale-95',
              selectedCategory === category.value
                ? 'bg-primary text-dark'
                : 'border-2 border-dark text-dark hover:bg-dark/10',
            ]"
          >
            {{ category.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Case Studies Grid -->
    <section class="px-5 md:px-20 py-20">
      <div class="mx-auto max-w-6xl">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(study, index) in filteredCaseStudies"
            :key="study.id"
            class="rounded-[20px] overflow-hidden bg-white border-2 border-gray-lighter hover:border-primary hover:shadow-xl transition transform hover:scale-105 animate-fade-in"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="h-48 bg-gray-lighter hover:scale-110 transition duration-500">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/75a212ab82b6175c9862b125e0e23db8d369a58a"
                alt=""
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6">
              <p class="text-xs text-primary font-bold uppercase tracking-wide mb-2">
                {{ study.client }} • {{ study.year }}
              </p>
              <h3 class="text-xl font-bold text-dark mb-3">{{ study.title }}</h3>
              <p class="text-gray text-sm mb-4">{{ study.description }}</p>

              <div class="space-y-3 border-t border-gray-lighter pt-4 mt-4">
                <div>
                  <p class="text-xs font-semibold text-dark uppercase">Challenge</p>
                  <p class="text-sm text-gray">{{ study.challenge }}</p>
                </div>
                <div>
                  <p class="text-xs font-semibold text-primary uppercase">Result</p>
                  <p class="text-lg font-bold text-primary">{{ study.result }}</p>
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
