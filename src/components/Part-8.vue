<template>

  <form class="bg-gray-100 rounded-2xl p-20 max-w-5xl mx-auto">
    <h2 class="font-bold mb-10 text-2xl">{{title}}</h2>
  <div class="flex flex-wrap gap-4"> 
   
    <input type="text" placeholder="First Name*" class="w-full p-2 border border-gray-300 focus:outline-none lg:w-[48%] mb-4">
    <input type="text" placeholder="Last Name*" class="w-full p-2 border border-gray-300 focus:outline-none lg:w-[48%] mb-4">
    <input type="text" placeholder="Company*" class="w-full p-2 border border-gray-300 focus:outline-none lg:w-[48%] mb-4">
    <input type="text" placeholder="Email*" class="w-full p-2 border border-gray-300 focus:outline-none lg:w-[48%] mb-4">
    
    <!-- Select fields -->
    <select class="w-full p-2 border border-gray-300 focus:outline-none lg:w-[48%] mb-4">
      <option value="" disabled selected>Select Industry*</option>
      <option value="Automotive">Automotive</option>
    <option value="Construction">Construction</option>
    <option value="Consumer Goods">Consumer Goods</option>
    <option value="Education">Education</option>
    <option value="Finance and Banking">Finance and Banking</option>
    <option value="Healthcare">Healthcare</option>
    <option value="Hospitality and Tourism">Hospitality and Tourism</option>
    <option value="Information Technology">Information Technology</option>
    <option value="Manufacturing">Manufacturing</option>
    <option value="Media and Entertainment">Media and Entertainment</option>
    <option value="Pharmaceuticals">Pharmaceuticals</option>
    <option value="Real Estate">Real Estate</option>
    <option value="Retail">Retail</option>
    <option value="Telecommunications">Telecommunications</option>
    <option value="Transportation and Logistics">Transportation and Logistics</option>
    </select>
    
    <input type="text" placeholder="Phone*" class="w-full p-2 border border-gray-300 focus:outline-none lg:w-[48%] mb-4">
    
    <!-- Select field for Country -->
    <select class="w-full p-2 border border-gray-300 focus:outline-none lg:w-[48%] mb-4">
      <option value="" disabled selected>Select Country*</option>
      <option value="Afghanistan">Afghanistan</option>
         <option value="Albania">Albania</option>
         <option value="Algeria">Algeria</option>
         <option value="Andorra">Andorra</option>
         <option value="Angola">Angola</option>
         <option value="Antigua and Barbuda">Antigua and Barbuda</option>
         <option value="Argentina">Argentina</option>
         <option value="Armenia">Armenia</option>
         <option value="Australia">Australia</option>
         <option value="Austria">Austria</option>
         <option value="Bahamas">Bahamas</option>
         <option value="Bangladesh">Bangladesh</option>
         <option value="Belgium">Belgium</option>
         <option value="Brazil">Brazil</option>
         <option value="Canada">Canada</option>
         <option value="Chile">Chile</option>
         <option value="China">China</option>
         <option value="Colombia">Colombia</option>
         <option value="Costa Rica">Costa Rica</option>
         <option value="Cuba">Cuba</option>
         <option value="Denmark">Denmark</option>
         <option value="Egypt">Egypt</option>
         <option value="Finland">Finland</option>
         <option value="France">France</option>
         <option value="Germany">Germany</option>
         <option value="Greece">Greece</option>
         <option value="India">India</option>
         <option value="Indonesia">Indonesia</option>
         <option value="Italy">Italy</option>
         <option value="Japan">Japan</option>
         <option value="Kenya">Kenya</option>
         <option value="Mexico">Mexico</option>
         <option value="Netherlands">Netherlands</option>
         <option value="Nigeria">Nigeria</option>
         <option value="Norway">Norway</option>
         <option value="Pakistan">Pakistan</option>
         <option value="Peru">Peru</option>
         <option value="Philippines">Philippines</option>
         <option value="Portugal">Portugal</option>
         <option value="Russia">Russia</option>
         <option value="Saudi Arabia">Saudi Arabia</option>
         <option value="South Africa">South Africa</option>
         <option value="Spain">Spain</option>
         <option value="Sweden">Sweden</option>
         <option value="Switzerland">Switzerland</option>
         <option value="Turkey">Turkey</option>
         <option value="United Kingdom">United Kingdom</option>
         <option value="United States">United States</option>
         <option value="Vietnam">Vietnam</option>
    </select>
    
    <!-- Textarea -->
    <textarea placeholder="Message" rows="7" class="w-full p-3 rounded-lg border border-gray-300 focus:outline-none  lg:w-full mb-4"></textarea>


    <!-- Checkboxes -->
    <div class="flex items-center gap-4 mb-4">
      <input type="checkbox" id="checkbox1" class="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500">
      <label for="checkbox1" class="text-sm">I confirm, I have read and agree to Scala’s privacy policy and consent to sharing my information.</label>
      
      <input type="checkbox" id="checkbox2" class="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500">
      <label for="checkbox2" class="text-sm">I would like to receive alerts and updates from Scala.</label>
    </div>
  </div>

  <div class="flex justify-center items-center mt-10 mb-4">
    <button type="submit" class="w-40 font-bold text-base p-3 bg-red-600 text-white rounded-full hover:bg-red-700">Submit</button>
  </div>
</form>




</template>

<script>


export default {
props :['title']
}
</script>

<style>
input::placeholder,
textarea::placeholder,
select,label {
  font-weight: bold; 
  color: black; 
}
@media (max-width: 768px) {
  .half-width {
    width: 48%;
  }

  .full-width {
    width: 100%;
  }
}

@media (max-width: 412px) {
  .half-width {
    width: 100%;
  }

  .full-width {
    width: 100%;
  }
}

  
  input, textarea {
    width: 100%;
    padding: 12px;

  }
</style>