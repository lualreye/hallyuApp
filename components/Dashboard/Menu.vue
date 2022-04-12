<template>
  <nav
    class="w-56 h-screen border-r border-textColor flex justify-center items-center"
  >
    <div class="w-full h-full flex flex-col justify-start items-center">
      <!-- LOGO SECTION -->
      <div class="w-full h-20 flex justify-evenly items-center p-6">
        <figure class="w-32 flex justify-center items-center">
          <img src="@/static/images/logo/logotipo.png" alt="HallyuStore" />
        </figure>
        <button
          class="w-6 h-6 flex justify-center items-center"
          @click="showMenu"
        >
          <GlobalHIcon name="dashboardMenu" class="text-primary" />
        </button>
      </div>
      <!-- MENU SECTION -->
      <ul class="w-full flex flex-col justiy-center items-center px-3">
        <nuxt-link
          v-for="(item, index) in menu"
          :key="index"
          :to="item.link"
          class="w-full flex justify-start items-center h-8"
        >
          <div class="w-5 h-5 flex justify-center items-center mr-2">
            <GlobalHIcon :name="item.icon" class="text-textColor font-medium" />
          </div>
          <p class="text-textColor text-sm">
            {{ item.name }}
          </p>
        </nuxt-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    menu: [
      {
        name: "Resumen de ventas",
        link: "sales",
        icon: "incomes",
      },
      {
        name: "Configuración de ventas",
        link: "general",
        icon: "settings",
      },
      {
        name: "Blogs",
        link: "editing",
        icon: "edit",
      },
      {
        name: "Gestión de productos",
        link: "inventory",
        icon: "inventory",
      },
      {
        name: "ClubHallyu",
        link: "club",
        icon: "cloud",
      },
    ],
  }),
  methods: {
    showMenu() {
      console.log("Abrir/cerrar menu");
    },
  },
};
</script>
