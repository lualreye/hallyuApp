<template>
  <article class="w-full lg:w-3/4 py-4 flex justify-center items-center relative my-8">
    <div class="w-full">
      <div
        class="flex justify-center sm:justify-between items-center flex-wrap post-background py-4"
        :style="{ backgroundImage: 'url(' + bgImage + ')' }"
      >
        <!-- CONTENIDO DEL POST -->
        <div
          class="
            flex
            justify-between
            items-center
            flex-wrap
            w-full
            lg:w-3/5
            py-8
            px-2
          "
        >
          <div
            class="
              w-full
              flex flex-col
              justify-between
              items-start
              py-4
              lg:w-1/2
              relative
            "
          >
            <div class="absolute -top-4 right-8">
              <svg
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.75244 11.9135C9.2192 13.8545 7.1924 14.4583 5.84188 13.2308C5.35188 12.7857 5.00967 12.1379 4.74156 11.5281C3.58263 8.90446 3.03968 6.14585 2.91015 3.30181C2.86858 2.37744 3.12237 1.60892 4.1091 1.24994C4.98398 0.93244 5.88105 1.2711 6.48022 2.12707C6.55812 2.23966 6.64354 2.35415 6.68917 2.48184C7.70364 5.26649 8.72661 8.04942 9.70505 10.8482C9.84174 11.2467 9.74539 11.7181 9.75244 11.9135Z"
                  fill="#FF98C9"
                />
                <path
                  d="M10.8174 4.36362C11.3824 3.14698 12.2382 2.45679 13.2607 2.57152C14.3153 2.6866 14.9556 3.49487 14.9758 4.77785C15.0038 6.50426 15.0319 8.23067 15.024 9.95578C15.0173 11.5882 14.4055 12.5491 13.3641 12.6658C12.2887 12.7894 11.2614 11.9106 11.076 10.3188C10.8528 8.34949 10.8914 6.34945 10.8174 4.36362Z"
                  fill="#FF98C9"
                />
              </svg>
            </div>
            <div class="absolute bottom-0 left-0">
              <svg
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.24756 2.88781C7.7808 0.946769 9.8076 0.342952 11.1581 1.57051C11.6481 2.01556 11.9903 2.66341 12.2584 3.2732C13.4174 5.89681 13.9603 8.65542 14.0898 11.4995C14.1314 12.4238 13.8776 13.1924 12.8909 13.5513C12.016 13.8688 11.119 13.5302 10.5198 12.6742C10.4419 12.5616 10.3565 12.4471 10.3108 12.3194C9.29636 9.53478 8.27339 6.75185 7.29495 3.95306C7.15826 3.55456 7.25461 3.08321 7.24756 2.88781Z"
                  fill="#FF98C9"
                />
                <path
                  d="M6.18256 10.4376C5.61758 11.6543 4.76176 12.3445 3.73928 12.2297C2.68473 12.1147 2.0444 11.3064 2.02418 10.0234C1.99616 8.29701 1.96814 6.5706 1.97596 4.84549C1.98266 3.21303 2.59453 2.25218 3.63587 2.13545C4.71127 2.01183 5.73859 2.89064 5.92395 4.48249C6.14718 6.45178 6.10864 8.45182 6.18256 10.4376Z"
                  fill="#FF98C9"
                />
              </svg>
            </div>
            <p
              class="
                text-lg
                sm:text-xl
                text-textColor
                font-bold
                font-open
                w-full
                mb-4
              "
            >
              {{ title }}
            </p>
            <div class="flex justify-start items-center w-full">
              <!-- DATOS DEL AUTOR DEL POST -->
              <div class="flex justify-start items-center mr-3 w-3/5">
                <figure
                  class="
                    w-7
                    h-7
                    rounded-full
                    flex
                    justify-center
                    items-center
                    mr-2
                  "
                >
                  <img
                    :src="authorImage"
                    :alt="authorName"
                    class="rounded-full"
                  />
                </figure>
                <p class="text-textColor font-open font-medium">
                  {{ authorName }}
                </p>
              </div>
              <!-- DATOS DE LA FECHA DE PUBLICACION -->
              <div class="flex justify-start items-center mr-3 w-2/5">
                <div class="w-5 h-5 flex justify-center items-center mr-2">
                  <GlobalHIcon name="calendar" class="text-textColor" />
                </div>
                <p class="text-textColor font-open font-medium">
                  {{ date }}
                </p>
              </div>
            </div>
          </div>
          <div
            class="
              w-full
              flex flex-col
              justify-start
              items-center
              py-4
              lg:w-1/2
              relative
            "
          >
            <div class="absolute -top-4 left-0">
              <svg
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.75244 11.9135C9.2192 13.8545 7.1924 14.4583 5.84188 13.2308C5.35188 12.7857 5.00967 12.1379 4.74156 11.5281C3.58263 8.90446 3.03968 6.14585 2.91015 3.30181C2.86858 2.37744 3.12237 1.60892 4.1091 1.24994C4.98398 0.93244 5.88105 1.2711 6.48022 2.12707C6.55812 2.23966 6.64354 2.35415 6.68917 2.48184C7.70364 5.26649 8.72661 8.04942 9.70505 10.8482C9.84174 11.2467 9.74539 11.7181 9.75244 11.9135Z"
                  fill="#FF98C9"
                />
                <path
                  d="M10.8174 4.36362C11.3824 3.14698 12.2382 2.45679 13.2607 2.57152C14.3153 2.6866 14.9556 3.49487 14.9758 4.77785C15.0038 6.50426 15.0319 8.23067 15.024 9.95578C15.0173 11.5882 14.4055 12.5491 13.3641 12.6658C12.2887 12.7894 11.2614 11.9106 11.076 10.3188C10.8528 8.34949 10.8914 6.34945 10.8174 4.36362Z"
                  fill="#FF98C9"
                />
              </svg>
            </div>
            <p class="text-xl text-textColor font-xl w-full">
              {{ abstract }}
            </p>
            <div class="flex justify-start items-center w-full">
              <div class="flex justify-start items-center w-full mt-2">
                <p class="text-sm font-light text-textColor mr-3">
                  Leer más del post
                </p>
                <GlobalIconButton
                  iconName="right"
                  classes="bg-secondary"
                  class="text-yellow-600"
                  @click="redirectionToPostDetail"
                />
              </div>
            </div>
            <div class="absolute bottom-0 right-0">
              <svg
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.24756 2.88781C7.7808 0.946769 9.8076 0.342952 11.1581 1.57051C11.6481 2.01556 11.9903 2.66341 12.2584 3.2732C13.4174 5.89681 13.9603 8.65542 14.0898 11.4995C14.1314 12.4238 13.8776 13.1924 12.8909 13.5513C12.016 13.8688 11.119 13.5302 10.5198 12.6742C10.4419 12.5616 10.3565 12.4471 10.3108 12.3194C9.29636 9.53478 8.27339 6.75185 7.29495 3.95306C7.15826 3.55456 7.25461 3.08321 7.24756 2.88781Z"
                  fill="#FF98C9"
                />
                <path
                  d="M6.18256 10.4376C5.61758 11.6543 4.76176 12.3445 3.73928 12.2297C2.68473 12.1147 2.0444 11.3064 2.02418 10.0234C1.99616 8.29701 1.96814 6.5706 1.97596 4.84549C1.98266 3.21303 2.59453 2.25218 3.63587 2.13545C4.71127 2.01183 5.73859 2.89064 5.92395 4.48249C6.14718 6.45178 6.10864 8.45182 6.18256 10.4376Z"
                  fill="#FF98C9"
                />
              </svg>
            </div>
          </div>
        </div>
        <!-- IMAGEN MINIATURA DEL POST -->
        <div class="flex justify-center items-center w-full lg:w-1/5">
          <div class="w-full relative flex justify-center items-center lg:block">
            <figure
              class="
                rounded-3xl
                right-8
                relative
                my-auto
                z-20
                flex
                justify-end
                sm:justify-center
                items-center
                w-full
                sm:w-64
                md:w-3/4
                lg:w-full
              "
            >
              <img :src="thumbnail" :alt="title" class="rounded-3xl w-3/4 sm:w-full" />
            </figure>
            <div
              class="
                absolute
                lg:-top-1/3
                top-1/3
                right-8
                bg-secondary
                shadow
                z-0
                rounded-2xl
                w-32
                h-40
                sm:h-52
                md:w-44 md:h-72
                xl:w-56 xl:h-96
              "
            />
            <div
              class="
                absolute
                top-0
                lg:left-1/2
                left-10
                bg-primary
                shadow
                z-10
                rounded-full
                w-16
                h-16
                sm:w-24 sm:h-24
                md:w-40 md:h-40
                lg:w-48 lg:h-48
                xl:w-56 xl:h-56
              "
            />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    abstract: {
      type: String,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    authorImage: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    bgImage: require("~/static/images/backgrounds/Union.svg"),
  }),
  methods: {
    redirectionToPostDetail() {
      this.$router.push(`blog/${this.id}`);
    },
  },
};
</script>

<style scoped>
.post-background {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
