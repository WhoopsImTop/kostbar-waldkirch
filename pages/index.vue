<template>
    <div class="homepage-container">

        <div v-for="(menuText, i) in $store.state.mainMenus" :key="i">

            <div class="row">

                <h2>{{ menuText.title }} <br>

                    <h3 v-show="menuText.subtitle" style="margin: 0px; font-size: 16px; line-height: 16px;">{{
                            menuText.subtitle
                    }}</h3>

                </h2>

                <h3 v-if="i == 0" class="smaller-font">Bestellen unter: <br> <a class="link"
                        href="tel:076124262728">0761 242 627 28</a></h3>

            </div>



            <div class="menu">
                <div class="menu-action-container">
                    <button class="downloadBtn" @click="generate(menuText)"><img src="/download.svg"></button>
                </div>

                <div style="margin-bottom: 40px;" :class="i != 0 ? 'm-tb' : 'm-b'"
                    v-for="(item, index) in menuText.speisen" :key="index">

                    <div class="menu-entry">

                        <div class="col" style="position: relative;">
                            <h4 v-if="i != 0" class="mb-60"
                                style="margin-top: -16px; margin-bottom: 0px;">{{
                                        weekday[index % 7]
                                }}</h4>
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
            weekday: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
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
    methods: {
        generate(menu) {
            this.generatePDF(menu, true);
        },
        async share(menu) {

            // share the pdf
            let pdf = this.generatePDF(menu, false);

            // navigator.share the pdf
            await navigator.share({
                title: "",
                text: "",
                files: [pdf]
            });
        },
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

.mb-60 {
    bottom: 60px;
}

.border {
    border-bottom: 2px dashed var(--text-dark);
    width: 100%;
    margin: 0px 20px 10px 20px;
}

.downloadBtn {
    background-color: var(--menu-bg-color);
    border-radius: 50%;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
}

.downloadBtn:hover {
    background-color: var(--green-color);
    cursor: pointer;
}

.downloadBtn img {
    width: 30px;
    height: 30px;
    margin-bottom: 5px;
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
    position: relative;
    padding: 30px;
    background-color: var(--menu-bg-color);
    border: 2px solid var(--menu-border-color);
}

.menu-action-container {
    position: sticky;
    margin-right: -55px;
    top: 135px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 0px;
}

.m-tb {
    margin-bottom: 50px;
    margin-top: 10px;
}

.m-b {
    margin-bottom: 40px;
}

.link {
    color: var(--green-color);
}

@media (max-width: 1349px) {
    .m-tb {
        margin-bottom: 85px;
        margin-top: 10px;
    }
    .m-b {
        margin-bottom: 40px;
    }

    .grid {
        grid-template-columns: 1fr;
    }

    .grid-item-1 {
        grid-column: 1
    }

    .grid-item-3 {
        grid-column: 1
    }

    .row {
        flex-wrap: wrap;
    }
}

@media (max-width: 900px) {
    h1 {
        font-size: 40px;
        line-height: 40px;
    }

    h2 {
        font-size: 30px;
        line-height: 30px;
    }

    h3 {
        font-size: 20px;
        line-height: 35px;
    }

    p {
        font-size: 18px;
        margin: 0;
    }

    .content-container {
        padding: 0 30px;
    }

    .grid {
        grid-template-columns: 1fr;
    }

    .grid-item-1 {
        grid-column: 1
    }

    .grid-item-3 {
        grid-column: 1
    }
}

@media (max-width: 1349px) {
    .menu {
        padding: 20px 30px 20px 20px;
    }

    .menu-entry h3 {
        padding-right: 5px;
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