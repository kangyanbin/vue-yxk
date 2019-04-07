<template>
    <div class="channel">
        <Header :title='title'></Header>
        <Swiper :slide_show='newData.slide_show'></Swiper>
        <Hotline :hot_lines='newData.hot_lines'></Hotline>
        <Hotplace :des_lines='newData.des_lines'></Hotplace>
        <Travel :theme_lines='newData.theme_lines'></Travel>
        <Film :film='newData.film'></Film>
        <Strategy :news='newData.news'></Strategy>
    </div>
</template>
<script>
import Header from '../../components/header.vue'
import Swiper from './children/swiper.vue'
import Hotline from './children/hotline.vue'
import Hotplace from './children/hotplace.vue'
import Travel from './children/travel.vue'
import Film from './children/film.vue'
import Strategy from './children/strategy.vue'
export default {
    data() {
        return {
            slide_show: [],
            newData: [],
            title: "国内游"
        }
    },
    components: {
        Header,
        Swiper,
        Hotline,
        Hotplace,
        Travel,
        Film,
        Strategy
    },
    created(){
        
    },
    mounted(){
        this.getData()
    },
    methods: {
        getData() {
            let that = this;
            this.axios.get('http://localhost:8080/api/cn.json', {
                params: {
                    ID: 12345
                }
            })
            .then(function (response) {
                that.newData = response.data.data;
                console.log(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        go() {
            console.log(this.$route.name)
        }
    },
    activated() {
        this.go()
    }
}
</script>
<style lang="scss" scoped>
.channel{
    background-color: #f4f4f4;
}
</style>

