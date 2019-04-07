<template>
    <div class="book">
        <!-- {{this.$route.query.id}}
        {{this.$route.query.pkgid}}
        {{this.$route.query.dateId}} -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            bid: ""
        }
    },
    created() {
        
        
    },
    mounted(){
        
        
    },
    activated(){
        //发送请求携带this.$route.query.id,this.$route.query.pkgid,this.$route.query.dateId获取订单id信息
        this.bid = 314311;
        this.$router.push({
            path: '/book/index',
            query: {
                bid: this.bid
            }
        });
    }
}
</script>
<style lang="scss" scoped>
</style>
