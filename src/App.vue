<template>
  <nav v-if="route?.meta?.loaded" class="text-white">
    <div class="bar">
      <a href="/" class="navlink">Home</a>
      <a href="/commands" class="navlink">Commands</a>
      <a href="/shop" class="navlink">Shop</a>
      <button v-if="route.meta.user" @click="logout" class="rightmost navlink">Logout<img
          :src="`https://cdn.discordapp.com/avatars/${route.meta.user.id}/${route.meta.user.avatar}?size=64`"></button>
      <a v-else
        href="https://discord.com/api/oauth2/authorize?client_id=791131539140247588&redirect_uri=https%3A%2F%2Fwww.pangea.directory&response_type=code&scope=identify"
        class="rightmost navlink">Login</a>
      <!-- TODO: send state to oauth endpoint to make this more secure -->
    </div>
  </nav>

  <div>
    <RouterView />
  </div>
</template>

<style>
.bar {
  display: flex;
}

.navlink {
  color: rgb(230, 252, 255);
  font-size: 20px;
  text-align: center;
  display: block;
  flex-grow: 1;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
  margin-right: 0px;
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  transition: all 0.2s;
  word-break: break-word;
}

.navlink:hover {
  background-color: rgba(0, 0, 0, 0.6);
}

.rightmost {
  margin-right: 8px;
}

@media (max-width: 750px) {
  .navlink {
    font-size: 15px;
  }
}
</style>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = ref(useRoute())

const logout = () => {
  localStorage.removeItem('oauth-state')
  window.location.reload()
};
</script>