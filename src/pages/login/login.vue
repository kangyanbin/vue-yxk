<template>
    <div class="login">
        <div class="login-top">
            <img src="@/assets/img/login.png" alt="">
        </div>
        <div class="login-content">
            <div class="login-content-tab">
                <span :class="isAccounts ? 'cur' : '' " @click="Accounts()">账号登录</span>
                <span :class="isNote ? 'cur' : '' "  @click="Note()">短信快捷登录</span>
            </div>
            <div class="login-content-from">
                <div v-show="isAccounts">
                    <div class="login-input">
                        <input type="text" placeholder="手机号/邮箱" v-model="userAccount">
                    </div>
                    <div class="login-input">
                        <input maxlength="20" minlength="6" placeholder="请输入密码" type="password" v-model="passWord">
                    </div>
                </div>
                <div v-show="isNote">
                    <div class="login-input">
                        <input type="tel" maxlength="11" placeholder="+86 请输入手机号" v-model="phoneNumber">
                    </div>
                    <div class="login-input">
                        <input type="tel" maxlength="6" placeholder="请输入短信验证码" class="input-small" v-model="mobileCode">
                        <div class="input-send">
                            <div class="mCountDown">
                                <button v-if="isSend" @click="Send()">发送验证码</button>
                                <button v-else style="background: #e5e5e5;color: #999;outline:none;" disabled="disabled">重新发送( {{ num }} s)</button>
                                <!-- <div class="vux-toast">
                                    <div class="weui-mask_transparent" style="display: none;"></div>
                                    <div class="weui-toast weui-toast_text vux-toast-middle" style="width: auto; display: none;">
                                        <i class="weui-icon-success-no-circle weui-icon_toast" style="display: none;"></i>
                                        <p class="weui-toast__content" style="padding: 10px;"></p>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pwd-forget">
                    <span>忘记密码?</span>
                </div>
                <div class="login-button">
                    <button @click="login">登录</button>
                </div>
                <div class="login-register">
                    <button>手机快速注册</button>
                </div>
                <div class="login-third">
                    <div class="third-title">
                        <span>第三方登录/注册</span>
                        <div class="line"></div>
                    </div>
                    <div class="third-item">
                        <div class="wechat">
                            <img src="@/assets/img/wx.png" alt="">
                        </div>
                        <div class="qq">
                            <img src="@/assets/img/qq.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="Login-bottom">
                    <p>登录即代表您已经同意我们的<span>《使用协议》</span></p>
                </div>
            </div>
        </div>
        <alert-tip v-if="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
    </div>
