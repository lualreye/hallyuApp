<template>
  <div class="w-full max-w-5xl">
    <div
      v-if="getTotalProducts.length"
      class="w-full flex flex-col justify-center items-center"
    >
      <div
        v-for="(product, index) in getTotalProducts"
        :key="index"
        class="w-full flex justify-center items-center mb-3"
      >
        <div
          class="
            w-full
            flex
            justify-start
            items-center
            divide-x divide-textColor
            rounded-lg
            px-2
          "
          :class="{ 'bg-aquamarine': isSelected === product.id }"
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
                  :src="product.thumbnail"
                  :alt="product.name"
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
              {{ product.name.substr(0, 15) }}
            </p>
          </div>
          <!-- ACTION BUTTON -->
          <button
            @click="select(product.id)"
            class="w-6 h-6 flex justify-center items-center"
          >
            <h-icon name="comment" class="text-textColor" />
          </button>
        </div>
      </div>
    </div>
    <comment-modal
      :productSelected="selectedProduct"
      @close-comment-modal="closeModal"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import HIcon from "../../../components/Global/HIcon.vue";
import CommentModal from "../../../components/Inventory/CommentModal.vue";
export default {
  components: { HIcon, CommentModal },
  data: () => ({
    selectedProduct: "",
  }),
  computed: {
    ...mapGetters("inventoryTotal", ["getTotalProducts"]),
    isSelected() {
      return this.selectedProduct;
    },
  },
  mounted() {
    if (!this.getTotalProducts.length) {
      this.fetchProducts();
    }
  },
  methods: {
    ...mapActions("inventoryTotal", ["fetchProducts"]),
    select(id) {
      this.selectedProduct = id;
    },
    closeModal() {
      this.selectedProduct = "";
    },
  },
};
</script>
