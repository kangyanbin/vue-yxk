<template>
    <div class="user">
        <div class="user-center">个人中心</div>
        <div class="user-header">
            <div class="header-image">
                <img src="@/assets/img/header_img.png" alt="">
            </div>
            <div class="header-box">
                <router-link to="" class="gologin">{{ username }}</router-link>
                <div class="box-msg"></div>
            </div>
        </div>
        <div class="user-order">
            <div class="list-title" @click="toOrder({path: '/order'})">
                活动订单
                <i class="iconfont">&#xe6c7;</i>
            </div>
            <div class="list-item">
                <div class="item" @click="toOrder({path: '/order',query:{status:2}})">
                    <div class="item-img">
                        <img src="@/assets/userimg/item1.png" alt="">
                    </div>
                    <div class="item-desc">待付款</div>
                </div>
                <div class="item" @click="toOrder({path: '/order',query:{status:3}})">
                    <div class="item-img">
                        <img src="@/assets/userimg/item2.png" alt="">
                    </div>
                    <div class="item-desc">报名成功</div>
                </div>
                <div class="item" @click="toOrder({path: '/order',query:{status:4}})">
                    <div class="item-img">
                        <img src="@/assets/userimg/item3.png" alt="">
                    </div>
                    <div class="item-desc">替补</div>
                </div>
                <div class="item" @click="toOrder({path: '/order',query:{status:5}})">
                    <div class="item-img">
                        <img src="@/assets/userimg/item4.png" alt="">
                    </div>
                    <div class="item-desc">待评价</div>
                </div>
                <div class="item" @click="toOrder({path: '/order/cancel'})">
                    <div class="item-img">
                        <img src="@/assets/userimg/item5.png" alt="">
                    </div>
                    <div class="item-desc">退款/取消</div>
                </div>
            </div>
        </div>
        <div class="classify">
            <router-link to="/visas">
                <div class="classify-item">
                    <div class="icon">
                        <div class="left">
                            <img src="@/assets/userimg/classify1.png" alt="">
                        </div>
                        <div class="msg">签证订单</div>
                    </div>
                    <i class="iconfont">&#xe6c7;</i>
                </div>
            </router-link>
            <router-link to="/myorders">
                <div class="classify-item">
                    <div class="icon">
                        <div class="left">
                            <img src="@/assets/userimg/classify2.png" alt="">
                        </div>
                        <div class="msg">集市订单</div>
                    </div>
                    <i class="iconfont">&#xe6c7;</i>
                </div>
            </router-link>
            <router-link to="/shop">
                <div class="classify-item">
                    <div class="icon">
                        <div class="left">
                            <img src="@/assets/userimg/classify3.png" alt="">
                        </div>
                        <div class="msg">集市购物车</div>
                    </div>
                    <i class="iconfont">&#xe6c7;</i>
                </div>
            </router-link>
            <router-link to="/coupon">
                <div class="classify-item">
                    <div class="icon">
                        <div class="left">
                            <img src="@/assets/userimg/classify4.png" alt="">
                        </div>
                        <div class="msg">代金券</div>
                    </div>
                    <i class="iconfont">&#xe6c7;</i>
                </div>
            </router-link>
            <router-link to="/passenger">
                <div class="classify-item">
                    <div class="icon">
                        <div class="left">
                            <img src="@/assets/userimg/classify5.png" alt="">
                        </div>
                        <div class="msg">常用出行人</div>
                    </div>
                    <i class="iconfont">&#xe6c7;</i>
                </div>
            </router-link>
            <router-link to="/address">
                <div class="classify-item">
                    <div class="icon">
                        <div class="left">
                            <img src="@/assets/userimg/classify6.png" alt="">
                        </div>
                        <div class="msg">常用收货地址</div>
                    </div>
                    <i class="iconfont">&#xe6c7;</i>
                </div>
            </router-link>
            <div class="classify-item" @click="alertMsg()">
                <div class="icon">
                    <div class="left">
                        <img src="@/assets/userimg/classify7.png" alt="">
                    </div>
                    <div class="msg">个人资料</div>
                </div>
                <i class="iconfont">&#xe6c7;</i>
            </div>
            <router-link to="/user/editpwd">
                <div class="classify-item">
                    <div class="icon">
                        <div class="left">
                            <img src="@/assets/userimg/classify8.png" alt="">
                        </div>
                        <div class="msg">修改密码</div>
                    </div>
                    <i class="iconfont">&#xe6c7;</i>
                </div>
            </router-link>
            <div class="classify-item" @click="service()">
                <div class="icon">
                    <div class="left">
                        <img src="@/assets/userimg/classify9.png" alt="">
                    </div>
                    <div class="msg">在线客服</div>
                </div>
                <i class="iconfont">&#xe6c7;</i>
            </div>
            <router-link to="">
                <div class="classify-item">
                    <div class="icon">
                        <div class="left">
                            <img src="@/assets/userimg/classify10.png" alt="">
                        </div>
                        <div class="msg">游侠客app</div>
                    </div>
                    <i class="iconfont">&#xe6c7;</i>
                </div>
            </router-link>
            <div class="login-out" @click="out()">退出登录</div>
        </div>
        <div class="alertmsg" v-if="isAlert">
            <div class="alert-box">
                <div class="box-title">{{ alertText }}</div>
                <div class="box-btn" @click="removeMsg()">确认</div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '../../components/footer.vue'
