<template>
    <div class="justify-items-center">
        <div class="w-20 h-20 bg-red-50 rounded-full mt-7 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="profile" class="w-full h-full object-cover" />
        </div>
        <div class="text-xl font-semibold">
            John Doe
        </div>
        <div class="text-xs text-red-800">
            Developer
        </div><br />
        <UNavigationMenu orientation="vertical" :items="items" class="data-[orientation=vertical]:w-48" />
    </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[][]>([
    [

        {
            label: 'Todo',
            description: 'Fully styled and customizable components for Nuxt.',
            icon: 'i-lucide-house',
            to: '/'
        },
        {
            label: 'Pomodoro',
            description: 'Learn how to install and configure Nuxt UI in your application.',
            icon: 'material-symbols:avg-time-outline',
            to: '/pomodoro'
        },
        {
            label: 'GitHub',
            icon: 'i-simple-icons-github',
            to: 'https://github.com/nuxt/ui',
            target: '_blank'
        },
        {
            label: 'Help',
            icon: 'i-lucide-circle-help',
            disabled: true
        }
    ]
])
</script>