<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团" />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="search"
            placeholder="搜索商家或地点"
            @focus="focus"
            @blur="blur"
            @input="input"
          />
          <button class="el-button el-button--primary">
            <i class="el-icon-search"></i>
          </button>
          <!-- 输入框不输入内容的信息 -->
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotPlace" :key="index">{{ item }}</dd>
          </dl>
          <!-- 输入框有内容时的相关搜索 -->
          <dl class="searchList" v-if="isSearchPlace">
            <dd v-for="(item, index) in searchList" :key="index">{{ item }}</dd>
          </dl>
        </div>
        <p class="suggset">
          <a href="#">故宫博物院</a>
        </p>
        <ul class="mtnav">
          <li>
            <router-link to="/" class="takeout">美团外卖</router-link>
          </li>
          <li>
            <router-link to="/" class="movie">猫眼电影</router-link>
          </li>
          <li>
            <router-link to="/" class="hotel">美团酒店</router-link>
          </li>
          <li>
            <router-link to="/" class="business">商家入驻</router-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="6" class="right">
        <ul class="security">
          <li>
            <i class="refund">
              <p class="txt">随时退</p>
            </i>
          </li>
          <li>
            <i class="single">
              <p class="txt">不满意免单</p>
            </i>
          </li>
          <li>
            <i class="overdue">
              <p class="txt">过期退</p>
            </i>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      isFocus: false,
      hotPlace: ["故宫", "故宫", "故宫"],
      searchList: ["故宫", "故宫", "故宫"]
    };
  },
  computed: {
    isHotPlace: function() {
      return this.isFocus && !this.search;
    },
    isSearchPlace: function() {
      return this.isFocus && this.search;
    }
  },
  methods: {
    focus: function() {
      this.isFocus = true;
    },
    blur: function() {
      let self = this;
      setTimeout(function() {
        self.isFocus = false;
      }, 200);
    },
    input() {
      // 发请求拿数据更新列表
      console.log(666);
    }
  }
};
</script>

<style lang="scss"></style>
