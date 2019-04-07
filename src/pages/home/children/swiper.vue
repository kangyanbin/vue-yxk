<template>
    <div class="swiper">
        <swiper v-if="first_ad.length" :options="swiperOption">
            <!-- <swiper-slide>
                <img src="@/assets/img/lunbo1.png" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/img/lunbo2.png" alt="">
            </swiper-slide> -->
            <swiper-slide v-for="(item,index) in first_ad" :key="index">
                <img src="@/assets/img/lunbo2.png" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>

export default {
    props: [
        'first_ad'
    ],
    data() {
        return {
            swiperOption: {
                loop:true,
                autoplay:true,
                pagination: {
                    el: ".swiper-pagination"
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.swiper{
    width: 100%;
    height: 7.5rem;
    img{
        width: 100%;
        height: 7.5rem;
    }
}
</style>