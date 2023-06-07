<template>
    <button class="command" @click="toggleCollapse">
        <div class="head">
            <span class="arrow" v-if="collapsed">⇓</span>
            <span class="arrow" v-else>⇑</span>
            <span class="name">!command here</span>
            <span class="arrow" v-if="collapsed">⇓</span>
            <span class="arrow" v-else>⇑</span>
        </div>
        <div v-if="!collapsed" class="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            fringilla
            sapien a fermentum fermentum.
            Curabitur nec finibus lectus. In pretium, ipsum nec consequat tempus, tellus metus faucibus justo, in
            rutrum
            dolor lacus non orci. In consequat euismod lorem non cursus. Aenean posuere dui sed tortor pellentesque
            tristique. Duis eu lacus vitae est tristique euismod. Nulla vitae justo urna. Fusce sed faucibus nulla.
            Mauris tempus nisl eu odio hendrerit tristique. Phasellus blandit augue at ultricies venenatis. Aliquam
            erat volutpat. Ut eu nisi consectetur, consequat nulla at, luctus leo.</div>
        </button>
</template>

<style>
.command {
    
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    text-align: center;
    border-style: solid;
    opacity: 80%;
    
    margin-top: 20px;
    margin-bottom: 20px;
    width: 85%;
    flex-shrink: 4;
}

.command:hover .name {
    color: rgb(207, 255, 207);
}

.command:hover .arrow {
    color: rgb(207, 255, 207);
}

.head {
    font-size: 30px;
    padding: 5px;
    text-align: center;
    display: flex;
    justify-content: center;
}

.name {
    flex-shrink: 0;
    padding: 5px;
}

.body {
    padding: 20px;
    font-size: 18px;
}

.arrow {
    flex: 1;
    margin-left: 10px;
    margin-right: 10px;
}
</style>

<script setup>
import { ref } from 'vue';

var collapsed = ref(true);

function toggleCollapse() {
    collapsed.value = !collapsed.value;
}
</script>