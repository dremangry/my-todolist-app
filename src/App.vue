<template>
  <v-app id="inspire">
    <!-- toggle menu -->
    <v-navigation-drawer
      class="mainColor"
      v-model="drawer"
      app
      dark
      color="rgb(255, 168, 123)"
    >
      <div class="drawerIcon">
        <v-list-item>
          <v-list-item-avatar>
            <v-icon large>mdi-format-list-checks</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="text-h4 font-weight-bold">
              More
            </v-list-item-title>
            <v-list-item-subtitle> Best Todo ever </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </div>

      <v-divider></v-divider>
      <div class="pa-1">
        <drawer-info />
      </div>

      <div class="pa-1">
        <drawer-vuetify />
      </div>

      <div class="pa-1">
        <drawer-rating />
      </div>
    </v-navigation-drawer>
    <!-- toggle menu -->

    <v-app-bar
      app
      color="orange"
      dark
      src="todo.jpg"
      prominent
      short
      elevation="10"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, #5454c5, rgba(20,84,122,.5) "
        ></v-img>
      </template>

      <v-container class="header-container pa-0">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
        </v-row>
        <v-row>
          <v-toolbar-title class="text-h4 ml-4"> My Todo App </v-toolbar-title>
        </v-row>
        <div class="text-subtitle-1 ml-2">{{ displayDate() }}.</div>
        <v-row> </v-row>
      </v-container>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <todo-app />
    </v-main>
  </v-app>
</template>

<script>
import TodoApp from "./components/TodoApp";
import TodoDrawerInfo from "@/components/drawer/TodoDrawerInfo.vue";
import TodoDrawerVuetify from "@/components/drawer/TodoDrawerVuetify.vue";
import TodoDrawerRating from "@/components/drawer/TodoDrawerRating.vue";

export default {
  // name: "App",

  components: {
    "todo-app": TodoApp,
    "drawer-info": TodoDrawerInfo,
    "drawer-vuetify": TodoDrawerVuetify,
    "drawer-rating": TodoDrawerRating,
  },
  methods: {
    displayDate() {
      const event = new Date();
      const jsonDate = event.toJSON();

      return new Date(jsonDate).toDateString();
    },
  },

  data: () => ({ drawer: true }),
};
</script>

<style lang="sass">
  .drawerIcon
    font-weight: 700
    height: 110px
    display: flex
    align-items: center
    justify-content: center
</style>
