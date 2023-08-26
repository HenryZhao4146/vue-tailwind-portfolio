<template>
    <button class="card" @click="toggleCollapse">
        <div class="head">
            <span class="arrow" v-if="collapsed">{{ down_arrow_value }}</span>
            <span class="arrow" v-else>{{ up_arrow_value }}</span>
            <span class="name" :style="name_style">{{ name }} <span v-if="price" class="price">{{ price }}</span></span>
            <span class="arrow" v-if="collapsed">{{ down_arrow_value }}</span>
            <span class="arrow" v-else>{{ up_arrow_value }}</span>
        </div>
        <div :style="(collapsed) ? 'max-height: 0px; padding-top: 0px; padding-bottom: 0px' : ''" class="body">
            <p v-if="syntax" class="command-syntax">{{ syntax }}</p>
            <p class="card-desc" :style="desc_style">
                <slot></slot>
            </p>
        </div>
    </button>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps([
  'name', 'syntax', 'desc_style', 'name_style', 'price', 'up_arrow', 'down_arrow'
])

var collapsed = ref(true);
function toggleCollapse() {
    collapsed.value = !collapsed.value;
}

var up_arrow_value = ref((props.up_arrow) ? props.up_arrow : '⇑')
var down_arrow_value = ref((props.down_arrow) ? props.down_arrow : '⇓')
</script>