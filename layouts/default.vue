<template>
    <n-layout has-sider class="min-h-screen">
        <!-- サイドナビゲーション -->
        <n-layout-sider bordered class="min-h-screen">
            <n-menu :options="menuOptions" />
        </n-layout-sider>

        <!-- メインコンテンツ -->
        <n-layout class="min-h-screen">
            <n-layout-header>
                <div class="px-[24px] py-[30px] flex flex-row items-center justify-end">
                    <div class="flex flex-row items-center gap-[12px]">
                        <span class="text-[14px]">{{ authStore.user?.name }}</span>
                        <n-button @click="logout"><span class="text-[14px]">ログアウト</span></n-button>
                    </div>
                </div>
            </n-layout-header>


            <!-- 各ページのコンテンツ -->
            <n-layout-content>
                <slot />
            </n-layout-content>

        </n-layout>

    </n-layout>

</template>





<script setup lang="ts">
import { NButton, NLayout, NLayoutHeader, NLayoutSider, NMenu, NLayoutContent, type MenuOption } from "naive-ui";
import { RouterLink } from "vue-router";

const authStore = useAuthStore()

//ログアウト用。piniaのstoreのclearUserメソッドを叩いて、ログインページに飛ばす
const logout = () => {
    authStore.clearUser()
    navigateTo("/login")
}

const menuOptions: MenuOption[] = [
    {
        key: "users",
        label: () => h(RouterLink, { to: '/users' }, { default: () => 'ユーザー一覧' }),
    },
    {
        key: "posts",
        label: () => h(RouterLink, { to: '/posts' }, { default: () => '投稿一覧' }),
    }]
</script>
