<template>
  <div class="foot">
    <div class="bottom-service" @click="service()">
        <div>
            <img src="@/assets/img/service.png" alt="">
        </div>
        <span>联系客服</span>
    </div>
    <div class="bottom-favorite" @click="favorite()">
        <div>
            <img src="@/assets/img/xinxin.png" alt="" v-if="!isStore">
            <img src="@/assets/img/xinactive.png" alt="" v-if="isStore">
        </div>
        <span>收藏</span>
    </div>
    <div class="bottom-btn" @click="btn(id)">立即报名</div>
    <div class="msg" v-if="showMsg">
        {{ msgText }}
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            msgText: "",
            showMsg: false,
            isStore: false
        }
    },
    props: [
        "id"
    ],
    methods: {
        service() {
            if(!this.showMsg){
                this.alertMsg("不能联系客服！");
            }
        },
        favorite() {
            if(!this.showMsg){
                this.isStore = !this.isStore;
                if(this.isStore){
                    this.alertMsg("收藏成功！");
                }else{
                    this.alertMsg("取消收藏！");
                }
            }
        },
        btn(id) {
            this.$router.push({
                path: '/details/batches',
                query: {
                    id: id
                }
            })
        },
        alertMsg(val) {
            let that = this;
            that.showMsg = true;
            that.msgText = val;
            setTimeout(function(){
                that.showMsg = false;
            },1000)
        }
    }
}
</script>

<style lang="scss" scoped>
.foot{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #ddd;
    z-index: 999;
    display: flex;
    width: 100%;
    height: 3.09375rem;
    background-color: #fff;
    text-align: center;
    .bottom-service{
        width: 3.625rem;
        height: 3.03125rem;
        border: 1px solid #ddd;
        div>img{
            padding-top: .3rem;
            width: 1.25rem;
            height: 1.1875rem;
        }
    }
    .bottom-favorite{
        width: 3.5rem;
        height: 3.03125rem;
        text-align: center;
        border: 1px solid #ddd;
        div>img{
            padding-top: .3rem;
            width: 1.25rem;
            height: 1.1875rem;
        }
    }
    .bottom-btn{
        color: #fff;
        background: #ff7100;
        height: 3.09375rem;
        line-height: 3.03125rem;
        border: 1px solid #ddd;
        text-align: center;
        font-size: 1.2rem;
        font-weight: 600;
        flex: 1;
    }
    .msg{
        position: fixed;
        padding: .5rem .7rem;
        font-size: 1rem;
        height: 1rem;
        line-height: 1rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        color: #fff;
        background-color: #000;
        border-radius: .3rem;
    }
}
</style>