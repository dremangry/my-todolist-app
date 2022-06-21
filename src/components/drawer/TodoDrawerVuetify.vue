<template>
    <v-card class="mx-auto" max-width="344" color="#686ee2" hover>
        <v-card-title class="text-h5 font-weight-bold">
        About Vuetify
        </v-card-title>

        <v-card-actions>
        <v-btn href="https://vuetifyjs.com/en/" target="_blank" text>
            <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
        <v-btn
            href="https://github.com/vuetifyjs/vuetify/releases/latest"
            target="_blank"
            text
        >
            <v-icon>mdi-github</v-icon>
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
        </v-card-actions>

        <v-expand-transition>
        <div v-show="show">
            <v-divider></v-divider>

            <v-card-text class="font-weight-medium">
                Vuetify is a component framework for Vue.js 2. It aims to provide
                clean, semantic and reusable components that make building your
                application a breeze. Vuetify utilizes Google's Material Design design
                pattern, taking cues from other popular frameworks such as
                Materialize.css, Material Design Lite, Semantic UI and Bootstrap 4.
            </v-card-text>
        </div>
        </v-expand-transition>
    </v-card>
</template>

<script>
export default {
  data: () => ({ show: false }),
};
</script>

<style lang="sass">
.btnLink
    border: 1px solid white
</style>
