<template>
    <div class="flex flex-col p-8"> 
    <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Rechercher des Plats"/>
    

    

</div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import axiosClient from '../axiosClient'


 const meals = computed(() => store.state.meals);
 
 const ingredients = ref([]);

 onMounted(async () => {
    //liste des ingrédients
    const response = await axiosClient.get('list.php?i=list')
      console.log(response.data)
      ingredients.value = response.data
 })

</script>