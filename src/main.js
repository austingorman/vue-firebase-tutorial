import Vue from "vue";
import firebase from "firebase";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDNkIfLposBI3zNcV6Gd1OUayypZSzlLLo",
    authDomain: "vue-firebase-tutorial-f13da.firebaseapp.com",
    databaseURL: "https://vue-firebase-tutorial-f13da.firebaseio.com",
    projectId: "vue-firebase-tutorial-f13da",
    storageBucket: "vue-firebase-tutorial-f13da.appspot.com",
    messagingSenderId: "554636280335"
};
firebase.initializeApp(config);

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
