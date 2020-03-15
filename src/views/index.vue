<template>
  <div id="index">
    <!-- element布局容器, height和width是可配置参数项,有默认值 -->
    <el-container class="layout-default">
      <el-header height="197px">
        <!-- 为了解耦单独引Header,上面的Header只是为了布局 -->
        <MyHeader></MyHeader>
      </el-header>
      <el-main>
        <MyBody></MyBody>
      </el-main>
      <el-footer>
        <!-- <MyFooter></MyFooter> -->
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import MyHeader from "./header/index";
import MyBody from "./body/index";
// import MyFooter from "./footerx";
export default {
  components: {
    MyHeader,
    MyBody
    // MyFooter
  }
};
</script>

<style lang="scss">
// @import "../assets/css/public/layout.scss";
</style>
