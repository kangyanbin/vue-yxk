<template>
    <div class="list">
        <div class="list-content">
            <p>定位/附近城市</p>
            <div v-for="(item,index) in city" @click="toHome(item)" :key="index">{{ item }}</div>
        </div>
        <div class="list-content">
            <p>已开通周边游站点</p>
            <div v-for="(item,index) in mapcity" @click="toHome(item)" :key="index">{{ item }}</div>
        </div>
        <div class="list-content">
            <p>热门玩乐城市</p>
            <div v-for="(item,index) in hotcity" @click="toHome(item)" :key="index">{{ item }}</div>
        </div>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    data() {
        return {
            city: [],
            mapcity: [],
            hotcity: []
        }
    },
    mounted() {
        this.axios.get('http://localhost:8080/api/city.json').then((res)=>{
            console.log(res)
            this.city = res.data.city;
            this.mapcity = res.data.mapcity;
            this.hotcity = res.data.hotcity;
        })
    },
    methods: {
        toHome(city) {
            // alert(city)
            this.setCityName(city)
            this.$router.push({
                path: '/'
            })
        },
        ...mapMutations(['setCityName'])
    }
}
</script>

<style lang="scss" scoped>
.list{
    padding-top: .625rem;
    padding-left: 1rem;
    .list-content{
        p{
            height: 2rem;
            line-height: 2rem;
            font-size: .9rem;
            color: #999;
        }
        div{
            display: inline-block;
            width: 4.5625rem;
            height: 1.8125rem;
            line-height: 1.8125rem;
            text-align: center;
            border:1px solid #bbb;
            border-radius: .3rem;
            color: #999;
            margin-right: .8rem;
            margin-bottom: .6rem;
        }
    }
}
</style>
