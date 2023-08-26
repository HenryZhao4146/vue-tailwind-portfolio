<template>
    <BaseCard :name="name" :desc_style="desc_style" :name_style="name_style" :price="price" up_arrow="☝︎" down_arrow="☟">
        <slot></slot>
    </BaseCard>
</template>

<script setup>
import BaseCard from "./BaseCard.vue";

const props = defineProps([
  'name', 'desc_style', 'name_style', 'price'
])
</script>
