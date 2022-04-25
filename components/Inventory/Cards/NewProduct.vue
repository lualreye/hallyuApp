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
              <img
                :src="thumbnail.url"
                alt=""
                class="w-full h-32 object-cover object-center rounded-lg"
              />
            </figure>
          </div>
          <!-- EXTRA IMAGES -->
          <div class="w-36 flex flex-col justify-center items-center mt-3">
            <div class="w-full">
              <p class="text-textColor font-open text-xs">
                Vistas del producto
              </p>
            </div>
            <div
              v-if="!fashionTaken"
              class="w-full flex justify-between items-center"
            >
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
                class="w-full text-hBlack font-open text-sm border border-primary rounded-lg outline-none focus:outline-none p-2"
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
                <option class="text-xs font-open text-textColor">
                  Sin banda
                </option>
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
                v-model="category"
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
              <div
                v-if="fashionTaken"
                class="w-full flex flex-col justify-center items-center"
              >
                <!-- SIZE -->
                <label class="w-full text-textColor font-open text-sm mt-2">
                  Talla
                </label>
                <div
                  v-if="sizes.length"
                  class="w-full flex justify-start items-center mb-1"
                >
                  <span
                    v-for="(size, index) in sizes"
                    :key="index"
                    class="bg-lightPink flex justify-center items-center rounded-lg text-textColor px-1"
                  >
                    <p class="text-textColor font-open mr-1">
                      {{ size }}
                    </p>
                    <button
                      class="w-4 h-4 flex justify-center bg-gray-300 itemscenter rounded-full"
                      @click="deleteSize(size)"
                    >
                      <GlobalHIcon name="close" />
                    </button>
                  </span>
                </div>
                <input
                  v-model="size"
                  type="text"
                  @keyup.enter="onSizeEnter"
                  class="w-full text-hBlack font-open text-sm border border-primary rounded-lg outline-none focus:outline-none p-2"
                />
                <!-- COLOR -->
                <div class="w-full flex flex-col justify-center items-cen">
                  <div v-if="images.length" class="w-full flex justify-center">
                    <figure v-for="(image, index) in imagesByColor" :key="index" class="border border-primary w-10 h-10 flex justify-center items-center">
                      <img :src="image" alt="">
                    </figure>
                    <div class="w-4 h-4 flex justify-center border border-primary"></div>
                  </div>
                  <label class="w-full text-textColor font-open text-sm mt-2">
                    Color
                  </label>
                  <div
                    class="w-full text-hBlack font-open text-sm border border-primary rounded-lg outline-none focus:outline-none p-2"
                  >
                    <input type="color" />
                  </div>
                  <!-- GET IMAGE BY COLOR -->
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
            <!-- PRODUCT OFFERS -->
            <div
              class="w-full lg:w-1/3 flex flex-col justify-center items-center pr-3 mt-2 lg:mt-0"
            >
              <label class="w-full text-textColor font-open text-sm">
                Ofertas
              </label>
              <select
                v-model="offer"
                class="w-full text-hBlack font-open text-sm border border-primary rounded-lg outline-none focus:outline-none p-2"
              >
                <option class="text-xs font-open text-textColor">
                  Sin Oferta
                </option>
                <option
                  v-for="(offer, index) in productOffers"
                  :key="index"
                  class="text-xs font-open text-textColor"
                >
                  {{ offer }}
                </option>
              </select>
              <!-- PRODUCT DISCOUNT -->
              <div
                v-if="discountTaken"
                class="w-full flex flex-col justify-center items-center"
              >
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
              <div
                v-else-if="timeDiscountTaken"
                class="w-full flex flex-col justify-center items-center"
              >
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
      <!-- BUTTONS -->
      <div class="w-full flex justify-center md:justify-end items-center my-2">
        <button
          class="py-2 w-44 bg-lightPink flex justify-center items-center rounded-lg text-textColor mr-2"
          @click="closeProductModal"
        >
          Cancelar
        </button>
        <button
          class="py-2 w-44 flex justify-center items-center rounded-lg text-textColor"
          :class="{
            'bg-primary': isReadyToUpload,
            'bg-gray-400': !isReadyToUpload,
          }"
          :disable="isReadyToUpload"
          @click="uploadPr"
        >
          Guardar
        </button>
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
    category: "",
    offer: "",
    size: "",
    sizes: [],
    productSizes: ["s", "m", "l"],
    productOffers: ["Descuento", "Tiempo"],
    productDiscount: 0,
    productDiscountTime: 0,
    productOfferingTime: "",
    sku: "",
    thumbnail: {
      object: null,
      url: null,
    },
    imagesByColor: [],
    images: [
      {
        object: null,
        url: null,
      },
      {
        object: null,
        url: null,
      },
      {
        object: null,
        url: null,
      },
    ],
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
      return this.price !== null && this.price !== "" && this.price > 0;
    },
    isStock() {
      return this.stock !== null && this.stock !== "" && this.stock >= 0;
    },
    isSKU() {
      return this.sku !== null && this.sku !== "";
    },
    isDescription() {
      return this.description !== null && this.decription !== "";
    },
    isCategory() {
      return this.category !== null && this.category !== "";
    },
    isOffer() {
      return this.offer !== null && this.offer !== "";
    },
    fashionTaken() {
      return this.category === "moda";
    },
    discountTaken() {
      return this.offer === "Descuento";
    },
    timeDiscountTaken() {
      return this.offer === "Tiempo";
    },
    isReadyToUpload() {
      return (
        this.isName &&
        this.isPrice &&
        this.isStock &&
        this.isSKU &&
        this.isDescription &&
        this.isCategory &&
        this.isOffer &&
        this.isThumbnail
      );
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
        console.log("Estamos cerrando el modal");
        (this.name = ""),
          (this.price = 0),
          (this.stock = 0),
          (this.description = ""),
          (this.band = ""),
          (this.category = ""),
          (this.offer = ""),
          (this.productOffers = ["Descuento", "Tiempo"]),
          (this.productDiscount = 0),
          (this.productDiscountTime = 0),
          (this.productOfferingTime = ""),
          (this.sku = ""),
          (this.thumbnail = {
            object: null,
            url: null,
          }),
          (this.images = [
            {
              object: null,
              url: null,
            },
            {
              object: null,
              url: null,
            },
            {
              object: null,
              url: null,
            },
          ]),
          this.showProductModal(false);
      } else {
        this.showProductModal(true);
      }
    },
    onSizeEnter() {
      this.sizes.push(this.size);
      this.size = "";
    },
    getThumbnail(e) {
      const file = e.target.files[0];
      console.log(file);
      const imgObj = file;
      const imgUrl = URL.createObjectURL(file);
      this.thumbnail.url = imgUrl;
      this.thumbnail.object = imgObj;
      console.log(this.thumbnail);
    },
    deleteSize(s) {
      const index = this.sizes.findIndex((size) => size === s);
      this.sizes.splice(index, 1);
    },
    uploadPr() {
      let offerType;
      if (this.offer === "Descuento") {
        offerType = productDiscount;
      } else if (this.offer === "Tiempo") {
        offerType = {
          discount: this.productDiscountTime,
          time: this.productOfferingTime,
        };
      } else {
        offerType = {};
      }
      const product = {
        name: this.name,
        thumbnail: this.thumbnail.object,
        images: this.images,
        price: this.price,
        stock: this.stock,
        description: this.description,
        band: this.band,
        category: this.category,
        offered: this.isOffer,
        offer: offerType,
        clothes: {
          size: this.sizes,
          color: this.colors,
        },
        likes: 0,
        published: false,
        sales: 0,
        sku: this.sku,
        favorite: false,
      };
      console.log(product);
    },
  },
};
</script>
