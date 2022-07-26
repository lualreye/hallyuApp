<template>
  <div class="w-60 p-1">
    <div
      class="w-full flex justify-center items-center p-1"
      :class="{
        'flex-col': !isEven,
        'flex-col-reverse': isEven,
      }"
    >
      <!-- COMENTARIO DE LA TARJETA DE RECOMENDACION -->
      <div class="bg-aquamarine py-4 px-2 rounded-lg shadow-lg">
        <p class="text-textColor font-semibold text-sm mb-2 leading-5">
          {{ comment.comment.slice(0, 50) }}...
        </p>
        <div class="w-full flex justify-start items-center my-2">
          <figure
            class="w-8 h-8 flex justify-center items-center rounded-full mr-2"
          >
            <img
              :src="comment.userImage"
              :alt="comment.userName"
              class="rounded-full"
            />
          </figure>
          <p class="text-sm text-center text-textColor">
            {{ comment.userName }}
          </p>
        </div>
        <div class="w-5 h-5 flex justify-center items-center">
          <GlobalHIcon name="like" class="text-secondary" />
        </div>
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
          <img
            :src="comment.thumbnail"
            :alt="comment.userName"
            class="rounded-full h-full"
          />
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
      type: Object,
      required: true,
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
