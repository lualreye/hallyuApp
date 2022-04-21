<template>
  <div class="w-full max-w-5xl">
    <!-- LABELS -->
    <div
      class="w-full flex justify-center itesm-center divide-x divide-textColor"
    >
      <!-- DETALLE DE PRODUCTO -->
      <div
        class="w-1/3 md:w-3/12 flex justify-center items-center text-hBlack text-xs md:text-base font-open"
      >
        <div class="w-auto flex justify-center items-center">
          <input type="checkbox" class="border border-textColor w-6 h-6 mr-2" />
          <figure
            class="w-10 h-10 flex justify-center items-center bg-lightPink rounded-lg"
          >
            <img
              :src="image"
              :alt="name"
              class="flex justify-center items-center rounded-lg object-cover object-center"
            />
          </figure>
        </div>
        <p class="text-textColor w-auto font-open">
          {{ name }}
        </p>
      </div>
      <!-- CATEGORIA DEL PRODUCTO -->
      <div
        class="w-2/12 hidden md:flex justify-center items-center text-hBlack text-xs md:text-base font-open"
      >
        {{ category }}
      </div>
      <div
        class="w-1/12 hidden md:flex justify-center items-center text-hBlack text-xs md:text-base font-open"
      >
        {{ stock }}
      </div>
      <div
        class="w-1/12 hidden md:flex justify-center items-center text-hBlack text-xs md:text-base font-open"
      >
        $ {{ price }}
      </div>
      <div
        class="w-1/3 md:w-2/12 flex justify-center items-center text-hBlack text-xs md:text-base font-open"
      >
        <p
          v-if="published"
          class="w-16 h-7 flex justify-center items-center rounded-lg bg-primary"
        >
          Sí
        </p>
        <p
          v-else
          class="w-16 h-7 flex justify-center items-center rounded-lg bg-lightPink"
        >
          No
        </p>
      </div>
      <div
        class="w-1/12 hidden md:flex justify-center items-center text-hBlack text-xs md:text-base font-open"
      >
        {{ offer }}
      </div>
      <div
        class="w-1/3 md:w-2/12 flex justify-center items-center text-hBlack text-xs md:text-base font-open"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
      type: Object,
      required: true
    }
  },
};
</script>
