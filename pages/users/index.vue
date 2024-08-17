<template>
    <div v-if="!users && !error">読み込んでいます...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else>
        <!-- <pre>{{ JSON.stringify(users, null, 2) }}</pre> -->
        <NDataTable remote :data="users" :columns="columns" />
        <span>test</span>
    </div>
</template>

<script setup lang="ts">
import { NDataTable, type DataTableColumn } from "naive-ui";
import type { User } from "~/models/user";
import { computed } from 'vue';
const { data: users, error } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users');

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
</script>