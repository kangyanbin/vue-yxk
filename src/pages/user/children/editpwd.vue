<template>
    <div class="editpwd">
        <Header :title='title' :show='show'></Header>
        <div class="form">
            <div class="input-container">
                <input type="password" placeholder="旧密码" name="oldPassWord" maxlength="20" v-model="oldPassWord">
            </div>
            <div class="input-container">
                <input type="password" placeholder="请输入新密码" name="newPassWord" maxlength="20" v-model="newPassWord">
            </div>
            <div class="input-container">
                <input type="password" placeholder="请确认密码" name="confirmPassWord" maxlength="20" v-model="confirmPassWord">
            </div>
            <div class="login-container" @click="resetButton">确认修改</div>
        </div>
        <alert-tip v-if="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
    </div>
</template>
<script>
import Header from '../../../components/header.vue'
import alertTip from '../../../components/alertTip'
export default {
    data() {
        return {
            title: "修改密码",
            show: false,
            oldPassWord: "",
            newPassWord: "",
            confirmPassWord: "",
            alertText: "",
            showAlert: false
        }
    },
    components: {
        Header,
        alertTip
    },
    methods: {
        resetButton() {
            if(!this.oldPassWord){
                this.showAlert = true;
                this.alertText = '请输入旧密码';
                return
            }else if(!this.newPassWord){
                this.showAlert = true;
                this.alertText = '请输入新密码';
                return
            }else if(!this.confirmPassWord){
                this.showAlert = true;
                this.alertText = '请输确认密码';
                return
            }else if(this.newPassWord !== this.confirmPassWord){
                this.showAlert = true;
                this.alertText = '两次输入的密码不一致';
                return
            }
            console.log("修改成功");
        },
        closeTip(){
            this.showAlert = false;
        }
    }
}
</script>
<style lang="scss" scoped>
.editpwd{
    .form{
        width: 100%;
        padding: .7rem 1.7rem;
        box-sizing: border-box;
        .input-container{
            margin-top: .3rem;
            border: 1px solid #d4d4d4;
            input{
                font-size: 1rem;
                border: none;
                outline: none;
                padding-left: .2rem;
                width: 100%;
                height: 2.9rem;
                box-sizing: border-box;
            }
        }
        .login-container{
            width: 100%;
            height: 2.9rem;
            font-size: 1rem;
            text-align: center;
            line-height: 2.9rem;
            background: #fed101;
            border-radius: .5rem;
            margin-top: .7rem;
        }
    }
}
</style>
