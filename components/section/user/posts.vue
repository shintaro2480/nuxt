<template>
  <!-- 投稿一覧を出したいので、以前のAtomsDataTableコンポーネントを使用　-->
  <AtomsDataTable v-if="posts" :data="posts" :columns="columns"></AtomsDataTable>
</template>

<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui';
import type { Post } from '~/models/post';
import type { User } from '~/models/user';

//親から渡ってくるデータとしてUser情報が
interface Props {
  user: User | null;
}

const props = defineProps<Props>()

const api = useApi()

//ユーザーごとの記事一覧は以下のAPIで取得できるようだ
const { data: posts } = useAsyncData<Post[]>(() =>
  api(`/users/${props.user?.id}/posts`)
)

const columns = computed<DataTableColumns<Post>>(() => [
  {
    key: "id",
    title: "ID",
    width: 60,
    render: (row) => row.id,
  },
  {
    key: "title",
    title: "Title",
    render: (row) => row.title,
  },
  {
    key: "body",
    title: "Body",
    render: (row) => row.body,
  },
])
</script>
