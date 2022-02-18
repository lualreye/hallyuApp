<template>
  <svg
    class="select-none"
    style="width: 100%; height: 100%; stroke-width: 2.5px"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path :d="path" />
  </svg>
</template>

<script>
import icons from '@/helpers/icons'
export default {
  props: {
    name: {
      type: String,
      default: null
    }
  },
  computed: {
    path () {
      return icons[this.name]
    }
  }
};
</script>
