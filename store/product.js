import { fireDataBase, fireStorage } from "../static/js/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  getDocs,
  updateDoc,
  deleteDoc,
  setDoc,
  collection,
  doc,
} from "firebase/firestore";

const state = () => ({
  isModalOpen: false,
  selectedProduct: {},
  products: [],
});

const getters = {
  getIsModalOpen(state) {
    return state.isModalOpen;
  },
  getSelectedProduct(state) {
    return state.selectedProduct;
  },
  getProducts(state) {
    return state.products;
  },
};

const mutations = {
  SET_PRODUCT(state, newProduct) {
    state.products.push(newProduct);
  },
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SELECT_PRODUCT(state, selectedProduct) {
    state.selectedProduct = selectedProduct;
  },
  RESET_SELECTED_PRODUCT(state) {
    state.selectedProduct = {};
  },
  SHOW_MODAL(state, boolean) {
    state.isModalOpen = boolean;
  },
};

const actions = {
  async uploadProduct({ commit, getters }, payload) {
    try {
      const db = fireDataBase;
      const storage = fireStorage;
      // UPDATE PRODUCT
      if (Object.keys(getters.getSelectedProduct).length) {
        const productId = getters.getSelectedProduct.id;
        let updatedProduct;
        const productRef = doc(db, "products", productId);
        // UPDATING THUMBNAIL
        if (payload.thumbnail instanceof File) {
          const filename = payload.thumbnail.split(".").shift();
          const thumbnailRef = ref(storage, `products/${filename}`);
          await uploadBytes(thumbnailRef, payload.thumbnail);
          const imageUrl = getDownloadURL(thumbnailRef);
          await updateDoc(productRef, { thumbnail: imageUrl });
        } else {
          updatedProduct = {
            thumbnail: payload.thumbnail,
          };
        }
        // UPDATING EXTRA IMAGES
        let images;
        if (payload.images.length) {
          for (let i = 0; i < payload.images.length; i++) {
            if (payload.images[i] instanceof File) {
              const filename = payload.images[i].split(".").shift();
              const imageRef = ref(storage, `products/${filename}`);
              await uploadBytes(imageRef, payload.images[i]);
              const imageUrl = getDownloadURL(imageRef);
              images[i] = imageUrl;
            } else {
              images[i] = payload.images[i];
            }
          }
          await updateDoc(productRef, { images: images });
        } else {
          updatedProduct = {
            images: payload.images,
          };
        }
        // UPDATING COLOR IMAGES
        let imgByColor;
        if (payload.clothes.colors.images.length) {
          for (let i = 0; i < payload.clothes.colors.images.length; i++) {
            if (payload.clothes.colors.images[i].object instanceof File) {
              const filename = payload.clothes.colors.images[i]
                .split(".")
                .shift();
              const imageRef = ref(storage, `products/clothes/${filename}`);
              await uploadBytes(imageRef, payload.clothes.colors.images[i]);
              imageUrl = getDownloadURL(imageRef);
              imgByColor.push({
                name: payload.clothes.colors[i].name,
                image: imageUrl,
              });
            } else {
              imgByColor.push({
                name: payload.clothes.colors[i].name,
                image: payload.clothes.colors[i].url,
              });
            }
          }
          await updateDoc(productRef, { "clothes.colors": imgByColor });
        } else {
          await updateDoc(productRef, { "clothes.color": [] });
        }
        // UPDATING PRODUCT
        updatedProduct = {
          ...payload,
        };
        console.log(updatedProduct);
      } else {
        console.log("Estamos en else", { ...payload });
      }
      // UPLOAD PRODUCT
      // commit("SET_PRODUCT", product);
    } catch (err) {
      console.error("CANNOT_UPLOAD_PRODUCT", err);
    }
  },
  showProductModal({ commit }, payload) {
    commit("SHOW_MODAL", payload);
  },
  selectProduct({ commit }, payload) {
    // TODO: URLSearchParams(*) producId
    commit("RESET_SELECTED_PRODUCT");
    // HACEMOS LA BUSQUEDA
    commit("SELECT_PRODUCT", selectedProduct);
  },
};

export { state, getters, mutations, actions };
