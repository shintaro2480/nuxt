//useNuxtApp() は、Nuxt.js の内部で利用可能なグローバルなアプリケーションコンテキストにアクセスするためのComposition APIフック。
//このフックを使うと、アプリケーション全体で共有されるオブジェクトや関数にアクセスできます。
//フックとは、Composition API を使用する際に、特定の機能やロジックを関数として提供するためのもの

export const useApi = () => {
    const {$api} = useNuxtApp()

    return $api
}