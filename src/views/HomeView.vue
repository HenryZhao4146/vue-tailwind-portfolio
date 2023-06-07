<template>
    <header class="py-20 text-center">
        <div class="header">
            <img src="../assets/imgs/ServerIcon.png">
            <h1 class="text-8xl font-bold text-white">Welcome to Pangea</h1>
        </div>

    </header>

    <div class="body-container text-white">
        <div class="body-intro">
            <p>Think twice before proceeding into the land of dinosaurs. But if you insist on taming
                the untameable, then let this be your guide.
            </p>
            <img src="../assets/imgs/logo.png">
        </div>
        <div class="body-divider">Command category</div>
        <CommandCard name="!command here"></CommandCard>
        <CommandCard name="!command"></CommandCard>
        <CommandCard name="!qwegqerwgqrweg"></CommandCard>
        <div class="body-divider">Command category</div>
        <CommandCard name="!asdfqwgwq"></CommandCard>
        <CommandCard name="!hello hello"></CommandCard>
        <CommandCard name="!bye bye"></CommandCard>
    </div>
</template>

<style>
.header img {
    width: 300px;
    height: 300px;
    animation: rotation 10s infinite linear;
}

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(359deg);
    }
}

.text-8xl {
    margin-left: 15px;
    max-width: 500px;
}

.body-intro {
    margin-bottom: 60px;
    margin-top: 60px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.body-intro p {
    font-size: 35px;
    min-width: 50%;
    width: 400px;
    line-height: 3;
    text-align: right;
    color: white;
    opacity: 80%;
}

.body-intro img {
    width: 300px;
    height: 300px;
    margin-left: 10%;
}

.body-divider {
    font-size: 40px;
    opacity: 80%;
    margin-top: 60px;
    text-align: center;
}

.body-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 150px;
}

@media (min-width: 701px) {
    .header {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

@media (max-width: 700px) {
    .text-8xl {
        font-size: 60px;
        margin-top: 25px;
    }

    .header img {
        width: 180px;
        height: 180px;
    }

    .body-intro img {
        width: 200px;
        height: 200px;
    }

    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .body-intro {
        flex-direction: column;
    }

    .body-intro p {
        width: 80%;
    }
}
</style>

<script setup>
import CommandCard from './CommandCard.vue';

</script>