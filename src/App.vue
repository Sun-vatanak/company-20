<script setup lang="ts">
import { ref } from 'vue'

// Navigation state
const currentTestimonial = ref(0)
const expandedFaq = ref(0)

// Testimonials data
const testimonials = [
  {
    text: "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
    author: "Michael Kaizer",
    role: "CEO of Basecamp Corp"
  }
]

// FAQ data
const faqs = [
  {
    question: "Why is digital marketing important for my business?",
    answer: "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights."
  },
  {
    question: "How can digital marketing help improve my website's visibility?",
    answer: "Through SEO optimization, content marketing, social media engagement, and paid advertising campaigns, we can significantly improve your website's visibility across search engines and social platforms."
  },
  {
    question: "How long does it take to see results from digital marketing efforts?",
    answer: "Results vary depending on the strategy, but typically you can see initial improvements within 3-6 months, with more substantial results after 6-12 months of consistent effort."
  },
  {
    question: "How do you measure the success of digital marketing campaigns?",
    answer: "We use various metrics including traffic, conversions, ROI, engagement rates, and other KPIs tailored to your specific business goals."
  }
]

// Categories for case studies
const categories = ref(['All Work [30]', 'Local Dining [04]', 'Digital Marketing [8]', 'Branding [4]'])
const selectedCategory = ref(0)
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
      <div class="mx-auto px-5 md:px-20">
        <div class="flex h-28 items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center gap-2">
            <div class="relative h-8 w-8">
              <div class="absolute h-8 w-8 rounded-[3px_3px_53px_3px] bg-primary"></div>
              <div class="absolute left-[11px] top-[12px] h-3.5 w-3.5 rounded-[3px_3px_53px_3px] bg-dark-800"></div>
            </div>
            <span class="font-manrope text-2xl font-bold tracking-tight text-[#020407]">boostim</span>
          </div>

          <!-- Navigation -->
          <nav class="hidden items-center gap-12 md:flex lg:gap-[74px]">
            <div class="flex items-center gap-[7px]">
              <span class="text-sm font-semibold text-[#020407]">Service</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="flex items-center gap-[7px]">
              <span class="text-sm font-semibold text-[#020407]">Agency</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="flex items-center gap-[7px]">
              <span class="text-sm font-semibold text-[#020407]">Case study</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="flex items-center gap-[7px]">
              <span class="text-sm font-semibold text-[#020407]">Resources</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <span class="text-sm font-semibold text-[#020407]">Contact</span>
          </nav>

          <!-- CTA Buttons -->
          <div class="flex items-start gap-[9px]">
            <button class="flex items-center justify-center gap-3 rounded-[50px] border border-dark px-4 py-3 font-manrope text-base font-bold leading-[140%] tracking-tight text-dark transition hover:bg-dark hover:text-white">
              Get started
            </button>
            <button class="flex h-[50px] w-[50px] items-center justify-center rounded-[50px] bg-dark transition hover:bg-dark/90">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-white pb-12 pt-8 md:pb-20 md:pt-16">
      <!-- Background noise image would go here -->
      <div class="mx-auto px-5 md:px-20">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <!-- Left Content -->
          <div class="flex flex-col justify-center gap-12">
            <div class="flex flex-col gap-8">
              <h1 class="text-5xl font-semibold leading-[110%] tracking-[-0.03em] text-dark md:text-6xl lg:text-[72px]">
                Stay ahead of the curve with our forward-thinking
              </h1>
              <p class="max-w-[557px] text-base font-medium leading-[180%] text-gray">
                An award-winning SEO agency with disciplines in digital marketing, design, and website development. focused on understanding you.
              </p>
            </div>

            <div class="flex flex-wrap items-center gap-8 md:gap-14">
              <button class="group flex items-center gap-3 rounded-[50px] bg-dark px-6 py-4 transition hover:bg-dark/90">
                <span class="font-manrope text-base font-bold leading-[140%] tracking-tight text-white">Explore us</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="transition group-hover:translate-x-1">
                  <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <button class="text-base font-semibold leading-[180%] text-dark underline transition hover:text-gray">
                View Case Study
              </button>
            </div>

            <!-- Trusted brands -->
            <div class="flex flex-wrap items-center gap-8 md:gap-16">
              <span class="w-[150px] text-sm font-semibold leading-[160%] text-dark">
                Trusted by the world's biggest brands
              </span>
              <div class="flex items-center gap-7 opacity-50">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/e7d50ae8a200300f69e8831be4c3ff9b006e51cd" alt="Company logo" class="h-8 w-auto" />
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/e7d50ae8a200300f69e8831be4c3ff9b006e51cd" alt="Company logo" class="h-8 w-auto" />
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/e7d50ae8a200300f69e8831be4c3ff9b006e51cd" alt="Company logo" class="h-8 w-auto" />
              </div>
            </div>
          </div>

          <!-- Right Content - Stats Cards -->
          <div class="relative flex flex-col justify-center gap-8">
            <!-- Top row -->
            <div class="flex flex-col gap-8 md:flex-row md:items-start">
              <div class="w-full rounded-[20px_20px_20px_1000px] bg-gray-lighter/60 p-6 backdrop-blur-[42px] md:w-[303px]">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/75a212ab82b6175c9862b125e0e23db8d369a58a" alt="" class="h-auto w-full rounded-[1000px_20px_20px_20px]" />
              </div>
              
              <div class="relative w-full rounded-[20px] bg-gray-lighter/60 p-6 backdrop-blur-[42px] md:w-[259px]">
                <div class="flex flex-col gap-8">
                  <h2 class="text-[84px] font-bold leading-[150%] tracking-[-0.03em] text-dark">230+</h2>
                  <p class="text-base font-medium leading-[150%] text-gray">
                    some big companies that we work with, and trust us very much
                  </p>
                </div>
                <div class="mt-6">
                  <svg width="211" height="6" viewBox="0 0 211 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 3H211" stroke="#D9D9D9" stroke-width="6"/>
                    <path d="M0 3H141" stroke="black" stroke-width="6"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Bottom row - Dark card with graph -->
            <div class="relative overflow-hidden rounded-[20px] bg-dark p-8">
              <div class="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div class="flex flex-col gap-4">
                  <div class="flex items-center gap-3">
                    <svg width="54" height="1" viewBox="0 0 54 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0.5H54" stroke="white"/>
                    </svg>
                    <span class="text-sm font-semibold leading-[126%] tracking-tight text-white">
                      Drive More Traffic and Sales
                    </span>
                  </div>
                  <h3 class="max-w-[280px] text-[32px] font-semibold leading-[130%] tracking-tight text-white">
                    Drive more traffic and product sales
                  </h3>
                </div>
                
                <div class="flex items-end gap-3">
                  <div class="h-[95px] w-[69px] bg-[#BAE289]"></div>
                  <div class="h-[136px] w-[69px] bg-[#99CF63]"></div>
                  <div class="h-[166px] w-[69px] bg-[#77B248]"></div>
                </div>
              </div>

              <div class="absolute right-4 top-4 flex h-[108px] w-[108px] items-center justify-center rounded-full bg-dark shadow-[0_30px_50px_-7px_rgba(0,0,0,0.3)]">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M46 12L27 31L17 21L2 36" stroke="#A8D67B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M34 12H46V24" stroke="#A8D67B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>

            <!-- 920+ card -->
            <div class="absolute -bottom-12 left-0 hidden rounded-[20px] bg-dark p-8 md:block lg:-bottom-20">
              <div class="flex flex-col gap-6">
                <h2 class="text-6xl font-bold leading-[150%] tracking-[-0.03em] text-white lg:text-[84px]">920+</h2>
                <p class="max-w-[200px] text-sm font-medium leading-[150%] text-white">
                  Projects that were successfully
                </p>
                <div class="flex items-center gap-2">
                  <div class="h-[35px] w-[35px] rounded-full bg-[#C6C6C6]"></div>
                  <div class="h-[35px] w-[35px] rounded-full bg-[#C6C6C6]"></div>
                  <div class="h-[35px] w-[35px] rounded-full bg-[#C6C6C6]"></div>
                  <div class="h-[35px] w-[35px] rounded-full bg-[#C6C6C6]"></div>
                  <span class="text-5xl font-bold text-white">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Provide Best Service Section -->
    <section class="bg-white px-5 py-16 md:px-20 md:py-20">
      <div class="mx-auto">
        <div class="flex flex-col justify-between gap-12 lg:flex-row lg:items-start">
          <h2 class="max-w-[684px] text-4xl font-semibold leading-[130%] tracking-tight text-dark md:text-5xl">
            Provide the best service with out of the box ideas
          </h2>
          <p class="max-w-[557px] text-base font-medium leading-[180%] text-gray">
            we are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed in the digital world. With years of experience and a deep understanding of the ever-evolving online landscape, we stay at the forefront of industry trends and technologies.
          </p>
        </div>

        <!-- How We Work Section -->
        <div class="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <!-- 920+ card for mobile/tablet -->
          <div class="rounded-[20px] bg-dark p-8 md:hidden lg:block">
            <div class="flex flex-col gap-6">
              <h2 class="text-6xl font-bold leading-[150%] tracking-[-0.03em] text-white lg:text-[84px]">920+</h2>
              <p class="max-w-[200px] text-sm font-medium leading-[150%] text-white">
                Projects that were successfully
              </p>
              <div class="flex items-center gap-2">
                <div class="h-[35px] w-[35px] rounded-full border-2 border-white/50 bg-[#C6C6C6]"></div>
                <div class="h-[35px] w-[35px] rounded-full border-2 border-white/50 bg-[#C6C6C6]"></div>
                <div class="h-[35px] w-[35px] rounded-full border-2 border-white/50 bg-[#C6C6C6]"></div>
                <div class="h-[35px] w-[35px] rounded-full border-2 border-white/50 bg-[#C6C6C6]"></div>
                <span class="text-5xl font-bold text-white">+</span>
              </div>
            </div>
          </div>

          <!-- How We Work Video -->
          <div class="relative overflow-hidden rounded-[30px]">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/75a212ab82b6175c9862b125e0e23db8d369a58a" alt="" class="h-auto w-full object-cover" />
            <div class="absolute inset-0 flex items-center justify-center">
              <h3 class="text-center text-3xl font-semibold leading-[140%] tracking-[0.27em] text-white md:text-5xl">
                HOW WE WORK
              </h3>
            </div>
            <button class="absolute bottom-8 right-8 flex h-[163px] w-[163px] items-center justify-center rounded-full border-[12px] border-[#FAFAFA] bg-primary transition hover:scale-105">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.2498 17.1472C40.1304 17.6155 40.8669 18.3145 41.3805 19.1693C41.8942 20.0242 42.1655 21.0027 42.1655 22C42.1655 22.9973 41.8942 23.9759 41.3805 24.8307C40.8669 25.6856 40.1304 26.3846 39.2498 26.8529L15.7611 39.6257C11.979 41.6827 7.33331 39.006 7.33331 34.7747V9.2272C7.33331 4.9922 11.979 2.31737 15.7611 4.37253L39.2498 17.1472Z" fill="black"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Studies Section -->
    <section class="bg-[#FAFAFA] px-4 py-16 md:px-5 md:py-20">
      <div class="mx-auto rounded-[30px] bg-dark px-8 py-16 md:px-16 md:py-20">
        <div class="flex flex-col items-center gap-14">
          <h2 class="max-w-[1280px] text-center text-3xl font-semibold leading-[130%] tracking-tight text-white md:text-4xl lg:text-5xl">
            Real-world examples of how we have helped companies achieve their marketing objectives.
          </h2>

          <!-- Category filters -->
          <div class="flex flex-wrap justify-center gap-3">
            <button 
              v-for="(category, index) in categories" 
              :key="index"
              @click="selectedCategory = index"
              :class="[
                'rounded-[50px] px-6 py-3 text-sm font-semibold leading-[126%] tracking-tight transition',
                index === 1 ? 'bg-primary text-dark' : 'border border-white/30 text-white hover:bg-white/10'
              ]"
            >
              {{ category }}
            </button>
          </div>

          <!-- Case study cards -->
          <div class="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <!-- Card 1 - Circular with See Details -->
            <div class="relative">
              <div class="overflow-hidden rounded-[261px] border-[11px] border-white/40 backdrop-blur-[67px]">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/75a212ab82b6175c9862b125e0e23db8d369a58a" alt="Case study" class="h-auto w-full" />
              </div>
              <div class="absolute left-1/2 top-1/2 flex h-[163px] w-[163px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary">
                <span class="text-center text-lg font-bold leading-[126%] tracking-tight text-black">See Details</span>
              </div>
            </div>

            <!-- Card 2 - Ai Wave -->
            <div class="relative overflow-hidden rounded-[30px] border-[10px] border-white/30 backdrop-blur-[67px]">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/75a212ab82b6175c9862b125e0e23db8d369a58a" alt="Ai Wave" class="h-full w-full object-cover" />
              <div class="absolute left-8 top-8 flex items-center gap-3">
                <svg width="54" height="1" viewBox="0 0 54 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0.5H54" stroke="white"/>
                </svg>
                <span class="text-[17px] font-semibold leading-[126%] tracking-tight text-white">
                  Ai Corporation. 2023
                </span>
              </div>
              <div class="absolute bottom-8 left-8 max-w-[374px]">
                <h3 class="text-2xl font-semibold leading-[140%] text-white">
                  Ai Wave - Ai Chatbot Mobile App
                </h3>
              </div>
            </div>

            <!-- Card 3 - App Lancer -->
            <div class="relative overflow-hidden rounded-[30px] border-[10px] border-white/30 backdrop-blur-[67px]">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/75a212ab82b6175c9862b125e0e23db8d369a58a" alt="App Lancer" class="h-full w-full object-cover" />
              <div class="absolute left-8 top-8 flex items-center gap-3">
                <svg width="54" height="1" viewBox="0 0 54 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0.5H54" stroke="white"/>
                </svg>
                <span class="text-[17px] font-semibold leading-[126%] tracking-tight text-white">
                  Lancer Corporation. 2023
                </span>
              </div>
              <div class="absolute bottom-8 left-8 max-w-[405px]">
                <h3 class="text-2xl font-semibold leading-[140%] text-white">
                  App Lancer - Freelance Mobile App
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="bg-[#FAFAFA] px-5 py-16 md:px-20 md:py-20">
      <div class="mx-auto">
        <div class="flex flex-col gap-16">
          <blockquote class="text-center text-2xl font-medium leading-[180%] text-dark md:text-3xl lg:text-4xl">
            "{{ testimonials[currentTestimonial].text }}"
          </blockquote>

          <div class="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div class="flex items-center gap-6">
              <div class="h-[70px] w-[70px] overflow-hidden rounded-full border-2 border-white/50 bg-black/20"></div>
              <div class="flex flex-col gap-5">
                <h4 class="text-xl font-bold leading-[180%] text-dark">
                  {{ testimonials[currentTestimonial].author }}
                </h4>
                <p class="text-base font-medium leading-[180%] text-gray">
                  {{ testimonials[currentTestimonial].role }}
                </p>
              </div>
            </div>

            <div class="flex items-center justify-center gap-10">
              <button class="flex items-center justify-center rounded-[70px] border border-dark p-4 transition hover:bg-dark hover:text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 5L5 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <span class="text-base font-semibold leading-[180%]">
                <span class="text-dark underline">01</span><span class="text-dark/40">/05</span>
              </span>
              <button class="flex items-center justify-center rounded-[70px] bg-dark p-4 transition hover:bg-dark/90">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="bg-[#F3F3F3] p-4">
      <div class="overflow-hidden rounded-[28px] bg-white px-8 py-16 md:px-20">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <div class="flex flex-col justify-center gap-12">
            <h2 class="text-4xl font-semibold leading-[130%] tracking-tight text-dark md:text-5xl">
              Digital Marketing FAQs
            </h2>
            <p class="max-w-[531px] text-base font-medium leading-[180%] text-gray">
              As a leading digital marketing agency, we are dedicated to providing comprehensive educational resources and answering frequently asked questions to help our clients.
            </p>
            <div class="flex flex-wrap gap-4">
              <button class="rounded-[70px] border border-dark px-8 py-4 text-base font-semibold leading-[180%] text-dark transition hover:bg-dark hover:text-white">
                More Questions
              </button>
              <button class="text-base font-semibold leading-[180%] text-dark underline">
                Contact Us
              </button>
            </div>
          </div>

          <div class="flex flex-col">
            <div 
              v-for="(faq, index) in faqs" 
              :key="index"
              class="border-b border-dark bg-white"
            >
              <button 
                @click="expandedFaq = expandedFaq === index ? -1 : index"
                class="flex w-full items-center justify-between gap-4 px-6 py-7 text-left transition hover:bg-gray-lighter/20"
              >
                <h3 class="max-w-[448px] text-xl font-semibold leading-[150%] tracking-tight text-dark md:text-2xl">
                  {{ faq.question }}
                </h3>
                <svg 
                  v-if="expandedFaq !== index"
                  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0"
                >
                  <path d="M12 5V19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5 12H19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg 
                  v-else
                  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0"
                >
                  <path d="M5 12H19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div 
                v-if="expandedFaq === index"
                class="px-6 pb-7 text-base font-medium leading-[180%] text-gray"
              >
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog/Articles Section -->
    <section class="bg-[#FAFAFA] px-5 py-16 md:px-20 md:py-20">
      <div class="mx-auto">
        <div class="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <h2 class="max-w-[684px] text-4xl font-semibold leading-[130%] tracking-tight text-dark md:text-5xl">
            Digital Marketing & SEO ServicesThat Grow Traffic & Increase Revenue
          </h2>
          <div class="flex flex-col justify-center gap-12">
            <p class="max-w-[557px] text-base font-medium leading-[180%] text-gray">
              We are the top digital marketing agency for branding corp. We offer a full range of services to help clients improve their search engine rankings and drive more traffic to their websites.
            </p>
            <button class="self-start rounded-[70px] border border-dark px-8 py-4 text-base font-semibold leading-[180%] text-dark transition hover:bg-dark hover:text-white">
              See more
            </button>
          </div>
        </div>

        <!-- Blog cards -->
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Card 1 -->
          <div class="flex flex-col gap-14 rounded-[20px] bg-white p-8">
            <div class="flex flex-col gap-6">
              <div class="flex items-start justify-between">
                <div class="h-3.5 w-3.5 rounded-full bg-blue-accent"></div>
                <span class="text-sm font-medium leading-[160%] text-gray">5 min read</span>
              </div>
              <h3 class="text-2xl font-semibold leading-[150%] tracking-tight text-dark">
                How a Digital Marketing Agency Can Boost Your Business
              </h3>
            </div>
            <div class="flex items-center justify-between">
              <p class="max-w-[220px] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium leading-[160%] text-gray">
                We are the top digital marketing agency for branding corp. We offer a full rang engine ....
              </p>
              <button class="flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-full bg-dark transition hover:bg-dark/90">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="flex flex-col gap-14 rounded-[20px] bg-white p-8">
            <div class="flex flex-col gap-6">
              <div class="flex items-start justify-between">
                <div class="h-3.5 w-3.5 rounded-full bg-orange-accent"></div>
                <span class="text-sm font-medium leading-[160%] text-gray">5 min read</span>
              </div>
              <h3 class="text-2xl font-semibold leading-[150%] tracking-tight text-dark">
                The Latest Trends and Strategies with a Digital Marketing Agency
              </h3>
            </div>
            <div class="flex items-center justify-between">
              <p class="max-w-[220px] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium leading-[160%] text-gray">
                Working with this digital marketing agency has been a true partnership. They have taken the time to understand our business and industry
              </p>
              <button class="flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-full border border-dark transition hover:bg-dark hover:text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="flex flex-col gap-14 rounded-[20px] bg-white p-8">
            <div class="flex flex-col gap-6">
              <div class="flex items-start justify-between">
                <div class="h-3.5 w-3.5 rounded-full bg-purple-accent"></div>
                <span class="text-sm font-medium leading-[160%] text-gray">5 min read</span>
              </div>
              <h3 class="text-2xl font-semibold leading-[150%] tracking-tight text-dark">
                Maximizing ROI with the Expertise of a Digital Marketing Agency
              </h3>
            </div>
            <div class="flex items-center justify-between">
              <p class="max-w-[220px] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium leading-[160%] text-gray">
                What sets this digital marketing agency apart is their commitment to transparency and collaboration. They keep us informed every step of the way,
              </p>
              <button class="flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-full border border-dark transition hover:bg-dark hover:text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-[#FAFAFA] px-4 pb-16 md:px-5 md:pb-20">
      <div class="overflow-hidden rounded-[30px] bg-dark px-8 py-20 md:px-16">
        <div class="flex flex-col items-center justify-between gap-8 md:flex-row">
          <h2 class="text-4xl font-semibold leading-[130%] tracking-tight text-white md:text-6xl lg:text-[80px]">
            Ready to work with us ?
          </h2>
          <button class="flex items-center gap-3 rounded-[50px] bg-white px-8 py-4 transition hover:bg-gray-lighter">
            <span class="font-manrope text-base font-bold leading-[140%] tracking-tight text-dark">Get Started</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-[#FAFAFA] px-5 pb-8 pt-16 md:px-20">
      <div class="mx-auto">
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <!-- Brand -->
          <div class="flex flex-col gap-8">
            <div class="flex items-center gap-3">
              <div class="relative h-[51px] w-[51px]">
                <div class="absolute h-[51px] w-[51px] rounded-[4.6px_4.6px_82px_4.6px] bg-primary"></div>
                <div class="absolute left-[17px] top-[18px] h-[22px] w-[22px] rounded-[4.6px_4.6px_82px_4.6px] bg-dark-800"></div>
              </div>
              <span class="font-manrope text-[37px] font-bold tracking-tight text-[#020407]">boostim</span>
            </div>
            <p class="max-w-[534px] text-sm leading-[180%] text-gray-light">
              We offers a comprehensive suite of digital marketing services that cover all aspects of our online presence. From SEO and social media marketing to content creation and PPC advertising, they have the expertise and resources to handle our diverse marketing needs.
            </p>
            <div class="flex items-center gap-4">
              <a href="#" class="text-dark transition hover:text-gray">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"/>
                </svg>
              </a>
              <a href="#" class="text-dark transition hover:text-gray">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10C2.38 10 2.38 10 2.38 10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16 6 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.70 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"/>
                </svg>
              </a>
              <a href="#" class="text-dark transition hover:text-gray">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3ZM8.339 18.337H5.667V10.003H8.339V18.337ZM7.003 8.819C6.13 8.819 5.428 8.117 5.428 7.243C5.428 6.369 6.131 5.667 7.003 5.667C7.875 5.667 8.577 6.369 8.577 7.243C8.577 8.117 7.876 8.819 7.003 8.819ZM18.338 18.337H15.666V14.162C15.666 13.166 15.647 11.884 14.28 11.884C12.891 11.884 12.68 12.968 12.68 14.089V18.337H10.008V10.003H12.573V11.124H12.608C12.966 10.475 13.836 9.789 15.136 9.789C17.836 9.789 18.338 11.575 18.338 13.892V18.337Z"/>
                </svg>
              </a>
              <a href="#" class="text-dark transition hover:text-gray">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.878V14.891H7.898V12H10.438V9.797C10.438 7.291 11.93 5.907 14.215 5.907C15.309 5.907 16.453 6.102 16.453 6.102V8.562H15.193C13.95 8.562 13.563 9.333 13.563 10.124V12H16.336L15.893 14.891H13.563V21.878C18.343 21.128 22 16.991 22 12C22 6.477 17.523 2 12 2Z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Navigation -->
          <div>
            <h3 class="mb-8 text-lg font-semibold tracking-tight text-[#192031]">Navigation</h3>
            <ul class="flex flex-col gap-6 text-sm text-gray-light">
              <li><a href="#" class="transition hover:text-dark">Agency</a></li>
              <li><a href="#" class="transition hover:text-dark">Case Study</a></li>
              <li><a href="#" class="transition hover:text-dark">Resource</a></li>
              <li><a href="#" class="transition hover:text-dark">Contact</a></li>
            </ul>
          </div>

          <!-- License -->
          <div>
            <h3 class="mb-8 text-lg font-semibold tracking-tight text-[#192031]">Licence</h3>
            <ul class="flex flex-col gap-6 text-sm text-gray-light">
              <li><a href="#" class="transition hover:text-dark">Privacy Policy</a></li>
              <li><a href="#" class="transition hover:text-dark">Copyright</a></li>
              <li><a href="#" class="transition hover:text-dark">Email Address</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h3 class="mb-8 text-lg font-semibold tracking-tight text-[#192031]">Contact</h3>
            <ul class="flex flex-col gap-6 text-sm text-gray-light">
              <li class="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.24375 5.39531L5.73984 2.90156C5.91592 2.72471 6.1252 2.58439 6.35567 2.48867C6.58614 2.39294 6.83325 2.34369 7.08281 2.34375C7.5914 2.34375 8.06953 2.54297 8.42812 2.90156L11.1141 5.5875C11.2909 5.76358 11.4312 5.97286 11.527 6.20333C11.6227 6.4338 11.6719 6.68091 11.6719 6.93047C11.6719 7.43906 11.4727 7.91719 11.1141 8.27578L9.15 10.2398C9.60974 11.2532 10.2489 12.175 11.0367 12.9609C11.8225 13.7506 12.7443 14.3922 13.7578 14.8547L15.7219 12.8906C15.898 12.7138 16.1072 12.5735 16.3377 12.4777C16.5682 12.382 16.8153 12.3328 17.0648 12.3328C17.5734 12.3328 18.0516 12.532 18.4102 12.8906L21.0984 15.5742C21.2755 15.7506 21.4159 15.9603 21.5117 16.1912C21.6074 16.4221 21.6565 16.6696 21.6562 16.9195C21.6562 17.4281 21.457 17.9062 21.0984 18.2648L18.607 20.7562C18.0352 21.3305 17.2453 21.6562 16.4344 21.6562C16.2633 21.6562 16.0992 21.6422 15.9375 21.6141C12.7781 21.0938 9.64453 19.4133 7.11562 16.8867C4.58906 14.3625 2.91094 11.2312 2.38359 8.0625C2.22422 7.09453 2.54531 6.09844 3.24375 5.39531Z" fill="#192031"/>
                </svg>
                <span>(406) 555-0120</span>
              </li>
              <li class="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.6437 4.7998H20.5437C22.0437 4.7998 22.7997 5.5078 22.7997 6.9478V17.0518C22.7997 18.4798 22.0437 19.1998 20.5437 19.1998H4.6437C3.1437 19.1998 2.3877 18.4798 2.3877 17.0518V6.9478C2.3877 5.5078 3.1437 4.7998 4.6437 4.7998ZM12.5877 15.1198L20.6757 8.4838C20.9637 8.2438 21.1917 7.6918 20.8317 7.1998C20.4837 6.7078 19.8477 6.6958 19.4277 6.9958L12.5877 11.6278L5.7597 6.9958C5.3397 6.6958 4.7037 6.7078 4.3557 7.1998C3.9957 7.6918 4.2237 8.2438 4.5117 8.4838L12.5877 15.1198Z" fill="#192031"/>
                </svg>
                <span>Hey@boostim.com</span>
              </li>
              <li class="flex items-start gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0">
                  <path d="M6.13594 18.525C4.23281 16.1426 0 10.3684 0 7.125C0 3.18992 3.13396 0 7 0C10.8646 0 14 3.18992 14 7.125C14 10.3684 9.73438 16.1426 7.86406 18.525C7.41562 19.0928 6.58437 19.0928 6.13594 18.525ZM7 9.5C8.28698 9.5 9.33333 8.43496 9.33333 7.125C9.33333 5.81504 8.28698 4.75 7 4.75C5.71302 4.75 4.66667 5.81504 4.66667 7.125C4.66667 8.43496 5.71302 9.5 7 9.5Z" fill="#192031"/>
                </svg>
                <span>2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
