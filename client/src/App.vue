<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Pessoas</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Lista</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/form">Form</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
    <footer-pessoa></footer-pessoa>
  </div>
</template>

<script>
import Footer from '@/components/layout/footer'

export default {
  name: 'App',
  components: {
    'footer-pessoa': Footer
  }
}
</script>
<style lang="scss">
@import './assets/styles/variables';
@import './assets/styles/bootstrap';
</style>
