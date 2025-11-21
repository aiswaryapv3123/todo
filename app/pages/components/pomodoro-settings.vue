<template>
    <div>
        <div class="flex flex-col space-y-5">
            <div class="bg-red-50 p-10   rounded-lg place-content-center place-items-center w-full flex gap-5">
                <!-- Focus time field -->
                <UFormField label="Focus Time" name="taskName">
                    <UInput v-model="focusValue" type="number" class="w-full" :maxlength=100>
                        <template #leading>
                            <UIcon name="material-symbols:alarm-outline-rounded" class="text-red-200 size-5" />
                        </template>
                    </UInput>
                </UFormField>

                <!-- Break time field -->
                <UFormField label="Break Time" name="taskName">
                    <UInput v-model="breakValue" type="number" class="w-full" :maxlength=100>
                        <template #leading>
                            <UIcon name="material-symbols:alarm-outline-rounded" class="text-red-200 size-5" />
                        </template>
                    </UInput>
                </UFormField>


            </div>

        </div>
        <div class="flex justify-end gap-3">
            <UButton @click="onCancelSettings" class="bg-transparent mt-5 px-5 py-2 text-red-700">
                Cancel

            </UButton>
            <UButton @click="onUpdateSettings(focusValue, breakValue)" class="bg-red-700 mt-5 px-5 py-2">
                Save
            </UButton>
        </div>
    </div>


</template>

<script setup lang="ts">
const props = defineProps<{
    focusTimeValue: number;
    breakTimeValue: number;
    onUpdateSettings: (bTime: number, fTime: number) => void
    onCancelSettings: () => void

}>()
const emit = defineEmits<{ close: [boolean] }>()

const focusValue = ref(props.focusTimeValue)
const breakValue = ref(props.breakTimeValue)



</script>