<template>
    <a :href="href" target="_blank" class="px-3 py-2 rounded text-white border bg-red-600 hover:bg-red-600 hover:text-white transition-colors">Video
 <slot></slot>
    </a>

</template>

<script setup>
const props = defineProps({
    href: String
})
</script>