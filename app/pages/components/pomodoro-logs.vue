<template>
    <div class="space-y-4 w-full  ">
        <div v-for="log in logs">
            <div class="border rounded-sm p-3">{{ log.message }} on {{ new Date(Number(log?.id)).toLocaleString() }}</div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
type Logs = { id: number, message: String }
const logs = useLocalStorage<Logs[]>('logs', [])
</script>