<template>
    <div class="bg-white shadow rounded-xl">
        <router-link :to="{name: 'MealDetails', params: {id: meal.idMeal} }">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover">
    </router-link>
        <div class="p-3">
        <h3 class="font-bold">{{meal.strMeal}}</h3>
        <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam omnis adipisci accusamus eveniet. Ut sequi fugit, animi eos dolor temporibus! Tempore, eveniet commodi nihil molestiae quis ducimus aperiam repellat id!</p>
        <div class="flex items-center justify-between">
            <YouTubeButton :href="meal.strYoutube" />
            <router-link to="/" class="px-3 py-2 rounded border bg-blue-400 hover:bg-blue-400 hover:text-white transition-colors">
                View
            </router-link>
        </div>
        </div>
    </div>
</template>

<script setup>

const { meal } = defineProps({
    meal: {
        required: true,
        type: Object
    }
})
</script>
