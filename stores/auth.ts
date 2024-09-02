import type {RouteLocationNormalized} from 'vue-router'
import {defineStore} from "pinia";
import type {User} from "~/models/user"

export const useAuthStore = defineStore(
  'auth',
  () => {
    //userオブジェクトを定義
    const user = ref<User>()

    //userの値を取得する。なければisLoginはfalseとなる
    const isLogin = computed<boolean>(()=> !!user.value)

    //以下のvalidateRouteは、引数にvalidateRouteをとる。ようはログインしていない状態なら、/loginという文字列を返すと。
    const validateRoute = (route: RouteLocationNormalized) => {
      if (route.meta.requiresAuth && !isLogin.value) {
        return '/login'
      }
    }

    //setterの定義
    const setUser = (newUser: User) => {
      user.value = newUser
    }

    //userをクリアする
    const clearUser = () => {
      user.value = undefined
    }

    return {
      user,
      setUser,
      clearUser,
      validateRoute
    }

  }
)
