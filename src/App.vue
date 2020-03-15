<template>
  <div id="app">
    <HelloWorld :age="date" @patch="msg">
      <!-- 这里加东西需要插槽 -->
      <h1 slot="a">加点东西</h1>
      <h1 slot="b">我还想加</h1>
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      date: 18
    };
  },
  methods: {
    msg(x, y) {
      this.date++;
      // alert(x);  可以传递参数进行接受
      alert(y);
    }
  }
};
</script>

<style lang="scss"></style>
