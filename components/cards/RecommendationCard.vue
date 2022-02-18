<template>
  <div class="w-60 p-1">
    <div class="w-full flex justify-center items-center p-1" :class="{
      'flex-col': !isEven,
      'flex-col-reverse': isEven
    }">
      <!-- COMENTARIO DE LA TARJETA DE RECOMENDACION -->
      <div class="bg-aquamarine py-4 px-2 rounded-lg shadow-lg">
        <p class="text-textColor font-semibold text-sm mb-2 leading-5">
          {{ comment.slice(0, 50) }}...
        </p>
        <div class="w-full flex justify-start items-center my-2">
          <figure
            class="w-8 h-8 flex justify-center items-center rounded-full mr-2"
          >
            <img :src="profileImage" :alt="userName" class="rounded-full" />
          </figure>
          <p class="text-sm text-center text-textColor">
            {{ userName }}
          </p>
        </div>
        <GlobalHeartRate :read="read" :rating="rate" />
      </div>
      <!-- IMAGEN DEL PRODUCTO DE LA REOCOMENDACION -->
      <div class="w-52 h-52 flex justify-center items-center relative">
        <figure
          class="
            w-full
            bg-transparent
            h-full
            rounded-full
            flex
            justify-center
            items-center
            z-10
          "
        >
          <img :src="productImage" :alt="productName" class="rounded-full" />
        </figure>
        <div
          class="
            absolute
            w-full
            h-full
            top-2
            left-2
            bg-primary
            rounded-full
            z-0
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    read: {
      type: Boolean,
      required: null,
    },
    order: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isEven() {
      if (this.order % 2 === 0) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
