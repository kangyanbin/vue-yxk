<template>
    <div class="cancel">
        <Header :title='title' :show='show'></Header>
        <Tips></Tips>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '../../../components/header.vue'
import Tips from './tips.vue'
import Footer from '../../../components/footer.vue'
export default {
  data() {
    return {
      title: "退款/取消",
      show: false
    }
  },
  components:{
    Footer,
    Tips,
    Header
  }
}
</script>
