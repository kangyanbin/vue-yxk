<template>
  <div class="passenger">
    <Header :title='title' :show='show'></Header>
    <Tips></Tips>
  </div>
</template>
<script>
import Header from '../../components/header.vue'
import Tips from '../order/children/tips.vue'
export default {
  data() {
    return {
      title: "常用出行人",
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
.passenger{
  overflow-x: hidden;
}
</style>