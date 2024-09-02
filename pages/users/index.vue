<template>
    <div class="px-[40px] flex flex-col gap-[32px]">
        <div v-if="!users && !error">読み込んでいます...</div>
        <div v-else-if="error">Error: {{ error.message }}</div>
        <div v-else>
            <!-- <pre>{{ JSON.stringify(users, null, 2) }}</pre> -->
            <div class="flex items-center justify-between mb-4">
                <span class="text-[24px] font-bold">ユーザー一覧</span>
                <n-button @click="router.push('/users/new');">
                    <span class="text-[14px]">新規登録</span>
                </n-button>
            </div>

            <NDataTable remote :data="users" :columns="columns" />
            <span class="py-[30px] block">test</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { NButton, NDataTable, type DataTableColumn } from "naive-ui";
import type { User } from "~/models/user";
import { computed } from 'vue';

definePageMeta({
    requiresAuth: true
})

const api = useApi()
const { data: users, error } = useAsyncData<User[]>(() => api('/users'))
//const { data: users, error } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users');

const columns = computed<DataTableColumn<User>[]>(() => [
    {
        key: 'id',
        title: 'ID',
        render: (row) => row.id,
    },
    {
        key: 'name',
        title: '名前',
        render: (row) => row.name,
    },
    {
        key: 'email',
        title: 'Eメール',
        render: (row) => row.email,
    },
    {
        key: 'website',
        title: 'ウェブサイト',
        render: (row) => row.website,
    }
]);

const router = useRouter();

</script>
