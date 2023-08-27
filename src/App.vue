<template>
  <nav class="text-white">
    <div class="bar">
      <a href="/" class="navlink">Home</a>
      <a href="/about" class="navlink">About</a>
      <a href="/commands" class="navlink">Commands</a>
      <a href="/shop" class="rightmost navlink">Shop</a>
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

@media (max-width: 750px) {
    .navlink {
      font-size: 15px;
    }
}
</style>

<script setup>

console.log('Setting up!')

</script>



