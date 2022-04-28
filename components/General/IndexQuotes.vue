<template>
  <div class="w-full flex flex-col justify-center items-start mt-3">
    <button
      class="w-96 flex justify-start items-center border border-text-gray-400 rounded-lg p-2"
      @click="openModal"
    >
      <div>
        <div class="w-6 h-6 flex justify-center items-center mr-3">
          <GlobalHIcon :name="getIcon" class="text-textColor" />
        </div>
      </div>
      <p class="text-textColor font-open">Subir Frases de Incio</p>
    </button>
    <div v-if="isOpen" class="w-full max-w-md mt-3 p-2">
      <!-- HERO QUOTE -->
      <div class="w-full flex flex-col justify-between items-start">
        <p class="text-textColor font-open text-xl mb-3">Frase de Hero</p>
        <div class="w-full p-2 rounded-lg border border-primary">
          <div class="w-full flex justify-between items-start mt-1">
            <p class="text-textColor font-open text-sm">Color de fondo</p>
            <input v-model="hero.bgColor" type="color" />
          </div>
          <div class="w-full flex justify-between items-start mt-1">
            <p class="text-textColor font-open text-sm">Color de letra</p>
            <input v-model="hero.textColor" type="color" />
          </div>
          <div class="w-full flex justify-between items-start mt-1">
            <p class="text-textColor font-open text-sm">Frase en español</p>
            <input
              v-model="hero.spanishText"
              type="text"
              class="border border-primary rounded-lg py-1 px-2"
            />
          </div>
          <div class="w-full flex justify-between items-start mt-1">
            <p class="text-textColor font-open text-sm">Frase en koreano</p>
            <input
              v-model="hero.koreanText"
              type="text"
              class="border border-primary rounded-lg py-1 px-2"
            />
          </div>
        </div>
      </div>
      <!-- FLASH QUOTE -->
      <div class="w-full mt-2 flex flex-col justify-between items-start">
        <p class="text-textColor font-open text-xl mb-3">Frase de Oferta flash</p>
        <div class="w-full p-2 rounded-lg border border-primary">
          <div class="w-full flex justify-between items-start mt-1">
            <p class="text-textColor font-open text-sm">Color de fondo</p>
            <input v-model="flash.bgColor" type="color" />
          </div>
          <div class="w-full flex justify-between items-start mt-1">
            <p class="text-textColor font-open text-sm">Color de letra</p>
            <input v-model="flash.textColor" type="color" />
          </div>
          <div class="w-full flex justify-between items-start mt-1">
            <p class="text-textColor font-open text-sm">Frase en español</p>
            <input
              v-model="flash.spanishText"
              type="text"
              class="border border-primary rounded-lg py-1 px-2"
            />
          </div>
          <div class="w-full flex justify-between items-start mt-1">
            <p class="text-textColor font-open text-sm">Frase en koreano</p>
            <input
              v-model="flash.koreanText"
              type="text"
              class="border border-primary rounded-lg py-1 px-2"
            />
          </div>
        </div>
      </div>
      <!-- FAVOURITES QUOTE -->
      <div class="mt-2 w-full flex flex-col justify-between items-start">
        <p class="text-textColor font-open text-xl mb-3">Frase de Favoritos</p>
        <div class="w-full p-2 rounded-lg border border-primary">
          <div class="w-full flex justify-between items-start mt-1">
            <p class="text-textColor font-open text-sm">Color de fondo</p>
            <input v-model="favourites.bgColor" type="color" />
          </div>
          <div class="w-full flex justify-between items-start mt-1">
            <p class="text-textColor font-open text-sm">Color de letra</p>
            <input v-model="favourites.textColor" type="color" />
          </div>
          <div class="w-full flex justify-between items-start mt-1">
            <p class="text-textColor font-open text-sm">Frase en español</p>
            <input
              v-model="favourites.spanishText"
              type="text"
              class="border border-primary rounded-lg py-1 px-2"
            />
          </div>
          <div class="w-full flex justify-between items-start mt-1">
            <p class="text-textColor font-open text-sm">Frase en koreano</p>
            <input
              v-model="favourites.koreanText"
              type="text"
              class="border border-primary rounded-lg py-1 px-2"
            />
          </div>
        </div>
      </div>
      <!-- SIMPLE OFFERING QUOTE -->
      <div class="w-full mt-2  flex flex-col justify-between items-start">
        <p class="text-textColor font-open text-xl mb-3">Frase de ofertas</p>
        <div class="w-full p-2 rounded-lg border border-primary">
          <div class="w-full flex justify-between items-start mt-1">
            <p class="text-textColor font-open text-sm">Color de fondo</p>
            <input v-model="simpleOffer.bgColor" type="color" />
          </div>
          <div class="w-full flex justify-between items-start mt-1">
            <p class="text-textColor font-open text-sm">Color de letra</p>
            <input v-model="simpleOffer.textColor" type="color" />
          </div>
          <div class="w-full flex justify-between items-start mt-1">
            <p class="text-textColor font-open text-sm">Frase en español</p>
            <input
              v-model="simpleOffer.spanishText"
              type="text"
              class="border border-primary rounded-lg py-1 px-2"
            />
          </div>
          <div class="w-full flex justify-between items-start mt-1">
            <p class="text-textColor font-open text-sm">Frase en koreano</p>
            <input
              v-model="simpleOffer.koreanText"
              type="text"
              class="border border-primary rounded-lg py-1 px-2"
            />
          </div>
        </div>
      </div>
      <!-- FAVOURITES QUOTE -->
      <div class="mt-2 w-full flex flex-col justify-between items-start">
        <p class="text-textColor font-open text-xl mb-3">Frase de Hero</p>
        <div class="w-full p-2 rounded-lg border border-primary">
          <div class="w-full flex justify-between items-start mt-1">
            <p class="text-textColor font-open text-sm">Color de fondo</p>
            <input v-model="bgColor" type="color" />
          </div>
          <div class="w-full flex justify-between items-start mt-1">
            <p class="text-textColor font-open text-sm">Color de letra</p>
            <input v-model="textColor" type="color" />
          </div>
          <div class="w-full flex justify-between items-start mt-1">
            <p class="text-textColor font-open text-sm">Frase en español</p>
            <input
              v-model="spanishText"
              type="text"
              class="border border-primary rounded-lg py-1 px-2"
            />
          </div>
          <div class="w-full flex justify-between items-start mt-1">
            <p class="text-textColor font-open text-sm">Frase en koreano</p>
            <input
              v-model="koreanText"
              type="text"
              class="border border-primary rounded-lg py-1 px-2"
            />
          </div>
        </div>
      </div>
      <!-- BLOG QUOTE -->
      <div class="w-full mt-2 flex flex-col justify-between items-start">
        <p class="text-textColor font-open text-xl mb-3">Frase de Blog</p>
        <div class="w-full p-2 rounded-lg border border-primary">
          <div class="w-full flex justify-between items-start mt-1">
            <p class="text-textColor font-open text-sm">Color de fondo</p>
            <input v-model="blog.bgColor" type="color" />
          </div>
          <div class="w-full flex justify-between items-start mt-1">
            <p class="text-textColor font-open text-sm">Color de letra</p>
            <input v-model="blog.textColor" type="color" />
          </div>
          <div class="w-full flex justify-between items-start mt-1">
            <p class="text-textColor font-open text-sm">Frase en español</p>
            <input
              v-model="blog.spanishText"
              type="text"
              class="border border-primary rounded-lg py-1 px-2"
            />
          </div>
          <div class="w-full flex justify-between items-start mt-1">
            <p class="text-textColor font-open text-sm">Frase en koreano</p>
            <input
              v-model="blog.koreanText"
              type="text"
              class="border border-primary rounded-lg py-1 px-2"
            />
          </div>
        </div>
      </div>
      <!-- COMMUNITY QUOTE -->
      <div class="mt-2 w-full flex flex-col justify-between items-start">
        <p class="text-textColor font-open text-xl mb-3">Frase de Comunidad</p>
        <div class="w-full p-2 rounded-lg border border-primary">
          <div class="w-full flex justify-between items-start mt-1">
            <p class="text-textColor font-open text-sm">Color de fondo</p>
            <input v-model="community.bgColor" type="color" />
          </div>
          <div class="w-full flex justify-between items-start mt-1">
            <p class="text-textColor font-open text-sm">Color de letra</p>
            <input v-model="community.textColor" type="color" />
          </div>
          <div class="w-full flex justify-between items-start mt-1">
            <p class="text-textColor font-open text-sm">Frase en español</p>
            <input
              v-model="community.spanishText"
              type="text"
              class="border border-primary rounded-lg py-1 px-2"
            />
          </div>
          <div class="w-full flex justify-between items-start mt-1">
            <p class="text-textColor font-open text-sm">Frase en koreano</p>
            <input
              v-model="community.koreanText"
              type="text"
              class="border border-primary rounded-lg py-1 px-2"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOpen: false,
    hero: {
      bgColor: "",
      textColor: "",
      spanishText: "",
      koreanText: ""
    },
    flash: {
      bgColor: "",
      textColor: "",
      spanishText: "",
      koreanText: ""
    },
    favourites: {
      bgColor: "",
      textColor: "",
      spanishText: "",
      koreanText: ""
    },
    offer: {
      bgColor: "",
      textColor: "",
      spanishText: "",
      koreanText: ""
    },
    simpleOffer: {
      bgColor: "",
      textColor: "",
      spanishText: "",
      koreanText: ""
    },
    blog: {
      bgColor: "",
      textColor: "",
      spanishText: "",
      koreanText: ""
    },
    community: {
      bgColor: "",
      textColor: "",
      spanishText: "",
      koreanText: ""
    },
  }),
  computed: {
    getIcon() {
      return this.isOpen === true ? "arrowUp" : "arrowDown";
    },
  },
  methods: {
    resetData() {},
    openModal() {
      if (this.isOpen) {
        this.isOpen = false;
      } else {
        this.isOpen = true;
      }
    },
  },
};
</script>
