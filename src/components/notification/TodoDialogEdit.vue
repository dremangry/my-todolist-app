<template>
    <v-dialog :value="true" persistent max-width="290">
        <v-card>
        <v-card-title class="text-h5"> Edit task </v-card-title>
        <v-card-text>
            <v-text-field v-model="taskTitle" @keyup.enter="saveTask"/>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="$emit('close')"> Cancel </v-btn>
            
            <v-btn color="red" text @click="saveTask" :disabled="invalidTitle">
            Save
            </v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: "TodoDialogDelete",

    props: ["task"],

    data() {
        return {
            taskTitle: null
        }
    },

    computed: {
        invalidTitle(){
            return !this.taskTitle || this.taskTitle === this.task.title
        }
    },
    methods: {
        saveTask() {
            if (!this.invalidTitle){
    
                let payload = {
                    id: this.task.id,
                    title: this.taskTitle
                }
                this.$store.commit('updateTask', payload)
                this.$emit('close')
            }
        }
    },
    mounted() {
        this.taskTitle = this.task.title
    }
};
</script>

<style></style>
