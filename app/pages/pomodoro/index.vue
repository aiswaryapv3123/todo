<template>
    <div class=" w-full flex   ">
        <!-- collapsible icon -->
        <div class="fixed top-8 left-80 z-50">
            <UIcon :name='!isOpen ? "iconoir:sidebar-collapse" : "octicon:sidebar-collapse-24"'
                class="text-gray-700 size-5" @click="isOpen = !isOpen" />
        </div>

        <!-- Timer content -->
        <div class="flex items-center justify-center w-full h-screen">
            <div class="bg-red-50 px-10 py-10 rounded-lg place-content-center place-items-center">
                <div class="text-red-700 font-medium text-xl mb-2">{{ focusTimeCompleted ? "Break Time" : "Focus Time"
                    }}
                </div>
                <div class="text-red-700 font-bold text-6xl mb-5">{{ formatMMSS(counterTime) }}</div>
                <div class="flex gap-3">
                    <div class="bg-red-200 rounded-md px-10 w-50 py-2 text-red-700 text-center text-xl"
                        @click="handlePrimaryButton">
                        {{ primaryButtonText }}
                    </div>
                    <div class="bg-red-200 rounded-md px-10 w-50 py-2 text-red-700 text-center text-xl"
                        @click="resetTimer(true)">
                        <div>Restart</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sidebar History -->
        <Transition enter-active-class="transition-all duration-300 ease-in-out" enter-from-class="w-0"
            enter-to-class="w-150" leave-active-class="transition-all duration-300 ease-in-out" leave-from-class="w-150"
            leave-to-class="w-0">
            <div v-if="isOpen" class="h-screen bg-red-200 flex flex-wrap text-wrap overflow-y-auto overflow-x-hidden">
                <div class="p-6 w-150">
                    <h2 class="text-xl font-semibold mb-4">History</h2>
                    <div class="space-y-3">
                        <pomodoroLogs />
                    </div>
                </div>
            </div>
        </Transition>

    </div>

</template>

<script setup lang="ts">
import { useIntervalFn, useLocalStorage, useWebNotification } from '@vueuse/core'
import pomodoroLogs from '../components/pomodoro-logs.vue'


const { isSupported, show, notification, onClick, onShow, onError, onClose } =
    useWebNotification()
await Notification.requestPermission()
const focusTime = 5
const breakTime = 2
const counterTime = ref(focusTime)
const focusTimeCompleted = ref(false)
const breakTimeCompleted = ref(false)
const isOpen = ref(false)

type Logs = { id: number, message: String }
const timerLog = useLocalStorage<Logs[]>('logs', [])

const { pause, resume, isActive } = useIntervalFn(() => {

    if (counterTime.value > 0) {
        counterTime.value--
        return
    } else {
        if (!focusTimeCompleted.value) {
            breakTimeCompleted.value = false
            focusTimeCompleted.value = focusTimeCompleted.value ? focusTimeCompleted.value : !focusTimeCompleted.value

        } else {
            focusTimeCompleted.value = false
            breakTimeCompleted.value = focusTimeCompleted.value ? breakTimeCompleted.value : !breakTimeCompleted.value

        }
        resetTimer(false)
    }
}, 1000, { immediate: false })



function resetTimer(reset: boolean) {
    if (focusTimeCompleted.value) {
        if (!reset) {
            const focusLog: Logs = { "id": Date.now(), "message": `${formatDuration(focusTime)} Focus time completed` }
            timerLog.value.unshift(focusLog)

        }
        showNotification("Break Time !", "Your focus session ended")
        counterTime.value = breakTime

    } else if (!focusTimeCompleted.value) {
        if (!reset) {
            const breakLog: Logs = { "id": Date.now(), "message": `${formatDuration(breakTime)} Break time completed` }
            timerLog.value.unshift(breakLog)
        }
        showNotification("Break Time finished !", "Start focus session now...")
        counterTime.value = focusTime
    }
    pause()
}


const primaryButtonText = computed(() => {
    if (isActive.value) return 'Pause'
    if ((counterTime.value < focusTime && !focusTimeCompleted.value) || (counterTime.value < breakTime && focusTimeCompleted.value)) return 'Resume'
    return 'Start'
})


function handlePrimaryButton() {
    const isFocusCompleted = focusTimeCompleted.value
    const maxTime = isFocusCompleted ? breakTime : focusTime
    const focusTimeCompletedStatus = isFocusCompleted ? focusTimeCompleted : !focusTimeCompleted


    if (isActive.value) {
        focusTimeCompletedStatus
        pause()
    } else if (counterTime.value < maxTime) {
        focusTimeCompletedStatus
        resume()
    } else {
        counterTime.value = maxTime
        resume()
    }

}

function formatMMSS(seconds: number) {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hrs > 0 ? `${String(hrs).padStart(2, '0')}:` : ''}${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

function formatDuration(seconds: number) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const parts = [];

    if (hrs > 0) parts.push(`${hrs} hour${hrs > 1 ? 's' : ''}`);
    if (mins > 0) parts.push(`${mins} minute${mins > 1 ? 's' : ''}`);
    if (secs > 0 || parts.length === 0)
        parts.push(`${secs} second${secs > 1 ? 's' : ''}`);

    return parts.join(' ');
}

async function showNotification(title: string, body: string) {
    if (Notification.permission !== 'granted') {
        await Notification.requestPermission()
    }
    show({ title, body })
}

</script>