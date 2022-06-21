<template>
<div class="parent">
    <div class="parentChild">
        <v-text-field
            v-model="newTaskTitle"
            @keyup.enter="task"
            class="pa-3"
            outlined
            label="Add Task"
            hide-details
            clearable
        >
        <template v-slot:append>
            <v-icon @click="task" color="primary" :disabled="!newTaskTitle">
                mdi-plus
            </v-icon>
        </template>
        </v-text-field>
    </div>
</div>
</template>

<script>
export default {
    name: "TodoAppField",

    data() {
        return {
        newTaskTitle: "",
        };
    },
    computed: {
        invalidTitle(){
            return !this.newTaskTitle
        }
    },
    methods: {
        // method calling addTask method in vuex
        task() {
            if (!this.invalidTitle){
                
                this.$store.commit("addTask", this.newTaskTitle);
                this.newTaskTitle = "";
            }
        },
    },
};
</script>

<style lang="sass">
.parent
    display: flex
    align-items: center
    justify-content: center

.parentChild
    width: 99%
    transition: 0.3s 
    
.parentChild:hover
    padding: 5px
    content: 'hi'
</style>
