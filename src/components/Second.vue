<template>
  <div>
    <!-- Buttons Row -->
    <div class="flex justify-evenly space-x-4 mt-10">
      <button
        class="w-56 p-2 font-bold rounded-full"
        :class="activeButton === 'APAC' ? 'bg-red-600 text-white' : 'bg-gray-200 text-black'"
        @click="setActive('APAC')"
      >Asia-Pacific (APAC)</button>

      <button
        class="w-56 p-2 font-bold rounded-full"
        :class="activeButton === 'America' ? 'bg-red-600 text-white' : 'bg-gray-200 text-black'"
        @click="setActive('America')"
      >America</button>

      <button
        class="w-56 p-2 font-bold rounded-full"
        :class="activeButton === 'Europe' ? 'bg-red-600 text-white' : 'bg-gray-200 text-black'"
        @click="setActive('Europe')"
      >Europe</button>
    </div>

    <!-- Content Grid -->
    <div class="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      <!-- Column 1 -->
      <div v-if="activeButton === 'APAC' || activeButton === 'America' || activeButton === 'Europe'">

        <p v-if="activeButton === 'APAC'" class="font-bold text-2xl sm:text-xl md:text-lg">SCALA Asia-Pacific (Headquarters)</p>
        <p v-if="activeButton === 'APAC'" class=" text-2xl sm:text-xl md:text-lg">Keck Seng Tower<br>133 Cecil Street,<br>#04-02<br>Singapore 069535<br>P：+65 6509 4235</p>
        
        <p v-if="activeButton === 'America'" class="font-bold text-2xl sm:text-xl md:text-lg">Scala Corporate Headquarters</p>
        <p v-if="activeButton === 'America'" class="text-2xl sm:text-xl md:text-lg">7 Great Valley Parkway<br>Suite 300<br>Malvern, PA 19355<br>P: +16103633350<br>P: +18887225296<br>F: +16103634010</p>
        <p v-if="activeButton === 'Europe'" class="font-bold text-2xl sm:text-xl md:text-lg">Scala EMEA Headquarters</p>
        <p v-if="activeButton === 'Europe'" class="text-2xl sm:text-xl md:text-lg">Wolf en Hertzdahlstraat 22<br>6131 MV Sittard, The Netherlands<br>P: +31850762020<br>F: +31468080152<br>Log into the Support Portal</p>
        
        <p v-if="activeButton === 'APAC'" class="font-bold mt-6 text-2xl sm:text-xl md:text-lg">SCALA Japan</p>
        <p v-if="activeButton === 'APAC'" class="text-2xl sm:text-xl md:text-lg">2-14-2 Nagata-cho<br>501 5/F Sanno Grand Building<br>Chiyoda-ku, Tokyo<br>P：03 6417 9645</p>

        <p v-if="activeButton === 'APAC'" class="font-bold mt-6 text-2xl sm:text-xl md:text-lg">STRATACACHE Australia</p>
        <p v-if="activeButton === 'APAC'" class="text-2xl sm:text-xl md:text-lg">Level 9, Nishi Building,<br>2 Phillip Law Street,<br>Canberra ACT, 2601<br>P: +61 2 5112 2333</p>
      </div>

      <!-- Column 2 -->
      <div v-if="activeButton === 'APAC' || activeButton === 'America' || activeButton === 'Europe'">
        <p v-if="activeButton === 'APAC'" class="font-bold text-2xl sm:text-xl md:text-lg">SCALA China (Shanghai)</p>
        <p v-if="activeButton === 'APAC'" class="text-2xl sm:text-xl md:text-lg">Suite 11H, Pujiang International-<br>Financial Plaza,<br>#1098 Dong Da Ming Road, North Bund,<br>Hong Kou District, Shanghai,<br>China 200080</p>
         
        <p v-if="activeButton === 'APAC'" class="font-bold mt-6 text-2xl sm:text-xl md:text-lg">STRATACACHE India</p>
        <p v-if="activeButton === 'APAC'" class="text-2xl sm:text-xl md:text-lg">(Corporate Office & R&D Centre)<br>#58, HM Towers, 4th Floor,<br>A Wing, Brigade Road,<br>Bangalore-560001</p>

        <p v-if="activeButton === 'America'" class="font-bold text-2xl sm:text-xl md:text-lg">Scala West Coast Office</p>
        <p v-if="activeButton === 'America'" class="text-2xl sm:text-xl md:text-lg">5850 Canoga Ave<br>4th Floor<br>Woodland Hills, CA 91367<br>P: +18887225296<br>F: +16103634010</p>

        <p v-if="activeButton === 'Europe'" class="font-bold mt-6 text-2xl sm:text-xl md:text-lg">Scala France</p>
        <p v-if="activeButton === 'Europe'" class="text-2xl sm:text-xl md:text-lg">3 Rue du Colonel Moll<br>75017 Paris, France<br>P: +31850762020</p>
      </div>

      <!-- Column 3 -->
      <div v-if="activeButton === 'APAC' || activeButton === 'America' || activeButton === 'Europe'">
        <p v-if="activeButton === 'APAC'" class="font-bold text-2xl sm:text-xl md:text-lg">Scala China (Beijing)</p>
        <p v-if="activeButton === 'APAC'" class="text-2xl sm:text-xl md:text-lg">Suite 2007, Block B, Tower 1, Wangjing<br>SOHO,<br>#1 Futong East Street,<br>Chaoyang District, Beijing,<br>China 100120 P: 400 628 1366</p>

        <p v-if="activeButton === 'APAC'" class="font-bold mt-6 text-2xl sm:text-xl md:text-lg">SCALA China Technology Ningbo Co. Ltd.</p>
        <p v-if="activeButton === 'APAC'" class="text-2xl sm:text-xl md:text-lg">7 Hong Da Road,<br>Hong Tang Industrial Zone A,<br>Jiang Bei District, Ningbo,<br>Zhejiang Province, China</p>
      </div>
    </div>
  </div>
    <!-- customer support  -->
    <h1 class="text-4xl mt-28 text-center font-semibold text-gray-600">Customer Support</h1>
    <div class="w-40 mb-14 h-2 rounded-full bg-red-600 mx-auto mt-8"></div>
 
  <div class="max-w-7xl mb-40 mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
    <!-- Column 1 -->
    <div v-if="activeButton === 'APAC' || activeButton === 'America' || activeButton === 'Europe'">

      <p v-if="activeButton === 'APAC'" class="font-bold text-2xl sm:text-xl md:text-lg">Asia-Pacific (APAC)</p>
      <p v-if="activeButton === 'APAC'" class="text-2xl sm:text-xl md:text-lg">Singapore (Headquarters)<br>Hours: 9:30 am to 6:00 pm Local Time<br>+65 6229 4480 (International)<br>1800-812-3456 (Toll free, Singapore only)<br>sales.apac@scala.com</p>
     
      <p v-if="activeButton === 'APAC'" class="font-bold mt-14 text-2xl sm:text-xl md:text-lg">China</p>
      <p v-if="activeButton === 'APAC'" class="text-2xl sm:text-xl md:text-lg">Hours: 9:30 am to 5:30 pm Local Time<br> (Mon-Fri)<br>400 628 2366<br>sales.apac@scala.com</p>

      <p v-if="activeButton === 'America'" class="font-bold text-2xl sm:text-xl md:text-lg">Americas</p>
        <p v-if="activeButton === 'America'" class="text-2xl sm:text-xl md:text-lg">Hours: 9:00 am to 8:00 pm Eastern Time<br>+1 888-444-5867<br>+1 610-363-3350<br>helpdesk.us@scala.com</p>

        <p v-if="activeButton === 'Europe'" class="font-bold text-2xl sm:text-xl md:text-lg">Norway, Sweden, Denmark & Iceland</p>
        <p v-if="activeButton === 'Europe'" class="text-2xl sm:text-xl md:text-lg">Hours: 9:00 am to 5:00 pm Central European Time<br>+31 46 80 80 151<br>Log into the Support Portal</p>
    </div>

    <!-- Column 2 -->
    <div v-if="activeButton === 'APAC' || activeButton === 'America' || activeButton === 'Europe'">

      <p v-if="activeButton === 'APAC'"  class="font-bold text-2xl sm:text-xl md:text-lg">India</p>
      <p v-if="activeButton === 'APAC'"  class="text-2xl sm:text-xl md:text-lg">Hours: 9:30 am to 6:00 pm Local Time<br> (Mon-Fri)<br>+919035254299<br>sales.apac@scala.com</p>
      
      <p v-if="activeButton === 'APAC'"  class="font-bold mt-20 text-2xl sm:text-xl md:text-lg">Other Countries in Asia-Pacific</p>
      <p v-if="activeButton === 'APAC'"  class="text-2xl sm:text-xl md:text-lg">Hours: 9:30 am to 6:00 pm Singapore Time <br> (Mon-Fri)<br>+65 6229 4480<br>sales.apac@scala.com</p>
    </div>

    <!-- Column 3 -->
    <div v-if="activeButton === 'APAC' || activeButton === 'America' || activeButton === 'Europe'">
      <p v-if="activeButton === 'APAC'"  class="font-bold text-2xl sm:text-xl md:text-lg">Japan</p>
      <p v-if="activeButton === 'APAC'"  class="text-2xl sm:text-xl md:text-lg">Hours: 9:30 am to 6:00 pm Local Time <br>(Mon-Fri)<br>+81 364 179 645<br>sales.apac@scala.com</p>
      
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

@media (min-width: 768px) {
  .max-w-7xl.mx-auto.px-8 {
    grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  }
}


@media (max-width: 767px) {
  .max-w-7xl.mx-auto.px-8 {
    grid-template-columns: repeat(2, 1fr); 
  }
  .text-lg {
    font-size: 16px; 
  }
  .text-2xl {
    font-size: 24px; 
  }
}


@media (max-width: 660px) {
  .max-w-7xl.mx-auto.px-8 {
    grid-template-columns: 1fr; 
  }
  .text-lg {
    font-size: 14px; 
  }
  .text-2xl {
    font-size: 20px; 
  }
}
</style>
