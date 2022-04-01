<template>
  <div class="w-full h-screen flex justify-center items-center bg-lightPink">
    <div
      class="w-72 shadow-lg rounded-lg bg-gray-100 flex flex-col justify-evenly px-2 py-3"
    >
      <form action="" class="w-full p-1">
        <div class="w-full">
          <!-- NOMBRES DEL USUARIO -->
          <div class="w-full mb-2">
            <label class="text-textColor font-medium">Nombre</label>
            <input
              v-model="adminName"
              type="name"
              class="w-full mt-1 px-2 text-textColor py-2 rounded-sm bg-lightPink outline-none"
            />
          </div>
          <!-- EMAIL DEL USUARIO -->
          <div class="w-full mb-2">
            <label class="text-textColor font-medium">Email</label>
            <input
              v-model="adminEmail"
              type="email"
              class="w-full mt-1 px-2 text-textColor py-2 rounded-sm bg-lightPink outline-none"
            />
          </div>
          <!-- PASSWORD DEL USUARIO -->
          <div class="w-full mb-2">
            <label class="text-textColor font-medium">Password</label>
            <input
              v-model="adminPassword"
              type="name"
              class="w-full mt-1 px-2 text-textColor py-2 rounded-sm bg-lightPink outline-none"
            />
          </div>
        </div>
      </form>
      <div class="w-1/2 flex justify-center items-center mx-auto mt-4">
        <GlobalHButton name="Crear admin" @click="createAdmin" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
  data: () => ({
    adminName: null,
    adminEmail: null,
    adminPassword: null,
  }),
  methods: {
    ...mapActions("user", ["signAdminUp"]),
    createAdmin() {
      const admin = {
        name: this.adminName,
        email: this.adminEmail,
        password: this.adminPassword,
      };
      this.signAdminUp(admin)
    },
  },
};
</script>
