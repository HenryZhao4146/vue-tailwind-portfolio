<template>
    <BaseCard :name="name" :syntax="syntax" :desc_style="desc_style" :name_style="name_style">
        <slot></slot>
    </BaseCard>
</template>

<script setup>
import BaseCard from "./BaseCard.vue";

const props = defineProps([
  'name', 'syntax', 'desc_style', 'name_style'
])
</script>
