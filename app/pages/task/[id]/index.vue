<template>
    <div class="p-10">
        <div class="text-4xl font-bold">
            {{ taskData[0]?.name }}
        </div>
        <div class="mt-5">
            {{ new Date(Number(taskData[0]?.id)).toLocaleString() }}
        </div>
        <div class="flex  mt-5">
            <div class="mr-2">
                Status :
            </div>
            <div :class="statusColor(taskData[0]?.status ?? null)">
                {{ taskData[0]?.status }}
            </div>
        </div>
        <div class="flex  mt-5">
            <div class="mr-2">
                Priority :
            </div>
            <div :class="priorityColor(taskData[0]?.priority ?? null)">
                {{ taskData[0]?.priority }}
            </div>
        </div>
        <br />
        <div class="text-base font-extralight">
            {{ taskData[0]?.desc }}
        </div>
    </div>

</template>
<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'

type Task = { id: number, name: String, desc: String, status: String | null, priority: String | null }
const tasks = useLocalStorage<Task[]>('tasks', [])
const route = useRoute()
const taskData = tasks.value.filter(item => JSON.stringify(item.id) === route.params.id)

const statusColor = (status: String | null) => {
    switch (status) {
        case 'Not started':
            return 'text-gray-500'
        case 'In Progress':
            return 'text-blue-500'
        case 'Completed':
            return 'text-green-500'
        default:
            return 'text-black'
    }
}

const priorityColor = (priority: String | null) => {
    switch (priority) {
        case 'High':
            return 'text-red-500'
        case 'Medium':
            return 'text-orange-500'
        case 'Low':
            return 'text-yellow-500'
        default:
            return 'text-black'
    }
}
</script>