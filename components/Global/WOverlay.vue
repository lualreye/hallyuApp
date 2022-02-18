<template>
  <div
    class="
      w-screen
      h-screen
      bg-gray-100
      opacity-70
      flex
      justify-center
      items-center
      absolute
      z-40
      top-0
      left-0
      right-0
      bottom-0
    "
  @click="closeModal"></div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters('user', ['getModal'])
  },
  methods: {
    ...mapActions('user', ['showModal']),
    closeModal() {
      if(getModal) {
        this.showeModal(false)
      }
    }
  }
}
</script>
