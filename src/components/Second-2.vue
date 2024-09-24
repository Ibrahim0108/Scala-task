<template>
  <div class="max-w-7xl mb-20 mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
    <!-- Column 1 -->
    <div>
      <p class="font-bold text-2xl">Asia-Pacific (APAC)</p>
      <p class="text-lg">Singapore (Headquarters)</p>
      <p class="text-lg">Hours: 9:30 am to 6:00 pm Local Time</p>
      <p class="text-lg">+65 6229 4480 (International)<br>1800-812-3456 (Toll free, Singapore only)</p>
      <p class="text-lg">sales.apac@scala.com</p>
      <div class="button-container">
        <button>Contact Sales</button>
        
      </div>
      <p class="font-bold mt-16 text-2xl">China</p>
      <p class="text-lg">Hours: 9:30 am to 5:30 pm Local Time (Mon-Fri)</p>
      <p class="text-lg">400 628 2366</p>
      <p class="text-lg">sales.apac@scala.com</p>
    </div>

    <!-- Column 2 -->
    <div>
      <p class="font-bold text-2xl">India</p>
      <p class="text-lg">Hours: 9:30 am to 6:00 pm Local Time (Mon-Fri)</p>
      <p class="text-lg">+919035254299</p>
      <p class="text-lg">sales.apac@scala.com</p>
      <div class="button-container">
        <button>Contact Sales</button>
        
      </div>
      <p class="font-bold mt-24 text-2xl">Other Countries in Asia-Pacific</p>
      <p class="text-lg">Hours: 9:30 am to 6:00 pm Singapore Time (Mon-Fri)</p>
      <p class="text-lg">+65 6229 4480</p>
      <p class="text-lg">sales.apac@scala.com</p>
    </div>

    <!-- Column 3 -->
    <div>
      <p class="font-bold text-2xl">Japan</p>
      <p class="text-lg">Hours: 9:30 am to 6:00 pm Local Time (Mon-Fri)</p>
      <p class="text-lg">+81 364 179 645</p>
      <p class="text-lg">sales.apac@scala.com</p>
      <div class="button-container">
        <button>Contact Sales</button>
       
      </div>
    </div>
  </div>
</template>

<style>
@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .button-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  button {
    flex: 1;
    margin: 0.5rem; /* Space between buttons */
    font-size: 16px;
    padding: 0.5rem;
  }
}

@media (max-width: 412px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .button-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  button {
    flex: 1;
    margin: 0.5rem; /* Space between buttons */
    font-size: 14px;
    padding: 0.5rem;
  }

  .text-lg {
    font-size: 14px;
  }

  .text-2xl {
    font-size: 20px;
  }
}
</style>
