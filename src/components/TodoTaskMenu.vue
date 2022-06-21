<template>
    <div>
        <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="rgb(255, 168, 123)" icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </template>

        <v-list>
            <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="handleClick(i)"
            >
            <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
        </v-menu>

        <dialog-edit
        v-if="dialogs.edit"
        @close="dialogs.edit = false"
        :task="task"
        />

        <dialog-delete
        v-if="dialogs.delete"
        @close="dialogs.delete = false"
        :task="task"
        />

    </div>
</template>

<script>
import TodoDialogDelete from "@/components/notification/TodoDialogDelete.vue";
import TodoDialogEdit from "@/components/notification/TodoDialogEdit.vue";
export default {
    name: "TodoTaskMenu",

    components: {
        "dialog-edit": TodoDialogEdit,
        "dialog-delete": TodoDialogDelete,
    },
    
    props:['task'],
    data: () => ({
        dialogs: {
                edit: false,
                delete: false,
            },

        items: [
        {
            title: "Edit",
            icon: "mdi-pencil",
            click() {
            this.dialogs.edit = true
            },
        },
        {
            title: "Delete",
            icon: "mdi-delete",
            
            click() {
            this.dialogs.delete = true
            },
        },
        ],
    }),
    methods: {
        handleClick(i) {
        this.items[i].click.call(this);
        },
    },
};
</script>

<style></style>
