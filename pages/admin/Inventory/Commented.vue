<template>
  <div class="w-full max-w-5xl">
    <template v-if="getProductsCommented.length">
      <div
        v-for="(comment, index) in getProductsCommented"
        :key="index"
        class="flex mb-6 justify-start items-center"
      >
        <div class="flex justify-center items-center mr-3">
          <img :src="comment.thumbnail" class="w-12 h-12" />
        </div>
        <div class="flex flex-col">
          <div class="flex">
            <img :src="comment.userImage" class="w-5 h-5 mr-2" />
            <p class="text-hBlack text-sm mb-2">
              {{ comment.userName }}
            </p>
          </div>
          <p class="text-base text-hBlack">
            {{ comment.comment }}
          </p>
        </div>
        <button
          @click="removeComment(comment.commentId)"
          class="
            w-6
            h-6
            flex
            shadow-md
            justify-center
            items-center
            bg-secondary
            rounded-full
            p-1
            ml-3
          "
        >
          <h-icon name="delete" class="text-textColor" />
        </button>
      </div>
    </template>
    <div class="w-full bg-gray-300 h-px my-3" />
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
    ...mapGetters("comments", ["getProductsCommented"]),
    isSelected() {
      return this.selectedProduct;
    },
  },
  mounted() {
    if (!this.getTotalProducts.length) {
      this.fetchProducts();
    }
    if (!this.getProductsCommented.length) {
      this.fetchCommentedProducts();
    }
  },
  methods: {
    ...mapActions("inventoryTotal", ["fetchProducts"]),
    ...mapActions("comments", ["fetchCommentedProducts", "deleteComment"]),
    select(id) {
      this.selectedProduct = id;
    },
    closeModal() {
      this.selectedProduct = "";
    },
    removeComment(id) {
      this.deleteComment(id);
    },
  },
};
</script>
