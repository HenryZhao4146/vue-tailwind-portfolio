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
        <!--<button @click="webhook('test')">chicken</button> This is how the webhook will confirm the purchases-->
        <ShopItemCard name="10 dinocredits" price="$10" @click="webhook('10 credits')">This page is not done! <a href="https://buy.stripe.com/9AQ9Ej9tbfMpfCw6oo">test</a></ShopItemCard>


        <stripe-checkout
        ref="checkoutRef"
        mode="payment"
        :pk="publishableKey"
        :line-items="lineItems"
        :success-url="successURL"
        :cancel-url="cancelURL"
        @loading="v => loading = v"
        />
        <button @click="submit">Pay now!</button>

        <ShopItemCard name="Shop Item Name" price="$15">This page is very much not done</ShopItemCard>
        <ShopItemCard name="Shop Item Name" price="$15">This page is very much not done</ShopItemCard>
        <ShopItemCard name="Shop Item Name" price="$15">This page is very much not done</ShopItemCard>
        <ShopItemCard name="Shop Item Name" price="$15">This page is very much not done</ShopItemCard>
        <ShopItemCard name="Shop Item Name" price="$15">This page is very much not done</ShopItemCard>
        <ShopItemCard name="Shop Item Name" price="$15">This page is very much not done</ShopItemCard>
        <ShopItemCard name="Shop Item Name" price="$15">This page is very much not done</ShopItemCard>

    </div>
</template>

<script>

    import ShopItemCard from './ShopItemCard.vue';
    import { useRoute } from 'vue-router';
    import { StripeCheckout } from '@vue-stripe/vue-stripe';

    export default{
        setup() {
            const route = useRoute();
            return { route };
        },
        components: {
            ShopItemCard,
            StripeCheckout
        },
        methods: {
            webhook(c) {
                var user = this.route.meta.user.id;
                var hook = new XMLHttpRequest();

                hook.open('POST', 'https://discord.com/api/webhooks/1148779771245903962/V8XeYADP-GLlGGaf3j4Xix1YJz8JELI963tY7565KLBYQ3LlPB0qkC3bU_I8Emu7Zwos');

                hook.setRequestHeader('Content-type', 'application/json');
                var oauth_state = JSON.parse(localStorage.getItem('oauth-state'));
                var content = {
                    username: user,
                    avatar_url: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Rexy-_the_Jurassic_Park_Tyrannosaurus_rex.png',
                    content: c            }

                    hook.send(JSON.stringify(content));
                }, submit () {
      // You will be redirected to Stripe's secure checkout page
                  this.$refs.checkoutRef.redirectToCheckout();
              },
          }, data () {
                this.publishableKey = "pk_live_51Oncn3HH5LYtIUPtPbQLNvLM9UwOjeoSKJnPYjEXiuGQmT3CEyudvxa9FmyJOyudADZPmFsXcwvSNVeEKefGIC2f00agAAwKdr";//REPLACE WITH ENV
                return {
                  loading: false,
                  lineItems: [
                  {
          price: 'price_1One3oHH5LYtIUPtf3guapws', // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
      },
      ],
                  successURL: 'your-success-url',
                  cancelURL: 'your-cancel-url',
              };
          },
      }
  </script>


