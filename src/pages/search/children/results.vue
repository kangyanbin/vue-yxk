<template>
    <div class="results">
        <div class="results-header">
            <router-link to="/search">
                <div class="back">
                    <i class="iconfont">&#xe6bc;</i>
                </div>
            </router-link>
            <div class="input">
                <input type="search" placeholder="春天赏花地推荐" autofocus="autofocus" maxlength="10" 
                v-model.trim="inputVal" id="inputBox" class="inputBox">
                <div class="search-icon" @click="search()">
                    <i class="iconfont">&#xe617;</i>
                </div>
            </div>
            <router-link to="/home">
                <div class="home">
                    <i class="iconfont">&#xe680;</i>
                </div>
            </router-link>
            <div class="filter-container">
                <div class="box" :class="{active: isDefault}" @click="sort()">
                    <span>默认排序<i class="iconfont" :class="{icon: isShow}">&#xe668;</i></span>
                </div>
                <div class="box" :class="{active: isday}" @click="dayNum()">
                    <span>行程天数<i class="iconfont" :class="{icon: isShow}">&#xe668;</i></span>
                </div>
            </div>
            <div class="filter-all" v-if="isShow">
                <div class="filter-default" v-if="isDefault">
                    <div class="filter-default-list" @click="setPrice(1)">
                        <span>默认排序</span>
                        <img src="@/assets/img/yes.png" alt="" v-if="status === 1">
                    </div>
                    <div class="filter-default-list" @click="setPrice(2)">
                        <span>低价优先</span>
                        <img src="@/assets/img/yes.png" alt="" v-if="status === 2">
                    </div>
                    <div class="filter-default-list" @click="setPrice(3)">
                        <span>高价优先</span>
                        <img src="@/assets/img/yes.png" alt="" v-if="status === 3">
                    </div>
                </div>
                <div class="filter-day" v-if="isday">
                    <div class="filter-day-list">
                        <div class="day-item" :class="{active: day === 1}" @click="setDay(1)">
                            1天
                        </div>
                        <div class="day-item" :class="{active: day === 2}" @click="setDay(2)">
                            2天
                        </div>
                        <div class="day-item" :class="{active: day === 3}" @click="setDay(3)">
                            3天
                        </div>
                        <div class="day-item" :class="{active: day === 4}" @click="setDay(4)">
                            4-7天
                        </div>
                        <div class="day-item" :class="{active: day === 5}" @click="setDay(5)">
                            7天以上
                        </div>
                    </div>
                    <div class="button">
                        <div class="button-reset" @click="setDay(0)">
                            重置
                        </div>
                        <div class="button-complete" @click="complete()">
                            完成
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="results-container" v-if="resultsList">
            <div class="tour-list" v-for="(item,index) in resultsList" :key="index"  @click="toDetails(item.id)">
                <div class="tour-list-image">
                    <img src="@/assets/img/tour.jpg" alt="">
                </div>
                <div class="tour-list-desc">
                    <div class="desc-title">【下班儿去哪-夜爬】4.3夜爬香山  仰头赏弯月 群星璀璨，低头览帝都 灯火阑珊，月朗繁星下 来一场邂逅之旅（2019夜爬第5期）</div>
                    <div class="desc-type">
                        <div class="type-time">1天</div>
                        <div class="type-time">北京出发</div>
                    </div>
                    <div class="desc-price">
                        <div class="price">
                            <span class="price-fh">&yen;</span>
                            <span class="price-jg">3888</span>
                            <span class="price-dw">起</span>
                        </div>
                        <div class="num">408人已报名</div>
                    </div>
                </div>
            </div>
        </div>
        <transition name="loading">
            <Loading v-show="loading"></Loading>
        </transition>
        <Top v-show="istop"></Top>
    </div>
