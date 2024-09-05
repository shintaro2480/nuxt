<template>
  <div class="px-[32px] px-[40px] flex flex-col gap-[32px]">
    <span class="text-[24px] font-bold">Post詳細</span>
    <NTable>
      <tbody>
        <tr>
          <th class="w-[240px] bg-[#FAFAFA]">
            <span class="text-[14px]">ID</span>
          </th>
          <td>
            <span class="text-[14px]">{{ post?.id }}</span>
          </td>
        </tr>
        <tr>
          <th>
            <span class="text-[14px]">Title</span>
          </th>
          <td>
            <span class="text-[14px]">{{ post?.title }}</span>
          </td>
        </tr>
        <tr>
          <th>
            <span class="text-[14px]">Body</span>
          </th>
          <td>
            <span class="text-[14px]">{{ post?.body }}</span>
          </td>
        </tr>
      </tbody>
    </NTable>
    <!-- <pre>
      {{ JSON.stringify(post, null, 2) }}
    </pre> -->
  </div>
</template>


<script setup lang="ts">

//非同期でデータ取得するuserAsyncDataで、Post型安全を保障したいので、Postモデルを使う
import type { Post } from "~/models/post";

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
const { data: post } = useAsyncData<Post>(() => api(`/posts/${userId.value}`));

</script>
