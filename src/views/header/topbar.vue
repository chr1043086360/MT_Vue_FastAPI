<template>
  <el-row :gutter="0" class="m-header">
    <el-col :span="4">
      <geo></geo>
    </el-col>
    <el-col :span="6">
      <user></user>
    </el-col>
    <!-- <el-col :span="6"><div class="grid-content bg-purple"></div></el-col> -->
    <el-col :span="14">
      <mtN></mtN>
    </el-col>
  </el-row>
</template>

<script>
import geo from "./geo";
import user from "./user";
import mtN from "./nav";
export default {
  components: {
    geo,
    user,
    mtN
  }
};
</script>

<style lang="scss">
@import "@/assets/css/public/layout";
</style>
