<script setup>
import { loadScript } from '@paypal/paypal-js'
import { onBeforeMount, ref } from 'vue'

// Change to your CLIENT ID gotten from the developer dashboard
const CLIENT_ID = 'AUd0lXEyYK7xWrNRjtr7irFlVAY-RWUmMaEqV6c1q73vTyrzq8oRsap3p_VtlJB4JBLTw7w-PWTIcFuS'

const { cartTotal } = defineProps({
  cartTotal: {
    type: Number,
    default: 1.00,
  }
})
const paid = ref(false)

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

   function createOrder(data, actions) {
      console.log('Creating order...')
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: cartTotal,
            },
          },
        ],
      })
    }

function onApprove(data, actions) {
  console.log('Order approved...')
  return actions.order.capture().then(() => {
    paid.value = true
    console.log('Order complete!')
  })
}
</script>

<template>
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
