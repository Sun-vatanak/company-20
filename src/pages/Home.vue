<script setup lang="ts">
import { ref, computed } from 'vue'
import team from '@/assets/images/team.jpg'
import video from '@/assets/images/video.jpg'
import project1 from '@/assets/images/project 1.webp'
import project2 from '@/assets/images/project 2.webp'
import project3 from '@/assets/images/project3.webp'
import Project4 from '@/assets/images/project4.webp'
import user1 from '@/assets/images/user 1.jpg'

// Type definitions
interface Testimonial {
  text: string
  author: string
  role: string
}

interface FAQ {
  question: string
  answer: string
}

interface BlogCard {
  color: string
  readTime: string
  title: string
  description: string
  animationDelay?: string
}

// Navigation state with explicit types
const currentTestimonial = ref<number>(0)
const expandedFaq = ref<number>(0)
const selectedCategory = ref<number>(0)
const testimonialDirection = ref<'left' | 'right'>('right')
const isAnimating = ref<boolean>(false)

// Testimonials data with type annotation
const testimonials = ref<Testimonial[]>([
  {
    text: 'They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.',
    author: 'Michael Kaizer',
    role: 'CEO of Basecamp Corp',
  },
  {
    text: 'They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.',
    author: 'Michael Kaizer',
    role: 'CEO of Basecamp Corp',
  },
])

// FAQ data with type annotation
const faqs = ref<FAQ[]>([
  {
    question: 'Why is digital marketing important for my business?',
    answer:
      'Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.',
  },
  {
    question: "How can digital marketing help improve my website's visibility?",
    answer:
      "Through SEO optimization, content marketing, social media engagement, and paid advertising campaigns, we can significantly improve your website's visibility across search engines and social platforms.",
  },
  {
    question: 'How long does it take to see results from digital marketing efforts?',
    answer:
      'Results vary depending on the strategy, but typically you can see initial improvements within 3-6 months, with more substantial results after 6-12 months of consistent effort.',
  },
  {
    question: 'How do you measure the success of digital marketing campaigns?',
    answer:
      'We use various metrics including traffic, conversions, ROI, engagement rates, and other KPIs tailored to your specific business goals.',
  },
])

// Categories for case studies with type annotation
const categories = ref<string[]>([
  'All Work [30]',
  'Local Dining [04]',
  'Digital Marketing [8]',
  'Branding [4]',
])

// Blog cards data with type annotation
const blogCards = ref<BlogCard[]>([
  {
    color: 'bg-blue-accent',
    readTime: '5 min read',
    title: 'How a Digital Marketing Agency Can Boost Your Business',
    description: 'We are the top digital marketing agency for branding corp. We offer a full rang engine ....',
    animationDelay: '0s'
  },
  {
    color: 'bg-orange-accent',
    readTime: '5 min read',
    title: 'The Latest Trends and Strategies with a Digital Marketing Agency',
    description: 'Working with this digital marketing agency has been a true partnership. They have taken the time to understand our business and industry',
    animationDelay: '0.1s'
  },
  {
    color: 'bg-purple-accent',
    readTime: '5 min read',
    title: 'Maximizing ROI with the Expertise of a Digital Marketing Agency',
    description: 'What sets this digital marketing agency apart is their commitment to transparency and collaboration. They keep us informed every step of the way,',
    animationDelay: '0.2s'
  }
])

// Computed property for animation class
const testimonialAnimationClass = computed(() => {
  if (!isAnimating.value) return ''
  return testimonialDirection.value === 'right' ? 'slide-in-right' : 'slide-in-left'
})

// Methods with proper typing
const toggleFaq = (index: number): void => {
  expandedFaq.value = expandedFaq.value === index ? -1 : index
}

const selectCategory = (index: number): void => {
  selectedCategory.value = index
}

const nextTestimonial = (): void => {
  if (isAnimating.value) return

  isAnimating.value = true
  testimonialDirection.value = 'right'

  setTimeout(() => {
    currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.value.length
    setTimeout(() => {
      isAnimating.value = false
    }, 50)
  }, 300)
}

