<template>
    <div v-if="users">
        <!-- useFetchメソッドでusersというオブジェクトにJSONが格納されているので、それを出力している-->
        <!-- <pre>{{ JSON.stringify(users, null, 2) }}</pre> -->
        <NDataTable remote :data="users" :colums="colums" />
    </div>
</template>

<script setup lang="ts">
import { NDataTable, type DataTableColumn } from "naive-ui";
import type { User } from "~/models/user";
const { data: users } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users')


import type { DataTableColumns } from 'naive-ui'

const colums = computed<DataTableColumns<User>>(() => [
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
])
</script>

//id name user website
