<template>
  <div class="bg-gray-100 pt-20 pb-20 mb-20">
    <h1 class="text-4xl text-center font-semibold text-gray-600">Featured Solutions</h1>
    <div class="w-56 h-2 rounded-full bg-red-600 mx-auto mt-8"></div>

    <div class="relative flex flex-wrap justify-evenly gap-4 mt-20 slider-container">
  <!-- Card 1 -->
  <div class="relative mb-10 flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md slider-item">
    <div class="relative m-0 overflow-hidden rounded-t-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
      <img
        src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/videowall.webp"
        class="w-full h-full object-cover rounded-t-xl"/>
    </div>
    <div class="p-6">
      <h4 class="block font-sans text-2xl font-bold leading-snug tracking-normal text-red-600 antialiased">Video Walls</h4>
      <p class="mt-1 block font-sans text-lg font-normal leading-relaxed text-gray-700 antialiased">
        Deliver high impact visuals and create immersive brand experiences that attract customers.</p>
    </div>
    <div class="flex items-center justify-between p-6">
      <a class="text-red-600 inline-flex items-center">Learn More >></a> 
    </div>
  </div>

  <!-- Card 2 -->
  <div class="relative mb-10 flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md slider-item">
    <div class="relative m-0 overflow-hidden rounded-t-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
      <img
        src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/interactivekiosk.webp"
        class="w-full h-full object-cover rounded-t-xl"/>
    </div>
    <div class="p-6">
      <h4 class="block font-sans text-2xl font-bold leading-snug tracking-normal text-red-600 antialiased">Interactive Kiosks</h4>
      <p class="mt-1 block font-sans text-lg font-normal leading-relaxed text-gray-700 antialiased">
        Enhance customer engagement with touch-screen displays and responsive kiosks.</p>
    </div>
    <div class="flex items-center justify-between p-6">
      <a class="text-red-600 inline-flex items-center">Learn More >></a> 
    </div>
  </div>

  <!-- Card 3 -->
  <div class="relative mb-10 flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md slider-item">
    <div class="relative m-0 overflow-hidden rounded-t-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
      <img
        src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/FIDS.webp"
        class="w-full h-full object-cover rounded-t-xl"/>
    </div>
    <div class="p-6">
      <h4 class="block font-sans text-2xl font-bold leading-snug tracking-normal text-red-600 antialiased">Flight Info Display</h4>
      <p class="mt-1 block font-sans text-lg font-normal leading-relaxed text-gray-700 antialiased">
        Keep passengers informed with real-time flight information displayed seamlessly.</p>
    </div>
    <div class="flex items-center justify-between p-14">
      <a class="text-red-600 inline-flex items-center">Learn More >></a> 
    </div>
  </div>
</div>
  <div class="flex justify-center ">
    <button class= " mt-8 bg-red-600 text-white rounded-lg w-80 py-2 text-xl font-bold">View all solutions</button></div>



  </div>
</template>




<script>
export default {};
</script>


<style>
.slider-item {
  flex: 0 0 auto; 
  scroll-snap-align: center;
  width: 33.33%;
  transition: transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out;
}
.slider-item:hover {
  transform: scale(1.05); 
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15); 
}
.slider-container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 16px;
  scroll-snap-type: x mandatory;
}

.slider-item {
  flex: 0 0 auto; 
  scroll-snap-align: center;
  width: 100%; 
}

@media (min-width: 768px) {
  .slider-item {
    width: 33.33%; 
  }
}

@media (min-width: 412px) and (max-width: 767px) {
  .slider-item {
    width: 50%; 
  }
  
}

@media (max-width: 412px) {
  .slider-item {
    width: 100%; 
  }
}


.slider-container::-webkit-scrollbar {
  display: none;
}
</style>
