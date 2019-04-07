<template>
  <div class="visas">
    <Header :title='title' :show='show'></Header>
    <div class="visas-nav">
      <ul class="nav-tab">
        <li class="tab-item" :class="{active: id === 1}" @click="getVisas(1)">全部</li>
        <li class="tab-item" :class="{active: id === 2}" @click="getVisas(2)">待付款</li>
        <li class="tab-item" :class="{active: id === 3}" @click="getVisas(3)">待出签</li>
        <li class="tab-item" :class="{active: id === 4}" @click="getVisas(4)">待收货</li>
        <li class="tab-item" :class="{active: id === 5}" @click="getVisas(5)">待评价</li>
      </ul>
    </div>
    <Tips></Tips>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '../../components/header.vue'
import Tips from '../order/children/tips.vue'
import Footer from '../../components/footer.vue'
export default {
  data() {
    return {
      id: 2,
      title: "签证订单列表",
      show: false
    }
  },
  components:{
    Tips,
    Header,
    Footer
  },
  mounted(){
    //console.log(this.$route.query)
  },
  methods: {
    getVisas(num) {
      this.id = num;
      this.$router.push({path: '/visas',query:{id:num}});
    }
  },
  activated() {
    this.id = this.$route.query.id || 2;
  }
}
</script>
<style lang="scss" scoped>
.visas{
  overflow-x: hidden;
  .visas-nav{
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