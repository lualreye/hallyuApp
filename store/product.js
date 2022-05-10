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
});

const getters = {
  getIsModalOpen(state) {
    return state.isModalOpen;
  },
};

const mutations = {
  SET_PRODUCT(state, newProduct) {
    state.products.push(newProduct);
  },
  SHOW_MODAL(state, boolean) {
    state.isModalOpen = boolean;
  },
};

const actions = {
  async uploadProduct({ commit, rootState }, payload) {
    try {
      const db = fireDataBase;
      const storage = fireStorage;

      // UPDATE PRODUCT
      if (Object.keys(rootState.inventoryTotal.selectedProduct).length) {
        const productId = rootState.inventoryTotal.selectedProduct.id;
        let updatedProduct;
        const productRef = doc(db, "products", productId);
        // UPDATING THUMBNAIL
        if (payload.thumbnail instanceof File) {
          const filename = payload.thumbnail.name.split(".").shift();
          const thumbnailRef = ref(storage, `products/${filename}`);
          await uploadBytes(thumbnailRef, payload.thumbnail);
          const imageUrl = await getDownloadURL(thumbnailRef);
          await updateDoc(productRef, { thumbnail: imageUrl });
        } else {
          updatedProduct = {
            thumbnail: payload.thumbnail,
          };
        }
        // UPDATING EXTRA IMAGES
        let images = [];
        console.log(payload.images);
        if (payload.images.length !== 0) {
          for (let i = 0; i < payload.images.length; i++) {
            if (typeof payload.images[i] === "object") {
              const filename = payload.images[i].object.name.split(".").shift();
              const imageRef = ref(storage, `products/extras/${filename}`);
              console.log(filename, imageRef);
              await uploadBytes(imageRef, payload.images[i]);
              const imageUrl = await getDownloadURL(imageRef);
              images[i] = imageUrl;
            } else {
              images[i] = payload.images[i];
            }
          }
          console.log(images);
          await updateDoc(productRef, { images: images });
          commit(
            "inventoryTotal/UPDATE_EXTRA_IMAGES",
            {
              id: productRef.id,
              images: images,
            },
            { root: true }
          );
        } else if (payload.images.length === 0) {
          updatedProduct = {
            images: payload.images,
          };
          await updateDoc(productRef, { images: images });
        } else {
          console.log("WE_CANNOT_UPLOAD_EXTRA_IMAGES");
        }
        // UPDATING COLOR IMAGES
        let imgByColor;
        if (payload.clothes.colors.length) {
          for (let i = 0; i < payload.clothes.colors.length; i++) {
            if (payload.clothes.colors[i].image.object instanceof File) {
              const filename = payload.clothes.colors.images[i].name
                .split(".")
                .shift();
              const imageRef = ref(storage, `products/clothes/${filename}`);
              await uploadBytes(imageRef, payload.clothes.colors.images[i]);
              imageUrl = await getDownloadURL(imageRef);
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
        // UPDATING PRODUCT DETAIL
        updatedProduct = {
          id: productRef.id,
          category: payload.category,
          description: payload.description,
          band: payload.band,
          offer: payload.offer,
          offered: payload.offered,
          price: Number(payload.price),
          recommended: payload.recommended,
          name: payload.name,
          sku: payload.sku,
          stock: payload.stock,
        };
        await updateDoc(productRef, { ...updatedProduct });
        commit(
          "inventoryTotal/UPDATE_PRODUCT",
          { ...updatedProduct },
          { root: true }
        );
      }
      // UPLOADING PRODUCT
      else {
        const thumbnailName = payload.thumbnail.name.split(".").shift();
        const thumbnailRef = ref(storage, `products/${thumbnailName}`);
        await uploadBytes(thumbnailRef, payload.thumbnail);
        const thumbnailUrl = await getDownloadURL(thumbnailRef);
        // GETTING EXTRA IMAGES
        let imgUrls = [];
        if (payload.images.length) {
          for (let i = 0; i < payload.images.length; i++) {
            const filename = payload.images[i].object.name.split(".").shift();
            const imageRef = ref(storage, `products/extras/${filename}`);
            await uploadBytes(imageRef, payload.images[i]);
            const url = await getDownloadURL(imageRef);
            imgUrls.push(url);
          }
        }
        // GETTING IMAGES CLOTHES
        let imgByColor = [];
        if (payload.clothes.colors.length) {
          for (let i = 0; i < payload.clothes.colors.length; i++) {
            const filename = payload.clothes.colors[i].object.name
              .split(".")
              .shift();
            const imageRef = ref(storage, `products/colors/${filename}`);
            await uploadBytes(imageRef, payload.clothes.colors[i].object);
            const url = await getDownloadURL(imageRef);
            imgByColor.push({
              image: url,
              name: payload.clothes.colors[i].name,
            });
          }
        }
        const productRef = doc(collection(db, "products"));
        const newProduct = {
          id: productRef.id,
          images: imgUrls,
          clothes: {
            sizes: payload.clothes.size,
            colors: imgByColor,
          },
          thumbnail: thumbnailUrl,
          category: payload.category,
          description: payload.description,
          band: payload.band,
          likes: payload.likes,
          offer: payload.offer,
          offered: payload.offered,
          price: Number(payload.price),
          published: false,
          recommended: payload.recommended,
          name: payload.name,
          sales: payload.sales,
          sku: payload.sku,
          stock: payload.stock,
        };
        await setDoc(productRef, newProduct);
        commit(
          "inventoryTotal/SET_PRODUCT",
          { ...newProduct, selected: false },
          { root: true }
        );
      }
      // UPLOAD PRODUCT
    } catch (err) {
      console.error("CANNOT_UPLOAD_PRODUCT", err);
    }
  },
  showProductModal({ commit }, payload) {
    commit("SHOW_MODAL", payload);
  },
  async publishProduct({ commit }, payload) {
    const db = fireDataBase;
    try {
      const productRef = doc(fireDataBase, "products", payload.id);
      await updateDoc(productRef, {
        published: payload.publish,
      });
      commit("inventoryTotal/PUBLISH_PRODUCT", payload, { root: true });
    } catch (err) {
      console.error("CANNOT_PUBLISH_PRODUCT", err);
    }
  },
  async deleteProduct({ commit }, payload) {
    commit("inventoryTotal/RESET_SELECTED_PRODUCT", null, { root: true });
    const db = fireDataBase;
    console.log(payload, "Estamos en deleting");
    try {
      await deleteDoc(doc(db, "products", payload));
      commit("inventoryTotal/DELETE_PRODUCT", payload, { root: true });
    } catch (err) {
      console.error("CANNOT_DELETE_PRODUCT", err);
    }
  },
};

export { state, getters, mutations, actions };
