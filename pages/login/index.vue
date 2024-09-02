<template>
    <!-- n-form内で、バリデーション用のformRefを -->
    <n-form ref="formRef" :model="formValue" :rules="rules">
        <div class="flex flex-col gap-[24px]">
            <n-form-item label="ID" path="id">
                <n-input v-model:value="formValue.id" />
            </n-form-item>
            <n-form-item label="パスワード" path="id">
                <n-input v-model:value="formValue.password" :type="'password'" />
            </n-form-item>
            <n-button @click="login">
                <span class="text-[14px]">ログイン</span>
            </n-button>
        </div>
    </n-form>
</template>

<script setup lang="ts">

import type { User } from "~/models/user";
import { NForm, NFormItem, NInput, NButton, type FormInst, type FormRules } from 'naive-ui';
import { useAuthStore } from '~/stores/auth'

definePageMeta({
    layout: 'static',
});

//このフォームで入力する情報をInterfaceで定義する
interface FormValue {
    id: string
    password: string
}

const emptyFormValue: FormValue = {
    id: "",
    password: ""
}

const formValue = ref<FormValue>(emptyFormValue)

//FormInst型を持つ参照（ref）を作成
const formRef = ref<FormInst>()

const rules: FormRules = {
    id: {
        required: true,
        message: "IDは必須です",
    },
    password: {
        required: true,
        message: "パスワードは必須です",
    },

}

//共通のURIを使う
const api = useApi();
const router = useRouter();
const authStore = useAuthStore();

const login = async () => {
    // console.log(formValue.value)
    try {
        //console.log(formValue.value.id);
        //await formRef.value?.validate()
        //console.log(formValue.value);
        const res = await api<User>(`/users/${formValue.value.id}`);
        authStore.setUser(res);

        router.push('/');
        //console.log(res);
    } catch (error) {
        console.error(error);
    }
}
</script>
