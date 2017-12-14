<template>
  <div class="app" id="app">
    <h1 class="app-title">Inlearno. Test-app</h1>
    <nav class="app-navigation">
      <router-link to="/" class="app-navigation__link">Main</router-link>
      <router-link to="/map" class="app-navigation__link">Map</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'app',
  methods: {
    ...mapActions(['getData'])
  },
  mounted() {
    this.getData();
  }
}
</script>

<style lang="scss">
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .app {
    width: 100%;
    height: 100%;
    font-family: Courier New, Courier, monospace;
    display: flex;
    flex-direction: column;

    &-title {
      text-align: center;
    }

    &-navigation {
      display: flex;
      justify-content: center;
      flex-shrink: 0;
      margin-bottom: 20px;

      &__link {
        padding: 10px 20px;
        display: flex;
        align-items: center;
      }

      &__link:not(:last-child) {
        margin-right: 50px;
      }

      &__link.router-link-exact-active {
        background-color: gray;
        color: white;
      }
    }
  }
</style>
