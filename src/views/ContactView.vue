<template>
  <div class="flex flex-col md:flex-row h-auto mb-28 items-center justify-between px-8">
    <!-- Contact Heading and Description Section -->
    <div class="w-full md:w-1/2 flex flex-col items-center justify-center mb-6 md:mb-0 order-2 md:order-1">
      <h1 class="text-4xl font-bold mb-4">Contact</h1>
      <p class="text-lg text-center">Global Sales and Support</p>
    </div>

    <!-- Half Faded Image Section -->
    <div class="w-full md:w-1/2 half-faded-image order-1 md:order-2">
      <img src="../assets/Contact.jpg" alt="Half Faded Image" class="w-full h-auto object-cover">
    </div>
  </div>
  
  <Part8 :title="title" />

  <h1 class="text-4xl mt-28 text-center font-semibold text-gray-600">Global Offices</h1>
  <div class="w-40 mb-14 h-2 rounded-full bg-red-600 mx-auto mt-8"></div>
  
  <Second/>


</template>

<script>
import Part8 from '@/components/Part-8.vue';
import Second2 from '@/components/Second-2.vue';
import Second from '@/components/Second.vue';

export default {
  data() {
    return {
      title: "For Scala Support requests, please refer to the support contact information below for your region. For all other inquiries, submit the form below."
    }
  },
  name: 'Contact',
  components: { Part8, Second, Second2 }
}
</script>

<style scoped>
.half-faded-image {
  position: relative;
  width: 100%; /* Change width to 100% for mobile */
  height: 100%;
}

.half-faded-image::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0; 
  width: 100%; 
  height: 100%;
  background: linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 60%);
  pointer-events: none;
}

/* Media Query for Adjusting Layout */
@media (max-width: 768px) {
  .flex.flex-col.md\:flex-row.h-auto.mb-28.items-center.justify-between.px-8 {
    flex-direction: column; /* Stack items vertically */
  }

  /* Adjust the order for smaller screens */
  .half-faded-image {
    order: 1; /* Make half-faded image come first */
  }

  .flex.flex-col.items-center.justify-center.mb-6.md\:mb-0 {
    order: 2; /* Make contact heading and description come next */
  }

  /* Ensure the image is full width */
  .half-faded-image img {
    width: 100%; /* Make image full width */
    height: auto; /* Maintain aspect ratio */
    margin-bottom: 20px; /* Add margin to separate it from the next section */
  }
}

</style>
