<template>
  <div class="shop">
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
      title: "购物车",
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
.shop{
  overflow-x: hidden;
}
</style>