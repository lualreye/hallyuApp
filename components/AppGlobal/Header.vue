<template>
  <header
    class="px-1 sm:px-2 md:px-4 flex w-full shrink justify-center items-center mb-1 sticky top-0 left-0 right-0 bg-background"
  >
    <div
      class="w-full flex justify-center items-center border-b border-primary pb-3 py-5"
    >
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
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    userName: "Luis Reyes",
  }),
  computed: {
    ...mapGetters("user", ["getUser"]),
    getHeaderTitle() {
      const route = this.$route
      const path = route.path.split("/").pop()
      if(path === "dashboard") {
        return "Resumen de Ventas"
      } else if (path === "general") {
        return "Configuración General"
      } else if (path === "editing") {
        return "Blogs"
      } else if( path === "inventory") {
        return  "Gestión de Productos"
      } else if (path === "club") {
        return "ClubHallyu"
      } else if (path === "team") {
        return "Equipo Hallyu"
      }
    }
  },
  mounted() {
    const route = this.$route
    console.log(route)
  }
};
</script>
