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
      max-w-md
      rounded-r-3xl
      shadow-md
      z-50
      py-4
      px-2
      flex flex-col
      justify-between
      transition-all
    "
    :class="{
      'left-0': showMenu,
      '-left-2/3': !showMenu,
    }"
  >
    <div class="w-full flex justify-end items-center">
      <GlobalIconButton
        iconName="close"
        classes="bg-aquamarine"
        @click="getMenu"
      />
    </div>
    <nav class="flex flex-col justify-col items-center justify-start">
      <ul v-for="(item, i) in menu" :key="i" class="mb-6">
        <li @click="closeMenu">
          <nuxt-link
            :to="item.link"
            class="text-2xl text-textColor font-junegull mb-4 relative"
          >
            <p
              class="
                text-font-junegull
                relative
                mb-4
                text-textColor text-xl
                z-10
              "
            >
              {{ item.name }}
            </p>
            <span
              class="
                z-0
                w-full
                h-3
                lg:h-4
                xl:h-5
                bg-yellow
                absolute
                rounded-lg
                bottom-0
                right-0
              "
              :class="{
                'opacity-0': !getLink(item.link),
                'opacity-1': getLink(item.link),
              }"
            ></span>
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="w-full px-2">
      <div v-if="!user" class="w-full">
        <div class="w-full1 flex justify-center mb-3" @click="closeMenu">
          <nuxt-link
            to="/SignIn"
            class="
              w-full
              py-4
              shadow-md
              rounded-md
              bg-primary
              font-junegull
              text-textColor
              flex
              justify-center
            "
          >
            Inicia Sesión
          </nuxt-link>
        </div>
        <div class="w-full flex justify-center" @click="closeMenu">
          <nuxt-link
            to="/SignUp"
            class="
              w-full
              py-4
              shadow-md
              rounded-md
              bg-secondary
              font-junegull
              text-textColor
              flex
              justify-center
            "
          >
            Registrarme
          </nuxt-link>
        </div>
      </div>
      <div v-else class="w-full">
        <GlobalHButton
          name="Cerrar sesión"
          buttonColor="primary"
          @click="logout"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    menu: [
      {
        link: "/",
        name: "Inicio",
      },
      // {
      //   link: "/offers",
      //   name: "Ofertas",
      // },
      {
        link: "/categories",
        name: "Productos",
      },
      {
        link: "/bands",
        name: "Bandas",
      },
      {
        link: "/blog",
        name: "Blog",
      },
      {
        link: "/contacts",
        name: "Contáctanos",
      },
    ],
  }),
  computed: {
    ...mapGetters("config_drawer", ["showMenu"]),
    ...mapGetters("user", ["getUser"]),
    user() {
      return this.getUser === null ? false : true;
    },
  },
  methods: {
    ...mapActions("config_drawer", ["activeMenu"]),
    ...mapActions("user", [
      "activeSignIn",
      "activeSignUp",
      "showModal",
      "signUserOut",
    ]),
    getMenu() {
      if (this.showMenu) {
        this.activeMenu(false);
      } else {
        this.activeMenu(true);
      }
    },
    getLink(path) {
      if (this.$route.path.split("/")[1] === path.replace("/", "")) {
        return true;
      }
      if (
        this.$route.path.split("/").join("").includes("products") &&
        path === "/categories"
      ) {
        return true;
      }
      return false;
    },
    closeMenu() {
      if (this.showMenu) {
        this.activeMenu(false);
      }
    },
    logout() {
      location.reload();
      this.activeMenu(false);
    },
  },
};
</script>

