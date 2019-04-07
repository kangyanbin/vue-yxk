<template>
    <div class="scroll">
       <div class="scroll-content">
           <div class="scroll-right">
               <ul :class="{animetionTop}">
                    <!-- <li v-for='item in scrollList' :key='item.id'>
                       <img src="@/assets/img/dian.png" alt="">
                       {{ item.title }}
                    </li> -->
                    <li v-for='(item,index) in news' :key='index'>
                       <img src="@/assets/img/dian.png" alt="">
                       {{ item.title }}
                    </li>
               </ul>
           </div>
       </div>
    </div>
</template>
<script>

export default {
    props: [
        'news'
    ],
    data() {
        return {
            animetionTop:false,
            scrollList: [
                {
                    id: 1,
                    title: '广州出发一日游最值得去的小众目的地——沙湾古镇'
                },
                {
                    id: 2,
                    title: '新疆小众雪场推荐，成全你自由滑行的梦想'
                },
                {
                    id: 3,
                    title: '菲律宾宿务薄荷岛自由行攻略，与海龟鲸鲨在一起'
                },
                {
                    id: 4,
                    title: '绍兴安昌古镇攻略，江南水乡中的腊味酱香年'
                }
            ]
        }
    },
    mounted(){
        setInterval(this.showScroll,2000)
    },
    methods:{
        showScroll(){
            this.animetionTop = true;
            setTimeout(() => {
                // this.scrollList.push(this.scrollList[0]);
                // this.scrollList.shift();
                this.news.push(this.news[0]);
                this.news.shift();
                this.animetionTop = false;
            },500)
        }
    }
}
</script>
<style lang="scss" scoped>
.animetionTop{
    transition: all .5s;
    margin-top: -1.5rem; 
}
.scroll-content{
    background: url('../../../assets/img/scroll.png') no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 3.125rem;
    position: relative;
    .scroll-right{
        position: absolute;
        right: 0;
        line-height: 1.45rem;
        width: 19.0625rem;
        height: 3.125rem;
        overflow: hidden;
    }
    ul li{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 0.75rem;
        img{
            width: .4rem;
            height: .4rem;
            margin-right: .4rem;
        }
    }
}

</style>