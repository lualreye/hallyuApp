<template>
  <div class="w-full max-w-5xl my-3">
    <!-- LABELS -->
    <div
      class="
        w-full
        flex
        justify-center
        items-center
        divide-x divide-textColor
        rounded-lg
        px-2
      "
      :class="{ 'bg-aquamarine': isSelected }"
    >
      <!-- DETALLE DE PRODUCTO -->
      <div
        class="
          w-2/5
          md:w-3/12
          flex
          justify-start
          items-center
          text-hBlack text-xs
          md:text-base
          font-open
        "
      >
        <div class="w-auto flex justify-center items-center">
          <button
            class="
              border border-textColor
              w-6
              h-6
              mr-2
              rounded-lg
              flex
              justify-center
              items-center
            "
            @click="select"
          >
            <div v-if="isSelected" class="w-4 h-4 rounded-lg bg-green-500" />
          </button>
          <figure
            class="
              w-10
              h-10
              flex
              justify-center
              items-center
              bg-lightPink
              rounded-lg
              mr-2
            "
          >
            <img
              :src="thumbnail"
              :alt="name"
              class="
                flex
                justify-center
                items-center
                rounded-lg
                object-cover object-center
              "
            />
          </figure>
        </div>
        <p class="text-textColor w-auto font-open text-xs lg:text-base">
          {{ getNameCapitalize.substr(0, 15) }}
        </p>
      </div>
      <!-- CATEGORIA DEL PRODUCTO -->
      <div
        class="
          w-2/12
          hidden
          md:flex
          justify-center
          items-center
          text-hBlack text-xs
          lg:text-base
          font-open
        "
      >
        {{ category[0].name.substr(0, 15) }} ...
      </div>
      <div
        class="
          w-1/12
          hidden
          md:flex
          justify-center
          items-center
          text-hBlack text-xs
          md:text-base
          font-open
        "
      >
        {{ stock }}
      </div>
      <div
        class="
          w-1/12
          hidden
          md:flex
          justify-center
          items-center
          text-hBlack text-xs
          md:text-base
          font-open
        "
      >
        $ {{ getPrice }}
      </div>
      <div
        class="
          w-1/5
          md:w-1/12
          flex
          justify-center
          items-center
          text-hBlack text-xs
          md:text-sm
          font-open
        "
      >
        <button
          v-if="isPublished"
          @click="publish"
          class="
            px-2
            py-1
            flex
            justify-center
            items-center
            rounded-lg
            bg-primary
          "
        >
          Sí
        </button>
        <button
          v-else
          @click="publish"
          class="
            px-2
            py-1
            flex
            justify-center
            items-center
            rounded-lg
            bg-lightPink
          "
        >
          No
        </button>
      </div>
      <div
        class="
          w-2/12
          hidden
          md:flex
          justify-center
          items-center
          text-hBlack text-xs
          lg:text-sm
          font-open
        "
      >
        <p
          v-if="offered === 'Descuento'"
          class="p-2 flex justify-center items-center rounded-lg bg-primary"
        >
          Desc. | %{{ offer }}
        </p>
        <p
          v-else-if="offered === 'Tiempo'"
          class="p-2 flex justify-center items-center rounded-lg bg-primary"
        >
          Time | <span class="text-hBlack text-xs">{{ offer.time }}</span> | %{{
            offer.discount
          }}
        </p>
        <p
          v-else
          class="
            w-16
            h-7
            flex
            justify-center
            items-center
            rounded-lg
            bg-lightPink
          "
        >
          No tiene
        </p>
      </div>
      <div
        class="
          w-2/5
          md:w-2/12
          flex
          justify-center
          items-center
          text-hBlack text-xs
          md:text-base
          font-open
        "
      >
        <div v-if="isSelected" class="w-full flex justify-center items-center">
          <button
            @click="edit"
            class="w-6 h-6 mr-3 flex justify-center items-center"
          >
            <GlobalHIcon name="edit" class="text-gray-500" />
          </button>
          <button
            @click="deletePr"
            class="w-6 h-6 flex justify-center items-center"
          >
            <GlobalHIcon name="delete" class="text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    published: {
      type: Boolean,
      required: true,
    },
    offer: {
      type: [Object, Number, String],
      required: false,
    },
    offered: {
      type: [Boolean, String, Object],
      required: true,
    },
  },
  computed: {
    ...mapGetters("product", ["getIsModalOpen"]),
    getPrice() {
      const price = Number((Math.abs(this.price) * 100).toPrecision(15));
      return Math.round(price) / (100 * Math.sign(this.price));
    },
    getNameCapitalize() {
      return this.name.charAt(0).toUpperCase() + this.name.slice(1);
    },
    isSelected() {
      return this.selected;
    },
    isPublished() {
      return this.published;
    },
  },
  methods: {
    ...mapActions("inventoryTotal", ["selectProduct", "unselectProduct"]),
    ...mapActions("product", [
      "deleteProduct",
      "publishProduct",
      "showProductModal",
    ]),
    select() {
      if (this.isSelected) {
        this.unselectProduct();
      } else {
        this.selectProduct(this.id);
      }
    },
    deletePr() {
      this.deleteProduct(this.id);
    },
    publish() {
      if (this.isPublished) {
        this.publishProduct({
          id: this.id,
          publish: false,
        });
      } else {
        this.publishProduct({
          id: this.id,
          publish: true,
        });
      }
    },
    edit() {
      if (this.getIsModalOpen) {
        this.showProductModal(false);
      } else {
        this.showProductModal(true);
      }
    },
  },
};
</script>
