<template>
    <div class="min-h-screen flex items-center justify-center">
        <n-button><span>hoge</span></n-button>
    </div>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui';

definePageMeta({
    requiresAuth: true
})

const router = useRouter()

onMounted(() => router.push('/users'))

</script>
