export const state = () => ({
  show: false,
  selectedProducts: [
    {
      productName: "Nombre del producto",
      price: 25,
      description: "Esta es una descripcion del producto",
      discount: 3,
      image: require("@/static/images/idols/han.jpg"),
    },
    {
      productName: "Nombre del producto",
      price: 25,
      description: "Esta es una descripcion del producto",
      discount: 3,
      image: require("@/static/images/idols/han.jpg"),
    },
    {
      productName: "Nombre del producto",
      price: 25,
      description: "Esta es una descripcion del producto",
      discount: 3,
      image: require("@/static/images/idols/han.jpg"),
    },
    {
      productName: "Nombre del producto",
      price: 25,
      description: "Esta es una descripcion del producto",
      discount: 3,
      image: require("@/static/images/idols/han.jpg"),
    },
    {
      productName: "Nombre del producto",
      price: 25,
      description: "Esta es una descripcion del producto",
      discount: 3,
      image: require("@/static/images/idols/han.jpg"),
    },
  ],
});

export const getters = {
  showCart(state) {
    return state.show;
  },
  getSelectedProducts(state) {
    return state.selectedProducts
  }
};

export const mutations = {
  //generamos el cambio de estado en la visibilidad del carrito de compras
  //recibimos un booleano indicando el estado requerido para su visualizacion
  ACTIVE_CART(state, bool) {
    return (state.show = bool);
  },
};

export const actions = {
  activeCart({ commit }, bool) {
    commit("ACTIVE_CART", bool);
  },
};
