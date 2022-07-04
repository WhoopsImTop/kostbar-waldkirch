<template>
    <div class="navigation-background">
        <div class="navigation-content-container">
            <nuxt-link to="/"><KostbarLogo class="grid-item-1" width="150" /></nuxt-link>
            <div class="burger grid-item-3" @click="active = !active" :class="active ? 'active' : ''">
                <div class="line-1"></div>
                <div class="line-2"></div>
                <div class="line-3"></div>
            </div>
            <div class="navigation-content grid-item-3" :class="active ? 'active' : ''">
                <p class="thin">
                    Tel: <a href="tel:076124262728">0761 242 627 28</a>
                    <br>
                    Langestr. 109, 79183 Waldkirch
                </p>
                <hr>
                <div class="nav-links">
                    <nuxt-link class="nav-link" to="/">Tageskarte</nuxt-link>
                    <nuxt-link class="nav-link" to="/menu/burgerkarte">Burgerkarte</nuxt-link>
                    <nuxt-link class="nav-link" to="/menu/foodtruck">Foodtruck</nuxt-link>
                    <nuxt-link class="nav-link" to="/kontakt">Kontakt</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import KostbarLogo from '../components/KostbarLogo.vue';
export default {
    components: {
        KostbarLogo
    },
    data: () => {
        return {
            active: false
        }
    }
}
</script>

<style>
.thin {
    margin-top: 0px;
}

.navigation-background {
    background-color: #111111;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    z-index: 1;
}

.navigation-content-container {
    max-width: 1440px;
    padding: 20px 50px;
    display: grid;
    grid-template-columns: 8fr 1fr 3fr;
    position: relative;
    margin: 0 auto;
}


.grid-item-1 {
    grid-column: 1
}

.grid-item-2 {
    grid-column: 2
}

.navigation-content {
    background-image: url('/img/menu-bg.png');
    background-size: cover;
    background-position: bottom;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 50px;
    min-height: 300px;
    padding: 30px;
}

.nav-links {
    display: flex;
    flex-direction: column;
    grid-column: 3;
}

hr {
    margin: 30px 0;
    border: 1px solid #000;
}

.nav-link {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 30px;
    line-height: 35px;
    transition: .3s ease-in-out;
}

.nav-link:hover {
    color: var(--orange-color);
    transition: .3s ease-in-out;
}

a {
    text-decoration: none;
    color: var(--text-dark)
}

.burger {
    display: none;
}

.line-1, .line-2, .line-3 {
    width: 30px;
    height: 3px;
    background-color: var(--menu-bg-color);
    margin: 3px 0;
    transition: .3s ease-in-out;
}

a:hover {
    cursor: pointer;
}

@media (max-width: 1349px) {
    .navigation-content-container {
        display: flex;
        justify-content: space-between;
    }

    .navigation-content {
        opacity: 0;
        left: 0px;
        right: 0px;
        top: 100px;
        transition: .5s ease-in-out;
        min-height: 0px;
        height: 0px;
        overflow: hidden;
    }

    .burger {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    }

    .active .line-1 {
        transform: rotate(45deg) translate(6.25px, 6.5px);
    }

    .active .line-2 {
        width: 0px;
    }

    .active .line-3 {
        transform: rotate(-45deg) translate(6.25px, -6.5px);
    }

    .navigation-content.active {
        opacity: 1;
        top: 100px;
        transition: height .5s ease-in-out;
        height: 300px;
        overflow: hidden;
        display: block;
    }
}
</style>