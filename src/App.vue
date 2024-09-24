<template>

  <Navbar />
  <RouterView/>
  <!-- 768 412 breakpoints-->
 <Partlast/>
</template>



<script>
import Navbar from "../src/components/Navbar.vue";
import Part1 from "./components/Part-1.vue";
import Part2 from "./components/Part-2.vue";
import Part3 from "./components/Part-3.vue";
import Part4 from "./components/Part-4.vue";
import Part5 from "./components/Part-5.vue";
import Part6 from "./components/Part-6.vue";
import Part7 from "./components/Part-7.vue";
import Part8 from "./components/Part-8.vue";
import Part9 from "./components/Part-9.vue";
import Partlast from "./components/Partlast.vue";
export default {
  
  components: { Navbar, Part1, Part2, Part3,Part4,Part5,Part6,Part7,Part8, Part9,Partlast },
 
};

</script>



<style>

</style>
