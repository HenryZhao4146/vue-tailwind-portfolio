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
        <div class="body-divider">Inventory</div>
        <CommandCard name="!bal" syntax="!bal [user]">Displays the balance of a user. The <soup>[user]</soup> parameter is optional and if none is specified, your own balance will be displayed.</CommandCard>
        <CommandCard name="!substances" syntax="!substances">Displays your substances. Shop for more using <soup>!shop</soup>.</CommandCard>
        <div class="body-divider">Dino Market</div>
        <CommandCard name="!market" syntax="!market [page]">Displays a page of purchaseable dinosaurs. The first page is displayed by default, and other pages can accessed by page number.</CommandCard>
        <CommandCard name="!preview" syntax="!preview [dino type]">Displays the stats of a dinosaur type using its numerical ID. See IDs in <soup>!market</soup> (e.g. 1 for female microraptor.)</CommandCard>
        <CommandCard name="!purchase" syntax="!purchase [dino] [name]">Buys a dinosaur from <soup>!market</soup> with its ID (e.g. 1 for female microraptor) as well as a unique name of the user's choice. You will use this name to identify your dinosaur once it's bought, so you may not choose the same name for more than one dinosaur.</CommandCard>
        <CommandCard name="!view" syntax="!view [dino]">Displays the stats of a dinosaur you own using the dinosaur's numerical ID. See dinosaur IDs in <soup>!dinos</soup>.</CommandCard>
        <div class="body-divider">Substance Shop</div>
        <CommandCard name="!shop" syntax="!shop">Lists substances that can be bought and fed to dinosaurs.</CommandCard>
        <CommandCard name="!buy" syntax="!buy [substance] [amount]">Buys a substance from <soup>!shop</soup> with its name or numerical ID (e.g. 0 for coffee.)</CommandCard>
        <CommandCard name="!dose" syntax="!dose [dino] [substance] [amount]">Feeds your dinosaur a substance. See dinosaur names and IDs in <soup>!dinos</soup>. See substance names and IDs in <soup>!substances</soup>.</CommandCard>
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