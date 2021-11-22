<template>
  <div class="w-48 h-48 p-2">
    <div class="w-full flex flex-col justify-center items-center p-1">
      <!-- COMENTARIO DE LA TARJETA DE RECOMENDACION -->
      <div class="bg-aquamarine py-4 px-2 rounded-lg shadow-lg">
        <p class="text-textColor font-semibold text-sm mb-2">
          {{ comment.slice(0, 50) }}
        </p>
        <heart-progress-bar />
      </div>
      <!-- IMAGEN DEL PRODUCTO DE LA REOCOMENDACION -->
    </div>
  </div>
</template>

<script>
import HeartProgressBar from "~/components/global/HeartProgressBar";
export default {
  components: {
    HeartProgressBar,
  },
  data: () => ({
    comment: "Este es un comentario de prueba en el que vamos a trabajar mucho",
  }),
};
</script>
