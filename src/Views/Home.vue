<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "home",
    components: {
        HelloWorld
    }
};
</script>

  <style scoped>
.signUp {
    margin-top: 40px;
}
input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
}
button {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
}
span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
}
</style>