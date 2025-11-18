<template>
    <div>
        <div class="border border-gray-700 rounded-md p-2 mb-4 space-y-4">
            <div class="flex place-content-between">
                <div class="flex">
                    <UIcon name="famicons:hourglass-outline" class="size-5 mr-2" />
                    <div>{{ taskName }}</div>
                </div>
                <div>
                    <UIcon name="material-symbols-light:delete-rounded" class="size-5 text-red-500"
                        @click.stop="onRemoveItem(i)" />
                </div>
            </div>

            <NuxtLink :to="'/task/' + i">
                <div>
                    <div class="text-xs text-gray-800 line-clamp-3">{{ description }}</div>
                    <br />
                    <div class="flex place-content-between">
                        <div class="flex items-center text-xs text-gray-800 ">
                            <div>Status : </div>
                            <div>{{ status }}</div>
                        </div>
                        <div class="flex items-center text-xs text-gray-800 ">
                            <div>Priority : </div>
                            <div>{{ priority }}</div>
                        </div>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps<{
    i: number;
    taskName: String;
    description: String;
    status?: String | null;
    priority?: String | null;
    onRemoveItem: (id: number) => void
}>()

</script>