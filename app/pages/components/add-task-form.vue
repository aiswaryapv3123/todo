<template>
    <!-- Add a task button -->
    <div class="p-2 mt-6 border border-red-700 rounded-md cursor-pointer" @click="showAddTask = !showAddTask">
        <div class="flex items-center">
            <UIcon name="material-symbols:add-2" class="size-5 mr-2" />
            <div>Add a task</div>
        </div>
    </div><br />
    <div v-if="showAddTask">
        <div>
            <div class="flex flex-col gap-2 w-full">

                <!-- Task Name -->
                <UFormField label="Task Title" name="taskName" required>
                    <UInput v-model="taskName" class="w-full" :maxlength=100 variant="soft">
                        <template #leading>
                            <UIcon name="mingcute:task-2-line" class="text-gray-500" />
                        </template>
                    </UInput>
                </UFormField>

                <!-- Task Description -->
                <UFormField label="Description" name="description" class="mt-2" required>
                    <UTextarea v-model="description" class="w-full" :rows="3" :maxrows="5" variant="soft" />
                </UFormField>

                <div class="flex w-full gap-3">
                    <!-- Task Status -->

                    <div class="w-1/2 flex flex-col gap-1">
                        <div class="block text-sm font-medium text-gray-700 dark:text-gray-300 mt-2">Status</div>
                        <USelectMenu v-model="taskStatus" :items="taskStatuses" class="w-full" variant="soft" />
                    </div>

                    <!-- Task Priority -->
                    <div class="w-1/2 flex flex-col gap-1">
                        <div class="block text-sm font-medium text-gray-700 dark:text-gray-300 mt-2">Priority</div>
                        <USelectMenu v-model="taskPriority" :items="taskPriorities" class="w-full" variant="soft" />
                    </div>
                </div>
            </div><br />
            <div class="flex gap-5">
                <UButton class="mb-10 px-8 " @click="onSubmit" variant="solid"compoundVariants="solid" >
                    Add
                </UButton>
                <UButton class="mb-10" @click="showAddTask = false" variant="outline">
                    Cancel
                </UButton>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';
type Task = { id: number, name: String, desc: String, status: String | null, priority: String }
const statuses = ['Not started', 'In Progress', 'Completed']
const priorities = ['High', 'Medium', 'Low']
const showAddTask = ref(false)
const taskName = ref('')
const description = ref('')
const taskStatuses = ref(statuses)
const taskStatus = ref()
const taskPriorities = ref(priorities)
const taskPriority = ref()
const tasks = useLocalStorage<Task[]>('tasks', [])

function onSubmit() {
    const task: Task = {
        "id": Date.now(),
        "name": taskName.value,
        "desc": description.value,
        "status": taskStatus.value ?? statuses[0],
        "priority": taskPriority.value ?? priorities[1]
    }

    tasks.value.unshift(task)
    clearData()
}

function clearData() {
    showAddTask.value = false;
    taskName.value = ''
    description.value = ''
    taskStatus.value = ''
    taskPriority.value = ''
}


</script>