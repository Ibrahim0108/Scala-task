<template>
  <div class="main-content">
    <!-- Main content goes here -->
    <router-link to="/contact">
    <div class="image-container">
      <img class="overlapping-image" src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/HeaderFooterImages/CMS-Lets-talk.webp" alt="Overlapping Image" />
    </div>
  </router-link>
  <footer>
      <div class=" w-full  max-w-screen-xl p-4 py-6 md:py-8" id="foots">
          <div class=" mr-20 flex justify-evenly md:flex  md:justify-between" id="foot">
              <div class=" pt-10 mb-6 ml-10 md:mb-2" id="address">
                  <a href="" class="flex items-center mb-6">
                      <img class="logo"
                          src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/HeaderFooterImages/Scala-footer-logo.webp"
                          alt="Logo"
                      />
                  </a>
                  <div class="text-white text-left md:flex justify-stretch " id="add">
                      APAC Headquarters<br> Keck Seng Tower <br> 133 Cecil Street,<br> #04-02 <br> Singapore 069535 <br>  sales.apac@scala.com <br>  +65 6509 4235 <br> <br> India office <br> #58, HM Towers, 4th Floor,<br> A Wing, Brigade Road,<br> Bangalore-560001 <br>  sales.apac@scala.com <br>  +91 9035254299
                  </div>
              </div>
              <div class="flex justify-around pt-10  space-x-0 md:space-x-4" id="colss">
                  <div class="flex-1 min-w-[160px]">
                      <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Industries</h2>
                      <ul class="text-gray-500 dark:text-gray-400 font-medium">
                          <li><a href="" class="hover:underline">Retail</a></li>
                          <li><a href="" class="hover:underline">QSR</a></li>
                          <li><a href="" class="hover:underline">Banking</a></li>
                          <li><a href="" class="hover:underline">more</a></li>
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
              <img class="h-56" id="hi" src="../assets/Scala-Footer-BG.jpg" alt="">
          </div>
          
          <div class="flex justify-center ml-40 mt-7 mb-6 text-gray-400" id="location">
              <i class="fa-solid fa-location-dot flex justify-center mt-4 fa-lg ml-6 mr-2 cursor-pointer" style="color: darkgray;"></i>
              <span class="text-2xl text-gray-400" id="india">India</span>
          </div>
          <h2 class="text-gray-200 font-semibold ml-56 text-center text-xl mb-14">Copyright © 2024 Scala. All rights reserved. Privacy Policy | Cookies | Sitemap</h2>
      </div>
      
  </footer>
  </div>
</template>

<script>
export default {

}
</script>


<style scoped>
.main-content {
  position: relative;
}
.image-container {
  position: relative;
  width: 100%;
  display: flex;
  height: auto;
  justify-content: center; /* Center the image */
  margin-bottom: -80px; /* Adjust this value based on how much overlap you want */
  z-index: 1; /* Ensure it appears above the main content but below the footer */
}
.overlapping-image {
  max-width: 100%;
  height: 150px;
  position: absolute;
  bottom: 0;
  right: 200px;
  z-index: 2; 
}
footer {
  background-color: #212529;
  position: relative;
}
#hi {
  position: absolute;
  top: 0;
  right: 0;
}
@media (max-width: 1430px){
#hi{
    display: none;
}
}
@media (max-width: 1024px) {
  .main-content {
    font-size: small;
  }

  #hi {
    display: none;
  }

  .overlapping-image {
    height: 90px;
    position: absolute;
    right: 10px;
  }

  #foot {
    flex-direction: column;
  }

  
  #address {
    padding-left: 0;
    text-align: center; 
    margin: 0 auto; 
    display: flex;
    flex-direction: column;
    align-items: center; 
  }

  #address img {
    height: 40px;
    margin-bottom: 10px; 
  }

  #address {
    font-size: 16px;
    line-height: 1.8;
  }

  
  #add br:nth-of-type(2), 
  #add br:nth-of-type(3), 
  #add br:nth-of-type(4),
 
  #add br:nth-of-type(10),
  #add br:nth-of-type(11) { 
    display: none;
  }

  
  #add {
    text-align: center; 
    padding: 0 20px; 
  }
  #colss {
    margin-top: 30px;
    display: flex;
    flex-direction: row; 
    justify-content: space-between; 
    flex-wrap: nowrap; 
  }

  #colss > div {
    flex: 1; 
    min-width: 160px; 
    text-align: center; 
  }
  #location {
    display: flex; 
    justify-content: center; 
    align-items: center;
    margin-left: 0; 
    margin-top: 30px; 
    margin-bottom: 20px; 
  }

  #location i {
    margin-left: 0; 
    margin-right: 10px;
    margin-bottom: 8px; 
    font-size: 1.5rem; 
  }

  #location span {
    font-size: 1.5rem; 
  }

  h2 {
    margin-left: 0; 
    margin-right: 0; 
    text-align: center; 
    margin-top: 10px; 
  }
}
@media (max-width: 640px) {
  .main-content {
    font-size: x-small; 
  }

  #hi {
    display: none;
  }

  .overlapping-image {
    height: 70px; 
    position: absolute;
    right: 5px;
    bottom: 30px; 
  }

  #foot {
    flex-direction: column; 
  }

  
  #address {
    padding-left: 0;
    text-align: center; 
    margin: 0 auto; 
    display: flex;
    flex-direction: column;
    align-items: center; 
  }

  #address img {
    height: 30px; 
    margin-bottom: 8px; 
  }

  #address {
    font-size: 14px; 
    line-height: 1.5; 
  }

 
  #add br:nth-of-type(2), 
  #add br:nth-of-type(3), 
  #add br:nth-of-type(4),
  #add br:nth-of-type(10),
  #add br:nth-of-type(11) { 
    display: none;
  }

  
  #add {
    text-align: center; 
    padding: 0 10px;
  }
  
  #colss {
    margin-top: 20px;
    display: flex;
    flex-direction: row; 
    justify-content: space-between; 
    flex-wrap: nowrap; 
  }

  #colss > div {
    flex: 1; 
    min-width: 90px; 
    text-align: center;
  }

  #location {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    margin-left: 0; 
    margin-top: 5px;
    margin-bottom: 5px; 
  }

  #location i {
    margin-left: 0; 
    margin-right: 3px; 
    font-size: 1.2rem; 
  }

  #location span {
    font-size: 1.2rem; 
  }
  h2 {
    margin-left: 0; 
    margin-right: 0; 
    text-align: center;
    margin-top: 8px;
    font-size: 12px; 
  }
}

</style>
