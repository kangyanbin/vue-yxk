<template>
    <div class="swiper-banner">
        <swiper v-if="slide_show" :options="swiperOption">
            <!-- <swiper-slide v-for="(item,index) in slide_show" :key="index">
                <img :src="item.pic" alt="">
            </swiper-slide> -->
            <swiper-slide>
                <img src="@/assets/img/swiper1.png" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/img/swiper1.png" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/img/swiper1.png" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/img/swiper1.png" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/img/swiper1.png" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    props:[
        'slide_show'
    ],
    data() {
        return {
            swiperOption: {
                loop: true,
                autoplay: true,
                pagination: {
                    el: ".swiper-pagination"
                }
            }
        }
    },
    created(){
        
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
.swiper-banner{
    width: 100%;
    img{
        width: 100%;
        height: 100%;
    }
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
    bottom: 25px;
}
</style>