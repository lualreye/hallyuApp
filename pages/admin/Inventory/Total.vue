<template>
  <div class="w-full max-w-5xl">
    <!-- LABELS -->
    <div
      class="w-full flex justify-center itesm-center divide-x divide-textColor"
    >
      <div
        class="w-1/3 md:w-3/12 flex justify-center items-center text-hBlack text-xs md:text-base font-open"
      >
        Productos
      </div>
      <div
        class="w-2/12 hidden md:flex justify-center items-center text-hBlack text-xs md:text-base font-open"
      >
        Categoría
      </div>
      <div
        class="w-1/12 hidden md:flex justify-center items-center text-hBlack text-xs md:text-base font-open"
      >
        Stock
      </div>
      <div
        class="w-1/12 hidden md:flex justify-center items-center text-hBlack text-xs md:text-base font-open"
      >
        Precio
      </div>
      <div
        class="w-1/3 md:w-2/12 flex justify-center items-center text-hBlack text-xs md:text-base font-open"
      >
        Publicado
      </div>
      <div
        class="w-2/12 hidden md:flex justify-center items-center text-hBlack text-xs md:text-base font-open"
      >
        Oferta
      </div>
      <div
        class="w-1/3 md:w-2/12 flex justify-center items-center text-hBlack text-xs md:text-base font-open"
      ></div>
    </div>
    <!-- PRODUCTS -->
    <div class="w-full flex flex-col justify-center items-center mt-2">
      <InventoryCardsProductDetail
        v-for="(product, index) in getTotalProducts"
        :key="index"
        :name="product.name"
        :thumbnail="product.thumbnail"
        :stock="product.stock"
        :price="product.price"
        :category="product.category"
        :published="product.published"
        :offered="product.offered"
        :offer="product.offer"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    getTotalProducts: [
      {
        name:"camisa",
        thumbnail: require("@/static/images/idols/han.jpg"),
        stock: 25,
        price: 28.537,
        category: "moda",
        published: true,
        offered: false,
        offer: {}
      },
      {
        name:"camisa",
        thumbnail: require("@/static/images/idols/han.jpg"),
        stock: 25,
        price: 28.537,
        category: "moda",
        published: true,
        offered: true,
        offer: {
          name: "tiempo"
        }
      },
      {
        name:"camisa",
        thumbnail: require("@/static/images/idols/han.jpg"),
        stock: 25,
        price: 28.537,
        category: "moda",
        published: false,
        offered: true,
        offer: {
          name: "descuento"
        }
      },
      {
        name:"camisa",
        thumbnail: require("@/static/images/idols/han.jpg"),
        stock: 25,
        price: 28.537,
        category: "moda",
        published: true,
        offered: false,
        offer: {}
      },
    ]
  })
}
</script>
