<template>
    <div>
        <!-- Add new task form -->
        <addTaskForm class="sticky"/>

        <!-- Task List -->
        <div>
            <div v-for="taskData in tasks">
                <todoListItem :i="taskData.id" :key="taskData.id" :taskName="taskData.name" :description="taskData.desc"
                    :status="taskData.status" :priority="taskData.priority" :onRemoveItem="removeTask" />

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import todoListItem from './todo-list-item.vue';
import addTaskForm from './add-task-form.vue';
import { useLocalStorage } from '@vueuse/core'


/// Local storage set up with initial data structure
type Task = { id: number, name: String, desc: String, status: String | null, priority: String | null }
const tasks = useLocalStorage<Task[]>('tasks', [])

/// remove item from the list
function removeTask(id: number) {
    console.log("Deleting task:", id)
    tasks.value = tasks.value.filter(t => t.id !== id)
}

</script>