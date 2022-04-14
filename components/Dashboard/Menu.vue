<template>
  <aside
    class="h-screen max-h-screen border-r border-gray-200 flex justify-center items-center"
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
          <div class="w-5 h-5 flex justify-center items-center mr-0 md:mr-2">
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
        link: "dashboard",
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
