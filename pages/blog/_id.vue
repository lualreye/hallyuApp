<template>
  <div class="mx-auto w-full max-w-screen-2xl py-4">
    <div
      class="
        w-full
        flex
        justify-center
        lg:justify-start
        items-center
        h-14
        mb-6
        px-5
      "
    >
      <h2
        class="
          px-4
          text-xl
          sm:text-4xl
          text-center
          sm:text-left
          font-junegull
          text-textColor
        "
      >
        Hallyu Blog
      </h2>
      <div class="parenthesis-two w-11 h-11 relative">
        <eight-type />
      </div>
    </div>
    <div
      v-if="Object.keys(getPost).length"
      class="flex flex-wrap justify-start items-start w-full px-5"
    >
      <div
        class="
          bg-lightPink
          px-3
          py-6
          w-full
          lg:w-3/5
          mx-auto
          max-w-3xl
          rounded-3xl
          relative
        "
      >
        <div class="w-full flex justify-start items-center">
          <div class="flex w-12 rotate-[270deg] justify-center items-center">
            <p class="text-xs font-open mr-2 text-hBlack">
              {{ getPost.authorName }}
            </p>
            <div class="flex justify-center items-center">
              <div class="w-4 h-4 flex justify-center">
                <GlobalHIcon name="calendar" class="text-hBlack" />
              </div>
              <p class="text-hBlack text-xs font-open">
                {{ getPost.date }}
              </p>
            </div>
          </div>
          <figure
            class="
              w-full
              h-80
              max-w-xl
              flex
              justify-center
              items-center
              -mt-8
              mb-10
            "
          >
            <img
              :src="getPost.image"
              :alt="getPost.title"
              class="w-full h-80 object-cover object-top rounded-3xl"
            />
          </figure>
        </div>
        <div class="w-full relative max-w-xl mx-auto z-10">
          <div class="absolute z-0 top-16 -right-16">
            <svg
              width="306"
              height="306"
              viewBox="0 0 306 306"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="153"
                cy="153"
                r="153"
                transform="rotate(90 153 153)"
                fill="#D4F1F0"
              />
            </svg>
          </div>
          <div class="w-full flex justify-end">
            <div class="w-5 h-5 flex justify-center items-center">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.28326 3.49355C9.92392 0.717665 12.359 -0.145854 13.9815 1.60968C14.5702 2.24615 14.9813 3.17263 15.3035 4.04469C16.6958 7.79672 17.3481 11.7418 17.5037 15.8091C17.5537 17.131 17.2488 18.2301 16.0633 18.7435C15.0122 19.1975 13.9344 18.7132 13.2146 17.4891C13.121 17.3281 13.0184 17.1643 12.9635 16.9817C11.7447 12.9994 10.5157 9.01952 9.34021 5.01696C9.17598 4.44707 9.29174 3.77299 9.28326 3.49355Z"
                  fill="#FF98C9"
                />
                <path
                  d="M8.0036 14.2903C7.32481 16.0302 6.29661 17.0172 5.06819 16.8531C3.80122 16.6886 3.03192 15.5327 3.00763 13.6979C2.97397 11.2289 2.9403 8.75999 2.9497 6.29291C2.95774 3.95833 3.69286 2.58422 4.94395 2.41729C6.23595 2.24049 7.4702 3.49728 7.6929 5.77379C7.96109 8.59007 7.91478 11.4503 8.0036 14.2903Z"
                  fill="#FF98C9"
                />
              </svg>
            </div>
          </div>
          <h3
            class="
              w-full
              font-junegull
              text-center
              my-6
              text-textColor text-2xl
              relative
            "
          >
            {{ getPost.title }}
          </h3>
          <div class="w-full flex justify-start mb-3">
            <div class="w-5 h-5 flex justify-center items-center">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.717 16.1656C11.0763 18.9415 8.64129 19.805 7.01874 18.0495C6.43005 17.413 6.01891 16.4865 5.69679 15.6145C4.30443 11.8625 3.65212 7.91737 3.4965 3.85011C3.44655 2.52817 3.75146 1.4291 4.93695 0.915727C5.98804 0.46167 7.0658 0.945989 7.78566 2.17011C7.87925 2.33113 7.98188 2.49486 8.0367 2.67746C9.2555 6.6598 10.4845 10.6397 11.66 14.6422C11.8243 15.2121 11.7085 15.8862 11.717 16.1656Z"
                  fill="#FF98C9"
                />
                <path
                  d="M12.9966 5.36892C13.6754 3.629 14.7036 2.64196 15.9321 2.80604C17.199 2.97061 17.9683 4.12651 17.9926 5.96131C18.0263 8.43025 18.0599 10.8992 18.0505 13.3663C18.0425 15.7008 17.3074 17.075 16.0563 17.2419C14.7643 17.4187 13.53 16.1619 13.3073 13.8854C13.0392 11.0691 13.0855 8.20885 12.9966 5.36892Z"
                  fill="#FF98C9"
                />
              </svg>
            </div>
          </div>
          <div v-html="getPost.body" class="text-textColor relative"></div>
          <div class="w-full">
            <div class="w-full flex justify-start items-center mb-3">
              <p class="mr-2 font-junegull text-textColor">
                {{ getPost.comments.length }}
              </p>
              <p class="text-textColor font-junegull">Comentarios</p>
            </div>
            <div class="w-full flex justify-center items-center mb-3">
              <button
                v-if="getUser === null || getUser === undefined"
                class="
                  h-9
                  w-full
                  border border-primary
                  text-textColor
                  font-open
                  text-left
                  px-2
                  py-1
                  rounded-3xl
                  flex
                  justify-start
                  items-center
                "
                @click="toAuthenticate"
              >
                <div
                  class="
                    w-6
                    h-6
                    bg-primary
                    rounded-full
                    flex
                    justify-center
                    items-center
                    mr-2
                  "
                >
                  <GlobalHIcon name="userAccount" class="text-white" />
                </div>
                <p class="text-textColor text-xs">
                  Escríbenos lo que piensas...
                </p>
              </button>
              <div v-else class="w-full flex flex-col items-start">
                <div
                  class="
                    w-full
                    flex
                    justify-start
                    items-center
                    border border-aquamarine
                    rounded-3xl
                    bg-transparent
                  "
                >
                  <div class="w-10 mr-3">
                    <GlobalIconButton
                      v-if="!user"
                      iconName="userAccount"
                      class="bg-primary p-1 ml-1"
                    />
                    <button
                      v-else
                      class="w-10 h-10 rounded-full bg-primary ml-1"
                      @click="activeProfile"
                    >
                      <img
                        :src="getUser.image"
                        :alt="getUser.name"
                        referrerpolicy="no-referrer"
                        class="rounded-full w-10 h-10 object-cover"
                      />
                    </button>
                  </div>
                  <textarea
                    v-model="comment"
                    class="
                      w-full
                      outline-none
                      textarea
                      border border-b-primary
                      bg-lightPink
                    "
                  ></textarea>
                </div>
                <button
                  class="
                    rounded-lg
                    shadow-md
                    text-center
                    font-junegull
                    bg-primary
                    text-textColor text-sm
                    py-1
                    px-2
                    mt-3
                  "
                  @click="sendComment"
                >
                  Comentar
                </button>
              </div>
            </div>
            <div
              v-if="getPost.comments.length"
              class="w-full flex flex-col justify-center items-center"
            >
              <comment
                v-for="(item, i) in getPost.comments"
                :key="i"
                :comment="item"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="getPosts.length"
        class="w-full lg:w-2/5 px-10 py-3 mt-10 relative"
      >
        <p class="text-textColor font-junegull text-lg">
          También te puede interesar
        </p>
        <div class="absolute -bottom-10 left-0 z-0">
          <svg
            width="83"
            height="83"
            viewBox="0 0 165 165"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="82.5"
              cy="82.5"
              r="82.5"
              transform="rotate(90 82.5 82.5)"
              fill="#FF98C9"
            />
          </svg>
        </div>
        <div class="absolute top-0 right-0 z-0">
          <svg
            width="104"
            height="203"
            viewBox="0 0 208 407"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="203.5" cy="203.5" r="203.5" fill="#87C7C9" />
          </svg>
        </div>
        <div
          class="
            w-full
            sm:w-1/2
            lg:w-full
            flex
            justify-start
            md:justify-center
            lg:justify-start
            mt-6
            mx-auto
          "
        >
          <nuxt-link
            :to="`/blog/${firstPost.id}`"
            class="bg-secondary rounded-3xl w-60 h-80 relative"
          >
            <figure
              class="w-60 h-80 flex justify-center items-center -mt-3 -mr-3"
            >
              <img
                :src="firstPost.image"
                :alt="firstPost.title"
                class="w-60 h-80 rounded-3xl object-cover"
              />
            </figure>
            <p
              class="
                absolute
                bottom-4
                -left-3
                text-text-textColor
                font-open
                text-white text-xs
                rounded-lg
                font-medium
                px-1
                py-1
                bg-primary
              "
            >
              {{ firstPost.title.toUpperCase() }}
            </p>
          </nuxt-link>
        </div>
        <div
          class="
            w-full
            sm:w-1/2
            lg:w-full
            flex
            justify-end
            m
            md:justify-center
            lg:justify-end
            mt-6
            mx-auto
          "
        >
          <nuxt-link
            :to="`/blog/${secondPost.id}`"
            class="bg-secondary rounded-3xl w-60 h-80 relative"
          >
            <figure
              class="w-60 h-80 flex justify-center items-center -mt-3 -mr-3"
            >
              <img
                :src="secondPost.image"
                :alt="secondPost.title"
                class="w-60 h-80 rounded-3xl object-cover"
              />
            </figure>
            <p
              class="
                absolute
                bottom-4
                -left-3
                text-text-textColor
                font-open
                text-white text-xs
                rounded-lg
                font-medium
                px-1
                py-1
                bg-primary
              "
            >
              {{ secondPost.title.toUpperCase() }}
            </p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import EightType from "~/components/parenthesis/EightType.vue";
