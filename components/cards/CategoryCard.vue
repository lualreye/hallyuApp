<template>
  <div
    class="w-48 h-48 flex justify-center items-center card-hover"
    :class="{
      'rotated-1': isEven,
      'rotated-2': !isEven,
    }"
  >
    <nuxt-link
      :to="`/categories/${categoryName}`"
      class="relative rounded-xl flex justify-center items-center"
    >
      <div class="bg-secondary w-48 h-48 rounded-xl">
        <figure
          class="
            w-48
            h-48
            absolute
            bottom-2
            right-2
            bg-lightPink
            p-1
            rounded-xl
            flex
            justify-center
            items-center
          "
        >
          <img
            :src="image"
            :alt="categoryName"
            class="rounded-xl w-full h-48 object-cover object-center"
          />
          <div
            id="image-hover"
            class="
              w-48
              h-48
              absolute
              top-0
              left-0
              right-0
              bottom-0
              z-20
              flex
              justify-center
              items-center
              bg-gray-900
              opacity-30
              rounded-xl
            "
          ></div>
        </figure>
        <p
          class="
            text-white
            bg-aquamarine
            rounded-full
            py-1
            text-xl
            font-open font-bold
            text-center
            shadow-xl
            relative
            -bottom-40
            z-20
            mx-auto
            px-3
            category-name
          "
        >
          {{ categoryName.split(" ").shift().toUpperCase() }}
        </p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    order: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    categoryName: {
      type: String,
      required: true,
    },
  },
  computed: {
    isEven() {
      return this.order % 2 === 0 ? true : false;
    },
  },
};
</script>

<style scoped>
@media only screen and (min-width: 1024px) {
  .rotated-1 {
    transform: rotate(8deg);
  }
  .rotated-2 {
    transform: rotate(-12deg);
  }
  .card-hover:hover {
    z-index: 30;
    cursor: pointer;
  }
  .card-hover:hover #image-hover {
    display: none;
  }
  .card-hover:hover .category-name {
    background: #87c7c9;
  }
}
</style>
