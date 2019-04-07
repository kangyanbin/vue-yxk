<template>
    <div id="home">
        <!-- 我是首页 -->
        <Banner :flash='flash'></Banner>
        <Icons :navs='navs'></Icons>
        <Tabs></Tabs>
        <Scroll :news='news'></Scroll>
        <Swiper :first_ad='first_ad'></Swiper>
        <Spike :sale='sale'></Spike>
        <Like :classified='classified'></Like>
        <Hot></Hot>
        <Top v-show="istop"></Top>
        <Footer></Footer>
    </div>
</template>
<script>
import Banner from './children/banner.vue'
import Icons from './children/icons.vue'
import Tabs from './children/tabs.vue'
import Scroll from './children/scroll.vue'
import Swiper from './children/swiper.vue'
import Spike from './children/spike.vue'
import Like from './children/like.vue'
import Hot from './children/hot.vue'
import Top from '../../components/top.vue'
import Footer from '../../components/footer.vue'
import {mapState} from 'vuex'
export default {
    data() {
        return {
            flash: [],
            navs: [],
            news: [],
            first_ad: [],
            sale: [],
            classified: [],
            city: '',
            istop: false
        }
    },
    components:{
        Banner,
        Icons,
        Tabs,
        Scroll,
        Swiper,
        Spike,
        Like,
        Hot,
        Top,
        Footer
    },
    computed: {
        ...mapState(['cityName'])
    },
    created() {
        
    },
    mounted() {
        this.city = this.cityName;
        this.http()
    },
    methods: {
        http() {
            let that = this;
            this.axios.get('http://localhost:8080/api/index.json').then((res)=>{
                that.flash = res.data.data.flash
                console.log(that.flash)
                that.navs = res.data.data.navs
                that.news = res.data.data.news
                that.first_ad = res.data.data.first_ad
                that.sale = res.data.data.sale
                that.classified = res.data.data.classified
                console.log("发送请求")
            })
        },
        handleScroll() {
            // console.log(document.body.clientHeight);
            // console.log(document.body.offsetHeight);
            // console.log(window.scrollY)
            // console.log(window.innerHeight)
            if(document.body.clientHeight === (window.scrollY + window.innerHeight)-60){
                console.log("滚动到底部")
            }
            if(window.scrollY > 1000){
                this.istop = true;
            }else{
                this.istop = false;
            }
            console.log("滚动");
        }
    },
    activated() {
        if(this.city != this.cityName){
            console.log("不同")
            this.http()
            this.city = this.cityName
        }
        // console.log(this.cityName)
        window.addEventListener('scroll', this.handleScroll)
    },
    deactivated() {
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>
<style lang="scss" scoped>

</style>

