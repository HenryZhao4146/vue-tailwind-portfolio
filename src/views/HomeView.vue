<template>
    <div class="header">
        <img src="../assets/imgs/ServerIcon.png">
        <h1 class="text-8xl font-bold text-white">Welcome to Pangea</h1>
    </div>

    <div class="body-container text-white">
        <div class="body-intro">
            <p>Think twice before proceeding into the land of dinosaurs. But if you insist on taming
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
    word-break: break-word;
}

.body-intro {
    width: 90%;
    padding: 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 15px;
    border-width: 0px;
    border-style: solid;
    border-color: linear-gradient(45deg, green, black);
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
}

.body-intro p {
    font-size: 35px;
    min-width: 50%;
    width: 400px;
    line-height: 3;
    text-align: right;
    color: rgb(235, 255, 241);
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
    word-break: break-word;
}

.body-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 150px;
    word-break: break-word;
}

.header {
    text-align: center;
    padding-top: 150px;
    padding-bottom: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media (max-width: 750px) {
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
        flex-direction: column;
        padding-top: 75px;
        padding-bottom: 75px;
    }

    .body-intro {
        flex-direction: column;
        padding: 0px;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    }

    .body-intro p {
        width: 80%;
    }
}
</style>

<script setup>
import CommandCard from './CommandCard.vue';

</script>