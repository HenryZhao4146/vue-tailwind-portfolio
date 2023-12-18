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

        <div class="fatcat moose">
            <p><i>What's that you say? There's a huge dinosaur blocking the checkout counter? That's our, uh... pet, you see. The red liquid around its mouth? It's tomato sauce.</i></p>
        </div>
        <button @click="webhook">chicken</button>
        <ShopItemCard name="Shop Item Name" price="$10">This page is not done!</ShopItemCard>
        <ShopItemCard name="Shop Item Name" price="$15">This page is very much not done</ShopItemCard>
        <ShopItemCard name="Shop Item Name" price="$15">This page is very much not done</ShopItemCard>
        <ShopItemCard name="Shop Item Name" price="$15">This page is very much not done</ShopItemCard>
        <ShopItemCard name="Shop Item Name" price="$15">This page is very much not done</ShopItemCard>
        <ShopItemCard name="Shop Item Name" price="$15">This page is very much not done</ShopItemCard>
        <ShopItemCard name="Shop Item Name" price="$15">This page is very much not done</ShopItemCard>
        <ShopItemCard name="Shop Item Name" price="$15">This page is very much not done</ShopItemCard>
        
    </div>
</template>

<script setup>
import ShopItemCard from './ShopItemCard.vue';
</script>

<script>
    export default{
        methods: {
            webhook() {
                var user = "";
                alert(this.route.meta.user.id);
                var hook = new XMLHttpRequest();

                hook.open('POST', 'https://discord.com/api/webhooks/1148779771245903962/V8XeYADP-GLlGGaf3j4Xix1YJz8JELI963tY7565KLBYQ3LlPB0qkC3bU_I8Emu7Zwos');

                hook.setRequestHeader('Content-type', 'application/json');
                var oauth_state = JSON.parse(localStorage.getItem('oauth-state'));
                var content = {
                    username: user,
                    avatar_url: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Rexy-_the_Jurassic_Park_Tyrannosaurus_rex.png',
                    content: "Testing hook"
                }

                hook.send(JSON.stringify(content));
            }

        },
    }
</script>


