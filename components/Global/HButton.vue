<template>
  <button class="w-full py-4 rounded-2xl shadow-md" :class="color" @click="$emit('click', $event)">
    <p class="text-lg font-junegull text-white text-center">
      {{ name }}
    </p>
  </button>
</template>


<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    buttonColor: {
      type: String,
      required: null
    }
  },
  computed: {
    color() {
      const color = 'bg-primary'
      if(!this.buttonColor) {
        return color
      }
      return `bg-`+this.buttonColor
    }
  }
}
</script>