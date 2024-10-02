<template>
  <div class="bg-white py-2 sticky top-0 z-50 shadow-md">
    <nav class="container mx-auto flex items-center justify-between px-4 lg:px-6">
      <!-- Left Section: Sidebar Toggle and Logo -->
      <div class="flex items-center">
        <!-- Sidebar Toggle Button (visible on smaller screens) -->
        <button @click="toggleMenu" class="lg:hidden mr-4 focus:outline-none" aria-label="Toggle menu">
          <i class="fa-solid fa-bars text-2xl"></i>
        </button>
        <!-- Logo -->
        <router-link to="/" class="flex-shrink-0">
          <img
            class="h-8 sm:h-10 md:h-12 lg:h-16"
            src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/HeaderFooterImages/Scala-Logo-sg-.webp"
            alt="scala-logo"
          />
        </router-link>
      </div>

      <!-- Center Section: Navigation Links (visible below lg) -->
      <ul class="hidden lg:flex flex-wrap items-center space-x-6 lg:space-x-8 text-base sm:text-lg">
        <li class="hover:text-red-600 cursor-pointer">Solutions</li>

        <!-- Industries Dropdown -->
        <li class="relative group hover:text-red-600 cursor-pointer">
          Industries
          <ul class="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[200px] sm:min-w-[250px] lg:min-w-[300px]">
            <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Retail</li>
            <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Quick Service Restaurant</li>
            <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Transportation</li>
            <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Education</li>
            <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Banking and Finance</li>
            <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Grocery</li>
            <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Automotive</li>
            <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Government</li>
            <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Hotel & Casino</li>
            <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Healthcare</li>
          </ul>
        </li>

        <li class="hover:text-red-600 cursor-pointer">Case Studies</li>

        <!-- Products Dropdown -->
        <li class="relative group hover:text-red-600 cursor-pointer">
          Products
          <ul class="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[200px] sm:min-w-[250px] lg:min-w-[300px]">
            <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Software</li>
            <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Hardware</li>
            <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">SaaS</li>
          </ul>
        </li>

        <!-- Professional Services Dropdown -->
        <li class="relative group hover:text-red-600 cursor-pointer">
          Professional Services
          <ul class="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[200px] sm:min-w-[250px] lg:min-w-[300px]">
            <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Technical Consulting</li>
            <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Creative Service</li>
          </ul>
        </li>

        <!-- Resources Dropdown -->
        <li class="relative group hover:text-red-600 cursor-pointer">
          Resources
          <ul class="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[200px] sm:min-w-[250px] lg:min-w-[300px]">
            <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">News and Events</li>
            <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Blogs</li>
            <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Career</li>
            <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">About Us</li>
            <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Partners</li>
          </ul>
        </li>

        <!-- Search -->
        <li class="flex items-center relative">
          <i
            class="fa-sharp fa-solid fa-magnifying-glass fa-flip-horizontal text-xl cursor-pointer"
            @click="toggleSearchBar"
          ></i>
          <input
            v-if="isSearchOpen"
            type="text"
            class="ml-2 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-200"
            placeholder="Search..."
            @blur="closeSearchBar"
          />
        </li>
        <li class="flex items-center hover:text-red-600 cursor-pointer">
                <i class="fa-solid fa-location-dot text-red-600 mr-2"></i>
                <span class="text-base sm:text-lg">India</span>
              </li>
      </ul>
      
              
      <!-- Right Section: Contact Button (visible on all screens) -->
      <div class="flex items-center space-x-4">
        <!-- Contact Us Button -->
        <router-link to="/contact">
          <button class="bg-red-600 text-white text-sm sm:text-base lg:text-lg font-semibold px-3 py-3 rounded-lg hover:bg-red-500 transition duration-200" id="btn">
            Contact Us
          </button>
        </router-link>
      </div>

      <!-- Mobile Menu Overlay -->
      <transition name="slide">
        <div v-if="isMenuOpen" class="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div class="fixed top-0 left-0 h-full w-64 sm:w-72 bg-white shadow-lg p-4 overflow-y-auto">
            <button @click="toggleMenu" class="text-red-600 text-2xl mb-6 focus:outline-none" aria-label="Close menu">
              <i class="fa-solid fa-times"></i>
            </button>
            <ul class="flex flex-col space-y-4 text-base sm:text-lg">
              <li class="hover:text-red-600 cursor-pointer">Solutions</li>

              <!-- Industries Dropdown in Mobile Menu -->
              <li class="relative group hover:text-red-600 cursor-pointer">
                Industries
                <ul class="hidden group-hover:block bg-white shadow-lg rounded-md mt-2">
                  <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Retail</li>
                  <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Quick Service Restaurant</li>
                  <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Transportation</li>
                  <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Education</li>
                  <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Banking and Finance</li>
                  <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Grocery</li>
                  <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Automotive</li>
                  <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Government</li>
                  <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Hotel & Casino</li>
                  <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Healthcare</li>
                </ul>
              </li>

              <li class="hover:text-red-600 cursor-pointer">Case Studies</li>

              <!-- Products Dropdown in Mobile Menu -->
              <li class="relative group hover:text-red-600 cursor-pointer">
                Products
                <ul class="hidden group-hover:block bg-white shadow-lg rounded-md mt-2">
                  <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Software</li>
                  <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Hardware</li>
                  <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">SaaS</li>
                </ul>
              </li>

              <!-- Professional Services Dropdown in Mobile Menu -->
              <li class="relative group hover:text-red-600 cursor-pointer">
                Professional Services
                <ul class="hidden group-hover:block bg-white shadow-lg rounded-md mt-2">
                  <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Technical Consulting</li>
                  <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Creative Service</li>
                </ul>
              </li>

              <!-- Resources Dropdown in Mobile Menu -->
              <li class="relative group hover:text-red-600 cursor-pointer">
                Resources
                <ul class="hidden group-hover:block bg-white shadow-lg rounded-md mt-2">
                  <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">News and Events</li>
                  <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Blogs</li>
                  <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Career</li>
                  <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">About Us</li>
                  <li class="px-4 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Partners</li>
                </ul>
              </li>

              <!-- Location in Mobile Menu -->
              <li class="flex items-center hover:text-red-600 cursor-pointer">
                <i class="fa-solid fa-location-dot text-red-600 mr-2"></i>
                <span class="text-base sm:text-lg">India</span>
              </li>

              <!-- Search in Mobile Menu -->
              <li class="flex items-center">
                <input
                  type="text"
                  class="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-200"
                  placeholder="Search..."
                />
              </li>

             
            </ul>
          </div>
        </div>
      </transition>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false,
      isSearchOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleSearchBar() {
      this.isSearchOpen = !this.isSearchOpen;
    },
    closeSearchBar() {
      this.isSearchOpen = false;
    },
  },
};
</script>

<style scoped>

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.slide-enter {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}


.relative:hover > ul {
  display: block;
}


ul > li > ul {
  z-index: 20;
}
@media( max-width: 430px){
#btn{
  width: auto;
  padding: 3px 6px;
}
}
</style>
