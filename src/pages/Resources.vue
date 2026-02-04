<script setup lang="ts">
const resources = [
  {
    title: "SEO Checklist",
    type: "PDF",
    description: "Complete checklist for optimizing your website for search engines.",
    icon: "📋"
  },
  {
    title: "Social Media Strategy Guide",
    type: "Guide",
    description: "Step-by-step guide to developing an effective social media strategy.",
    icon: "📱"
  },
  {
    title: "Content Calendar Template",
    type: "Template",
    description: "Ready-to-use content calendar template for your marketing team.",
    icon: "📅"
  },
  {
    title: "Email Marketing Best Practices",
    type: "Guide",
    description: "Proven strategies for creating effective email marketing campaigns.",
    icon: "📧"
  },
  {
    title: "Conversion Rate Optimization Tips",
    type: "Whitepaper",
    description: "In-depth analysis of CRO strategies that actually work.",
    icon: "📈"
  },
  {
    title: "Brand Identity Workbook",
    type: "Workbook",
    description: "Interactive workbook to help define your brand identity.",
    icon: "🎨"
  },
  {
    title: "PPC Campaign Setup Guide",
    type: "Video",
    description: "Video tutorial for setting up your first PPC campaigns.",
    icon: "🎬"
  },
  {
    title: "Analytics Dashboard Template",
    type: "Spreadsheet",
    description: "Ready-made dashboard to track your marketing metrics.",
    icon: "📊"
  }
]

const articles = [
  {
    title: "The Future of Digital Marketing in 2024",
    date: "March 15, 2024",
    category: "Trends",
    excerpt: "Explore the latest trends and technologies shaping digital marketing."
  },
  {
    title: "How to Build a Winning Content Strategy",
    date: "March 10, 2024",
    category: "Strategy",
    excerpt: "Learn the fundamentals of creating content that resonates with your audience."
  },
  {
    title: "SEO Tips for E-commerce Websites",
    date: "March 5, 2024",
    category: "SEO",
    excerpt: "Specific strategies for optimizing your e-commerce site in search results."
  },
  {
    title: "Understanding Marketing Analytics",
    date: "February 28, 2024",
    category: "Analytics",
    excerpt: "A beginner's guide to understanding and leveraging marketing data."
  }
]
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-white to-gray-lighter py-20 px-5 md:px-20">
      <div class="mx-auto max-w-6xl">
        <div class="flex flex-col gap-8 animate-fade-in">
          <h1 class="text-5xl md:text-6xl font-bold text-dark leading-tight animate-slide-down">
            Resources
          </h1>
          <p class="text-xl text-gray max-w-2xl animate-slide-down" style="animation-delay: 0.1s">
            Free tools, templates, and guides to help you succeed in digital marketing.
          </p>
        </div>
      </div>
    </section>

    <!-- Resources Grid -->
    <section class="px-5 md:px-20 py-20">
      <div class="mx-auto max-w-6xl">
        <h2 class="text-4xl font-bold text-dark mb-12 animate-fade-in">Free Resources</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(resource, index) in resources"
            :key="index"
            class="rounded-[20px] bg-gradient-to-br from-gray-lighter to-white p-8 hover:shadow-xl transition transform hover:scale-105 animate-fade-in cursor-pointer group"
            :style="{ animationDelay: `${index * 0.05}s` }"
          >
            <div class="text-5xl mb-4 group-hover:scale-125 transition duration-300">
              {{ resource.icon }}
            </div>
            <h3 class="text-lg font-bold text-dark mb-2">{{ resource.title }}</h3>
            <p class="text-xs text-primary font-bold uppercase tracking-wide mb-3">{{ resource.type }}</p>
            <p class="text-sm text-gray">{{ resource.description }}</p>
            <button class="mt-6 w-full rounded-lg bg-dark text-white py-2 font-semibold hover:bg-dark/90 transition transform hover:scale-105 active:scale-95 text-sm">
              Download
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Articles -->
    <section class="px-5 md:px-20 py-20 bg-gray-lighter/30">
      <div class="mx-auto max-w-6xl">
        <h2 class="text-4xl font-bold text-dark mb-12 animate-fade-in">Latest Articles</h2>
        <div class="space-y-6">
          <div
            v-for="(article, index) in articles"
            :key="index"
            class="rounded-[20px] bg-white p-8 hover:shadow-xl transition hover:scale-105 border-l-4 border-primary animate-fade-in"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div class="flex-1">
                <p class="text-xs text-primary font-bold uppercase tracking-wide mb-2">{{ article.category }}</p>
                <h3 class="text-2xl font-bold text-dark mb-2">{{ article.title }}</h3>
                <p class="text-gray mb-4">{{ article.excerpt }}</p>
                <p class="text-xs text-gray">{{ article.date }}</p>
              </div>
              <button class="flex-shrink-0 rounded-lg bg-dark text-white px-6 py-3 font-semibold hover:bg-dark/90 transition transform hover:scale-105 active:scale-95">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter CTA -->
    <section class="px-5 md:px-20 py-20 bg-dark animate-fade-in">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-4xl font-bold text-white mb-6">Stay Updated</h2>
        <p class="text-lg text-gray-lighter mb-8">
          Subscribe to our newsletter to get the latest marketing tips and insights delivered to your inbox.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            class="flex-1 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button class="rounded-lg bg-primary text-dark font-bold px-8 py-4 hover:bg-primary/90 transition transform hover:scale-105 active:scale-95">
            Subscribe
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
</style>
