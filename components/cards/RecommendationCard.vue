<template>
  <div class="w-72 p-2">
    <div class="w-full flex flex-col justify-center items-center p-1">
      <!-- COMENTARIO DE LA TARJETA DE RECOMENDACION -->
      <div class="bg-aquamarine py-4 px-2 rounded-lg shadow-lg">
        <p class="text-textColor font-semibold text-sm mb-2 leading-5">
          {{ comment.slice(0, 50) }}...
        </p>
        <div class="w-full flex justify-start items-center my-2">
          <figure class="w-8 h-8 flex justify-center items-center rounded-full mr-2">
            <img :src="profileImage" :alt="userName" class="rounded-full" />
          </figure>
          <p class="text-sm text-center text-textColor">
            {{ userName }}
          </p>
        </div>
        <heart-progress-bar :rating="3" />
      </div>
      <!-- IMAGEN DEL PRODUCTO DE LA REOCOMENDACION -->
      <div class="w-52 h-52 flex justify-center items-center relative">
        <figure class="w-full bg-transparent h-full rounded-full flex justify-center items-center z-10">
          <img :src="productImage" :alt="productName" class="rounded-full">
        </figure>
        <div class="absolute w-full h-full top-2 left-2 bg-primary rounded-full z-0" />
      </div>
    </div>
  </div>
</template>

<script>
import HeartProgressBar from "~/components/global/HeartProgressBar";
import HIcon from "../global/HIcon.vue";
export default {
  components: {
    HeartProgressBar,
    HIcon,
  },
  props: {
    comment: {
      type: String,
      required: true
    },
    profileImage: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true
    },
    productImage: {
      type: String,
      required: true
    },
    productName: {
      type: String,
      required: true
    },
  }
};
</script>
