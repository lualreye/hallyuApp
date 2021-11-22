<template>
  <div class="w-48 h-48 p-2">
    <div class="w-full flex flex-col justify-center items-center p-1">
      <!-- COMENTARIO DE LA TARJETA DE RECOMENDACION -->
      <div class="bg-aquamarine py-4 px-2 rounded-lg shadow-lg">
        <p class="text-textColor font-semibold text-sm mb-2">
          {{ comment.slice(0, 50) }}
        </p>
        <div class="w-full flex justify-center items-center">
          <figure class="w-8 h-8 flex justify-center items-center rounded-full">
            <img :src="profileImage" :alt="userName" class="rounded-full" />
          </figure>
          <p class="text-sm text-center text-textColor">
            {{ userName }}
          </p>
        </div>
        <heart-progress-bar />
      </div>
      <!-- IMAGEN DEL PRODUCTO DE LA REOCOMENDACION -->
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
  }
};
</script>
