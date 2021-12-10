<template>
  <div class="w-40 h-40 flex justify-center items-center">
    <div class="relative w-full">
      <figure class="w-full justify-center items-center">
        <img :src="instagramUserImage" :alt="instagramUserName">
      </figure>
      <span class="absolute bottom-4 left-4 py-1 px-2 rounded-lg bg-white flex justify-center items-center">
        <p class="font-light text-primary font-open">{{ instagramUserName }}</p>
      </span>
    </div>
  </div>
</template>