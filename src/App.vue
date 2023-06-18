<template>
  <nav class="text-white">
    <div class="bar">
      <a href="#" class="navlink">Home</a>
      <a href="#" class="navlink">About</a>
      <a href="https://discord.com/oauth2/authorize?client_id=1079973948218937414&permissions=388160&scope=bot" target="_blank" class="navlink">Invite</a>
      <a href="https://discord.gg/KdeCr7HGcq" target="_blank" class="rightmost navlink">Join Us</a>
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
  color:rgb(230, 252, 255);
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

.bar>div {
  flex-grow: 1;
}
</style>

<script setup>

console.log('Setting up!')

</script>



