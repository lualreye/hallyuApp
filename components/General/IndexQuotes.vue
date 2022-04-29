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
      <p class="text-textColor font-open">Subir Frases de Inicio</p>
    </button>
    <div v-if="isOpen" class="w-full max-w-5xl mt-3 p-2">
      <!-- FIRST SECTION -->
      <div class="w-full lg:w-3/4 flex flex-wrap justify-between items-center">
        <!-- HERO QUOTE -->
        <div class="w-80 flex flex-col justify-between items-start">
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
        <div class="w-80 flex flex-col justify-between items-start">
          <p class="text-textColor font-open text-xl mb-3">
            Frase de Oferta flash
          </p>
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
      </div>
      <!-- SECOND SECTION -->
      <div
        class="w-full lg:w-3/4 flex flex-wrap justify-between items-center mt-2"
      >
        <!--  FAVOURITES BY COMMUNITY QUOTE -->
        <div class="w-80 flex flex-col justify-between items-start">
          <p class="text-textColor font-open text-xl mb-3">
            Frase de Favoritos
          </p>
          <div class="w-full p-2 rounded-lg border border-primary">
            <div class="w-full flex justify-between items-start mt-1">
              <p class="text-textColor font-open text-sm">Color de fondo</p>
              <input v-model="communityFavs.bgColor" type="color" />
            </div>
            <div class="w-full flex justify-between items-start mt-1">
              <p class="text-textColor font-open text-sm">Color de letra</p>
              <input v-model="communityFavs.textColor" type="color" />
            </div>
            <div class="w-full flex justify-between items-start mt-1">
              <p class="text-textColor font-open text-sm">Frase en español</p>
              <input
                v-model="communityFavs.spanishText"
                type="text"
                class="border border-primary rounded-lg py-1 px-2"
              />
            </div>
            <div class="w-full flex justify-between items-start mt-1">
              <p class="text-textColor font-open text-sm">Frase en koreano</p>
              <input
                v-model="communityFavs.koreanText"
                type="text"
                class="border border-primary rounded-lg py-1 px-2"
              />
            </div>
          </div>
        </div>
        <!-- SIMPLE OFFERING QUOTE -->
        <div class="w-80 flex flex-col justify-between items-start">
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
      </div>
      <!-- THIRD SECTION -->
      <div
        class="w-full lg:w-3/4 flex flex-wrap justify-between items-center mt-2"
      >
        <!-- POPULAR QUOTE -->
        <div class="w-80 flex flex-col justify-between items-start">
          <p class="text-textColor font-open text-xl mb-3">
            Frase de Recomendados
          </p>
          <div class="w-full p-2 rounded-lg border border-primary">
            <div class="w-full flex justify-between items-start mt-1">
              <p class="text-textColor font-open text-sm">Color de fondo</p>
              <input v-model="popular.bgColor" type="color" />
            </div>
            <div class="w-full flex justify-between items-start mt-1">
              <p class="text-textColor font-open text-sm">Color de letra</p>
              <input v-model="popular.textColor" type="color" />
            </div>
            <div class="w-full flex justify-between items-start mt-1">
              <p class="text-textColor font-open text-sm">Frase en español</p>
              <input
                v-model="popular.spanishText"
                type="text"
                class="border border-primary rounded-lg py-1 px-2"
              />
            </div>
            <div class="w-full flex justify-between items-start mt-1">
              <p class="text-textColor font-open text-sm">Frase en koreano</p>
              <input
                v-model="popular.koreanText"
                type="text"
                class="border border-primary rounded-lg py-1 px-2"
              />
            </div>
          </div>
        </div>
        <!-- BLOG QUOTE -->
        <div class="w-80 flex flex-col justify-between items-start">
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
      </div>
      <!-- COMMUNITY QUOTE -->
      <div class="w-80 flex flex-col justify-between items-start mt-2">
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
      <!-- SAVE BUTTON -->
      <div class="w-64 flex justify-start items-center mt-2">
        <button
          class="py-2 px-3 rounded-lg"
          :class="{
            'bg-primary': isReadyToUpload,
            'bg-gray-400': !isReadyToUpload,
          }"
          @click="sendQuotes"
        >
          <p class="text-textColor font-open">Guardar</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    isOpen: false,
    id: "",
    hero: {
      bgColor: "",
      textColor: "",
      spanishText: "",
      koreanText: "",
    },
    flash: {
      bgColor: "",
      textColor: "",
      spanishText: "",
      koreanText: "",
    },
    communityFavs: {
      bgColor: "",
      textColor: "",
      spanishText: "",
      koreanText: "",
    },
    popular: {
      bgColor: "",
      textColor: "",
      spanishText: "",
      koreanText: "",
    },
    simpleOffer: {
      bgColor: "",
      textColor: "",
      spanishText: "",
      koreanText: "",
    },
    blog: {
      bgColor: "",
      textColor: "",
      spanishText: "",
      koreanText: "",
    },
    community: {
      bgColor: "",
      textColor: "",
      spanishText: "",
      koreanText: "",
    },
  }),
  computed: {
    ...mapGetters("quotes", ["getQuotes"]),
    getIcon() {
      return this.isOpen === true ? "arrowUp" : "arrowDown";
    },
    isReadyToUpload() {
      return (
        (this.hero = {
          bgColor: "",
          textColor: "",
          spanishText: "",
          koreanText: "",
        }),
        (this.flash = {
          bgColor: "",
          textColor: "",
          spanishText: "",
          koreanText: "",
        }),
        (this.communityFavs = {
          bgColor: "",
          textColor: "",
          spanishText: "",
          koreanText: "",
        }),
        (this.offer = {
          bgColor: "",
          textColor: "",
          spanishText: "",
          koreanText: "",
        }),
        (this.popular = {
          bgColor: "",
          textColor: "",
          spanishText: "",
          koreanText: "",
        }),
        (this.simpleOffer = {
          bgColor: "",
          textColor: "",
          spanishText: "",
          koreanText: "",
        }),
        (this.blog = {
          bgColor: "",
          textColor: "",
          spanishText: "",
          koreanText: "",
        }),
        (this.community = {
          bgColor: "",
          textColor: "",
          spanishText: "",
          koreanText: "",
        })
      );
    },
    setQuotes() {
      return Object.keys(this.getQuotes).length !== 0 ? true : false;
    },
  },
  watch: {
    setQuotes(value) {
      if (value === true) {
        this.setData();
      } else {
        return;
      }
    },
  },
  methods: {
    ...mapActions("quotes", ["uploadQuotes", "fetchQuotes"]),
    resetData() {
      (this.hero = {
        bgColor: "",
        textColor: "",
        spanishText: "",
        koreanText: "",
      }),
        (this.flash = {
          bgColor: "",
          textColor: "",
          spanishText: "",
          koreanText: "",
        }),
        (this.communityFavs = {
          bgColor: "",
          textColor: "",
          spanishText: "",
          koreanText: "",
        }),
        (this.offer = {
          bgColor: "",
          textColor: "",
          spanishText: "",
          koreanText: "",
        }),
        (this.popular = {
          bgColor: "",
          textColor: "",
          spanishText: "",
          koreanText: "",
        }),
        (this.simpleOffer = {
          bgColor: "",
          textColor: "",
          spanishText: "",
          koreanText: "",
        }),
        (this.blog = {
          bgColor: "",
          textColor: "",
          spanishText: "",
          koreanText: "",
        }),
        (this.community = {
          bgColor: "",
          textColor: "",
          spanishText: "",
          koreanText: "",
        });
    },
    openModal() {
      if (this.isOpen) {
        this.isOpen = false;
      } else {
        this.isOpen = true;
        this.fetchQ();
      }
    },
    setData() {
      const quotes = JSON.parse(JSON.stringify(this.getQuotes));
      this.hero = quotes.hero;
      this.blog = quotes.blog;
      this.community = quotes.community;
      this.communityFavs = quotes.communityFavs;
      this.simpleOffer = quotes.simpleOffer;
      this.popular = quotes.popular;
      this.flash = quotes.flash;
      this.id = quotes.id;
    },
    fetchQ() {
      if (!Object.keys(this.getQuotes).lenght) {
        this.fetchQuotes();
      } else {
        return;
      }
    },
    sendQuotes() {
      const quotes = {
        hero: this.hero,
        flash: this.flash,
        communityFavs: this.communityFavs,
        popular: this.popular,
        simpleOffer: this.simpleOffer,
        blog: this.blog,
        community: this.community,
      };
      const data = JSON.parse(
        JSON.stringify({
          quotes: quotes,
        })
      );
      this.uploadQuotes({ ...data, id: this.id });
      this.setData();
    },
  },
};
</script>
