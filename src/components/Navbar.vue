<template>
  <div class="bg-white py-2 sticky top-0 z-50 shadow-md mb-0">
    <nav class="container mx-auto flex flex-wrap items-center justify-between px-6 z-10">
     
      <router-link to="/" class="flex-shrink-0">
        <img 
          class="h-20" 
          src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/HeaderFooterImages/Scala-Logo-sg-.webp" 
          alt="scala-logo" 
        />
      </router-link>

      <!-- hamburger Menu  -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="focus:outline-none">
          <i class="fa-solid fa-bars text-lg"></i>
        </button>
      </div>

      <!-- Menu Items -->
      <ul class="hidden md:flex flex-wrap space-x-8 text-lg">
        <li class="hover:text-red-600 cursor-pointer">Solutions</li>
        <li class="hover:text-red-600 cursor-pointer">Industries</li>
        <li class="hover:text-red-600 cursor-pointer">Case Studies</li>
        <li class="hover:text-red-600 cursor-pointer">Products</li>
        <li class="hover:text-red-600 cursor-pointer">Professional Services</li>
        <li class="hover:text-red-600 cursor-pointer">Resources</li>
        <i class="fa-sharp fa-solid fa-magnifying-glass fa-flip-horizontal mt-2 cursor-pointer"></i>
      </ul>

      <!-- responsive Menu -->
      <ul v-if="isMenuOpen" class="md:hidden flex flex-col space-y-2 text-lg">
        <li class="hover:text-red-600 cursor-pointer">Solutions</li>
        <li class="hover:text-red-600 cursor-pointer">Industries</li>
        <li class="hover:text-red-600 cursor-pointer">Case Studies</li>
        <li class="hover:text-red-600 cursor-pointer">Products</li>
        <li class="hover:text-red-600 cursor-pointer">Professional Services</li>
        <li class="hover:text-red-600 cursor-pointer">Resources</li>
      </ul>

      <!-- icon and Button -->
      <div class="flex items-center space-x-4">
        <div class="flex mr-8 items-center">
          <i class="fa-solid mt-1 fa-location-dot fa-sm mr-2 cursor-pointer" style="color: #f2020e;"></i>
          <span class="text-xl">India</span>
        </div>
        <router-link to="/contact">
          <button class="bg-red-600 text-white text-lg font-bold px-4 py-2 rounded-lg hover:bg-red-500">
            Contact Us
          </button>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
}
</script>

<style scoped>

</style>
