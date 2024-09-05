<template>
  <div class="px-[40px] py-[32px] flex flex-col gap-[32px]">

    <!-- {{ JSON.stringify(user, null, 2) }} -->
    <div class="flex flex-row items-center justify-between">
      <span class="text-[24px] font-bold">{{ user?.name }}</span>
      <div class="flex flex-row items-center gap-[12px]">
        <NButton>
          <span class="text-14px]">編集</span>
        </NButton>
        <NButton>
          <span class="text-14px]">編集</span>
        </NButton>
      </div>
    </div>
    <NTabs>
      <NTabPane name="basic">
        <SectionUserBasic :user="user"></SectionUserBasic>
      </NTabPane>
      <NTabPane name="posts">
        <SectionUserPosts :user="user"></SectionUserPosts>
      </NTabPane>
      <NTabPane name="albums">
        <SectionUserAlbums :user="user"></SectionUserAlbums>
      </NTabPane>
      <NTabPane name="todos">
        <SectionUserTodos :user="user"></SectionUserTodos>
      </NTabPane>
    </NTabs>
  </div>
</template>


<script setup lang="ts">
import { NButton, NTabPane, NTabs } from "naive-ui";

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
