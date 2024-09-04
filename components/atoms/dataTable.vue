<template>
  <!--NDataTableは、data,colums,row-propsの3つのプロパティを持つことができる-->
  <NDataTable remote :data="props.data" :columns="props.columns" :row-props="rowProps" />
</template>


<script setup lang="ts">
import { NDataTable, type DataTableColumns } from 'naive-ui';
//RowDataは、テーブルの各行に関するデータの構造を定義するための型らしい。
import type { RowData } from "naive-ui/es/data-table/src/interface";
import type { HTMLAttributes } from 'vue';

//まずdataとcolumnsデータを蓄える、Propsというオブジェクトを定義
interface Props {
  data: RowData[];
  columns: DataTableColumns<any>;
}

//このEmitによって、event(selectという文字列)とrow(RowData型)という2
interface Emits {
  (event: 'select', row: RowData): void
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

//以下で定義しているrowPropsという関数は、RowData型に準する。
const rowProps: (row: RowData) => HTMLAttributes = (row) => ({
  style: {
    cursor: "pointer",
  },
  onClick: () => emit(
    "select", row
  )
})

</script>
