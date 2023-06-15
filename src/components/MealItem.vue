<template>
    <div class="bg-white shadow rounded-lg overflow-hidden card">
      <router-link :to="{name: 'MealDetails', params: {id: meal.idMeal} }">
        <div class="relative h-48">
          <img :src="meal.strMealThumb" :alt="meal.strMeal" class="absolute inset-0 w-full h-full object-cover">
        </div>
      </router-link>
      <div class="p-4">
        <h3 class="font-bold text-lg mb-2 text-center" >{{meal.strMeal}}</h3>
        <p class="text-gray-500 text-sm mb-2">Area: {{meal.strArea}}</p>
        <p class="text-gray-500 text-sm mb-4">Category: {{meal.strCategory}}</p>
        <div class="flex justify-end">
          <router-link to="/" class="px-3 py-1 text-sm bg-gradient-to-r from-[#dd1225] to-[#ff3d4a] text-white rounded-lg">
            View
          </router-link>
        </div>
      </div>
    </div>

  </template>
  
  <script setup>
  import { defineProps } from 'vue';

  
  const props = defineProps({
    meal: {
      required: true,
      type: Object,
    },
  });
  </script>
  
  <style scoped>
  .card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #f9f4ea;
  }
  
  .card img {
    transition: transform 0.3s ease;
  }
  
  .card:hover img {
    transform: scale(1.05);
  }
  
  .card + .card {
    margin-top: 1.5rem;
  }
  </style>
  