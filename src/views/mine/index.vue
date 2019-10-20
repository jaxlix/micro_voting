<template>
  <div class="mine">
    <div class="bg">我的</div>
    <div class="nav">
      <div>投票</div>
      <div>问卷</div>
      <div>测试</div>
    </div>
    <div class="list">
      <mt-cell title="问题反馈" to="//github.com" is-link></mt-cell>
      <mt-cell title="帮助" to="//github.com" is-link></mt-cell>
      <mt-cell title="关于" to="//github.com" is-link></mt-cell>
    </div>
  </div>
</template>

<script>
</script>

<style lang="less" scope>
.mine {
  .bg {
    position: relative;
    width: 100%;
    height: 200px;
    background-color: #fff;
    color: #fff;
    text-align: center;
    line-height: 200px;
    font-size: 2rem;
    font-weight: bold;
    background-color: #498bff;
  }
  .nav {
    display: flex;
    margin-top: 10px;
    background-color: #fff;
    div {
      flex: 1;
      height: 50px;
      line-height: 50px;
      text-align: center;
      cursor: pointer;
    }
  }
  .list {
      margin-top: 20px;

  }
}
</style>
