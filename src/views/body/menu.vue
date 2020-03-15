<template>
  <div class="m-menu">
    <dl class="nav">
      <dt>全部分类</dt>
      <dd v-for="(item, index) in menu" :key="index">
        <i :class="item.type"></i>
        {{ item.title }}
        <span class="arrow"></span>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          // 图标参数
          type: "food",
          // 文本参数
          title: "美食"
        }
      ]
    };
  }
};
</script>

<style></style>
