<template>
    <div >
        <v-list-item
        @click="$store.commit('doneTask', task.id)"
        :class="{ 'orange lighten-5': task.done }"
        >
        <template v-slot:default>
            <v-list-item-action>
            <v-checkbox :input-value="task.done" color="green lighten-1"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
            <v-list-item-title class="font-weight-medium"
                :class="{ 'text-decoration-line-through': task.done }"
            >
                {{ task.title }}
            </v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
            <todo-task-menu :task="task"/>
            </v-list-item-action>
        </template>
        </v-list-item>
        <v-divider></v-divider>

        
    </div>
</template>

<script>
import TodoTaskMenu from '@/components/TodoTaskMenu.vue';
export default {
     props: ['task'],
  
  components: {
    'todo-task-menu': TodoTaskMenu
  }
};
</script>

<style></style>
