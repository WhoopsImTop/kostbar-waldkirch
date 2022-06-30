<template>
  <div>
    <Header></Header>
    <div class="content-container" style="margin-top: 130px;">
    <h1 style="margin-bottom: 0px;">Täglich frisch.<br>
      Lecker Essen.</h1>
    <h3 style="margin-top: 0px; text-transform: uppercase; font-weight: 400">Morgens <span class="green">|</span>
      Mittags <span class="green">|</span> Abends</h3>
    <div class="grid">
      <nuxt class="grid-item-1"/>
      <div class="grid-item-2"></div>
      <Sidebar class="grid-item-3"/>
    </div>
  </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';
export default {
    components: { Header, Sidebar },
};
</script>

<style>
* {
  font-family: 'Poppins', Arial, Helvetica, sans-serif
}

:root {
  --text-dark: #000000;
  --orange-color: #e83414;
  --green-color: #539E33;
}

h1 {
  font-size: 80px;
  line-height: 90px;
  font-weight: 900;
  text-transform: uppercase;
}

h2 {
  font-size: 40px;
  line-height: 50px;
  text-transform: uppercase;
}

h3 {
  font-size: 40px;
  line-height: 50px;
}

.grid {
  display: grid;
  grid-template-columns: 8fr 1fr 3fr;
}

.grid-item-1 {
  grid-column: 1
}

.grid-item-2 {
  grid-column: 2
}

.grid-item-3 {
  grid-column: 3
}

.content-container {
  max-width: 1440px;
  padding: 0 50px;
  margin: 0 auto;
}

.green {
  color: var(--green-color)
}
</style>