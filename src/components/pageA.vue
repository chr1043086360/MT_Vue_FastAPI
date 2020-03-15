<template>
  <div id="a">
    <h1>pageA</h1>
    <router-link to="/b">b</router-link>

    <p>||||||</p>
    <router-link to="/c">c</router-link>
    {{ $store.state.count.count }}
    <button type="button" @click="increment">增加</button>
    <button type="button" @click="decrement">删减</button>
  </div>
</template>

<script>
// 用于
import { mapActions } from "vuex";
export default {
  name: "pageA",
  methods: mapActions("count", ["increment", "decrement"])
};
</script>

<style></style>
