<template>
  <div class="mt-20 flex flex-col items-center mb-52">
  <div class="flex justify-evenly w-full">
    <div class="image">
      <img class="h-36" src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/card-img-1.jpg.webp" alt="">
      <span>Content Manager</span>
    </div>
    <div class="image">
      <img class="h-36" src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/card-img-2.jpg.webp" alt="">
      <span>Designer</span>
    </div>
    <div class="image">
      <img class="h-36" src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/Card-img-3-1.jpg.webp" alt="">
      <span>Media Players</span>
    </div>
    <div class="image">
      <img class="h-36" src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/card-img-4.jpg.webp" alt="">
      <span>All-in-one Tablets</span>
    </div>
    <div class="image">
      <img class="h-36" src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/card-img-5.jpg.webp" alt="">
      <span>Shelf Edge Displays</span>
    </div>
    <div class="image">
      <img class="h-36" src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/card-img-6.jpg.webp" alt="">
      <span>SaaS</span>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.image {
  display: flex;
  flex-direction: column;
  align-items: center;
}

span{
  color : #495057;
  font-size: 20px;
  font-weight: 500;
}
@media (max-width: 768px) {
  .flex {
    flex-wrap: wrap; 
  }

  .image {
    flex: 0 0 30%; 
    margin-bottom: 20px; 
  }

  .image img {
    height: 90px; 
    width: auto; 
  }

  span {
    font-size: 18px; 
  }
}
@media (max-width: 412px) {
  span {
    font-size: 14px; 
  }
}

</style>