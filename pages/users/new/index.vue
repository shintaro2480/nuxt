<template>
  <!-- 単なるタイトル -->
  <div class="px-[40px] py-[32px] flex flex-col gap-[32px]">
    <span class="text-[24px] font-bold">新規登録</span>
    <!-- cpomponents/section/user/form内で定義したコンポーネント-->
    <SectionUserForm />

    <div class="flex flex-row items-center justify-center">
      <NButton>
        <span class="text-[14px]">新規登録</span>
      </NButton>
    </div>

  </div>
</template>

<script setup lang="ts">
import { NButton } from "naive-ui";

//このページには認証が必要である
definePageMeta({
  requiresAuth: true
})
</script>
