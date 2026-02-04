<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})

const submitted = ref(false)

const submitForm = () => {
  submitted.value = true
  setTimeout(() => {
    form.value = { name: '', email: '', phone: '', subject: '', message: '' }
    submitted.value = false
  }, 2000)
}
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
            Get in Touch
          </h1>
          <p class="text-xl text-gray max-w-2xl animate-slide-down" style="animation-delay: 0.1s">
            Have a question or ready to start your next project? We'd love to hear from you.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="px-5 md:px-20 py-20">
      <div class="mx-auto max-w-6xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- Contact Form -->
          <div class="animate-fade-in">
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label class="block text-sm font-semibold text-dark mb-2">Full Name</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full rounded-lg border-2 border-gray-lighter px-4 py-3 focus:border-primary focus:outline-none transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-dark mb-2">Email Address</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full rounded-lg border-2 border-gray-lighter px-4 py-3 focus:border-primary focus:outline-none transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-dark mb-2">Phone Number</label>
                <input
                  v-model="form.phone"
                  type="tel"
                  class="w-full rounded-lg border-2 border-gray-lighter px-4 py-3 focus:border-primary focus:outline-none transition"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-dark mb-2">Subject</label>
                <input
                  v-model="form.subject"
                  type="text"
                  required
                  class="w-full rounded-lg border-2 border-gray-lighter px-4 py-3 focus:border-primary focus:outline-none transition"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-dark mb-2">Message</label>
                <textarea
                  v-model="form.message"
                  required
                  rows="6"
                  class="w-full rounded-lg border-2 border-gray-lighter px-4 py-3 focus:border-primary focus:outline-none transition resize-none"
                  placeholder="Tell us more about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full rounded-[50px] bg-dark text-white font-bold py-4 hover:bg-dark/90 transition transform hover:scale-105 active:scale-95"
              >
                {{ submitted ? '✓ Message Sent!' : 'Send Message' }}
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="space-y-12 animate-slide-up">
            <div class="group">
              <div class="text-4xl mb-4 group-hover:scale-125 transition duration-300">📍</div>
              <h3 class="text-2xl font-bold text-dark mb-2">Address</h3>
              <p class="text-gray">
                2972 Westheimer Rd.<br />
                Santa Ana, Illinois 85486
              </p>
            </div>

            <div class="group">
              <div class="text-4xl mb-4 group-hover:scale-125 transition duration-300">📞</div>
              <h3 class="text-2xl font-bold text-dark mb-2">Phone</h3>
              <p class="text-gray">
                <a href="tel:+14065550120" class="hover:text-primary transition">
                  +1 (406) 555-0120
                </a>
              </p>
            </div>

            <div class="group">
              <div class="text-4xl mb-4 group-hover:scale-125 transition duration-300">📧</div>
              <h3 class="text-2xl font-bold text-dark mb-2">Email</h3>
              <p class="text-gray">
                <a href="mailto:Hey@boostim.com" class="hover:text-primary transition">
                  Hey@boostim.com
                </a>
              </p>
            </div>

            <div class="group">
              <div class="text-4xl mb-4 group-hover:scale-125 transition duration-300">🕐</div>
              <h3 class="text-2xl font-bold text-dark mb-2">Business Hours</h3>
              <p class="text-gray">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
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

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

.animate-slide-down {
  animation: slide-down 0.6s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 0.6s ease-out forwards;
}
</style>
