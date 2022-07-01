<template>
  <div class="homepage-container">
    <div v-for="(menuText, index) in menuTexts" :key="index" >
      <div class="row">
        <h2>{{ menuText.title }} <br> <h3 v-show="menuText.subtitle" style="margin: 0px; font-size: 16px; line-height: 16px;">{{ menuText.subtitle }}</h3></h2>
        <h3 v-if="index == 0" class="smaller-font">Bestellen unter: <br> <a class="link" href="tel:076124262728">0761 242 627 28</a></h3>
      </div>

      <div class="menu">
        <div style="margin-bottom: 40px;" v-for="(item, index) in menuText.speisen" :key="index">
          <div class="menu-entry">
            <div class="col">
              <h3>{{ item.food }}</h3>
            </div>
            <div class="border"></div>
            <p>{{ item.price.toFixed(1) }} €</p>
          </div>
          <p v-show="item.garnish">{{ item.garnish }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';
export default {
  components: { Header, Sidebar },
  layout: 'main',
  data: () => {
    return {
      menuTexts: [{
        title: "",
        speisen: [{
          food: "",
          price: 0,
          garnish: ""
        }]
      }],
    }
  },
  async beforeMount() {
    let menuTexts = await this.$content("menu").where({ placed: 'Startseite' }).fetch();
    console.log(menuTexts)
    this.menuTexts = menuTexts;
  },
};
</script>

<style scoped>
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.col {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.menu-entry h3 {
  font-size: 30px;
  line-height: 30px;
  margin: 0px;
  min-width: max-content;
}

p {
  margin: 5px 0;
  font-size: 20px;
  min-width: max-content;
}

.border {
  border-bottom: 2px dashed var(--text-dark);
  width: 100%;
  margin: 0px 20px 10px 20px;
}

.menu-entry {
  display: flex;
  flex-direction: row;
}

.smaller-font {
  font-size: 25px;
  line-height: 25px;
}

.menu {
  padding: 30px;
  background-color: var(--menu-bg-color);
  border: 2px solid var(--menu-border-color);
}
</style>