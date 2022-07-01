<template>
  <div class="homepage-container">
    <div class="row">
      <h2>{{ menuEntry.title }} <br>
        <h3 v-show="menuEntry.subtitle" style="margin: 0px; font-size: 16px; line-height: 16px;">{{ menuEntry.subtitle
        }}
        </h3>
      </h2>
    </div>

    <div class="menu">
      <div style="margin-bottom: 40px;" v-for="(item, index) in menuEntry.speisen" :key="index">
        <div class="menu-entry">
          <div class="col">
            <h3>{{ item.food }}</h3>
          </div>
          <div class="border"></div>
          <p class="price">{{ item.price.toFixed(1) }} €</p>
        </div>
        <p v-show="item.garnish">{{ item.garnish }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'main',
  // Fetching Single menuEntry
  async asyncData({ params, payload }) {
    if (payload) return { menuEntry: payload };
    else
      return {
        menuEntry: await require(`~/content/menu/${params.menu}.json`)
      };
  }
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

@media (max-width: 1349px) {
  .menu {
    padding: 20px;
  }

  p {
    font-size: 18px;
    margin: 0;
  }

  .border {
    display: none;
  }

  .price {
    align-self: flex-end;
    margin: 0 0 0 20px;
  }

  .menu-entry {
    justify-content: space-between;
  }

  .menu-entry h3 {
    font-size: 20px;
    line-height: 30px;
    margin: 0px;
    min-width: auto;
  }
}
</style>