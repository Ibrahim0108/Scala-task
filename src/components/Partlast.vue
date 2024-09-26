<template>
  <footer class="bg-white dark:bg-gray-800">
    
    
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 md:py-8">
          <div class="md:flex md:justify-around">
              <div class="mb-6 md:mb-2">
                  <a href="" class="flex items-center mb-6 ">
                      <img
                          src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/HeaderFooterImages/Scala-footer-logo.webp"
                          alt="Logo"
                      />
                  </a>
                  <div class="text-white text-left md:flex justify-stretch ">
                      APAC Headquarters<br> Keck Seng Tower <br> 133 Cecil Street,<br> #04-02 <br> Singapore 069535 <br>  sales.apac@scala.com <br>  +65 6509 4235 <br> <br> India office <br> #58, HM Towers, 4th Floor,<br> A Wing, Brigade Road,<br> Bangalore-560001 <br>  sales.apac@scala.com <br>  +91 9035254299
                  </div>
              </div>
              <div class="flex flex-wrap align-start space-x-0 md:space-x-4">
                  <div class="flex-1 min-w-[160px] ">
                      <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Industries</h2>
                      <ul class="text-gray-500 dark:text-gray-400 font-medium">
                          <li><a href="#" class="hover:underline">Retail</a></li>
                          <li><a href="/" class="hover:underline">QSR</a></li>
                          <li><a href="/" class="hover:underline">Banking</a></li>
                          <li><a href="/" class="hover:underline">more</a></li>
                      </ul>
                  </div>
                  <div class="flex-1 min-w-[160px]">
                      <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Case Studies</h2>
                      <ul class="text-gray-500 dark:text-gray-400 font-medium">
                          <li><a href="#" class="hover:underline">Wendy's</a></li>
                          <li><a href="#" class="hover:underline">KIA</a></li>
                          <li><a href="#" class="hover:underline">Carrefour</a></li>
                          <li><a href="#" class="hover:underline">more</a></li>
                      </ul>
                  </div>
                  <div class="flex-1 min-w-[160px] ">
                      <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Solutions</h2>
                      <ul class="text-gray-500 dark:text-gray-400 font-medium">
                          <li><a href="#" class="hover:underline">Lift & Learn</a></li>
                          <li><a href="#" class="hover:underline">Place & Learn</a></li>
                          <li><a href="#" class="hover:underline">Wayfinding</a></li>
                          <li><a href="#" class="hover:underline">more</a></li>
                      </ul>
                  </div>
                  <div class="flex-1 min-w-[160px]">
                      <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                      <ul class="text-gray-500 dark:text-gray-400 font-medium">
                          <li><a href="#" class="hover:underline">Blogs</a></li>
                          <li><a href="#" class="hover:underline">Digital Signage FAQ</a></li>
                          <li><a href="#" class="hover:underline">Downloads</a></li>
                          <li><a href="#" class="hover:underline">Partners</a></li>
                          <li><a href="#" class="hover:underline">About Us</a></li>
                      </ul>
                  </div>
              </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
          <div class="sm:flex sm:items-center sm:justify-between">
              <div class="flex mt-4 sm:justify-center sm:mt-0"></div>
          </div>
          <div class="flex justify-center mb-6 text-gray-400">
              <i class="fa-solid fa-location-dot flex justify-center mt-4 fa-lg ml-6 mr-2 cursor-pointer" style="color: darkgray;"></i>
              <span class="text-2xl text-gray-400">India</span>
          </div>
          <h2 class="text-gray-200 font-semibold text-center text-xl mb-14">Copyright © 2024 Scala. All rights reserved. Privacy Policy | Cookies | Sitemap</h2>
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>


@media (max-width: 820px) {
footer {
  padding: 20px 0; /* Add padding for mobile */
}

.mx-auto {
  padding: 0 16px; /* Add side padding for mobile */
}

/* Center the image */
.flex-items-center.mb-4 img {
  margin-bottom: 10px;
}

img {
  margin-left: auto;
  margin-right: auto;
}

/* Center the logo and paragraph */
.text-white {
  text-align: center; /* Center the address text */
  margin-bottom: 20px; /* Space below the text */
}

/* Responsive Navigation & Footer Sections */
.md:flex {
  flex-direction: column; /* Stack items vertically on mobile */
}

.flex-wrap {
  display: grid; /* Use grid for responsive columns */
  grid-template-columns: repeat(2, 1fr); /* Two equal columns */
  gap: 20px; /* Add gap between columns */
  margin-top: 20px; /* Add margin above the columns */
}

.flex-1 {
  min-width: 100%; /* Ensure full width on mobile */
}

/* Responsive Copyright Section */
.text-gray-200 {
  margin-top: 20px; /* Add margin for separation */
}

/* Center Location & Copyright Text on Mobile */
.sm:flex {
  flex-direction: column;
  align-items: center;
}

/* Responsive Location Icon & Text */
.flex.justify-center.mb-6.text-gray-400 {
  flex-direction: column;
  align-items: center;
}

/* Center Copyright Text */
h2.text-gray-200.font-semibold.text-center.text-xl.mb-14 {
  text-align: center;
}
}

@media (max-width: 820px) {
/* Adjust Grid Columns for Tablets */
.flex-wrap {
  grid-template-columns: repeat(2, 1fr); /* Ensure two columns */
}
}
</style>
