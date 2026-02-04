<script setup lang="ts">
const team = [
  { name: "Sarah Johnson", role: "Creative Director", bio: "10+ years of design excellence" },
  { name: "Mike Chen", role: "SEO Specialist", bio: "Expert in search optimization" },
  { name: "Emily Rodriguez", role: "Content Lead", bio: "Storytelling and brand voice" },
  { name: "David Park", role: "Analytics Expert", bio: "Data-driven strategies" },
  { name: "Lisa Thompson", role: "Social Media Manager", bio: "Community building specialist" },
  { name: "James Wilson", role: "Business Developer", bio: "Client success advocate" }
]

const values = [
  {
    title: "Excellence",
    description: "We strive for excellence in every project we undertake."
  },
  {
    title: "Innovation",
    description: "We stay ahead of industry trends and embrace new technologies."
  },
  {
    title: "Transparency",
    description: "Open communication and honest reporting with all our clients."
  },
  {
    title: "Collaboration",
    description: "We work as partners with our clients to achieve their goals."
  },
  {
    title: "Integrity",
    description: "Ethical practices and honest dealings are our foundation."
  },
  {
    title: "Growth",
    description: "We help our clients grow their business sustainably."
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
            About Our Agency
          </h1>
          <p class="text-xl text-gray max-w-2xl animate-slide-down" style="animation-delay: 0.1s">
            We're a team of digital marketing experts dedicated to helping businesses achieve their goals.
          </p>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="px-5 md:px-20 py-20 bg-gray-lighter/30">
      <div class="mx-auto max-w-4xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="rounded-[20px] overflow-hidden h-96 animate-fade-in">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/75a212ab82b6175c9862b125e0e23db8d369a58a" alt="Our Story" class="w-full h-full object-cover hover:scale-110 transition duration-500" />
          </div>
          <div class="animate-slide-up space-y-6">
            <h2 class="text-4xl font-bold text-dark">Our Story</h2>
            <p class="text-gray leading-relaxed">
              Founded in 2020, Boostim started with a simple mission: to help businesses succeed in the digital age. What began as a small team of passionate marketing professionals has grown into a full-service digital marketing agency.
            </p>
            <p class="text-gray leading-relaxed">
              Our team brings together diverse expertise in SEO, social media, content marketing, and digital advertising. We believe in combining data-driven strategies with creative excellence to deliver results that matter.
            </p>
            <div class="grid grid-cols-3 gap-4 pt-4">
              <div class="text-center">
                <div class="text-4xl font-bold text-primary">230+</div>
                <p class="text-sm text-gray">Clients Served</p>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-primary">500+</div>
                <p class="text-sm text-gray">Projects Done</p>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-primary">50+</div>
                <p class="text-sm text-gray">Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="px-5 md:px-20 py-20">
      <div class="mx-auto max-w-6xl">
        <h2 class="text-4xl font-bold text-dark mb-16 text-center animate-fade-in">Our Core Values</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(value, index) in values"
            :key="index"
            class="rounded-[20px] bg-gray-lighter/50 p-8 hover:bg-primary/10 hover:shadow-lg transition transform hover:scale-105 animate-fade-in"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <h3 class="text-2xl font-bold text-dark mb-4">{{ value.title }}</h3>
            <p class="text-gray">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="px-5 md:px-20 py-20 bg-gray-lighter/30">
      <div class="mx-auto max-w-6xl">
        <h2 class="text-4xl font-bold text-dark mb-16 text-center animate-fade-in">Our Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(member, index) in team"
            :key="index"
            class="rounded-[20px] bg-white p-8 hover:shadow-xl transition transform hover:scale-105 animate-fade-in"
            :style="{ animationDelay: `${index * 0.08}s` }"
          >
            <div class="w-full h-48 rounded-lg bg-gray-lighter mb-4 hover:scale-110 transition duration-300"></div>
            <h3 class="text-xl font-bold text-dark">{{ member.name }}</h3>
            <p class="text-primary font-semibold text-sm mb-2">{{ member.role }}</p>
            <p class="text-gray">{{ member.bio }}</p>
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
