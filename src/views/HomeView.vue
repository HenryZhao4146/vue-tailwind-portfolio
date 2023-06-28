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
        <div class="body-divider">Substances</div>
        <CommandCard name="!shop" syntax="!shop">Lists the substances that can be bought and fed to dinosaurs.</CommandCard>
        <CommandCard name="!buy" syntax="!buy <substance> <amount>">Buys one of the substances listed in !shop using its name or numerical ID (e.g. 0 for coffee.)</CommandCard>
        <CommandCard name="!dose" syntax="!dose <dino> <substance> <amount>">Feeds your dinosaur a substance. Your dinosaurs' names and IDs can be found in !dinos. Similarly, your substances' names and IDs are listed in !substances.</CommandCard>
        <div class="body-divider">Inventory</div>
        <CommandCard name="!substances" syntax="!substances">Displays the substances you own. You can buy more using !buy.</CommandCard>
        <CommandCard name="!bal" syntax="!bal <user>">Displays the balance of a user. The &lt;user&gt; parameter is optional and if none is specified, your own balance will be displayed.</CommandCard>
        <CommandCard name="!bye bye" syntax="asdf">gkqoewirngqnrwgnqergnqergn</CommandCard>
        <CommandCard name="!aaaaaaaaa bbbbb ccccc" syntax="asdf">ujwgeqmngnewfnwqiengpwenog</CommandCard>
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