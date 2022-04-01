<template>
  <div class="w-full h-screen flex justify-center items-center bg-primary">
    <div class="w-72 h-72 shadow-lg rounded-lg bg-secondary">
      <form action="" class="w-full p-1">
        <div class="w-full">
          <!-- NOMBRES DEL USUARIO -->
          <div class="w-full mb-2">
            <label class="text-textColor font-medium">Nombre</label>
            <input
              v-model="adminName"
              type="name"
              class="w-full mt-1 px-2 py-2 rounded-sm bg-secondary outline-none"
            />
          </div>
          <!-- EMAIL DEL USUARIO -->
          <div class="w-full mb-2">
            <label class="text-textColor font-medium">Nombre</label>
            <input
              v-model="adminEmail"
              type="email"
              class="w-full mt-1 px-2 py-2 rounded-sm bg-secondary outline-none"
            />
          </div>
          <!-- PASSWORD DEL USUARIO -->
          <div class="w-full mb-2">
            <label class="text-textColor font-medium">Nombre</label>
            <input
              v-model="adminPassword"
              type="name"
              class="w-full mt-1 px-2 py-2 rounded-sm bg-secondary outline-none"
            />
          </div>
        </div>
      </form>
      <div class="w-full flex justify-center items-center">
        <GlobalHButton
          name="Guardar usuario"
          class="bg-primary"
          @click="createAdmin"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    adminName: null,
    adminEmail: null,
    adminPassword: null,
  }),
  methods: {
    createAdmin() {
      const admin = {
        name: this.adminName,
        email: this.adminEmail,
        password: this.adminPassword,
      };
      console.log(admin);
    },
  },
};
</script>
