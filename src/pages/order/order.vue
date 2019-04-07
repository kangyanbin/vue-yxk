<template>
  <div class="order">
    <Header :title='title' :show='show'></Header>
    <div class="order-nav">
      <ul class="nav-tab">
        <li class="tab-item" :class="{active: status === 1}" @click="getOrder(1)">全部</li>
        <li class="tab-item" :class="{active: status === 2}" @click="getOrder(2)">待付款</li>
        <li class="tab-item" :class="{active: status === 3}" @click="getOrder(3)">报名成功</li>
        <li class="tab-item" :class="{active: status === 4}" @click="getOrder(4)">替补</li>
        <li class="tab-item" :class="{active: status === 5}" @click="getOrder(5)">待评价</li>
      </ul>
    </div>
    <Tips></Tips>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '../../components/header.vue'
import Tips from './children/tips.vue'
import Footer from '../../components/footer.vue'
export default {
  data() {
    return {
      status: 2,
      title: "活动订单",
      show: false
    }
  },
  components:{
    Footer,
    Tips,
    Header
  },
  mounted(){
    //console.log(this.$route.query)
  },
  methods: {
    getOrder(num) {
      this.status = num;
      this.$router.push({path: '/order',query:{status:num}});
    }
  },
  activated() {
    this.status = this.$route.query.status || 2;
  }
}
</script>
<style lang="scss" scoped>
.order{
  overflow-x: hidden;
  .order-nav{
    width: 100%;
    height: 2.59375rem;
    line-height: 2.59375rem;
    border-bottom: 1px solid #eee;
    .nav-tab{
      display: flex;
      justify-content: space-around;
      color: #666;
      font-size: 1rem;
      .active{
        color: #fcbc00;
      }
    }
  }
}
</style>