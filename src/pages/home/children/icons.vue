<template>
    <div class="icons">
        <ul>
            <li v-for='item in iconList' :key='item.id' @click="toChannel(item.url)">
                <img :src="item.imgUrl" alt="">
                <p>{{ item.title }}</p>
            </li>
        </ul>
        <!-- <ul>
            <li v-for='item in navs' :key='item.id' @click="toChannel(item.url)">
                <img :src="item.thumb" alt="">
                <p>{{ item.title }}</p>
            </li>
        </ul> -->
    </div>
</template>
<script>

export default {
    props: [
        'navs'
    ],
    data() {
        return {
            iconList: [
                {
                    id: 1,
                    imgUrl: 'img/icon1.png',
                    title: '国内游',
                    url: "/cn"
                },
                {
                    id: 2,
                    imgUrl: 'img/icon2.png',
                    title: '出境游',
                    url: "/out"
                },
                {
                    id: 3,
                    imgUrl: 'img/icon3.png',
                    title: '周边游',
                    url: "/around"
                },
                {
                    id: 4,
                    imgUrl: 'img/icon4.gif',
                    title: '当地玩乐',
                    url: "/wanle"
                },
                {
                    id: 5,
                    imgUrl: 'img/icon5.png',
                    title: '活动赛事',
                    url: "/sport"
                },
                {
                    id: 6,
                    imgUrl: 'img/icon6.png',
                    title: '摄影游',
                    url: "/photo"
                },
                {
                    id: 7,
                    imgUrl: 'img/icon7.png',
                    title: '亲子游',
                    url: "/qinzi"
                },
                {
                    id: 8,
                    imgUrl: 'img/icon8.png',
                    title: '户外游',
                    url: "/huwai"
                },
                {
                    id: 9,
                    imgUrl: 'img/icon9.png',
                    title: '主题游',
                    url: "/zty"
                },
                {
                    id: 10,
                    imgUrl: 'img/icon10.png',
                    title: '定制游',
                    url: "/dingzhi"
                }
            ]
       }
   },
   methods: {
       toChannel(url) {
           console.log(url)
           this.$router.push({
                path: url,
            })
       }
   }
}
</script>
<style lang="scss" scoped>
.icons{
    padding: .4rem .2rem;
    border-bottom: 1px solid #eee;
    text-align: center;
    :after{
        display: block;
        content: "";
        clear: both;
    }
    ul li{
        width: 20%;
        float: left;
        margin-bottom: .5rem;
        img{
            width: 2.5rem;
            height: 2.5rem;
        }
        p{
            font-size: .8rem;
            text-align: center;
            color: #333;
        }
    }
}
</style>