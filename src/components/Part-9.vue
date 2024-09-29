<template>
  <div class="flex flex-col items-center mb-16">
    <!-- Buttons -->
    <div class="flex flex-wrap justify-evenly space-x-4 space-y-2 mt-40 mb-8 w-full max-w-4xl">
      <button class="w-36 p-2 bg-red-600 text-white font-bold rounded-full">Blogs</button>
      <button class="w-36 p-2 bg-gray-200 font-bold rounded-full">Case Study</button>
      <button class="w-36 p-2 bg-gray-200 font-bold rounded-full">Events</button>
      <button class="w-36 p-2 bg-gray-200 font-bold rounded-full">News</button>
    </div>

    <!--horizontal cards -->
    <div class="grid grid-cols-1 mb-28 mt-14 md:grid-cols-2 gap-4 w-full max-w-4xl">
      <div class="max-w-md w-full p-2">
        <div class="flex bg-gray-100 rounded-lg overflow-hidden">
          <div class="w-32 flex-none">
            <img src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/Blogs/Impact-of-Digital-Signage-on-Omnichannel-Retail-Experiences-in-Singapore-image-2.webp" class="w-full h-full object-cover" title="Digital Signage Image">
          </div>
          <div class="p-4 flex flex-col justify-between w-full">
            <div class="mb-4">
              <div class="text-black font-semibold text-lg mb-2">How Digital Signage is Shaping Omnichannel Retail Experiences in India</div>
              <p class="text-grey-darker text-sm">by Jasdeep Kohli</p>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-lg w-full p-2">
        <div class="flex bg-gray-100 rounded-lg overflow-hidden">
          <div class="w-32 flex-none">
            <img src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/Blogs/The-Ultimate-Guide-to-Digital-Menu-Boards-Boosting-Restaurant-Efficiency-in-India-img-1.webp" class="w-full h-full object-cover" title="Digital Menu Boards Image">
          </div>
          <div class="p-4 flex flex-col justify-between w-full">
            <div class="mb-4">
              <div class="text-black font-semibold text-lg mb-2">The Ultimate Guide to Digital Menu Boards: Boosting Restaurant Efficiency in India</div>
              <p class="text-grey-darker text-sm">by Scala Team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {};
</script>

<style scoped>

</style>
