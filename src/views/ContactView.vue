<template>
  <div class="flex flex-col md:flex-row h-auto mb-28 items-center justify-between px-8">
    <div class="w-full md:w-1/2 flex flex-col items-center justify-center mb-6 md:mb-0">
      <h1 class="text-4xl font-bold mb-4">Contact</h1>
      <p class="text-lg text-center">Global Sales and Support</p>
    </div>

    <div class="w-full md:w-1/2 half-faded-image">
      <img src="../assets/Contact.jpg" alt="Half Faded Image" class="w-full h-auto object-cover">
    </div>
  </div>
  
  <Part8 :title="title" />

  <h1 class="text-4xl mt-28 text-center font-semibold text-gray-600">Global Offices</h1>
  <div class="w-40 mb-14 h-2 rounded-full bg-red-600 mx-auto mt-8"></div>
  
  <Second/>

  <h1 class="text-4xl mt-28 text-center font-semibold text-gray-600">Customer Support</h1>
  <div class="w-40 mb-14 h-2 rounded-full bg-red-600 mx-auto mt-8"></div>
  
  <Second2/>
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
  background: linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 60%); /* Adjust gradient for desired blend effect */
  pointer-events: none;
}

@media (min-width: 768px) {
  .half-faded-image {
    width: 60%; /* Keep the original width for larger screens */
  }
}

@media (max-width: 412px) {
  h1 {
    font-size: 2xl; /* Adjust font size for smaller screens */
  }
  
  p {
    font-size: 14px; /* Adjust paragraph font size for smaller screens */
  }
}
</style>