const previousTestimonial = (): void => {
  if (isAnimating.value) return

  isAnimating.value = true
  testimonialDirection.value = 'left'

  setTimeout(() => {
    currentTestimonial.value = currentTestimonial.value === 0
      ? testimonials.value.length - 1
      : currentTestimonial.value - 1
    setTimeout(() => {
      isAnimating.value = false
    }, 50)
  }, 300)
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-white pb-12 pt-8 md:pb-20 md:pt-16">
      <div class="mx-auto px-5 md:px-20">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <!-- Left Content -->
          <div class="flex flex-col justify-center gap-12 animate-fade-in">
            <div class="flex flex-col gap-8">
              <h1
                class="text-5xl font-semibold leading-[110%] tracking-[-0.03em] text-dark md:text-6xl lg:text-[72px] animate-slide-down">
                Stay ahead of the curve with our forward-thinking
              </h1>
              <p class="max-w-[557px] text-base font-medium leading-[180%] text-gray animate-slide-down"
                style="animation-delay: 0.1s">
                An award-winning SEO agency with disciplines in digital marketing, design, and
                website development. focused on understanding you.
              </p>
            </div>

            <div class="flex flex-wrap items-center gap-8 md:gap-14 animate-slide-down" style="animation-delay: 0.2s">
              <button
                class="group flex items-center gap-3 rounded-[50px] bg-dark px-6 py-4 transition hover:bg-dark/90 hover:scale-105 active:scale-95">
                <span class="font-manrope text-base font-bold leading-[140%] tracking-tight text-white">Explore
                  us</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="transition group-hover:translate-x-1">
                  <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </button>
              <button
                class="text-base font-semibold leading-[180%] text-dark underline transition hover:text-gray hover:scale-105">
                View Case Study
              </button>
            </div>

            <!-- Trusted brands -->
            <div class="flex flex-wrap items-center gap-8 md:gap-16 animate-slide-down" style="animation-delay: 0.3s">
              <span class="w-[150px] text-sm font-semibold leading-[160%] text-dark">
                Trusted by the world's biggest brands
              </span>
              <div class="flex items-center gap-7 opacity-50">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/e7d50ae8a200300f69e8831be4c3ff9b006e51cd"
                  alt="Company logo" class="h-8 w-auto hover:opacity-100 transition" />
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/e7d50ae8a200300f69e8831be4c3ff9b006e51cd"
                  alt="Company logo" class="h-8 w-auto hover:opacity-100 transition" />
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/e7d50ae8a200300f69e8831be4c3ff9b006e51cd"
                  alt="Company logo" class="h-8 w-auto hover:opacity-100 transition" />
              </div>
            </div>
          </div>

          <!-- Right Content - Stats Cards -->
          <div class="relative flex flex-col justify-center gap-8 animate-slide-up">
            <!-- Top row -->
            <div class="flex  flex-col gap-8 md:flex-row md:items-start">
              <div class=" w-full   h-max ">
                <img :src="team" alt="Team photo"
                  class="   md:h-[308px]   object-cover rounded-[1000px_20px_20px_20px]  hover:shadow-lg transition" />
              </div>

              <div
                class="relative w-full rounded-[20px] bg-gray-lighter/60 p-6 backdrop-blur-[42px] md:w-[259px] hover:shadow-lg transition">
                <div class="flex flex-col gap-8">
                  <h2 class="text-[84px] font-bold leading-[150%] tracking-[-0.03em] text-dark">
                    230+
                  </h2>
                  <p class="text-base font-medium leading-[150%] text-gray">
                    some big companies that we work with, and trust us very much
                  </p>
                </div>
                <div class="mt-6">
                  <svg width="211" height="6" viewBox="0 0 211 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 3H211" stroke="#D9D9D9" stroke-width="6" />
                    <path d="M0 3H141" stroke="black" stroke-width="6" />
                  </svg>
                </div>
              </div>
            </div>

            <!-- Bottom row - Dark card with graph -->
            <div
              class="relative overflow-hidden rounded-[20px] bg-dark p-8 hover:shadow-xl transition transform hover:scale-105">
              <div class="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div class="flex flex-col gap-4">
                  <div class="flex items-center gap-3">
                    <svg width="54" height="1" viewBox="0 0 54 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0.5H54" stroke="white" />
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
                  <div class="h-[95px] w-[69px] bg-[#BAE289] rounded-sm hover:scale-110 transition delay-100"></div>
                  <div class="h-[136px] w-[69px] bg-[#99CF63] rounded-sm hover:scale-110 transition delay-200"></div>
                  <div class="h-[166px] w-[69px] bg-[#77B248] rounded-sm hover:scale-110 transition delay-300"></div>
                </div>
              </div>

              <div
                class="absolute right-4 top-4 flex h-[108px] w-[108px] items-center justify-center rounded-full bg-dark shadow-[0_30px_50px_-7px_rgba(0,0,0,0.3)] animate-pulse">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M46 12L27 31L17 21L2 36" stroke="#A8D67B" stroke-width="4" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M34 12H46V24" stroke="#A8D67B" stroke-width="4" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Provide Best Service Section -->
    <section class="bg-white px-5 py-16 md:px-20 md:py-20 animate-fade-in">
      <div class="mx-auto">
        <div class="flex flex-col justify-between gap-12 lg:flex-row lg:items-start">
          <h2 class="max-w-[684px] text-4xl font-semibold leading-[130%] tracking-tight text-dark md:text-5xl">
            Provide the best service with out of the box ideas
          </h2>
          <p class="max-w-[557px] text-base font-medium leading-[180%] text-gray">
            we are a passionate team of digital marketing enthusiasts dedicated to helping
            businesses succeed in the digital world. With years of experience and a deep
            understanding of the ever-evolving online landscape, we stay at the forefront of
            industry trends and technologies.
          </p>
        </div>

        <!-- How We Work Section -->
        <div class="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <!-- 920+ card for mobile/tablet -->
          <div class="rounded-[20px] bg-dark p-8 md:hidden lg:block hover:shadow-xl transition">
            <div class="flex flex-col gap-6">
              <h2 class="text-6xl font-bold leading-[150%] tracking-[-0.03em] text-white lg:text-[84px]">
                920+
              </h2>
              <p class="max-w-[200px] text-sm font-medium leading-[150%] text-white">
                Projects that were successfully
              </p>
              <div class="flex items-center gap-2">
                <img :src="project1" alt="Project 1"
                  class="h-[80px] w-[80px]  object-cover rounded-full border-2 border-white/50 bg-[#C6C6C6] hover:scale-125 transition" />
                <img :src="project2" alt="Project 2"
                  class="h-[80px] w-[80px]   object-cover rounded-full border-2 border-white/50 bg-[#C6C6C6] hover:scale-125 transition" />
                <img :src="project3" alt="Project 3"
                  class="h-[80px] w-[80px] object-cover rounded-full border-2 border-white/50 bg-[#C6C6C6] hover:scale-125 transition" />
                <img :src="Project4" alt="Project 4"
                  class="h-[80px] w-[80px] object-cover rounded-full border-2 border-white/50 bg-[#C6C6C6] hover:scale-125 transition" />
                <span class="text-5xl font-bold text-white">+</span>
              </div>
            </div>
          </div>

          <!-- How We Work Video -->
          <div class="relative overflow-hidden rounded-[30px] hover:shadow-2xl transition group">
            <img :src="video" alt="How we work video" class="h-auto w-full object-cover group-hover:scale-110 transition duration-500" />
            <div
              class="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition">
              <h3 class="text-center text-3xl font-semibold leading-[140%] tracking-[0.27em] text-white md:text-5xl">
                HOW WE WORK
              </h3>
            </div>
            <button
              class="absolute bottom-10 right-8 flex   h-[163px] w-[163px] items-center justify-center rounded-full border-[12px] border-[#FAFAFA] bg-primary transition hover:scale-110 active:scale-95 shadow-xl group-hover:shadow-2xl"
              aria-label="Play video">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M39.2498 17.1472C40.1304 17.6155 40.8669 18.3145 41.3805 19.1693C41.8942 20.0242 42.1655 21.0027 42.1655 22C42.1655 22.9973 41.8942 23.9759 41.3805 24.8307C40.8669 25.6856 40.1304 26.3846 39.2498 26.8529L15.7611 39.6257C11.979 41.6827 7.33331 39.006 7.33331 34.7747V9.2272C7.33331 4.9922 11.979 2.31737 15.7611 4.37253L39.2498 17.1472Z"
                  fill="black" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Studies Section -->
    <section class="bg-[#FAFAFA] px-4 py-16 md:px-5 md:py-20">
      <div class="mx-auto rounded-[30px] bg-dark px-8 py-16 md:px-16 md:py-20 animate-fade-in">
        <div class="flex flex-col items-center gap-14">
          <h2
            class="max-w-[1280px] text-center text-3xl font-semibold leading-[130%] tracking-tight text-white md:text-4xl lg:text-5xl">
            Real-world examples of how we have helped companies achieve their marketing objectives.
          </h2>

          <!-- Category filters -->
          <div class="flex flex-wrap justify-center gap-3">
            <button
              v-for="(category, index) in categories"
              :key="index"
              @click="selectCategory(index)"
              :class="[
                'rounded-[50px] px-6 py-3 text-sm font-semibold leading-[126%] tracking-tight transition hover:scale-105 active:scale-95',
                selectedCategory === index
                  ? 'bg-primary text-dark'
                  : 'border border-white/30 text-white hover:bg-white/10',
              ]">
              {{ category }}
            </button>
          </div>

          <!-- Case study cards -->
          <div class="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <!-- Card 1 - Circular with See Details -->
            <div class="relative animate-fade-in hover:scale-105 transition">
              <div
                class="overflow-hidden rounded-[261px] border-[11px] border-white/40 backdrop-blur-[67px] hover:border-white/60 transition">
                <img :src="project1" alt="Case study project" class="h-auto w-full hover:scale-110 transition duration-500" />
              </div>
              <div
                class="absolute left-1/2 top-1/2 flex h-[163px] w-[163px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary hover:scale-110 transition cursor-pointer">
                <span class="text-center text-lg font-bold leading-[126%] tracking-tight text-black">See Details</span>
              </div>
            </div>

            <!-- Card 2 - Ai Wave -->
            <div
              class="relative overflow-hidden rounded-[30px] border-[10px] border-white/30 backdrop-blur-[67px] hover:border-white/50 transition animate-fade-in hover:scale-105"
              style="animation-delay: 0.1s">
              <img :src="project2" alt="Ai Wave project"
                class="h-full w-full object-cover hover:scale-110 transition duration-500" />
              <div class="absolute left-8 top-8 flex items-center gap-3">
                <svg width="54" height="1" viewBox="0 0 54 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0.5H54" stroke="white" />
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
            <div
              class="relative overflow-hidden rounded-[30px] border-[10px] border-white/30 backdrop-blur-[67px] hover:border-white/50 transition animate-fade-in hover:scale-105"
              style="animation-delay: 0.2s">
              <img :src="project3" alt="App Lancer project"
                class="h-full w-full object-cover hover:scale-110 transition duration-500" />
              <div class="absolute left-8 top-8 flex items-center gap-3">
                <svg width="54" height="1" viewBox="0 0 54 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0.5H54" stroke="white" />
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
    <section class="bg-[#FAFAFA] px-5 py-16 md:px-20 md:py-20 animate-fade-in">
      <div class="mx-auto">
        <div class="flex flex-col gap-16">
          <div class="testimonial-container overflow-hidden">
            <blockquote
              :key="currentTestimonial"
              :class="['text-center text-2xl font-medium leading-[180%] text-dark md:text-3xl lg:text-4xl', testimonialAnimationClass]">
              "{{ testimonials[currentTestimonial].text }}"
            </blockquote>
          </div>

          <div class="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div class="flex items-center gap-6">
              <img :src="user1" alt="User avatar"
                class="h-[70px] w-[70px] overflow-hidden object-cover rounded-full border-2 border-white/50 bg-black/20 hover:scale-110 transition" />
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
              <button
                @click="previousTestimonial"
                :disabled="isAnimating"
                class="flex items-center justify-center rounded-[70px] border border-dark p-4 transition hover:bg-dark hover:text-white hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous testimonial">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M12 5L5 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </button>
              <span class="text-base font-semibold leading-[180%]">
                <span class="text-dark underline">{{ String(currentTestimonial + 1).padStart(2, '0') }}</span>
                <span class="text-dark/40">/{{ String(testimonials.length).padStart(2, '0') }}</span>
              </span>
              <button
                @click="nextTestimonial"
                :disabled="isAnimating"
                class="flex items-center justify-center rounded-[70px] bg-dark p-4 transition hover:bg-dark/90 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next testimonial">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="bg-[#F3F3F3] p-4">
      <div class="overflow-hidden rounded-[28px] bg-white px-8 py-16 md:px-20 animate-fade-in">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <div class="flex flex-col justify-center gap-12">
            <h2 class="text-4xl font-semibold leading-[130%] tracking-tight text-dark md:text-5xl">
              Digital Marketing FAQs
            </h2>
            <p class="max-w-[531px] text-base font-medium leading-[180%] text-gray">
              As a leading digital marketing agency, we are dedicated to providing comprehensive
              educational resources and answering frequently asked questions to help our clients.
            </p>
            <div class="flex flex-wrap gap-4">
              <button
                class="rounded-[70px] border border-dark px-8 py-4 text-base font-semibold leading-[180%] text-dark transition hover:bg-dark hover:text-white hover:scale-105 active:scale-95">
                More Questions
              </button>
              <button class="text-base font-semibold leading-[180%] text-dark underline hover:text-gray transition">
                Contact Us
              </button>
            </div>
          </div>

          <div class="flex flex-col">
            <div v-for="(faq, index) in faqs" :key="index" class="border-b border-dark bg-white">
              <button
                @click="toggleFaq(index)"
                class="flex w-full items-center justify-between gap-4 px-6 py-7 text-left transition hover:bg-gray-lighter/20 hover:scale-105 origin-left"
                :aria-expanded="expandedFaq === index"
                :aria-controls="`faq-answer-${index}`">
                <h3 class="max-w-[448px] text-xl font-semibold leading-[150%] tracking-tight text-dark md:text-2xl">
                  {{ faq.question }}
                </h3>
                <svg v-if="expandedFaq !== index" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 transition-transform duration-300"
                  aria-hidden="true">
                  <path d="M12 5V19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M5 12H19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 transition-transform duration-300 rotate-90" aria-hidden="true">
                  <path d="M5 12H19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
              <div
                v-if="expandedFaq === index"
                :id="`faq-answer-${index}`"
                class="px-6 pb-7 text-base font-medium leading-[180%] text-gray animate-slide-down">
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
              We are the top digital marketing agency for branding corp. We offer a full range of
              services to help clients improve their search engine rankings and drive more traffic
              to their websites.
            </p>
            <button
              class="self-start rounded-[70px] border border-dark px-8 py-4 text-base font-semibold leading-[180%] text-dark transition hover:bg-dark hover:text-white hover:scale-105 active:scale-95">
              See more
            </button>
          </div>
        </div>

        <!-- Blog cards -->
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(card, index) in blogCards"
            :key="index"
            class="flex flex-col gap-14 rounded-[20px] bg-white p-8 hover:shadow-xl transition hover:scale-105 animate-fade-in"
            :style="{ animationDelay: card.animationDelay }">
            <div class="flex flex-col gap-6">
              <div class="flex items-start justify-between">
                <div
                  :class="['h-3.5 w-3.5 rounded-full animate-pulse', card.color]"
                  :style="{ animationDelay: `${parseFloat(card.animationDelay || '0') + 0.2}s` }">
                </div>
                <span class="text-sm font-medium leading-[160%] text-gray">{{ card.readTime }}</span>
              </div>
              <h3 class="text-2xl font-semibold leading-[150%] tracking-tight text-dark">
                {{ card.title }}
              </h3>
            </div>
            <div class="flex items-center justify-between">
              <p
                class="max-w-[220px] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium leading-[160%] text-gray">
                {{ card.description }}
              </p>
              <button
                :class="[
                  'flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-full transition hover:scale-110 active:scale-95',
                  index === 0 ? 'bg-dark hover:bg-dark/90' : 'border border-dark hover:bg-dark hover:text-white'
                ]"
                :aria-label="`Read more about ${card.title}`">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" :stroke="index === 0 ? 'white' : 'currentColor'" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M12 5L19 12L12 19" :stroke="index === 0 ? 'white' : 'currentColor'" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-[#FAFAFA] px-4 pb-16 md:px-5 md:pb-20">
      <div
        class="overflow-hidden rounded-[30px] bg-dark px-8 py-20 md:px-16 animate-fade-in hover:shadow-2xl transition">
        <div class="flex flex-col items-center justify-between gap-8 md:flex-row">
          <h2 class="text-4xl font-semibold leading-[130%] tracking-tight text-white md:text-6xl lg:text-[80px]">
            Ready to work with us ?
          </h2>
          <button
            class="flex items-center gap-3 rounded-[50px] bg-white px-8 py-4 transition hover:bg-gray-lighter hover:scale-105 active:scale-95">
            <span class="font-manrope text-base font-bold leading-[140%] tracking-tight text-dark">Get Started</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 5L19 12L12 19" stroke="black" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
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

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-left {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-in-right {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

.animate-slide-down {
  animation: slide-down 0.6s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 0.6s ease-out forwards;
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}

.slide-in-left {
  animation: slide-in-left 0.5s ease-out forwards;
}

.slide-in-right {
  animation: slide-in-right 0.5s ease-out forwards;
}

.testimonial-container {
  position: relative;
  min-height: 200px;
}
</style>
