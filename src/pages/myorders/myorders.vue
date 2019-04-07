<template>
  <div class="myOrders">
    <Header :title='title' :show='show'></Header>
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
      title: "我的订单",
      show: true
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
    
  },
  activated() {
    
  }
}
</script>
<style lang="scss" scoped>
.myOrders{
  overflow-x: hidden;
}
</style>