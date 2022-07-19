<template>
  <article
    class="
      w-72
      h-96
      flex
      justify-center
      items-center
      flex-col
      rounded-3xl
      mx-auto
      py-3
      px-4
    "
    :class="{ 'bg-aquamarine': isPair, 'bg-lightPink': !isPair }"
  >
    <div class="w-full mb-6 flex justify-center items-center">
      <figure class="w-full h-40 flex justify-center items-center">
        <img
          :src="post.image"
          :alt="post.title"
          class="w-full h-40 object-cover object-top rounded-3xl"
        />
      </figure>
    </div>
    <div class="w-full flex flex-col justify-center items-center flex-grow">
      <h3 class="w-full text-hBlack text-center mb-2 font-junegull text-base">
        {{ post.title }}
      </h3>
      <div class="w-full h-4 flex justify-end items-center">
        <div class="w-4 h-4">
          <svg
            width="6"
            height="7"
            viewBox="0 0 6 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.05334 0.941826C3.50834 0.346431 2.69043 0.639296 2.47523 1.58075C2.47599 1.60595 2.4738 1.64062 2.47121 1.68157C2.46405 1.79461 2.45387 1.95554 2.49436 2.09742C2.82854 3.24631 3.17559 4.38969 3.52253 5.53272C3.58552 5.74025 3.64851 5.94777 3.71142 6.1553C3.72776 6.21027 3.75676 6.2602 3.78505 6.30892C3.78864 6.31509 3.79221 6.32124 3.79574 6.32737C4.03754 6.74254 4.39955 6.9068 4.7526 6.7528C5.1508 6.57869 5.25322 6.20594 5.23644 5.75759C5.18417 4.37817 4.96506 3.04018 4.49738 1.76767C4.38918 1.47191 4.25108 1.15769 4.05334 0.941826ZM1.05948 6.11066C1.4721 6.1663 1.81746 5.83155 2.04546 5.24145C2.0365 4.95195 2.03163 4.66182 2.02676 4.37167C2.01544 3.69648 2.00411 3.02112 1.9411 2.35306C1.8663 1.58097 1.45172 1.15473 1.01774 1.21469C0.597512 1.2713 0.350589 1.73734 0.347888 2.52912C0.344731 3.3658 0.356038 4.20311 0.367345 5.04042L0.367347 5.04053C0.375505 5.66281 0.633911 6.05484 1.05948 6.11066Z"
              fill="#FF98C9"
            />
          </svg>
        </div>
      </div>
      <p class="w-full text-hBlack text-base font-open">
        {{ post.description.slice(0, 122) }}
      </p>
      <div class="w-full h-4 flex justify-start items-center">
        <div class="w-4 h-4">
          <svg
            width="6"
            height="7"
            viewBox="0 0 6 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.55799 6.61677C2.10299 7.21216 2.9209 6.9193 3.13609 5.97785C3.13534 5.95264 3.13753 5.91798 3.14012 5.87702C3.14728 5.76398 3.15746 5.60306 3.11697 5.46118C2.78279 4.31228 2.43574 3.1689 2.08879 2.02585C2.0258 1.81833 1.96281 1.61082 1.89991 1.40329C1.88357 1.34832 1.85457 1.29839 1.82627 1.24967C1.82269 1.2435 1.81912 1.23735 1.81559 1.23122C1.57379 0.816055 1.21178 0.651797 0.858724 0.805792C0.460526 0.979904 0.35811 1.35266 0.374888 1.801C0.427158 3.18042 0.646266 4.51841 1.11395 5.79093C1.22215 6.08669 1.36025 6.40091 1.55799 6.61677ZM4.55179 1.44696C4.13917 1.39131 3.79381 1.72607 3.5658 2.31617C3.57477 2.60567 3.57964 2.89579 3.58451 3.18594C3.59583 3.86113 3.60716 4.53649 3.67017 5.20456C3.74497 5.97664 4.15955 6.40289 4.59352 6.34293C5.01375 6.28631 5.26068 5.82027 5.26338 5.02849C5.26654 4.19181 5.25523 3.3545 5.24392 2.51719L5.24392 2.51708C5.23576 1.8948 4.97736 1.50277 4.55179 1.44696Z"
              fill="#FF98C9"
            />
          </svg>
        </div>
      </div>
      <div class="w-full flex justify-start items-center">
        <p class="text-xs font-open mr-2 text-hBlack">
          {{ post.authorName }}
        </p>
        <div class="flex justify-center items-center">
          <div class="w-4 h-4 flex justify-center">
            <GlobalHIcon name="calendar" class="text-hBlack" />
          </div>
          <p class="text-hBlack text-xs font-open">
            {{ post.date }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
    idx: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isPair() {
      return this.idx % 2 === 0;
    },
  },
  methods: {
    redirectionToPostDetail() {
      this.$router.push(`/blog/${this.id}`);
    },
  },
};
</script>
