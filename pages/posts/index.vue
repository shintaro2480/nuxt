<template>
    <div class="px-[40px] flex flex-col gap-[32px]">
        <div v-if="!posts && !error">読み込んでいます...</div>
        <div v-else-if="error">Error: {{ error.message }}</div>
        <div v-else>
            <!-- <pre>{{ JSON.stringify(users, null, 2) }}</pre> -->
                <div class="flex items-center justify-between mb-4">
                    <span class="text-[24px] font-bold">投稿一覧</span>
                </div>
             
            <NDataTable remote :data="posts" :columns="columns" />
            <span class="py-[30px] block">test</span>
        </div>
    </div>
</template>


<script setup lang="ts">

import type { Post } from "~/models/post";
import { NButton, NDataTable, type DataTableColumn } from "naive-ui";
const { data: posts, error } = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts');

const columns =  computed<DataTableColumn<Post>[]>(() => [
    {
        key: 'id',
        title: 'ID',
        render: (row) => row.id,
    },
    {
        key: 'title',
        title: 'タイトル',
        render: (row) => row.title,
    },
    {
        key: 'body',
        title: '本文',
        render: (row) => row.body,
    }
]);
</script>