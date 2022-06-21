<template>
    <v-card class="mx-auto" max-width="344" color="#5c3e84" hover>
        <v-card-title class="text-h5 font-weight-bold"> About this project </v-card-title>

        <!-- <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle> -->

        <v-card-actions>
        <!-- <v-btn color="orange lighten-2" text> Explore </v-btn> -->
        <v-btn
            target="_blank"
            text
            href="https://github.com/dremangry/my-todolist-app.git"
        > 
            <v-icon color="white lighten-1">mdi-github</v-icon>
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
                This project was built with Vue.js version 2 and Vuetify to show the developer's abilities to understand and develop simple and complex programming logic. This application allows the user to create a task, edit the created task, delete a task and mark a task as done.
            </v-card-text>
        </div>
        </v-expand-transition>
    </v-card>
</template>

<script>
export default {
    data: () => ({  show: false }),
};
</script>

<style lang="sass">

</style>
