<template>
    <div class="header">
        <img class="globe" src="../assets/imgs/ServerIcon.png">
        <h1 class="icecream">Welcome to Pangea</h1>
    </div>

    <div class="body-container text-white">
        <div class="body-intro">
            <p class="popcorn">{{ `Think twice before proceeding into the land of dinosaurs${route.meta?.user?.username ? ', ' + route.meta.user.username : ''}. But if you insist on taming `
                + 'the untameable, then let this be your guide.' }}
            </p>
            <img src="../assets/imgs/logo.png">
        </div>
        </div>

</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = ref(useRoute())
</script>