import {mapState} from 'vuex'
export default {
    data() {
        return {
            username: "去登录/注册",    //用户名
            avatar: '',                //头像地址
            isAlert: false,            //是否弹窗
            alertText: ""
        }
    },
    mounted(){
        this.initData();
    },
    computed: {
        ...mapState(['userInfo'])
    },
    components:{
        Footer
    },
    methods: {
        initData(){
            if (this.userInfo && this.userInfo.user_id) {
                this.avatar = this.userInfo.avatar;
                this.username = this.userInfo.username;
            }else{
                this.username = '去登录/注册';
            }
        },
        toOrder(path) {
            this.$router.push(path);
        },
        alertMsg() {
            this.isAlert = true;
            this.alertText = "下载APP，完善资料送100元代金券";
        },
        removeMsg() {
            this.isAlert = false;
        },
        service() {
            this.isAlert = true;
            this.alertText = "客服电话:888888";
        },
        out() {
            this.isAlert = true;
            this.alertText = "退出成功";
        }
    }
}
</script>

<style lang="scss" scoped>
.user{
    background: #f4f4f4;
    .user-center{
        width: 100%;
        height: 2.8125rem;
        line-height: 2.8125rem;
        text-align: center;
        font-size: 1rem;
        background: #fed101!important;
        color: #333;
    }
    .user-header{
        background: url('../../assets/img/bg-user.png') no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
        height: 6.34375rem;
        .header-image{
            margin-left: .8rem;
            margin-right: .8rem;
            img{
                width: 3.75rem;
                height: 3.75rem;
            }
        }
        .header-box{
            .gologin{
                font-size: 1rem;
                font-weight: 700;
                color: #333;
            }
        }
    }
    .user-order{
        background-color: #fff;
        width: 22.1875rem;
        height: 7.8125rem;
        margin: 0 auto;
        position: relative;
        top: -1rem;
        border-radius: .5rem;
        .list-title{
            display: flex;
            justify-content: space-between;
            font-size: 1rem;
            padding: .5rem 1rem;
            font-weight: 700;
            border-bottom: 1px solid #eee;
            height: 2rem;
            line-height: 2rem;
        }
        .list-item{
            display: flex;
            justify-content: space-between;
            padding: .8rem 1rem;
            .item{
                .item-img{
                    text-align: center;
                    img{
                        width: 1.875rem;
                        height: 1.875rem;
                    }
                }
                .item-desc{
                    text-align: center;
                    font-size: .8rem;
                    color: #666;
                    padding-top: .3rem;
                }
            }
        }
    }
    .classify{
        width: 100%;
        padding-bottom: 4.5rem;
        .classify-item{
            background: #fff;
            display: flex;
            width: 100%;
            height: 3.09375rem;
            align-items: center;
            font-size: 1rem;
            justify-content: space-between;
            padding: 0 .3rem;
            box-sizing: border-box;
            border-bottom: 1px solid #eee;
            .icon{
                display: flex;
                align-items: center;
                .left{
                    width: 1.75rem;
                    height: 2.1875rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        transform: scale(0.5);
                    }
                }
                .msg{
                    color: #333;
                    margin-left: .2rem;
                }
            }
        }
        .login-out{
            background: #fff;
            font-size: 1rem;
            text-align: center;
            width: 16.8rem;
            height: 2.8rem;
            line-height: 2.8rem;
            margin: 1rem auto;
        }
    }
    .alertmsg{
        position: fixed;
        background: rgba(0,0,0,.6);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 9999999999;
        display: flex;
        justify-content: center;
        align-items: center;
        .alert-box{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background: #fff;
            border-radius: .5rem;
            .box-title{
                text-align: center;
                line-height: 4.5rem;
                font-size: .9rem;
                width: 15rem;
                height: 4.5rem;
                white-space: nowrap;
                overflow: hidden;
            }
            .box-btn{
                color: #fcbc00;
                font-size: 1.2rem;
                border-top: 1px solid #eee;
                width: 15rem;
                height: 2.5rem;
                text-align: center;
                line-height: 2.5rem;
            }
        }
    }
}
</style>
