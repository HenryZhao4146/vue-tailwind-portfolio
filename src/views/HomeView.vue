<template>
    <div class="header">
        <img class="globe" src="../assets/imgs/ServerIcon.png">
        <h1>Welcome to Pangea</h1>
    </div>

    <div class="body-container text-white">
        <div class="body-intro">
            <p class="popcorn">Think twice before proceeding into the land of dinosaurs. But if you insist on taming
                the untameable, then let this be your guide.
            </p>
            <img src="../assets/imgs/logo.png">
        </div>
        <div class="body-divider">Command category</div>
        <CommandCard name="!command 1"></CommandCard>
        <CommandCard name="!command 2"></CommandCard>
        <CommandCard name="!command 3"></CommandCard>
        <div class="body-divider">Command category</div>
        <CommandCard name="!command 129481741732"></CommandCard>
        <CommandCard name="!hello hello"></CommandCard>
        <CommandCard name="!bye bye"></CommandCard>
        <CommandCard name="!aaaaaaaaa bbbbb ccccc"></CommandCard>
    </div>
</template>

<style>

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(359deg);
    }
}

.globe {
    animation: rotation 10s infinite linear;
}

.popcorn {
    color: rgb(235, 255, 241);
}

</style>

<script setup>
import CommandCard from './CommandCard.vue';

</script>