<template>
    <div class="content">
        <nuxt-content :document="article" />
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