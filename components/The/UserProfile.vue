<template>
  <div>
    <div v-if="getProfile">
      <!-- NO EDITING PROFILE -->
      <div v-if="!editing" class="w-96 bg-lightPink p-2 rounded-3xl">
        <div class="w-full h-full border border-primary rounded-3xl">
          <div class="w-full py-3 px-3">
            <div class="w-full">
              <figure
                class="w-20 h-20 mb-6 flex justify-center items-center rounded-full mx-auto"
              >
                <img
                  v-if="isUserImage"
                  :src="image.imageUrl"
                  :alt="getUser.name"
                  class="rounded-full w-full h-20 object-cover"
                />
                <p
                  v-else
                  class="mx-auto text-center text-lg font-bold text-textColor"
                >
                  No existe imagen
                </p>
              </figure>
              <p class="text-base text-center text-textColor font-semibold">
                {{ getUser.name }}
              </p>
            </div>
            <button
              class="w-full flex justify-center items-center mt-7"
              @click="editProfile"
            >
              <div class="flex justify-center items-center w-3 h-3 mr-1">
                <GlobalHIcon name="edit" class="text-textColor" />
              </div>
              <p class="text-xs text-textColor font-extralight">
                Cambiar perfil
              </p>
            </button>
            <div class="w-full flex justify-center items-center mt-8">
              <GlobalHButton name="Cerrar Sesión" buttonColor="primary" @click="closeSession" />
            </div>
          </div>
        </div>
      </div>
      <!-- EDITING PROFILE -->
      <div v-else class="w-96 bg-aquamarine p-2 rounded-3xl">
        <div class="w-full h-full border border-secondary rounded-3xl">
          <div class="w-full py-3 px-3">
            <div class="w-full flex justify-end items-center">
              <button
                class="border border-secondary rounded-full w-5 h-5 flex justify-center items-center"
                @click="editProfile"
              >
                <GlobalHIcon name="close" class="text-secondary" />
              </button>
            </div>
            <div class="w-full">
              <p class="w-full text-textColor font-medium text-left">
                Foto de perfil
              </p>
              <figure
                class="w-32 h-32 mb-6 flex justify-center items-center rounded-full mx-auto"
              >
                <img
                  v-if="isUserImage"
                  :src="image.imageUrl"
                  :alt="getUser.name"
                  class="rounded-full w-full h-32 object-cover"
                />
                <p
                  v-else
                  class="mx-auto text-center text-lg font-bold text-textColor"
                >
                  No existe imagen
                </p>
              </figure>
              <label
                class="text-sm font-extralight text-textColor border border-secondary flex justify-center items-center rounded-full w-full py-1"
              >
                Cambiar Foto
                <input type="file" style="display: none" @change="onChange" />
              </label>
            </div>
            <div class="w-full my-7">
              <p class="text-base font-medium text-textColor text-left">
                Nombre de usuario
              </p>
              <input
                v-model="userName"
                type="text"
                :placeholder="getUser.name"
                class="w-full placeholder-textColor border border-textColor rounded-full py-1 px-4 outline-none focus:outline-none bg-aquamarine focus:bg-white mt-2"
              />
            </div>
            <div class="w-full flex justify-center items-center mt-8">
              <GlobalHButton name="Guardar" buttonColor="secondary" @click="updateUserData" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    editing: false,
    image: {
      imageObject: "",
      imageUrl: "",
    },
    userName: "",
    userImage: "",
  }),
  computed: {
    ...mapGetters("user", ["getUser", "getModal"]),
    ...mapGetters("userData", ["getProfile"]),
    isUserImage() {
      this.image.imageUrl = this.getUser.image
      if(!this.image.imageUrl.length) {
        return false
      } else {
        return true
      }
    },
    isUserName() {
      return this.getUser.name
    },
    getUserName() {
      this.editUserName(this.userName)
    }
  },
  methods: {
    ...mapActions("user", ["activeMenu", "changeUserImage", "changeUserName"]),
    ...mapActions("userData", ["updateProfile", "showProfile"]),
    onChange(event) {
      const file = event.target.files[0];
      this.image.imageObject = file;
      this.image.imageUrl = URL.createObjectURL(file);
      let image = this.image.imageUrl
      this.changeUserImage(image)
    },
    editProfile() {
      if (this.editing) {
        this.editing = false;
      } else {
        this.editing = true;
      }
    },
    editUserName(name) {
      this.changeUserName(name)
    },
    updateUserData() {
      let name
      if(this.userName === "") {
        name = this.isUserName
      } else {
        name = this.userName
      }

      let image;
      if(this.image.imageUrl === "") {
        image = ""
        this.changeUserImage = ""
      } else {
        image = this.image
      }
      const userData = {
        name: name,
        image: image,
        email: this.getUser.email,
      };
      this.updateProfile(userData);
    },
    closeModal() {
      if (this.getProfile) {
        this.showProfile(false);
      } else {
        this.showProfile(true);
      }
    },
    closeSession() {
      this.closeModal()
    }
  },
};
</script>
