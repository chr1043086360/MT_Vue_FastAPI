<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <menubody></menubody>
      </el-col>
      <el-col :span="19"></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"></el-col>
    </el-row>
  </div>
</template>

<script>
import menubody from "./menu";
export default {
  components: {
    menubody
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>
