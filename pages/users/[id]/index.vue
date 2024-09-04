<template>
  <div>
    <pre>
      {{ JSON.stringify(user, null, 2) }}
    </pre>
  </div>
</template>


<script setup lang="ts">

import type { User } from "~/models/user";

//pluginで定義してあるapiを使用する
const api = useApi();
//現在のルート情報からidを取得したいので、vue routerから提供されるuseRoute()を使う。これでroute.param.id...のように取得できる
const route = useRoute();

//ようはURLがusers/"3(id)"である場合、route.params.idによって3を取得してそれをstring文字列でuserIdに保存する
const userId = computed<string>(() =>
  decodeURIComponent(String(route.params.id))
);

//上のuserIdを使ってuserAsyncDataによって非同期で目的ユーザーのAPIを叩き、その際<User>型である型安全を保障する。
//useAsyncDataが返すオブジェクトの中にdataプロパティが含まれており、それをuserとして利用している
const { data: user } = useAsyncData<User>(() => api(`/users/${userId.value}`));

</script>
