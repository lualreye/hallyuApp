<template>
  <div class="w-full">
    <!-- MENU ACCORDING TO THE ROUTE -->
    <div class="w-full mt-3 flex justify-start items-center">
      <ul class="flex justify-center items-center">
        <nuxt-link
          v-for="(item, index) in menu"
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
    <!-- INVENTORY ROUTES -->
    <nuxt-child class="w-full" />
  </div>
</template>

<script>
export default {
  layout: "app",
  data: () => ({
    menu: [
      { name: "Inventario de productos", link: "inventory/total" },
      { name: "Productos publicados", link: "inventory/published" },
      { name: "Productos en oferta", link: "inventory/offering" },
    ],
  }),
};
</script>
