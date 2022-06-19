<template>
    <v-text-field
        v-model="newTaskTitle"
        @click:append="task"
        @keyup.enter="task"
        class="pa-3"
        outlined
        label="Add Task"
        append-icon="mdi-plus"
        hide-details
        clearable
    ></v-text-field>
</template>

<script>
export default {
    name: "TodoAppField",

    data() {
        return {
        newTaskTitle: "",
        };
    },
    methods: {
        // method calling addTask method in vuex
        task() {
        this.$store.commit("addTask", this.newTaskTitle);
        this.newTaskTitle = "";
        },
    },
};
</script>

<style></style>
