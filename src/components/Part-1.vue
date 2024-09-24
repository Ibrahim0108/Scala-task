<template>
  <div class="flex flex-col md:flex-row items-center justify-center gap-2 h-auto p-0 m-0 overflow-hidden max-w-screen-xl mx-auto">
    <div class="w-full p-4 text-center flex flex-col items-center z-20 mt-3">
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
    </div>

    <div class="video-container w-full flex justify-center items-center mt-4 md:mt-0">
      <video autoplay loop muted class="video">
        <source src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/videos/Home-banner-desktop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  height: 70vh; /* Default height for larger screens */
}

.video-container .video {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

@media (max-width: 768px) {
  .video-container {
    height: 50vh; /* Set desired height for mobile */
    display: flex;
    justify-content: center;
    align-items: center; 
  }

  .video {
    max-width: 90%; 
    height: auto; 
  }
}

@media (max-width: 1024px) {
  .video-container {
    height: 40vh; /* Set desired height for tablets */
    order: 1; /* Ensure video appears below text */
  }

  .video {
    max-width: 90%; 
  }
}
</style>
