<template>
  <header
    class="px-1 sm:px-2 md:px-4 flex flex-col w-full shrink justify-center items-center mb-1 sticky top-0 left-0 right-0 bg-background"
  >
    <!-- HEADER CONTENT -->
    <div class="w-full">
      <div class="w-full flex justify-center items-center pb-3 py-5">
        <p
          class="w-full flex justify-between items-center font-medium text-base sm:text-lg text-hBlack font-open"
        >
          {{ getHeaderTitle }}
        </p>
        <div class="w-auto sm:w-40 flex justify-between items-center">
          <figure class="w-6 h-6 flex justify-center items-center rounded-full">
            <img
              src="@/static/images/idols/han.jpg"
              alt="userName"
              class="object-cover rounded-full"
            />
          </figure>
          <p class="text-sm text-textColor font-light hidden sm:flex">
            {{ getUser.name }}
          </p>
          <button class="h-5 w-5 flex justify-center items-center">
            <GlobalHIcon name="arrowDown" class="text-textColor" />
          </button>
        </div>
      </div>
    </div>
    <!-- MENU ACCORDING TO THE ROUTE -->
    <div class="w-full mt-3 flex justify-start items-center">
      <ul class="flex justify-center items-center">
        <nuxt-link
          v-for="(item, index) in getMenu"
          :key="index"
          :to="item.link"
          class="mr-6"
        >
          <li class="text-textColor font-open text-xs">{{ item.name }}</li>
        </nuxt-link>
      </ul>
    </div>
    <!-- DIVISION LINE -->
    <div class="w-full h-px bg-aquamarine" />
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    userName: "Luis Reyes",
  }),
  computed: {
    ...mapGetters("user", ["getUser"]),
    getHeaderTitle() {
      const route = this.$route;
      const path = route.path.split("/");
      if (path[2] === "dashboard") {
        return "Resumen de Ventas";
      } else if (path[2] === "general") {
        return "Configuración General";
      } else if (path[2] === "editing") {
        return "Blogs";
      } else if (path[2] === "inventory") {
        return "Gestión de Productos";
      } else if (path[2] === "club") {
        return "ClubHallyu";
      } else if (path[2] === "team") {
        return "Equipo Hallyu";
      }
    },
    getMenu() {
      const route = this.$route;
      const path = route.path.split("/");
      let menu = [];
      if (path[2] === "dashboard") {
        return menu;
      } else if (path[2] === "general") {
        return menu;
      } else if (path[2] === "editing") {
        return menu;
      } else if (path[2] === "inventory") {
        menu = [
          { name: "Inventario de productos", link: "total" },
          { name: "Productos publicados", link: "published" },
          { name: "Productos en oferta", link: "offering" },
        ];
        return menu;
      } else if (path[2] === "club") {
        return menu;
      } else if (path[2] === "team") {
        return menu;
      }
    },
  },
  mounted() {
    const route = this.$route;
    console.log(route);
  },
};
</script>

<style scoped>
a.nuxt-link-active {
  border-bottom: 2px solid #d4f1f0;
}
</style>
