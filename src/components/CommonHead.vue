<template>
  <header>
    <div class="l-content">
      <el-button
        @click="changeMenu"
        icon="el-icon-menu"
        size="mini"
      ></el-button>
      <el-breadcrumb style="color: red" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          style="color: red"
          v-for="item in tags"
          :key="item.path"
          :to="{ path: item.path }"
        >
          {{ item.label }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span>
          <img class="user" :src="userImg" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="logOut">退出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>
<script>
import { mapState } from "vuex";
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
    logOut() {
      this.$store.commit("clearToken");
      this.$store.commit("clearMenu");
      this.$router.push("/login");
    },
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
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
