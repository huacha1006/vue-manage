<template>
  <el-container>
    <el-aside width="auto">
      <common-aside style="height: 100vh"></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-head></common-head>
      </el-header>
      <common-tag></common-tag>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "../src/components/CommonAside.vue";
import CommonHead from "../src/components/CommonHead.vue";
import CommonTag from "../src/components/CommonTag.vue";
export default {
  name: "mAin",
  components: {
    CommonAside,
    CommonHead,
    CommonTag,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
<style lang="less" scoped>
.el-header {
  background-color: #333;
}
.el-main {
  padding-top: 0;
}
</style>
