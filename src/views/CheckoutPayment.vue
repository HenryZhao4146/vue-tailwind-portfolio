<script>
import { loadScript } from '@paypal/paypal-js'
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router';

// Change to your CLIENT ID gotten from the developer dashboard
const CLIENT_ID = 'ARbWPMrlwzAJDEqcRzzPYrEKy1S6-klVcTvY8hiT_oNjs6Dx_Nm6eSDLExpTwBLGlgwqznPLKOKYMfy2'

export default {
  setup() {
    const route = ref(useRoute());
    const paid = ref(false)

    function createOrder(data, actions) {
      console.log('Creating order...')
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: this.cartTotal,
            },
          },
        ],
      })
    }

    function createPaymentWebhook (c) {
      console.log('Order complete! C===8');
      try{
        var user = route.meta.user;
      } catch(e){
        console.error(e);
      }
      try{
        console.log('Logged user');
        var hook = new XMLHttpRequest();
        console.log('Order complete! 8==D');
        hook.open('POST', 'https://discord.com/api/webhooks/1225252873969864785/Qr66nk8k4Ch93HeoTZYlVo6T_GvL1lsq0tPBxmr7lPElauri0BtgiFLkfllcWeUNTES_');

        hook.setRequestHeader('Content-type', 'application/json');
        var oauth_state = JSON.parse(localStorage.getItem('oauth-state'));
        var content = {
          username: user.username,
          avatar_url: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Rexy-_the_Jurassic_Park_Tyrannosaurus_rex.png',
          content: c
        };

        hook.send(JSON.stringify(content));
      } catch(e){
        console.error(e);
      }
    }

    function onApprove(data, actions) {
      console.log('Order approved...')
      return actions.order.capture().then(() => {
        paid.value = true;
        
        this.createPaymentWebhook("Fuck");
      })
    }

    onBeforeMount(function() {
      loadScript({ 'client-id': CLIENT_ID }).then((paypal) => {
        paypal
          .Buttons({
            createOrder: createOrder,
            onApprove: onApprove,
          })
          .render('#paypal-button-container')
      })
    })

    return { route, paid }
  },
  props: {
    cartTotal: {
      type: Number,
      default: 1.00,
    }
  }
}
</script>

<template>
  {{ route.meta.user }}
  <div v-if="!paid" id="paypal-button-container"></div>
  <div v-else id="confirmation">Order complete!</div>
</template>

<style>
#paypal-button-container {
  width: 100%;
  max-width: 700px;
  margin: 30px 0;
}

#buttons-container {
  display: flex;
  justify-content: center;
}

#confirmation {
  color: green;
  margin-top: 1em;
  font-size: 2em;
}
</style>
