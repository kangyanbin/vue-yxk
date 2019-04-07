<template>
  <div class="coupon">
    <Header :title='title' :show='show'></Header>
    <div class="coupon-box">
      <div class="coupon-left">
        <div class="price">&yen;150</div>
        <div class="desc">满10000元使用</div>
      </div>
      <div class="coupon-right">
        <div class="coupon-title">新用户注册礼包-出境游</div>
        <div class="date">有效期至：2019-04-01</div>
        <div class="msg">使用说明</div>
      </div>
    </div>
    <div class="coupon-box">
      <div class="coupon-left">
        <div class="price">&yen;150</div>
        <div class="desc">满10000元使用</div>
      </div>
      <div class="coupon-right">
        <div class="coupon-title">新用户注册礼包-出境游</div>
        <div class="date">有效期至：2019-04-01</div>
        <div class="msg">使用说明</div>
      </div>
    </div>
    <div class="coupon-box">
      <div class="coupon-left">
        <div class="price">&yen;150</div>
        <div class="desc">满10000元使用</div>
      </div>
      <div class="coupon-right">
        <div class="coupon-title">新用户注册礼包-出境游</div>
        <div class="date">有效期至：2019-04-01</div>
        <div class="msg">使用说明</div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../../components/header.vue'
export default {
  data() {
    return {
      title: "我的代金券",
      show: true
    }
  },
  components:{
    Header
  },
  mounted(){
    //console.log(this.$route.query)
  },
  methods: {
    
  },
  activated() {
    
  }
}
</script>
<style lang="scss" scoped>
.coupon{
  overflow-x: hidden;
  background: #f5f5f5;
  .coupon-box{
    display: flex;
    justify-content: center;
    margin-top: .8rem;
    .coupon-left{
      display: flex;
      color: #ffffff;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 6.5rem;
      height: 6.5rem;
      background: url(../../assets/img/coupon.png) no-repeat;
      background-size: cover;
      .price{
        font-size: 1.5rem;
        font-weight: 700;
      }
    }
    .coupon-right{
      background: #fff;
      width: 15.625rem;
      height: 6.5rem;
      padding: 0 1rem;
      box-sizing: border-box;
      .coupon-title{
        margin-top: .5rem;
        font-size: 1rem;
        color: #333;
        font-weight: 700;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .date{
        margin-top: .7rem;
        font-size: .8rem;
      }
      .msg{
        margin-top: 1.7rem;
        padding: .3rem 0;
        border-top: 1px dashed #000;
        font-size: .8rem;
      }
    }
  }
}
</style>