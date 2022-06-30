<template>
    <div class="navigation-background">
        <div class="navigation-content-container">
            <KostbarLogo class="grid-item-1" width="150" />
            <div class="burger grid-item-3"></div>
            <div class="navigation-content grid-item-3">
                <p class="thin">
                    Tel: <a href="tel:076124262728">0761 242 627 28</a>
                    <br>
                    Langestr. 109, 79183 Waldkirch
                </p>
                <hr>
                <div class="nav-links">
                    <a class="nav-link">Tageskarte</a>
                    <a class="nav-link">Burgerkarte</a>
                    <a class="nav-link">Foodtruck</a>
                    <a class="nav-link">Kontakt</a>
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

a:hover {
    cursor: pointer;
}

@media (max-width: 1080px) {
    .navigation-content {
        display: none;
    }
}
</style>