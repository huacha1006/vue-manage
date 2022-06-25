<template>
  <header>
    <div class="l-content">
      <el-button
        @click="changeMenu"
        icon="el-icon-menu"
        size="mini"
      ></el-button>
      <h3 style="color: white">首页</h3>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span>
          <img class="user" :src="userImg" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>
<script>
export default {
  name: "CommonHead",
  data() {
    return {
      userImg: require("../assets/images/head.jpeg"),
    };
  },
  methods: {
    changeMenu() {
      this.$store.commit("collapseMenu");
    },
  },
};
</script>
<style lang="less" scoped>
header {
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}

.r-content {
  .user {
    width: 40px;
    border-radius: 50%;
  }
}
</style>
