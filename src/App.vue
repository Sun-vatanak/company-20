<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-lighter">
      <div class="mx-auto px-5 md:px-20">
        <div class="flex h-28 items-center justify-between">
          <!-- Logo -->
          <RouterLink to="/" class="flex items-center gap-2 hover:opacity-80 transition">
            <div class="relative h-8 w-8">
              <div class="absolute h-8 w-8 rounded-[3px_3px_53px_3px] bg-primary"></div>
              <div class="absolute left-[11px] top-[12px] h-3.5 w-3.5 rounded-[3px_3px_53px_3px] bg-dark-800"></div>
            </div>
            <span class="font-manrope text-2xl font-bold tracking-tight text-[#020407]">boostim</span>
          </RouterLink>

          <!-- Navigation -->
          <nav class="hidden items-center gap-12 md:flex lg:gap-[74px]">
            <RouterLink 
              to="/service"
              :class="[
                'flex items-center gap-[7px] text-sm font-semibold transition hover:text-primary',
                route.path === '/service' ? 'text-primary' : 'text-[#020407]'
              ]"
            >
              <span>Service</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </RouterLink>

            <RouterLink 
              to="/agency"
              :class="[
                'flex items-center gap-[7px] text-sm font-semibold transition hover:text-primary',
                route.path === '/agency' ? 'text-primary' : 'text-[#020407]'
              ]"
            >
              <span>Agency</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </RouterLink>

            <RouterLink 
              to="/case-study"
              :class="[
                'flex items-center gap-[7px] text-sm font-semibold transition hover:text-primary',
                route.path === '/case-study' ? 'text-primary' : 'text-[#020407]'
              ]"
            >
              <span>Case study</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </RouterLink>

            <RouterLink 
              to="/resources"
              :class="[
                'flex items-center gap-[7px] text-sm font-semibold transition hover:text-primary',
                route.path === '/resources' ? 'text-primary' : 'text-[#020407]'
              ]"
            >
              <span>Resources</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </RouterLink>

            <RouterLink 
              to="/contact"
              :class="[
                'text-sm font-semibold transition hover:text-primary',
                route.path === '/contact' ? 'text-primary' : 'text-[#020407]'
              ]"
            >
              Contact
            </RouterLink>
          </nav>

          <!-- CTA Buttons -->
          <div class="flex items-start gap-[9px]">
            <button class="flex items-center justify-center gap-3 rounded-[50px] border border-dark px-4 py-3 font-manrope text-base font-bold leading-[140%] tracking-tight text-dark transition hover:bg-dark hover:text-white hover:scale-105 active:scale-95">
              Get started
            </button>
            <button class="flex h-[50px] w-[50px] items-center justify-center rounded-[50px] bg-dark transition hover:bg-dark/90 hover:scale-110 active:scale-95">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Page Content with smooth transitions -->
    <RouterView v-slot="{ Component }">
      <Transition name="fade-page" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>

    <!-- Footer -->
    <footer class="bg-[#FAFAFA] px-5 pb-8 pt-16 md:px-20 border-t border-gray-lighter">
      <div class="mx-auto max-w-6xl">
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <!-- Brand -->
          <div class="flex flex-col gap-8">
            <RouterLink to="/" class="flex items-center gap-3 hover:opacity-80 transition w-fit">
              <div class="relative h-[51px] w-[51px]">
                <div class="absolute h-[51px] w-[51px] rounded-[4.6px_4.6px_82px_4.6px] bg-primary"></div>
                <div class="absolute left-[17px] top-[18px] h-[22px] w-[22px] rounded-[4.6px_4.6px_82px_4.6px] bg-dark-800"></div>
              </div>
              <span class="font-manrope text-[37px] font-bold tracking-tight text-[#020407]">boostim</span>
            </RouterLink>
            <p class="max-w-[534px] text-sm leading-[180%] text-gray-light">
              We offers a comprehensive suite of digital marketing services that cover all aspects of our online presence. From SEO and social media marketing to content creation and PPC advertising, they have the expertise and resources to handle our diverse marketing needs.
            </p>
            <div class="flex items-center gap-4">
              <a href="#" class="text-dark transition hover:text-gray hover:scale-125">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"/>
                </svg>
              </a>
              <a href="#" class="text-dark transition hover:text-gray hover:scale-125">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10C2.38 10 2.38 10 2.38 10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16 6 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.70 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"/>
                </svg>
              </a>
              <a href="#" class="text-dark transition hover:text-gray hover:scale-125">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3ZM8.339 18.337H5.667V10.003H8.339V18.337ZM7.003 8.819C6.13 8.819 5.428 8.117 5.428 7.243C5.428 6.369 6.131 5.667 7.003 5.667C7.875 5.667 8.577 6.369 8.577 7.243C8.577 8.117 7.876 8.819 7.003 8.819ZM18.338 18.337H15.666V14.162C15.666 13.166 15.647 11.884 14.28 11.884C12.891 11.884 12.68 12.968 12.68 14.089V18.337H10.008V10.003H12.573V11.124H12.608C12.966 10.475 13.836 9.789 15.136 9.789C17.836 9.789 18.338 11.575 18.338 13.892V18.337Z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Navigation -->
          <div>
            <h3 class="mb-8 text-lg font-semibold tracking-tight text-[#192031]">Navigation</h3>
            <ul class="flex flex-col gap-6 text-sm text-gray-light">
              <li><RouterLink to="/service" class="transition hover:text-dark hover:scale-105 inline-block">Service</RouterLink></li>
              <li><RouterLink to="/agency" class="transition hover:text-dark hover:scale-105 inline-block">Agency</RouterLink></li>
              <li><RouterLink to="/case-study" class="transition hover:text-dark hover:scale-105 inline-block">Case Study</RouterLink></li>
              <li><RouterLink to="/resources" class="transition hover:text-dark hover:scale-105 inline-block">Resources</RouterLink></li>
            </ul>
          </div>

          <!-- License -->
          <div>
            <h3 class="mb-8 text-lg font-semibold tracking-tight text-[#192031]">Licence</h3>
            <ul class="flex flex-col gap-6 text-sm text-gray-light">
              <li><a href="#" class="transition hover:text-dark hover:scale-105 inline-block">Privacy Policy</a></li>
              <li><a href="#" class="transition hover:text-dark hover:scale-105 inline-block">Copyright</a></li>
              <li><a href="#" class="transition hover:text-dark hover:scale-105 inline-block">Email Address</a></li>
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

<style scoped>
.fade-page-enter-active,
.fade-page-leave-active {
  transition: opacity 0.3s ease;
}

.fade-page-enter-from {
  opacity: 0;
}

.fade-page-leave-to {
  opacity: 0;
}
</style>
