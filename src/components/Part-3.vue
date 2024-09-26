<template>
  <section class="text-gray-400 body-font">
    <div class="container px-5 py-24 mx-auto">
      <!-- <h1 class="text-4xl text-center font-semibold text-gray-600">Featured Industries</h1>
      <div class="w-56 h-2 rounded-full bg-red-600 mx-auto mt-8"></div> -->

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

      <div class="flex justify-center">
        <button class="mt-8 bg-red-600 text-white rounded-lg w-80 py-2 text-xl font-bold">View all industries</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.slider-container {
  display: flex;
  overflow-x: auto;
  gap: 16px; /* Adjust spacing between cards */
  scroll-snap-type: x mandatory; /* Enable snapping effect */
}

.slider-item {
  flex: 0 0 auto; /* Prevent flex item from growing */
  scroll-snap-align: center; /* Center align the cards */
  width: 100%; /* Set card width for mobile screens */
  transition: transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out; /* Add smooth transition */
}

.slider-item:hover {
  transform: scale(1.05); /* Scale effect on hover */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15); /* Shadow effect on hover */
}

@media (min-width: 768px) {
  .slider-item {
    width: 33.33%; /* 3 cards in a row for larger screens */
  }
}

@media (min-width: 412px) and (max-width: 767px) {
  .slider-item {
    width: 50%; /* 2 cards in a row for medium screens */
  }
}

@media (max-width: 412px) {
  .slider-item {
    width: 100%; /* 1 card in a row for mobile screens */
  }
}

/* Hide scrollbar for a cleaner look */
.slider-container::-webkit-scrollbar {
  display: none;
}
</style>
