<template>
  <section class="text-gray-400 body-font">
    <div class="container px-5 py-24 mx-auto">
      

      <div class="relative flex flex-wrap slider-container mt-20">
        <!-- Card 1 -->
        <div class="p-4 slider-item">
          <div class="rounded-lg h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Industry-Home-Page-Image/Industries-image-1-sg.jpg.webp">
          </div>
          <h2 class="text-xl font-medium title-font text-red-600 mt-5">Retail</h2>
          <p class="text-base leading-relaxed mt-2 text-gray-600">Drive customer engagement and sales and create an immersive in-store experience.</p>
          <a class="text-red-600 inline-flex items-center mt-3">Learn More >></a>
        </div>

        <!-- Card 2 -->
        <div class="p-4 slider-item">
          <div class="rounded-lg h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Industry-Home-Page-Image/QSR-solution-1.webp">
          </div>
          <h2 class="text-xl font-medium title-font text-red-600 mt-5">QSR</h2>
          <p class="text-base leading-relaxed mt-2 text-gray-600">Streamline ordering and boost sales with dynamic digital menu boards.</p>
          <a class="text-red-600 inline-flex items-center mt-3">Learn More >></a>
        </div>

        <!-- Card 3 -->
        <div class="p-4 slider-item">
          <div class="rounded-lg h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Industry-Home-Page-Image/transportation-solution-1.webp">
          </div>
          <h2 class="text-xl font-medium title-font text-red-600 mt-5">Transportation</h2>
          <p class="text-base leading-relaxed mt-2 text-gray-600">Create better passenger experiences with real-time updates and engaging content.</p>
          <a class="text-red-600 inline-flex items-center mt-3">Learn More >></a>
        </div>
      </div>

    </div>
    <div class="flex justify-center">
  <button class="mt-4 mb-14 bg-red-600 text-white rounded-lg py-2 text-xl w-80">
    View all industries
  </button>
</div>

  </section>
</template>

<script>
export default {};
</script>

<style scoped >
.slider-container {
  display: flex;
  overflow-x: auto;
  gap: 16px; 
  scroll-snap-type: x mandatory; 
}

.slider-item {
  flex: 0 0 auto; 
  scroll-snap-align: center; 
  width: 100%; 
  transition: transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out; 
}

.slider-item:hover {
  transform: scale(1.05); 
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15); 
}



@media (min-width: 768px) {
  .slider-item {
    width:  50%; 
  }
  
  
}

@media (min-width: 1080px) {
  .slider-item {
    width: 33.33%; 
  }
}

@media (max-width: 412px) {
  .slider-item {
    width: 100%; 
  }
  button{
    width: 50%;
  }
}


.slider-container::-webkit-scrollbar {
  display: none;
}
</style>
