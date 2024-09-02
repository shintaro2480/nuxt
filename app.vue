<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup lang="ts">
const router = useRouter()
const authStore = useAuthStore();

//マウントする前にリダイレクトの評価を行う
onBeforeMount(() => {
  //stores.auth.tsで定義しておいたvalidateRouteを使う。引数には、
  const redirect = authStore.validateRoute(router.currentRoute.value)
  if (redirect) {
    navigateTo(redirect)
  }
})

</script>
