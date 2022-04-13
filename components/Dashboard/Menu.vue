<template>
  <nav
    class="h-screen border-r border-gray-200 flex justify-center items-center"
    :class="{
      'w-12': !isMenuOpen,
      'w-56': isMenuOpen,
    }"
  >
    <div class="w-full h-full flex flex-col justify-start items-center">
      <!-- LOGO SECTION -->
      <div
        class="w-full h-20 flex justify-evenly items-center"
        :class="{ 'p-1': !isMenuOpen, 'p-6': isMenuOpen }"
      >
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
      <!-- MENU SECTION -->
      <ul
        class="w-full flex flex-col justiy-center items-center"
        :class="{ 'px-1': !isMenuOpen, 'px-3': isMenuOpen }"
      >
        <nuxt-link
          v-for="(item, index) in menu"
          :key="index"
          :to="item.link"
          class="w-full flex justify-start items-center h-8"
          :class="{
            'justify-start': isMenuOpen,
            'justify-center': !isMenuOpen,
          }"
        >
          <div class="w-5 h-5 flex justify-center items-center mr-2">
            <GlobalHIcon :name="item.icon" class="text-textColor font-medium" />
          </div>
          <p
            class="text-textColor text-sm"
            :class="{ hidden: !isMenuOpen }"
          >
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
    isMenuOpen: true,
  }),
  methods: {
    showMenu() {
      if (this.isMenuOpen) {
        this.isMenuOpen = false;
        console.log("Falso");
      } else {
        this.isMenuOpen = true;
        console.log("Verdadero");
      }
    },
  },
};
</script>
