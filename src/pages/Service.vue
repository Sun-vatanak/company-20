<script setup lang="ts">
const services = [
  {
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings and drive organic traffic to your website.',
    icon: '🔍',
    features: ['Keyword Research', 'On-page SEO', 'Link Building', 'Technical SEO'],
  },
  {
    title: 'Social Media Marketing',
    description: 'Engage with your audience and build brand awareness across social platforms.',
    icon: '📱',
    features: ['Content Strategy', 'Community Management', 'Paid Ads', 'Analytics'],
  },
  {
    title: 'Content Creation',
    description: 'Create compelling and engaging content that drives conversions.',
    icon: '✍️',
    features: ['Blog Posts', 'Videos', 'Infographics', 'Copywriting'],
  },
  {
    title: 'PPC Advertising',
    description: 'Get immediate results with targeted paid advertising campaigns.',
    icon: '💰',
    features: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Remarketing'],
  },
  {
    title: 'Email Marketing',
    description: 'Build relationships and nurture leads with strategic email campaigns.',
    icon: '📧',
    features: ['Campaign Design', 'Automation', 'Segmentation', 'Analytics'],
  },
  {
    title: 'Web Design & Development',
    description: 'Create stunning, responsive websites that convert visitors into customers.',
    icon: '🌐',
    features: ['Responsive Design', 'User Experience', 'Mobile Optimization', 'Performance'],
  },
]
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
            Our Services
          </h1>
          <p class="text-xl text-gray max-w-2xl animate-slide-down" style="animation-delay: 0.1s">
            We offer a comprehensive suite of digital marketing services designed to help your
            business succeed online.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="px-5 md:px-20 py-20">
      <div class="mx-auto max-w-6xl">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="group rounded-[20px] bg-white border-2 border-gray-lighter p-8 hover:border-primary hover:shadow-xl transition transform hover:scale-105 animate-fade-in"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="text-5xl mb-4 group-hover:scale-125 transition duration-300">
              {{ service.icon }}
            </div>
            <h3 class="text-2xl font-bold text-dark mb-3">
              {{ service.title }}
            </h3>
            <p class="text-gray mb-6">
              {{ service.description }}
            </p>
            <div class="space-y-2">
              <h4 class="text-sm font-semibold text-dark uppercase tracking-wide">Key Features</h4>
              <ul class="space-y-2">
                <li
                  v-for="feature in service.features"
                  :key="feature"
                  class="text-sm text-gray flex items-center gap-2"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  {{ feature }}
                </li>
              </ul>
            </div>
            <button
              class="mt-8 w-full rounded-[50px] bg-dark text-white py-3 font-semibold hover:bg-dark/90 transition transform hover:scale-105 active:scale-95"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
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
