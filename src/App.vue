<template>
  <nav class="bg-red-950 text-white">
    <div class="bar flex justify-between items-center">
      <ul class="flex">
        <li><a href="#" class="navlink">Home</a></li>
        <li><a href="#" class="navlink">About</a></li>
        <li><a href="#" class="navlink">Invite</a></li>
        <li><a href="#" class="navlink">Join Us</a></li>
      </ul>
    </div>
  </nav>

  <div style="min-width: 300px; background: linear-gradient(to bottom right, darkred, black); min-height: 120vh;">
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

.navlink:hover {
  color: rgb(193, 255, 193);
}
</style>

<script setup>

console.log('Setting up!')

</script>



