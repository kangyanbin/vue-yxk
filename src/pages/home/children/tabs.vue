<template>
    <div class="tabs">
        <swiper :options="swiperOption" class="tabs-content">
            <swiper-slide v-for='item in tabList' :key='item.id'>
                <img :src="item.imgUrl" alt="">
                <p>{{ item.title }}</p>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>

export default {
    data() {
        return {
            tabList: [
                {
                    id: 1,
                    imgUrl: 'img/tab1.gif',
                    title: '签证'
                },
                {
                    id: 2,
                    imgUrl: 'img/tab1.gif',
                    title: '签证'
                },
                {
                    id: 3,
                    imgUrl: 'img/tab1.gif',
                    title: '签证'
                },
                {
                    id: 4,
                    imgUrl: 'img/tab1.gif',
                    title: '签证'
                },
                {
                    id: 5,
                    imgUrl: 'img/tab1.gif',
                    title: '签证'
                },
                {
                    id: 6,
                    imgUrl: 'img/tab1.gif',
                    title: '签证'
                },
                {
                    id: 7,
                    imgUrl: 'img/tab1.gif',
                    title: '签证'
                },
                {
                    id: 8,
                    imgUrl: 'img/tab1.gif',
                    title: '签证'
                },
                {
                    id: 9,
                    imgUrl: 'img/tab1.gif',
                    title: '签证'
                },
                {
                    id: 10,
                    imgUrl: 'img/tab1.gif',
                    title: '签证'
                }
            ],
            swiperOption: {
                slidesPerView : 4.55
            }
       }
   }
}
</script>
<style lang="scss" scoped>
.tabs-content{
    padding: .7rem 0;
    img{
        display: block;
        margin: 0 auto;
        width: 1.8125rem;
        height: 1.8125rem;
    }
    p{
        text-align: center;
        font-size: .75rem;
        font-weight: 600;
    }
}
</style>