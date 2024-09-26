<template>
  <div class="mt-20 flex flex-col items-center mb-44">
    <div class="flex justify-evenly w-full">
      <div class="image">
        <img class="h-24" src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/Digital-Signs-sg.jpg.webp" alt="">
        <span class="num">3.1 M</span>
        <span>Digital Signs</span>
      </div>
      <div class="image">
        <img class="h-24" src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/Employees-Worldwide-sg.jpg.webp" alt="">
        <span class="num">1000+</span>
        <span>Employees Worldwide</span>
      </div>
      <div class="image">
        <img class="h-24" src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/Countries-Represented-sg.webp" alt="">
        <span class="num">100+</span>
        <span>Countries Represented</span>
      </div>
      <div class="image">
        <img class="h-24" src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/Offices-sg.jpg.webp" alt="">
        <span class="num">28</span>
        <span>Offices</span>
      </div>
      <div class="image">
        <img class="h-24" src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/Languages-sg.jpg.webp" alt="">
        <span class="num">23</span>
        <span>Languages</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.image {
  display: flex;
  flex-direction: column;
  align-items: center;
}

span {
  color: #495057;
  font-size: 18px;
  font-weight: 500;
}

.num {
  font-size: 55px;
  font-weight: bold;
  color: #a5a7a9;
}

@media (max-width: 768px) {
  .flex {
    flex-wrap: wrap; 
    justify-content: space-between; 
  }

  .image {
    width: calc(50% - 1rem); 
    margin-bottom: 1rem; 
  }

  img {
    height: 18px; /* Decrease image size */
  }

  span {
    font-size: 14px; /* Decrease text size */
  }

  .num {
    font-size: 40px; /* Decrease number size */
  }
}

@media (max-width: 412px) {
  .flex {
    flex-wrap: wrap; 
    justify-content: space-between; 
  }

  .image {
    width: calc(50% - 1rem); 
    margin-bottom: 1rem; 
  }

  img {
    height: 16px; /* Further decrease image size */
  }

  span {
    font-size: 12px; /* Further decrease text size */
  }

  .num {
    font-size: 30px; /* Further decrease number size */
  }
}
</style>
