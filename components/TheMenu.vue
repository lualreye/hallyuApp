<template>
  <div
    class="
      bg-lightPink
      fixed
      top-0
      bottom-0
      h-screen
      w-2/3
      md:w-1/3
      rounded-r-3xl
      shadow-md
      z-30
      py-4
      px-2
      flex flex-col justify-between
      transition-all
    "
    :class="{
      'left-0': showMenu,
      'left-2/3': !showMenu
    }"
  >
    <div class="w-full flex justify-end items-center">
      <icon-button iconName="close" classes="bg-transparent" @click="closeMenu" />
    </div>
    <nav class="flex flex-col justify-col items-center justify-start">
      <ul v-for="(item, i) in menu" :key="i" class="mb-6">
        <nuxt-link :to="item.link">
          <li class="font-open text-3xl text-textColor font-bol mb-4">
            {{ item.name }}
          </li>
        </nuxt-link>
      </ul>
    </nav>
    <div class="w-full px-2">
      <div class="w-full mb-3">
        <h-button name="Inicia Sesión" buttonColor="primary" />
      </div>
      <div class="w-full">
        <h-button name="Regístrate" buttonColor="secondary" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import HButton from "./global/HButton.vue";
import IconButton from "./global/IconButton.vue";
export default {
  components: { HButton, IconButton },
  data: () => ({
    menu: [
      {
        link: "categories",
        name: "Categorías",
      },
      {
        link: "offers",
        name: "Ofertas",
      },
      {
        link: "club",
        name: "Club Hallyu",
      },
      {
        link: "contacts",
        name: "Contáctanos",
      },
    ],
  }),
  computed: {
    ...mapGetters('config_drawer', ['showMenu'])
  },
  methods:{
    ...mapActions('config_drawer', ['activeMenu']),
    closeMenu() {
      if(this.showMenu) {
        this.activeMenu(false)
        console.log('debe cerrarse')
      }
      this.activeMenu(true)
      console.log('debe de abrirse')
    }
  }
};
</script>
