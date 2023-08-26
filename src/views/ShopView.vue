<template>
    <div class="header">
        <img class="shopicon" src="../assets/imgs/microraptor-head.png">
        <h1 class="shoptext">Jurassic Shop</h1>
    </div>

    <div class="body-container text-white">
        <div class="body-intro box1">
            <p>If you shat bricks after encountering an indoraptor, then fear not! We've got you covered. Here you can buy a new pair of pants and much more.
            </p>
            <img class="bob" src="../assets/imgs/indoraptor-head.png">
        </div>

        <div class="fatcat">
            <br><br>
            <br><br>
            <p><i>What's that you say? There's a huge dinosaur blocking the checkout counter? That's our, uh... pet, you see. The red liquid around its mouth? It's tomato sauce.</i></p>
        </div>

        <br><br>
        <br><br>
        <ShopItemCard name="Shop Item Name" price="$10">This page is not done!</ShopItemCard>
        <ShopItemCard name="Shop Item Name" price="$15">This page is very much not done</ShopItemCard>
        
    </div>
</template>

<script setup>
import ShopItemCard from './ShopItemCard.vue';

</script>