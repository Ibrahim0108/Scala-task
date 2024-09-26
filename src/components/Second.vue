<template>
  <div class="flex justify-evenly space-x-4 mt-10">
    <button
      class="w-56 p-2 font-bold rounded-full"
      :class="activeButton === 'APAC' ? 'bg-red-600 text-white' : 'bg-gray-200 text-black'"
      @click="setActive('APAC')">Asia-Pacific (APAC)</button>

    <button
      class="w-56 p-2 font-bold rounded-full"
      :class="activeButton === 'America' ? 'bg-red-600 text-white' : 'bg-gray-200 text-black'"
      @click="setActive('America')">America</button>
    
    <button
      class="w-56 p-2 font-bold rounded-full"
      :class="activeButton === 'Europe' ? 'bg-red-600 text-white' : 'bg-gray-200 text-black'"
      @click="setActive('Europe')"> Europe</button>
  </div>

  <div class="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
    <!-- Column 1 -->
    <div>
      <p class="font-bold text-2xl sm:text-xl md:text-lg">SCALA Asia-Pacific (Headquarters)</p>
      <p class="text-lg sm:text-base md:text-sm">Keck Seng Tower<br>133 Cecil Street,<br>#04-02<br>Singapore 069535<br>P：+65 6509 4235</p>

      <p class="font-bold mt-6 text-2xl sm:text-xl md:text-lg">SCALA Japan</p>
      <p class="text-lg sm:text-base md:text-sm">2-14-2 Nagata-cho<br>501 5/F Sanno Grand Building<br>Chiyoda-ku, Tokyo<br>P：03 6417 9645</p>

      <p class="font-bold mt-6 text-2xl sm:text-xl md:text-lg">STRATACACHE Australia</p>
      <p class="text-lg sm:text-base md:text-sm">Level 9, Nishi Building,<br>2 Phillip Law Street,<br>Canberra ACT, 2601<br>P: +61 2 5112 2333</p>
    </div>

    <!-- Column 2 -->
    <div>
      <p class="font-bold text-2xl sm:text-xl md:text-lg">SCALA China (Shanghai)</p>
      <p class="text-lg sm:text-base md:text-sm">Suite 11H, Pujiang International-<br>Financial Plaza,<br>#1098 Dong Da Ming Road, North Bund,<br>Hong Kou District, Shanghai,<br>China 200080</p>

      <p class="font-bold mt-6 text-2xl sm:text-xl md:text-lg">STRATACACHE India</p>
      <p class="text-lg sm:text-base md:text-sm">(Corporate Office & R&D Centre)<br>#58, HM Towers, 4th Floor,<br>A Wing, Brigade Road,<br>Bangalore-560001</p>
    </div>

    <!-- Column 3 -->
    <div>
      <p class="font-bold text-2xl sm:text-xl md:text-lg">Scala China (Beijing)</p>
      <p class="text-lg sm:text-base md:text-sm">Suite 2007, Block B, Tower 1, Wangjing<br>SOHO,<br>#1 Futong East Street,<br>Chaoyang District, Beijing,<br>China 100120 P: 400 628 1366</p>

      <p class="font-bold mt-6 text-2xl sm:text-xl md:text-lg">SCALA China Technology Ningbo Co. Ltd.</p>
      <p class="text-lg sm:text-base md:text-sm">7 Hong Da Road,<br>Hong Tang Industrial Zone A,<br>Jiang Bei District, Ningbo,<br>Zhejiang Province, China</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeButton: 'APAC',
    };
  },
  methods: {
    setActive(button) {
      this.activeButton = button;
    },
  },
};
</script>

<style scoped>
/* No additional custom styles needed */
</style>
