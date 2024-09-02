//Middlewareを定義するための一般的な記述。画面遷移の際にミドルウェアを挟み込む
export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore()

  const redirect = authStore.validateRoute(to)
  if (redirect) {
    return navigateTo(redirect)
  }
})
