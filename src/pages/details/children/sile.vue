<template>
    <div class="banner">
        <div class="banner-type">
            <span>{{ product.cate }} | {{ product.type }}</span>
        </div>
        <div class="banner-days">{{ product.time }}</div>
        <div class="banner-swiper">
            <swiper v-if="product['flash_pic']" :options="swiperOption">
                <swiper-slide v-for="(item,index) in product.flash_pic" :key="index">
                    <img src="@/assets/img/swiper1.png" alt="">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
    props: [
        'product'
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
.banner{
    position: relative;
    .banner-type{
        position: absolute;
        left: .7rem;
        bottom: .6rem;
        z-index: 100;
        padding: 0 .5rem;
        height: 1.25rem;
        line-height: 1.25rem;
        color: #fff;
        border-radius: .6rem;
        background: rgba(0,0,0,.4);
    }
    .banner-days{
        position: absolute;
        right: .7rem;
        bottom: .6rem;
        z-index: 100;
        padding: 0 .5rem;
        height: 1.25rem;
        line-height: 1.25rem;
        color: #fff;
        border-radius: .6rem;
        background: rgba(0,0,0,.4);
    }
    .banner-swiper{
        width: 100%;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>


