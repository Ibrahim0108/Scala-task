<template>
  <div class="bg-white py-2 sticky top-0 z-50 shadow-md mb-0">
    <nav class="container mx-auto flex items-center justify-between px-6 z-10">
      <div class="flex items-center">
        <div class="md:hidden mr-4">
          <button @click="toggleMenu" class="focus:outline-none">
            <i class="fa-solid fa-bars text-lg"></i>
          </button>
        </div>
        <router-link to="/" class="flex-shrink-0">
          <img
            class="h-10 md:h-12 lg:h-16"
            src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/HeaderFooterImages/Scala-Logo-sg-.webp"
            alt="scala-logo"
          />
        </router-link>
      </div>

      <ul class="hidden md:flex flex-wrap space-x-8 text-lg">
  <li class="hover:text-red-600 cursor-pointer">Solutions</li>
  
  <!-- Industries Dropdown -->
  <li class="relative group hover:text-red-600 cursor-pointer">
    Industries
    <ul class="absolute hidden group-hover:block bg-white shadow-lg mt-2 min-w-[300px]"> 
      <li class="px-8 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Retail</li> <!-- Added cursor-pointer for clickable dropdowns -->
      <li class="px-8 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Quick Service Restuarant</li>
      <li class="px-8 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Tranportation</li>
      <li class="px-8 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Education</li>
      <li class="px-8 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Banking and Finance</li>
      <li class="px-8 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Grocery</li>
      <li class="px-8 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Automative</li>
      <li class="px-8 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Government</li>
      <li class="px-8 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Hotel & Casino</li>
      <li class="px-8 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Healthcare</li>
    </ul>
  </li>

  <li class="hover:text-red-600 cursor-pointer">Case Studies</li>
  
  <!-- Products Dropdown -->
  <li class="relative group hover:text-red-600 cursor-pointer">
    Products
    <ul class="absolute hidden group-hover:block bg-white shadow-lg mt-2 min-w-[300px]"> <!-- Increased the width -->
      <li class="px-8 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Software</li>
      <li class="px-8 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Hardware</li>
      <li class="px-8 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">SaaS</li>
    </ul>
  </li>
  
  <!-- Professional Services Dropdown -->
  <li class="relative group hover:text-red-600 cursor-pointer">
    Professional Services
    <ul class="absolute hidden group-hover:block bg-white shadow-lg mt-2 min-w-[300px]"> <!-- Increased the width -->
      <li class="px-8 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Technical consulting</li>
      <li class="px-8 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer"> Creative Service</li>
    </ul>
  </li>

  <!-- Resources Dropdown -->
  <li class="relative group hover:text-red-600 cursor-pointer">
    Resources
    <ul class="absolute hidden group-hover:block bg-white shadow-lg mt-2 min-w-[300px]"> <!-- Increased the width -->
      <li class="px-8 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">News and Events</li>
      <li class="px-8 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Blogs</li>
      <li class="px-8 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Career</li>
      <li class="px-8 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">About us</li>
      <li class="px-8 py-2 hover:bg-gray-200 hover:text-red-600 cursor-pointer">Partners</li>
    </ul>
  </li>

  <li class="flex items-center relative">
    <i
      class="fa-sharp fa-solid fa-magnifying-glass fa-flip-horizontal mt-2 cursor-pointer"
      @click="toggleSearchBar"
    ></i>
    <input
      v-if="isSearchOpen"
      type="text"
      class="ml-2 p-1 border border-gray-300 rounded-md"
      placeholder="Search..."
      @blur="closeSearchBar"
    />
  </li>
</ul>


      <li class="flex items-center hover:text-red-600 cursor-pointer">
        <i class="fa-solid fa-location-dot fa-sm mr-1" style="color: #f2020e;"></i>
        <span class="text-lg">India</span>
      </li>

      <transition name="slide">
        <div v-if="isMenuOpen" class="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div class="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-4">
            <button @click="toggleMenu" class="text-red-600 text-lg mb-4">
              <i class="fa-solid fa-times"></i>
            </button>
            <ul class="flex flex-col space-y-4 text-lg">
              <li class="hover:text-red-600 cursor-pointer">Solutions</li>
              <li class="hover:text-red-600 cursor-pointer">Industries</li>
              <li class="hover:text-red-600 cursor-pointer">Case Studies</li>
              <li class="hover:text-red-600 cursor-pointer">Products</li>
              <li class="hover:text-red-600 cursor-pointer">Professional Services</li>
              <li class="hover:text-red-600 cursor-pointer">Resources</li>
              <li class="flex items-center hover:text-red-600 cursor-pointer">
                <i class="fa-solid fa-location-dot fa-sm mr-1" style="color: #f2020e;"></i>
                <span class="text-lg">India</span>
              </li>
              <li class="flex items-center relative">
                <input
                  type="text"
                  class="p-1 border border-gray-300 rounded-md w-full"
                  placeholder="Search..."
                />
              </li>
            </ul>
          </div>
        </div>
      </transition>

      <div class="flex items-center space-x-4 contact-container">
        <router-link to="/contact">
          <button class="bg-red-600 text-white text-sm md:text-lg font-bold px-4 py-2 rounded-lg hover:bg-red-500">
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
  transition: transform 0.3s ease;
}
.slide-enter {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}



@media (min-width:820px) {
  nav {
    justify-content: space-between;
  }

  .contact-container {
    position: absolute;
    right: 1rem;
  }

  img {
    height: 40px;
  }

  .contact-container button {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
}


/* Dropdown - Initially hide the dropdown menu */
li ul {
  display: none;
}

/* Show the dropdown menu when hovering over the parent li */
li:hover ul {
  display: block;
}
</style>
