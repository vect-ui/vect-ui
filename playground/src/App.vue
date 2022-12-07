<template>
  <div class="contanier">
    <aside>
      <nav>
        <ul>
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/day-xue">day-xue</router-link></li>
          <li><router-link to="/hai-jie">hai-jie</router-link></li>
          <li><router-link to="/din">din</router-link></li>
        </ul>
      </nav>
    </aside>
    <section>
      <router-view />
    </section>
  </div>
</template>

<style lang="less" scoped>
  .contanier {
    padding: 10px;
    display: flex;
    width: 100%;
    height: 100vh;
    aside {
      border: 1px skyblue solid;
      width: 100px;
      nav {
        margin: 50px 0 0 10px;
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
      }
    }
    section {
      flex: 1;
      border: 1px #9999 solid;
      padding: 10px;
    }
  }
</style>
