<template>
    <div class="container">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">Laravue To-Do</a>
                <a
                    v-on:click="toggleNavBarBurger"
                    role="button"
                    class="navbar-burger burger"
                    v-bind:class="{ 'is-active': active }"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div
                id="navbarBasicExample"
                class="navbar-menu"
                v-bind:class="{ 'is-active': active }"
            >
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <router-link to="/login" class="button is-primary"
                                >Login</router-link
                            >
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            active: false
        };
    },
    methods: {
        toggleNavBarBurger: function() {
            this.active = !this.active;
        }
    },
    mounted() {}
};
</script>
<style scoped></style>
