<script >
import Part1 from '@/components/Part-1.vue';
import Part2 from '@/components/Part-2.vue';
import Part3 from '@/components/Part-3.vue';
import Part4 from '@/components/Part-4.vue';
import Part5 from '@/components/Part-5.vue';
import Part6 from '@/components/Part-6.vue';
import Part7 from '@/components/Part-7.vue';
import Part8 from '@/components/Part-8.vue';
import Part9 from '@/components/Part-9.vue';


export default {
  components: { Part1,Part2,Part3,Part4,Part5,Part6,Part7,Part8,Part9, },
 
};



</script>

<template>
  <Part1 />
  <Part2 />

  <h1 class="text-4xl text-center font-semibold text-gray-600">Solutions For Every Industry</h1>
  <div class="w-64 h-2 rounded-full bg-red-600 mx-auto mt-8"></div>

  <Part3 />
 <Part4/>
 <Part5/>


<h1 class="text-4xl text-center font-semibold text-gray-600">Why work with scala?</h1>
  <div class="w-64 h-2 rounded-full bg-red-600 mx-auto mt-8"></div>

<Part6/>

<Part7/>
<h1 class="text-4xl text-center font-semibold text-gray-600">Get In Touch</h1>
<div class="w-56 mb-14 h-2 rounded-full bg-red-600 mx-auto mt-8"></div>
<Part8/>


<Part9/>

  <Partlast />
</template>
