<template>
  <div class="flex flex-col min-h-screen bg-background">
    <the-header />
    <the-menu />
    <Nuxt />
    <the-footer class="mt-auto" />
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('config_drawer', ['showMenu'])
  }
}
</script>