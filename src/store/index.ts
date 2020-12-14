import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: "Product1",
        image: "../assets/apple_raw.png",
        price: 10
      },
      {
        id: 2,
        name: "Product2",
        image: "../assets/apple_raw.png",
        price: 20
      },
      {
        id: 3,
        name: "Product3",
        image: "../assets/apple_raw.png",
        price: 30
      },
      {
        id: 4,
        name: "Product4",
        image: "../assets/apple_raw.png",
        price: 40
      },
      {
        id: 5,
        name: "Product5",
        image: "../assets/apple_raw.png",
        price: 50
      }
    ],
    storeCart: [] as number[],
  },
  getters: {
    getProducts: state => state.products,
    getStoreCart: state => state.storeCart
  },
  mutations: {
    ADD_CART_ITEM(state, id) {
      state.storeCart.push(0);
      state.storeCart.push(id);
    },
    REMOVE_CART_ITEM(state, index) {
      state.storeCart.splice(index, 1);
    }
  },
  actions: {
    addProduct(context, id) {
      context.commit("ADD_CART_ITEM", id);
    },
    removeProduct(context, id) {
      context.commit("REMOVE_CART_ITEM", id);
    }
  },
  modules: {}
});
