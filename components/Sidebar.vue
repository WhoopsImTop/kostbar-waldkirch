<template>
  <div class="sidebar">
    <h2>{{ $store.state.infos[0].title }}</h2>
    <div class="notice-bon">
      <p v-html="$md.render($store.state.infos[0].content)"></p>
    </div>

    <div v-for="link in $store.state.sidebarNavigation" :key="link.title">
      <h2 style="margin-bottom: 0px;">{{ link.title }}</h2>
      <span v-show="link.subtitle">{{ link.subtitle }}</span>
      <p v-html="$md.render(link.description)"></p>
      <a v-if="link.link" :href="link.link" class="link">{{ link.linkText }}</a>
    </div>
  </div>
</template>

<script>
export default {
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