</template>
<script>
import Loading from '../../../components/loading.vue'
import Top from '../../../components/top.vue'
export default {
    data() {
        return {
            inputVal: "",
            searchHistory: [],         //搜索存储
            resultsList: [],//请求结果列表
            isShow: false,
            isDefault: true,
            isday: false,
            status: 1,
            day: 0,
            istop: false,
            loading: false
        }
    },
    components:{
        Top,
        Loading
    },
    created(){
        
    },
    methods: {
        //获取localStorage
        getStore(name) {
            if (!name) return;
            return window.localStorage.getItem(name);
        },
        //存储localStorage
        setStore(name, content) {
            if (!name) return;
            if (typeof content !== 'string') {
                content = JSON.stringify(content);
            }
            window.localStorage.setItem(name, content);
        },
        //点击搜索按钮
        search() {
            console.log(this.inputVal);
            if(this.inputVal == "") return;
            //获取localStorage
            let history = this.getStore('historyData');
            //如果localStorage中存在historyData
            if (history) { 
                //设置锁
                let checkrepeat = false;
                this.searchHistory = JSON.parse(history);
                //遍历searchHistory判断当前搜索词是否已经存在
                this.searchHistory.forEach(item => {
                    //如果存在，不在更改searchHistory,避免出现重复
                    if (item == this.inputVal) {
                        checkrepeat = true;
                    }
                })
                //如果不存在,把当前搜索词push到searchHistory
                if (!checkrepeat) {
                    this.searchHistory.push(this.inputVal);
                }
            }else {
                this.searchHistory.push(this.inputVal);
            }
            //设置localStorage,或者更新localStorage
            this.setStore('historyData',this.searchHistory);
            this.$router.push({path: '/search/results',query:{keyword:this.inputVal}});
            //发送请求
            this.send(this.inputVal)
            // this.more(this.inputVal);
        },
        // more(val){
        //     this.loading = true;
        //     let that = this;
        //     //模拟加载特效
        //     setTimeout(function(){
        //         that.resultsList = [{id:1111},{id:2222},{id:3333},{id:4444},{id:5555},{id:6666},{id:7777},{id:8888}];
        //         that.loading = false;
        //     },2000)
        // },
        //await后面的函数要返回promise对象才行，其他类型无效
        async send(val){
            console.log(1);
            this.loading = true;
            let that = this;
            await this.getList(val).then(function(){
                that.resultsList = [{id:1111},{id:2222},{id:3333},{id:4444},{id:5555},{id:6666},{id:7777},{id:8888}];
            })
            console.log(2);
            this.loading = false
        },
        getList(val) {
            return new Promise(function (resolve, reject) {
                //在这里发送请求,把结果用resolve抛出去,resolve(res.data)
                setTimeout(function () {
                    resolve();
                }, 2000);
                if(val === ""){
                    reject();
                }
            });
        },
        //默认排序按钮
        sort() {
            this.isShow = !this.isShow;
            this.isDefault = true;
            this.isday = false;
        },
        //行程天数按钮
        dayNum() {
            this.isShow = !this.isShow;
            this.isDefault = false;
            this.isday = true;
        },
        //价格类型过滤
        setPrice(num) {
            this.status = num;
            this.isShow = !this.isShow;
        },
        //天数过滤
        setDay(num) {
            this.day = num;
        },
        //完成按钮
        complete() {
            this.isShow = !this.isShow;
        },
        //跳转详情页
        toDetails(id) {
            this.$router.push({
                path: '/details',
                query: {
                    id: id
                }
            });
        },
        //置顶
        handleScroll() {
            // console.log(document.body.clientHeight);
            // console.log(document.body.offsetHeight);
            // console.log(window.scrollY)
            // console.log(window.innerHeight)
            if(document.body.clientHeight === (window.scrollY + window.innerHeight - 96)){
                console.log("滚动到底部")
            }
            if(window.scrollY > 1000){
                this.istop = true;
            }else{
                this.istop = false;
            }
            console.log("--")
        }
    },
    activated(){
        console.log(this.$route.query.keyword);
        this.inputVal = this.$route.query.keyword;
        this.resultsList = [];
        // this.more(this.inputVal);
        this.send(this.inputVal);
        window.addEventListener('scroll', this.handleScroll)
    },
    deactivated() {
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="scss" scoped>
.results{
    .results-header{
        position: fixed;
        z-index: 999;
        top: 0;
        right: 0;
        left: 0;
        width: 100%;
        background: #f7f7f7;
        .back{
            position: absolute;
            left: .6rem;
            top: .8rem;
            .iconfont{
                font-size: 1.4rem;
            }
        }
        .input{
            width: 18rem;
            height: 2.8125rem;
            margin: 0 auto;
            display: flex;
            align-items: center;
            .inputBox{
                display: inline-block;
                width: 85%;
                padding: .3rem .6rem;
                height: 2rem;
                vertical-align: middle;
                font-size: 1rem;
                color: #333;
                border: none;
                outline: none;
                -webkit-appearance: none;
            }
            .search-icon{
                width: 13%;
                height: 2rem;
                text-align: center;
                background-color: #fff;
                line-height: 2rem;
            }
        }
        .home{
            position: absolute;
            right: .6rem;
            top: .1rem;
            height: 2.8125rem;
            line-height: 2.8125rem;
            .iconfont{
                font-size: 1.7rem;
            }
        }
        .filter-container{
            display:flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            height: 2.5rem;
            box-shadow: 0 .3rem .2rem 0 #eee;
            background-color: #fff;
            position: relative;
            z-index: 1000;
            top: -1px;
            .box{
                color: #888;
                font-size: .9rem;
                .iconfont{
                    display: inline-block;
                    position: relative;
                    top: .1rem;
                }
            }
            .active{
                color: #fbc000;
                .icon{
                    top: -.1rem;
                    transform: rotate(180deg);
                }
            }
        }
        .filter-all{
            position: fixed;
            z-index: 999;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,.5);
            .filter-default{
                background-color: #fff;
                .filter-default-list{
                    padding: 0 1rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 2.9rem;
                    border-bottom: 1px solid #eee;
                    span{
                        font-size: .9rem;
                    }
                    img{
                        display: block;
                        width: 1.5rem;
                        height: 1.5rem;
                    }
                }
            }
            .filter-day{
                background-color: #fff;
                .filter-day-list{
                    padding:1rem .8rem;
                    .day-item{
                        display: inline-block;
                        width: 6.6rem;
                        height: 2.3rem;
                        line-height: 2.3rem;
                        text-align: center;
                        font-size: .9rem;
                        color: #353535;
                        background: #f4f4f4;
                        border-radius: .3rem;
                        margin: .3rem;
                    }
                    .active{
                        background: #fff7d1!important;
                        box-shadow: 0 0 0 1px #fed61a;
                    }
                }
                .button{
                    color: #000;
                    font-size: .9rem;
                    text-align: center;
                    height: 2.75rem;
                    line-height: 2.75rem;
                    .button-reset{
                        width: 40%;
                        display: inline-block;
                        background: #fffbe8;
                    }
                    .button-complete{
                        width: 60%;
                        display: inline-block;
                        background: #fed61a;
                    }
                }
            }
        }
    }
    .results-container{
        position: relative;
        top: 6rem;
        .tour-list{
            padding: .625rem;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #eee;
            .tour-list-image{
                margin-right: .5rem;
                img{
                    display: block;
                    width: 8rem;
                }
            }
            .tour-list-desc{
                .desc-title{
                    color: #353535;
                    font-weight: 700;
                    font-size: .9rem;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                }
                .desc-type{
                    .type-time{
                        margin-right: .3rem;
                        display: inline-block;
                        font-size: .9rem;
                        color: #ff7100;
                        background: #fff6c6;
                        padding: .1rem .3rem;
                    }
                }
                .desc-price{
                    display: flex;
                    justify-content: space-between;
                    margin-top: .3rem;
                    .price{
                        color: #ff7100;
                        margin-left: .2rem;
                        .price-jg{
                            font-size: .9rem;
                            font-weight: bolder;
                            margin: 0 .2rem;
                        }
                        .price-dw{
                            font-size: .9rem;
                            color: #888;
                        }
                    }
                    .num{
                        color: #888;
                        font-size: .8rem;
                    }
                }
            }
        }
    }
    
}
</style>
