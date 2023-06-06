<template>
  <nav class="bg-red-950 text-white px-4 py-2">
    <div class="flex justify-between items-center">
      <ul class="flex space-x-4">
        <li><a href="#" class="hover:text-green-300">Home</a></li>
        <li><a href="#" class="hover:text-green-300">About</a></li>
        <li><a href="#" class="hover:text-green-300">Services</a></li>
        <li><a href="#" class="hover:text-green-300">Contact</a></li>
      </ul>
    </div>
  </nav>

  <div style="background: linear-gradient(to bottom right, darkred, black); min-height: 120vh;">
    <RouterView />
  </div>

  
</template>

<script setup>

console.log('Setting up!')

</script>