</template>
<script>
import alertTip from '../../components/alertTip'
import {mapState, mapMutations} from 'vuex'
export default {
    data() {
        return {
            isAccounts: true,
            isNote: false,
            num: 59,
            isSend: true,
            time: null,
            userAccount: null, //用户名
            passWord: null, //密码
            phoneNumber: null, //电话号码
            mobileCode: null, //短信验证码
            alertText: "",
            showAlert: false
        }
    },
    computed: {
        ...mapState(['userInfo'])
    },
    components: {
        alertTip
    },
    methods: {
        ...mapMutations([
            'getUserInfo',
        ]),
        Accounts() {
            this.isAccounts = true
            this.isNote = false
            this.userAccount = null
            this.passWord = null
            this.phoneNumber = null
            this.mobileCode = null
        },
        Note() {
            this.isAccounts = false
            this.isNote = true
            this.userAccount = null
            this.passWord = null
            this.phoneNumber = null
            this.mobileCode = null
        },
        Send() {
            this.isSend = false
            this.time = setInterval(this.timer, 1000);
        },
        timer() {
            this.num--
            if(this.num == 0){
                clearInterval(this.time)
                this.num = 59
                this.isSend = true
            }
        },
        login() {
            if(this.isAccounts){
                console.log("用户名登录");
                console.log(this.userAccount);
                console.log(this.passWord);
                if (!this.userAccount) {
                    this.showAlert = true;
                    this.alertText = '请输入手机号/邮箱/用户名';
                    return
                }else if(!this.passWord){
                    this.showAlert = true;
                    this.alertText = '请输入密码';
                    return
                }
                //发送请求
            }
            if(this.isNote){
                console.log("手机登录");
                console.log(this.phoneNumber);
                console.log(this.mobileCode);
                if (!this.phoneNumber) {
                    this.showAlert = true;
                    this.alertText = '手机号码不正确';
                    return;
                }else if(!(/^\d{6}$/gi.test(this.mobileCode))){
                    this.showAlert = true;
                    this.alertText = '短信验证码不正确';
                    return;
                }
                //发送请求
            }
        },
        closeTip(){
            this.showAlert = false;
        }
    }
};
</script>
<style lang="scss" scoped>
.login {
  position: relative;
  text-align: center;
  .login-top {
    width: 100%;
    height: 13rem;
    background: url("../../assets/img/bglogin.png") no-repeat;
    background-size: 100% 100%;
    img {
      display: block;
      width: 12.5rem;
      height: 1.375rem;
      margin: 0 auto;
      padding-top: 3.3rem;
    }
  }
  .login-content {
    width: 21.5625rem;
    height: auto;
    position: absolute;
    left: 50%;
    top: 7rem;
    margin-left: -10.78125rem;
    .login-content-tab {
      width: 100%;
      height: 2.8125rem;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        flex: 1;
        display: block;
        width: 50%;
        height: 2.8125rem;
        line-height: 2.8125rem;
        color: #666;
        position: relative;
      }
      span.cur {
        font-weight: 700;
        color: #333;
      }
      span.cur::after {
        content: "";
        display: block;
        border-left: 0.375rem dashed transparent;
        border-right: 0.375rem dashed transparent;
        border-bottom: 0.53125rem solid #fff;
        position: absolute;
        left: 50%;
        bottom: 0;
        margin-left: -0.375rem;
      }
    }
    .login-content-from {
      background: #fff;
      border-radius: 0.3rem;
      width: 100%;
      padding: 0 1.1875rem;
      box-sizing: border-box;
      box-shadow: 0 0 0.8rem #d4d4d4;
      .login-input {
        width: 100%;
        height: 2.8125rem;
        padding-top: 0.2rem;
        border-bottom: 1px solid #d4d4d4;
        display: flex;
        align-items: center;
        input {
          width: 100%;
          height: 2.8125rem;
          padding-left: 0.4rem;
          font-size: 1.0625rem;
          border: none;
          outline: none;
        }
        input.input-small{
            width: 11.5625rem;
        }
        .input-send{
            flex: 1;
            width: 7.5rem;
            height: 1.9rem;
            line-height: 1.9rem;
            text-align: center;
            color: #666;
            .mCountDown {
                width: 100%;
                height: 100%;
                border-radius: .1rem;
                overflow: hidden;
                button{
                    width: 99.5%;
                    height: 100%;
                    border: none;
                    background: #fed101;
                    border-radius: .3rem;
                }
            }
        }
      }
      .pwd-forget {
        width: 100%;
        height: 3.125rem;
        text-align: right;
        color: #666;
        font-size: .9rem;
        line-height: 3.125rem;
      }
      .login-button {
        background: #fed101;
        width: 100%;
        height: 2.75rem;
        line-height: 2.75rem;
        border-radius: 0.2rem;
        button {
          width: 100%;
          height: 100%;
          background: none;
          color: #333;
          border: 0;
          font-size: 1.3rem;
        }
      }
      .login-register {
        border: 1px solid #d4d4d4;
        width: 100%;
        height: 2.75rem;
        line-height: 2.75rem;
        border-radius: 0.2rem;
        margin-top: 0.9375rem;
        button {
          width: 100%;
          height: 100%;
          background: none;
          color: #333;
          border: 0;
          font-size: 1.3rem;
        }
      }
      .login-third {
        margin-top: 2.0625rem;
        padding: 0 2.5rem;
        .third-title {
          width: 100%;
          height: 1.40625rem;
          position: relative;
          line-height: 1.40625rem;
          span {
            background: #fff;
            color: #888;
            position: relative;
            padding: 0 0.9375rem;
            z-index: 2;
          }
          .line {
            width: 100%;
            height: 1px;
            position: absolute;
            border-bottom: 1px solid #e5e5e5;
            top: 50%;
            z-index: 1;
          }
        }
        .third-item {
          display: flex;
          padding: 1.25rem 0;
          div {
            flex: 1;
            img {
              display: block;
              height: 3.03125rem;
              margin: 0 auto;
            }
          }
        }
      }
      .Login-bottom {
        color: #999;
        height: 1.5625rem;
        line-height: 1.5625rem;
        padding-bottom: 0.2rem;
        span {
          color: #ff7100;
        }
      }
    }
  }
}
</style>

