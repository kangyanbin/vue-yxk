<template>
  <div class="address">
    <Header :title='title' :show='show'></Header>
    <Tips></Tips>
    <div class="addAddress">添加收货地址</div>
  </div>
</template>
<script>
import Header from '../../components/header.vue'
import Tips from '../order/children/tips.vue'
export default {
  data() {
    return {
      title: "管理收货地址",
      show: true
    }
  },
  components:{
    Tips,
    Header
  },
  mounted(){

  },
  methods: {
    
  },
  activated() {
    
  }
}
</script>
<style lang="scss" scoped>
.address{
  overflow-x: hidden;
  .addAddress {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    font-size: 1rem;
    color: #333;
    background: #fed101;
    z-index: 9999;
    }
}
</style>