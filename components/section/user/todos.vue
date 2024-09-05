<template>
  <!-- 投稿一覧を出したいので、以前のAtomsDataTableコンポーネントを使用　-->
  <AtomsDataTable v-if="todos" :data="todos" :columns="columns"></AtomsDataTable>
</template>

<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui';
import { NCheckbox } from 'naive-ui';
import type { Todo } from '~/models/todo';
import type { User } from '~/models/user';

//親から渡ってくるデータとしてUser情報が
interface Props {
  user: User | null;
}

const props = defineProps<Props>()

const api = useApi()

//ユーザーごとの記事一覧は以下のAPIで取得できるようだ
const { data: todos } = useAsyncData<Todo[]>(() =>
  api(`/users/${props.user?.id}/todos`)
)

const columns = computed<DataTableColumns<Todo>>(() => [
  {
    key: "id",
    title: "ID",
    render: (row) => row.id,
  },
  {
    key: "title",
    title: "Title",
    render: (row) => row.title,
  },
  {
    key: "completed",
    title: "completed",
    render: (row) => {
      return h(NCheckbox, { checked: row.completed, disabled: true })
    }
  },
])
</script>
