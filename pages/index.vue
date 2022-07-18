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

                <div style="margin-bottom: 40px;"
                    :style="i != 0 ? 'margin-bottom: 50px; margin-top: 10px;' : 'margin-bottom: 40px;'"
                    v-for="(item, index) in menuText.speisen" :key="index">

                    <div class="menu-entry">

                        <div class="col" style="position: relative;">
                            <h4 v-if="i != 0"
                                style="margin-bottom: 0px; height: 0px; position: absolute; bottom: 60px;">{{
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
/* 
    async fetch({ store: { dispatch, getters } }) {
        await dispatch('getInfos')
        await dispatch('getSidebarNav')
        await dispatch('getMainMenus')
        await dispatch('getOtherMenus')
    }, */
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

.link {
    color: var(--green-color);
}

@media (max-width: 1349px) {
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