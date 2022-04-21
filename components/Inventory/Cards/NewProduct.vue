<template>
  <div
    v-if="getIsModalOpen"
    class="w-10/12 sm:w-3/4 max-w-4xl absolute top-20 left-1/12 sm:left-1/8 z-50 bg-background rounded-lg shadow-md"
  >
    <div class="w-full flex flex-col justify-center items-center p-2">
      <!-- CLOSE BUTTON -->
      <div class="w-full flex justify-end items-center">
        <button
          class="w-6 h-6 flex justify-center items-center"
          @click="closeProductModal"
        >
          <GlobalHIcon
            name="close"
            class="text-textColor hover:text-pink-700"
          />
        </button>
      </div>
      <!-- DATA -->
      <div
        class="w-full flex flex-col lg:flex-row justify-center items-center lg:items-start p-2"
      >
        <!-- PRODUCT IMAGES -->
        <div
          class="w-full sm:w-1/3 lg:w-1/5 p-2 flex flex-col justify-center items-center"
        >
          <!-- THUMBNAIL -->
          <div
            class="relative w-36 h-36 flex justify-center items-center border border-primary rounded-lg"
          >
            <input
              type="file"
              accept=".png, .jpg, jpeg, webp"
              class="absolute w-full h-32 opacity-0 z-60"
              @change="getThumbnail"
            />
            <div
              v-if="!thumbnail.url"
              class="w-full relative px-3 flex justify-center items-center"
            >
              <div class="w-6 h-6 flex justify-center items-center mr-1">
                <GlobalHIcon name="upload" class="text-textColor" />
              </div>
              <p class="text-textColor text-xs">Imagen Principal</p>
            </div>
            <figure
              v-else
              class="w-full h-32 rounded-lg flex justify-center items-center"
            >
              <img :src="thumbnail.url" alt="" />
            </figure>
          </div>
          <!-- EXTRA IMAGES -->
          <div class="w-36 flex flex-col justify-center items-center mt-3">
            <div class="w-full">
              <p class="text-textColor font-open text-xs">
                Vistas del producto
              </p>
            </div>
            <div class="w-full flex justify-between items-center">
              <div
                class="relative w-10 h-10 flex justify-center items-center border border-primary rounded-lg"
              >
                <input
                  type="file"
                  accept=".png"
                  class="absolute w-full h-10 opacity-0 z-60"
                />
                <div class="w-6 h-6 flex justify-center items-center">
                  <GlobalHIcon name="upload" class="text-textColor" />
                </div>
              </div>
              <div
                class="relative w-10 h-10 flex justify-center items-center border border-primary rounded-lg"
              >
                <input
                  type="file"
                  accept=".png"
                  class="absolute w-full h-10 opacity-0 z-60"
                />
                <div class="w-6 h-6 flex justify-center items-center">
                  <GlobalHIcon name="upload" class="text-textColor" />
                </div>
              </div>
              <div
                class="relative w-10 h-10 flex justify-center items-center border border-primary rounded-lg"
              >
                <input
                  type="file"
                  accept=".png"
                  class="absolute w-full h-10 opacity-0 z-60"
                />
                <div class="w-6 h-6 flex justify-center items-center">
                  <GlobalHIcon name="upload" class="text-textColor" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- PRODUCT INFORMATION -->
        <div
          class="w-full sm:w-2/3 lg:w-4/5 flex flex-col justify-center items-center p-2"
        >
          <div class="w-full flex flex-col justify-center items-start">
            <div
              class="w-full flex flex-wrap justify-start xl:justify-start items-start"
            >
              <!-- PRODUCT NAME -->
              <div class="w-full max-w-xs mr-3">
                <label class="w-full text-textColor font-open text-sm">
                  Nombre del producto
                </label>
                <input
                  v-model="name"
                  type="text"
                  class="w-full text-hBlack font-open text-sm border border-primary rounded-lg outline-none focus:outline-none p-2"
                />
              </div>
              <!-- PRODUCT PRICE AND STOCK -->
              <div
                class="w-full max-w-xs flex flex-wrap justify-start items-center"
              >
                <!-- PRODUCT PRICE -->
                <div class="w-32 mr-3">
                  <label class="w-full text-textColor font-open text-sm">
                    Precio
                  </label>
                  <input
                    v-model="price"
                    type="Number"
                    class="w-full text-hBlack font-open text-sm border border-primary rounded-lg outline-none focus:outline-none p-2"
                  />
                </div>
                <!-- PRODUCT STOCK -->
                <div class="w-32">
                  <label class="w-full text-textColor font-open text-sm">
                    Stock
                  </label>
                  <input
                    v-model="stock"
                    type="Number"
                    class="w-full text-hBlack font-open text-sm border border-primary rounded-lg outline-none focus:outline-none p-2"
                  />
                </div>
              </div>
            </div>
            <!-- PRODUCT SKU -->
            <div class="w-32 mr-3">
              <label class="w-full text-textColor font-open text-sm">
                SKU
              </label>
              <input
                v-model="sku"
                type="text"
                class="w-full text-hBlack font-open text-sm border border-primary rounded-lg outline-none focus:outline-none p-2"
              />
            </div>
            <!-- PRODUCCT DESCRIPTION -->
            <div class="w-full flex flex-col justify-center items-center mt-1">
              <label class="w-full text-textColor font-open text-sm">
                Descripción del producto
              </label>
              <input
                v-model="description"
                type="text"
                class="w-full h-20 text-hBlack font-open text-sm border border-primary rounded-lg outline-none focus:outline-none p-2"
              />
            </div>
          </div>
          <!-- PRODUCT DETAILS -->
          <div
            class="w-full flex flex-col lg:flex-row justify-center items-center md:items-start mt-3"
          >
            <!-- PRODUCT BAND -->
            <div
              class="w-full lg:w-1/3 flex flex-col justify-center items-center pr-3"
            >
              <label class="w-full text-textColor font-open text-sm">
                Banda
              </label>
              <select
                v-model="band"
                name=""
                id=""
                class="w-full text-hBlack font-open text-sm border border-primary rounded-lg outline-none focus:outline-none p-2"
              >
                <option
                  v-for="(band, index) in getBands"
                  :key="index"
                  class="text-xs font-open text-textColor"
                >
                  {{ band.name }}
                </option>
              </select>
            </div>
            <!-- PRODUCT CATEGORY -->
            <div
              class="w-full lg:w-1/3 flex flex-col justify-center items-center pr-3 mt-2 lg:mt-0"
            >
              <!-- CATEGORY -->
              <label class="w-full text-textColor font-open text-sm">
                Category
              </label>
              <select
                v-model="productCategory"
                name=""
                id=""
                class="w-full text-hBlack font-open text-sm border border-primary rounded-lg outline-none focus:outline-none p-2"
              >
                <option
                  v-for="(category, index) in getCategories"
                  :key="index"
                  class="text-xs font-open text-textColor"
                >
                  {{ category.name }}
                </option>
              </select>
              <!-- CLOTHS DETAILS -->
              <div class="w-full flex flex-col justify-center items-center">
                <!-- SIZE -->
                <label class="w-full text-textColor font-open text-sm mt-2">
                  Talla
                </label>
                <select
                  v-model="productSize"
                  name=""
                  id=""
                  class="w-full text-hBlack font-open text-sm border border-primary rounded-lg outline-none focus:outline-none p-2"
                >
                  <option
                    v-for="(size, index) in productSizes"
                    :key="index"
                    class="text-xs font-open text-textColor"
                  >
                    {{ size }}
                  </option>
                </select>
                <!-- COLOR -->
                <label class="w-full text-textColor font-open text-sm mt-2">
                  Color
                </label>
                <select
                  v-model="productColor"
                  name=""
                  id=""
                  class="w-full text-hBlack font-open text-sm border border-primary rounded-lg outline-none focus:outline-none p-2"
                >
                  <option
                    v-for="(color, index) in productColors"
                    :key="index"
                    class="text-xs font-open text-textColor"
                  >
                    {{ color }}
                  </option>
                </select>
              </div>
            </div>
            <!-- PRODUCT OFFERS -->
            <div
              class="w-full lg:w-1/3 flex flex-col justify-center items-center pr-3 mt-2 lg:mt-0"
            >
              <label class="w-full text-textColor font-open text-sm">
                Ofertas
              </label>
              <select
                v-model="productBand"
                name=""
                id=""
                class="w-full text-hBlack font-open text-sm border border-primary rounded-lg outline-none focus:outline-none p-2"
              >
                <option
                  v-for="(offer, index) in productOffers"
                  :key="index"
                  class="text-xs font-open text-textColor"
                >
                  {{ offer }}
                </option>
              </select>
              <!-- PRODUCT DISCOUNT -->
              <div class="w-full flex flex-col justify-center items-center">
                <!-- DISCOUNT -->
                <div class="w-full">
                  <label class="w-full text-textColor font-open text-sm">
                    Porcentaje
                  </label>
                  <input
                    v-model="productDiscount"
                    type="Number"
                    class="w-full text-hBlack font-open text-sm border border-primary rounded-lg outline-none focus:outline-none p-2"
                  />
                </div>
              </div>
              <!-- PRODUCT DISCOUNT BY TIME -->
              <div class="w-full flex flex-col justify-center items-center">
                <!-- DISCOUNT TIME -->
                <div class="w-full">
                  <label class="w-full text-textColor font-open text-sm">
                    Porcentaje
                  </label>
                  <input
                    v-model="productDiscountTime"
                    type="Number"
                    class="w-full text-hBlack font-open text-sm border border-primary rounded-lg outline-none focus:outline-none p-2"
                  />
                </div>
                <!-- TIME -->
                <div class="w-full">
                  <label class="w-full text-textColor font-open text-sm">
                    Tiempo
                  </label>
                  <input
                    v-model="productOfferingTime"
                    type="date"
                    class="w-full text-hBlack font-open text-sm border border-primary rounded-lg outline-none focus:outline-none p-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    name: "",
    price: 0,
    stock: 0,
    description: "",
    band: "",
    productOffers: ["Descuento", "Tiempo"],
    productDiscount: 0,
    productDiscountTime: 0,
    productOfferingTime: "",
    sku: "",
    thumbnail: {
      object: null,
      url: null,
    },
  }),
  computed: {
    ...mapGetters("product", ["getIsModalOpen"]),
    ...mapGetters("bands", ["getBands"]),
    ...mapGetters("categories", ["getCategories"]),
    isThumbnail() {
      return this.thumbnail.url !== null && this.thumbnail.url !== "";
    },
    isName() {
      return this.name !== null && this.name !== "";
    },
    isPrice() {
      return this.price !== null && this.price !== "" && this.price >= 0;
    },
    isStock() {
      return this.price !== null && this.price !== "" && this.price >= 0;
    },
    isSKU() {
      return this.name !== null && this.name !== "";
    },
    isDescription() {
      return this.description !== null && this.decription !== "";
    },
  },
  mounted() {
    this.fetchBands();
    this.fetchCategories();
  },
  methods: {
    ...mapActions("product", ["showProductModal"]),
    ...mapActions("categories", ["fetchCategories"]),
    ...mapActions("bands", ["fetchBands"]),
    closeProductModal() {
      if (this.getIsModalOpen) {
        this.showProductModal(false);
      } else {
        this.showProductModal(true);
      }
    },
    getThumbnail(e) {
      const file = e.target.files[0];
      const imgObj = file;
      const imgUrl = URL.createObjectURL(file);
      this.thumbnail.url = imgUrl;
      this.thumbnail.object = imgObj;
    },
    uploadPr() {
      const product = {
        name: this.name,
        thumbnail: this.thumbnail.object,
        price: this.price,
        stock: this.stock,
      };
    },
  },
};
</script>
