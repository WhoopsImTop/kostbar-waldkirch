<template>
    <div class="content">
        <h1>{{ article.title }}</h1>
        <p v-html="$md.render(article.description)"></p>
    </div>
</template>

<script>
export default {
    layout: 'main',
    head() {
        return {
            title: this.article.title,
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: "description",
                    name: "description",
                    content: this.article.description
                }
            ]
        };
    },
    async fetch({ store: { dispatch, getters } }) {
        await dispatch('getInfos')
        await dispatch('getSidebarNav')
        await dispatch('getMainMenus')
        await dispatch('getOtherMenus')
    },
    async asyncData({ $content, params }) {
        const article = await $content(params.slug).fetch();

        return { article };
    },
};
</script>

<style>
.content a {
    font-style: italic;
    color: var(--orange-color);
}
</style>