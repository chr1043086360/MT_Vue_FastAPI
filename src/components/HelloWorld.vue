<template>
  <div>
    <slot name="a"></slot>
    <h1>{{ msg }}</h1>

    <div class="parent" @click="parent">
      <p>parent</p>
      <p>parent</p>
      <p>parent</p>
      {{ age }}
      <div class="child" @click.stop="child">child</div>
    </div>
    <!-- 必须用$emit()方法传递,里面可以带参数 -->
    <button type="button" name="button" @click="$emit('patch', 'a', 'b')">
      子组件发送消息到父组件
    </button>
    <slot name="b"></slot>


  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    age: Intl
  },
  data() {
    return {
      items: ["a", "b", "c"],
      n: 1
    };
  },
  methods: {
    run(a, b) {
      console.log(Math.random(), a, b);
    },
    parent() {
      console.log("parent");
    },
    child() {
      console.log("child");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello0 {
  color: #42b983;
}
.hello1 {
  color: red;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
