<template>
  <nav class="bg-red-950 text-white">
    <div class="bar flex justify-between items-center">
      <ul class="flex">
        <li><a href="#" class="navlink hover:text-green-300">Home</a></li>
        <li><a href="#" class="navlink hover:text-green-300">About</a></li>
        <li><a href="#" class="navlink hover:text-green-300">Invite</a></li>
        <li><a href="#" class="navlink hover:text-green-300">Join Us</a></li>
      </ul>
    </div>
  </nav>

  <div style="background: linear-gradient(to bottom right, darkred, black); min-height: 120vh;">
    <RouterView />
  </div>

  
</template>

<style>
.bar {
  height: 50px;
}

.navlink {
  font-size: 20px;
  margin-right: 10px;
  padding: 10px;
}
</style>

<script setup>

console.log('Setting up!')

</script>



