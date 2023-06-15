<template>
    <div class="relative">
      <img src="../assets/Group 1 1.png" alt="" class="w-full">
      <div class="absolute inset-0 d-flex flex-col items-start justify-start gap-[15px] mt-32 ml-52">
        <h1 class="font-bold text-[88px] text-[#ffff]">Are you starving?</h1>
        <p class="font-normal text-[22px] text-[#504F4F]">Within Few clicks find an excellent recipe to make !</p>
  
        <div class="d-flex flex-col items-start">
          <div class="relative">
            <div class="w-[856px] h-[250px] bg-white rounded-2xl mt-8">
              <div class="p-6 relative border-b border-[#EEEEEE]">
                <button type="button" @click="toggleDropdown" class="text-lg font-bold text-[#757575] bg-white hover:bg-orange-200 mr-[10px] rounded-lg px-6 py-[10px]">
                  <i class="fas fa-search mr-[10px]" style="color: #757575;"></i>
                  Search Meals
                  <path fill-rule="evenodd" d="M10 3a1 1 0 0 1 .707.293l3 3a1 1 0 0 1-1.414 1.414L10 5.414 7.707 7.707a1 1 0 1 1-1.414-1.414l3-3A1 1 0 0 1 10 3z" clip-rule="evenodd" />
                </button>
                <div v-if="isOpen" @click="closeDropdown" class="origin-top-left absolute left-0 mt-2 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <router-link :to="{name: 'ByName'}" class="inline-flex items-center justify-center px-2 h-full transition-colors hover:bg-orange-200 text-[#757575] text-lg">
                      Search Meals
                    </router-link>
                    <router-link :to="{name: 'ByLetter'}" class="inline-flex items-center justify-center px-2 h-full transition-colors hover:bg-orange-200 text-[#757575] text-lg">
                      Meals By Letter
                    </router-link>
                    <router-link :to="{name: 'Ingredients'}" class="inline-flex items-center justify-center px-2 h-full transition-colors hover:bg-orange-200 text-[#757575] text-lg">
                      Meals By ingredients
                    </router-link>
                  </div>
                </div>
                <button type="button" class="bg-white text-[#757575] font-bold text-lg ml-2 hover:bg-orange-200 rounded-lg px-6 py-[10px]">
                  <i class="fa-solid fa-euro-sign fa-lg mr-[10px]" style="color: #757575;"></i> Cheap Meals
                </button>
              </div>
              <div class="relative m-6">
                <div class="flex items-center rounded-lg p-2 mt-16">
                  <div class="mr-2">
                    <i class="fas fa-location-dot fa-lg text-[#dd1225]"></i>
                  </div>
                  <input type="text" class="bg-[#F5F5F5] w-[593px] border-transparent rounded-lg" placeholder="Enter Your Address">
                  <button type="button" class="ml-8 bg-gradient-to-r from-[#dd1225] to-[#ff3d4a] text-white w-[199px] h-[60px] rounded-lg">Search Meals</button>
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src="../assets/Image Base.png" alt="" class="absolute top-[197px] right-[15rem]">
        </div>
      
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
      closeDropdown() {
        this.isOpen = false;
      },
    },
  };
  </script>
  
