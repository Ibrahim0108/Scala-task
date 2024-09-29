<template>
  <div class="main flex flex-col md:flex-row justify-between items-center gap-2 h-auto p-0 m-0 overflow-hidden max-w-screen-xl mx-auto">
    <!-- Left Section (Text) -->
    <section class="left section w-full md:w-1/2 p-4 text-center flex flex-col items-center z-20 mt-3">
      <h1 class="text-2xl md:text-3xl font-bold mb-4">
        TRANSFORM YOUR DIGITAL SIGNAGE EXPERIENCE
      </h1>
      <p class="text-lg md:text-xl mb-10">
        Captivate your audience with seamless content delivery and centralised, smart content management.
      </p>
      <div class="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-4 mb-4">
        <button class="w-max h-10 text-white px-4 py-2 rounded-full bg-red-600 hover:bg-red-500 mb-2 md:mb-0">Brochure</button>
        <button class="h-10 flex items-center space-x-2 border border-gray-500 px-4 py-1 w-max rounded-full">
          Overview
          <img class="h-6 mt-1 ml-2" src="https://apac.scala.com/au/wp-content/uploads/sites/11/2023/09/play-btn.png" alt="play button" />
        </button>
      </div>
    </section>

    <!-- Right Section (Video) -->
    <section class="right section video-container w-full md:w-1/2 flex justify-center items-center mt-4 md:mt-0">
      <video autoplay loop muted class="video">
        <source src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/videos/Home-banner-desktop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.main {
  display: flex;
  flex-direction: column; 
}


.video-container {
  position: relative;
  width: 100%;
  height: 50vh; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-container .video {
  display: block; 
  

  width: 100%; 
  height: 100%; 
  object-fit: cover; 
  position: absolute; 
  top: 0; 
  left: 0; 
}


@media (min-width: 768px) {
  .main {
    flex-direction: row; 
    height: 75vh;
  }

  .left {
    justify-content: center;
    align-items: center;
  }

  .video-container {
    height: 75vh; 
  }

  .video {
    position: absolute;
    right: 0;
  }
  
}


@media (max-width: 768px) {
  .main {
    flex-direction: column;
    height: auto;
  }

  .left {
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  .video-container {
    height: 35vh; 
  }

  .video {
    max-width: 85%;
    height : 60%;
    position: relative;
    padding-right: 60px;
    
  }
  img{
    display: none;
  }
}


</style>
