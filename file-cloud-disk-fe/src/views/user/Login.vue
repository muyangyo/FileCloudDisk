<template>
  <div class="login-container">
    <div class="login-box">
      <div style="text-align: center; margin-bottom: 20px; font-size: 36px; font-weight: bold;">
        Login
      </div>
      <el-form :model="form" :rules="rules" ref="loginForm" label-width="80px" @submit.native.prevent="submitForm">
        <el-form-item label="账号" prop="username">
          <el-input v-model="form.username" placeholder="请输入账号" @change="form.username = form.username.trim()"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password" placeholder="请输入密码"
                    @change="form.password = form.password.trim()"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {ElMessage} from 'element-plus';
import {useRouter} from 'vue-router';
import {easyRequest, RequestMethods} from "@/utils/RequestTool.js";
import {UserSession, ROLES} from "@/utils/UserLocalStoreUtils.js";
import {rsaEncryptUtil} from "@/utils/RSAEncryptUtils.js";

const router = useRouter();// 路由

const loginForm = ref(null);// 登录表单

const form = ref({
  username: '',
  password: '',
}); // 表单数据

const rules = {
  username: [{required: true, type: 'string', message: '请输入账号', trigger: 'blur'}],
  password: [{required: true, type: 'string', message: '请输入密码', trigger: 'blur'}],
}; // 表单验证规则

// 登录请求
const submitForm = () => {
  // 表单整体验证
  loginForm.value.validate(async (valid) => {
    if (valid) {
      let keyResponse = await easyRequest(RequestMethods.GET, '/user/getPublicKey', "");
      rsaEncryptUtil.setPublicKey(keyResponse.data); // 保存公钥

      // Rsa 加密
      const RequestData = {
        username: rsaEncryptUtil.encryptData(form.value.username),
        password: rsaEncryptUtil.encryptData(form.value.password),
      };

      try {
        // 使用 easyRequest 发送登录请求,返回响应
        const response = await easyRequest(RequestMethods.POST, '/user/login', RequestData);
        if (response.statusCode === "SUCCESS" && response.data === true) {
          UserSession.login(ROLES.user, form.value.username);
          ElMessage({
            message: `欢迎回来, ${form.value.username}`,
            type: 'success',
          });
          await router.push('/user'); // 跳转到指定页面
        } else {
          ElMessage.error(response.errMsg || '账号或密码错误');
        }
      } catch (error) {
        ElMessage.error(error.response?.data?.message || '登录失败');
      }
    }
  });
};


//重置表单
const resetForm = () => {
  loginForm.value.resetFields();
};

</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  backdrop-filter: blur(10px); /* 添加毛玻璃效果 */
}

.login-box {
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.login-box:hover {
  transform: scale(1.05);
}

.login-box {
  background-color: rgba(41, 42, 48, 0.36); /* 保持背景颜色 */
}

/*!* 亮色主题样式 *!
@media (prefers-color-scheme: light) {
  .login-box {
    background-color: #fff; !* 保持背景颜色 *!
  }
}*/

/* 暗色主题样式 */
/*@media (prefers-color-scheme: dark) {
  .login-box {
    background-color: rgba(41, 42, 48, 0.36); !* 保持背景颜色 *!
  }
}*/
</style>