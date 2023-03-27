<template>
    <header class="bg-white shadow-md h-16 flex justify-between items-center">
    <router-link :to="{name: 'Home'}" class="inline-flex items-center h-full px-5"> 
     Home
   </router-link>
   <div class="flex items-center gap-1">
     <router-link :to="{name: 'ByName'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-200">
       Search Meals
     </router-link>
     <router-link :to="{name: 'ByLetter'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-200">
       Meals By Letter
     </router-link>
     <router-link :to="{name: 'Ingredients'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-200">
       Meals By ingredients
     </router-link>
   </div>
 </header>
</template>