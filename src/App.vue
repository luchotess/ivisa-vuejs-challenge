<template>
    <div id="app">
        <header></header>
        <div id="nav">
            <router-link to="/"><b>STEP 1</b> - BASIC INFORMATION</router-link>
            <router-link to="/step2"><b>STEP 2</b> - REVISION AND PAYMENT</router-link>
        </div>
        <router-view/>
        <footer></footer>
    </div>
</template>

<style lang="scss">
    * {
        font-family: 'Roboto', sans-serif;;
    }

    body {
        padding: 0;
        margin: 0;
    }

    header {
        background-image: url("./assets/header.png");
        max-width: 1920px;
        height: 350px;
        background-size: contain;
        background-repeat: no-repeat;
    }

    footer {
        background-image: url("./assets/footer.png");
        max-width: 1920px;
        height: 234px;
        margin-top: 80px;
        background-size: contain;
        background-repeat: no-repeat;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        margin: 80px auto 0;
        max-width: 1140px;

        a {
            display: inline-block;
            box-sizing: border-box;
            padding: 25px;
            text-align: center;
            width: 50%;
            color: #6c757d;
            border: 1px solid #eaebea;
            text-decoration: none;
            font-size: 16px;

            &.router-link-exact-active, &:hover {
                color: white;
                background-color: #5b73c1;
                border: 1px solid transparent;
            }
        }
    }
</style>