import Comment from "../../components/cards/Comment.vue";

export default {
  components: {
    EightType,
    Comment,
  },
  data: () => ({
    comentario: "",
  }),
  computed: {
    ...mapGetters("blog", ["getPost", "getPosts"]),
    ...mapGetters("user", ["getUser"]),
    getParams() {
      return this.$route.params.id;
    },
    user() {
      if (this.getUser !== null) {
        if (this.getUser.image !== "") {
          this.userName = this.getUser.name;
          this.userImage = this.getUser.image;
          return true;
        } else {
          this.userName = this.getUser.name;
          return false;
        }
      } else {
        return;
      }
    },
    firstPost() {
      const random = Math.floor(Math.random() * this.getPosts.length);
      console.log(random);
      return this.getPosts[random];
    },
    secondPost() {
      const random = Math.floor(Math.random() * this.getPosts.length);
      return this.getPosts[random];
    },
  },
  mounted() {
    this.fetchPost(this.$route.params.id);
    if (!this.getPosts.length) {
      this.fetchPosts();
    }
    // this.fetchSuggestedProducts();
  },
  methods: {
    ...mapActions("blog", ["fetchPosts", "fetchPost", "addComment"]),
    toAuthenticate() {
      this.$router.push("/signIn");
    },
    sendComment() {
      const user = JSON.parse(JSON.stringify(this.getUser));
      const comment = {
        user: {
          image: user.image,
          name: user.name,
        },
        comment: this.comment,
      };
      this.addComment(comment);
      this.comentario = "";
    },
  },
};
</script>

<style scoped>
.writing-mode {
  writing-mode: vertical-rl;
}
.parenthesis-two {
  transform: scaleX(-1);
}
.textarea {
  padding: 8px;
  resize: none;
  overflow: hidden;
  font-size: 16px;
}
/* .shaking {
  background-color: rgb(236, 72, 153);
  color: white;
  animation: shake 300ms ease-in-out infinite;
}

@keyframes shake {
  0% {
    transform: rotate(1deg);
  }
  50% {
    transform: rotate(-1deg);
  }
  100% {
    transform: rotate(1deg);
  }
} */
</style>