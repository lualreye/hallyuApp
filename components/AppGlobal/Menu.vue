<template>
  <aside
    class="h-screen max-h-screen border-r border-gray-200 flex justify-center items-center sticky top-0 left-0 bottom-0 overflow-hidden"
    :class="{
      'w-12': !isMenuOpen,
      'w-64': isMenuOpen,
    }"
  >
    <div class="w-full h-full flex flex-col justify-start items-center">
      <!-- LOGO SECTION -->
      <div
        class="w-full h-auto sm:h-20 justify-evenly items-center sm:flex my-2"
        :class="{ 'p-1': !isMenuOpen, 'p-6': isMenuOpen }"
      >
        <div class="hidden sm:flex justify-center items-center">
          <figure
            class="w-32 flex justify-center items-center"
            :class="{ hidden: !isMenuOpen }"
          >
            <img src="@/static/images/logo/logotipo.png" alt="HallyuStore" />
          </figure>
          <button
            class="w-6 h-6 flex justify-center items-center"
            @click="showMenu"
          >
            <GlobalHIcon name="dashboardMenu" class="text-primary" />
          </button>
        </div>
        <figure class="w-10 h-10 flex justify-center items-center p-1 sm:hidden">
          <img src="@/static/images/logo/imagotipo.png" alt="hallyStore" />
        </figure>
      </div>
      <!-- MENU SECTION -->
      <ul
        class="w-full flex flex-col justiy-center items-center"
        :class="{ 'px-1': !isMenuOpen, 'px-3': isMenuOpen }"
      >
        <nuxt-link
          v-for="(item, index) in menu"
          :key="index"
          :to="item.link"
          class="w-full flex items-center h-8"
          :class="{
            'justify-start': isMenuOpen,
            'justify-center': !isMenuOpen,
          }"
        >
          <div class="w-5 h-5 flex justify-center items-center mr-0 sm:mr-2">
            <GlobalHIcon :name="item.icon" class="text-textColor font-medium" />
          </div>
          <p class="text-textColor text-sm" :class="{ hidden: !isMenuOpen }">
            {{ item.name }}
          </p>
        </nuxt-link>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  data: () => ({
    menu: [
      {
        name: "Resumen de ventas",
        link: "/admin/dashboard",
        icon: "incomes",
      },
      {
        name: "Configuración de ventas",
        link: "/admin/general",
        icon: "settings",
      },
      {
        name: "Blogs",
        link: "/admin/blog",
        icon: "edit",
      },
      {
        name: "Gestión de productos",
        link: "/admin/inventory/total",
        icon: "inventory",
      },
      {
        name: "ClubHallyu",
        link: "/admin/club",
        icon: "cloud",
      },
      {
        name: "Equipo Hallyu",
        link: "/admin/team",
        icon: "team",
      },
    ],
    isMenuOpen: false,
  }),
  methods: {
    showMenu() {
      if (this.isMenuOpen) {
        this.isMenuOpen = false;
      } else {
        this.isMenuOpen = true;
      }
    },
  },
};
</script>

<style scoped>
a.nuxt-link-active {
  border-right: 3px solid #87c7c9;
  background: #d3f2f3;
  border-radius: 4px 0 0 4px;
}
</style>