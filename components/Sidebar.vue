<template>
  <div class="sidebar">
    <h2>{{ infoText.title }}</h2>
    <div class="notice-bon">
      <p v-html="$md.render(infoText.content)"></p>
    </div>

    <div v-for="link in sidebarNavItems" :key="link.title">
      <h2 style="margin-bottom: 0px;">{{ link.title }}</h2>
      <span v-show="link.subtitle">{{ link.subtitle }}</span>
      <p v-html="$md.render(link.description)"></p>
      <a v-show="link.link" :href="link.link" class="link">{{ link.linkText }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infoText: {
        title: '',
        content: '',
      },
      sidebarNavItems: [],
    }
  },
  async beforeMount() {
    let infoText = await this.$content("infos").where({ title: 'Aktuelles' }).fetch();
    let sidebarNavLinks = await this.$content("sidebarNav").fetch();
    this.infoText = infoText[0];
    this.sidebarNavItems = sidebarNavLinks;
  },
}
</script>

<style>
.notice-bon {
  background-image: url('/img/menu-bg.png');
  background-size: cover;
  background-position: bottom;
  padding: 10px 20px 40px 20px;
  border-top: 3px solid var(--orange-color);
}

.notice-bon p {
  margin: 0;
}

.link {
  color: var(--orange-color);
  text-decoration: none;
  font-style: italic;
  text-decoration: underline;
}

@media (max-width: 1349px) {
  h2 {
    margin-top: 50px;
  }
}

@media (max-width: 900px) {
  .notice-bon {
    background-color: var(--menu-bg-color);
    padding: 10px 20px 20px 20px;
    border-top: 3px solid var(--orange-color);
  }
}
</style>