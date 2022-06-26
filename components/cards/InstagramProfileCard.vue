<template>
  <div class="w-full flex justify-center items-center">
    <div class="relative w-full">
      <figure class="w-full h-48 justify-center items-center mx-auto rounded-md">
        <img :src="instagramUserImage" :alt="instagramUserName" class="w-full h-48 object-cover object-center mx-auto rounded-md">
      </figure>
      <a :href="`${instagramUserName}/`" target="_blank" class="absolute bottom-2 left-2 py-1 px-2 rounded-lg bg-white flex justify-center items-center">
        <p class="font-light text-secondary text-sm font-open">@{{ getName }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    instagramUserImage: {
      type: String,
      required: true
    },
    instagramUserName: {
      type: String,
      required: true
    },
  },
  computed: {
    getName() {
      return this.instagramUserName.split('/').pop()
    }
  }
}
</script>