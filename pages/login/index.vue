<template>

<n-form>
    <div class="flex flex-col gap-[24px]">
        <n-form-item label="ID" path="id">
            <n-input/>
        </n-form-item>
        <n-form-item label="パスワード" path="id">
            <n-input/>
        </n-form-item>
        <n-button>
            <span class="text-[14px]">ログイン</span>
        </n-button>
    </div>
</n-form>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'static',

})

</script>