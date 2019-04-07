<template>
    <div class="travel">
        <div class="travel-top">
            主题旅游
        </div>
        <ul v-if="theme_lines" class="travel-nav">
            <li v-for="(item,index) in theme_lines.lines.theme_tag" :key="index" 
            :class="{active: second_id === item.id}" @click="getTravel(item.id)">{{ item.block_alias}}</li>
            <!-- <li :class="{active: second_id === 101}" @click="getTravel(101)">春天花事</li>
            <li :class="{active: second_id === 102}" @click="getTravel(102)">休闲游</li>
            <li :class="{active: second_id === 103}" @click="getTravel(103)">摄影游</li>
            <li :class="{active: second_id === 104}" @click="getTravel(104)">户外游</li>
            <li :class="{active: second_id === 105}" @click="getTravel(105)">亲子游</li>
            <li :class="{active: second_id === 106}" @click="getTravel(106)">瑜伽行</li>
            <li :class="{active: second_id === 107}" @click="getTravel(107)">自由行</li>
            <li :class="{active: second_id === 108}" @click="getTravel(108)">丈量地球</li>
            <li :class="{active: second_id === 109}" @click="getTravel(109)">别young</li>
            <li :class="{active: second_id === 110}" @click="getTravel(110)">民俗节日</li>
            <li :class="{active: second_id === 111}" @click="getTravel(111)">沙漠旅行</li>
            <li :class="{active: second_id === 112}" @click="getTravel(112)">草原行游</li> -->
        </ul>
        <div>
            <ul v-if="theme_lines" class="travel-list">
                <li v-for="(item,index) in theme_lines.lines.theme_lines" :key="index">
                    <div class="travel-item">
                        <div class="top">
                            <!-- <img :src="item.img" alt=""> -->
                            <img src="@/assets/img/travel.jpg" alt="">
                        </div>
                        <span class="gather">{{ item.class_theme_name ? item.class_theme_name:item.class_type_name }} | {{ item.jihe }}</span>
                        <div class="bottom">
                            <div class="title">
                                <p>{{ item.title }}</p>
                            </div>
                            <div class="price">
                                <span class="price-fh">&yen;</span>
                                <span class="price-jg">{{ item.price }}</span>
                                <span class="price-dw">起</span>
                            </div>
                            <div class="days">
                                <span>{{ item.time }}</span>
                            </div>
                        </div>
                    </div>
                </li>
                <!-- <li>
                    <div class="travel-item">
                        <div class="top">
                            <img src="@/assets/img/travel.jpg" alt="">
                        </div>
                        <span class="gather">深度游 | 婺源县城集合出发</span>
                        <div class="bottom">
                            <div class="title">
                                <p>【婺源景德镇·春季特辑】3-4月，婺源江岭篁岭，绝世双岭春色，夜宿晒秋人家，七彩瓷楼+全瓷宴，趣味集市淘宝（4天3晚，4人成行，婺源集合）</p>
                            </div>
                            <div class="price">
                                <span class="price-fh">&yen;</span>
                                <span class="price-jg">1580</span>
                                <span class="price-dw">起</span>
                            </div>
                            <div class="days">
                                <span>4天3晚</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="travel-item">
                        <div class="top">
                            <img src="@/assets/img/travel.jpg" alt="">
                        </div>
                        <span class="gather">深度游 | 婺源县城集合出发</span>
                        <div class="bottom">
                            <div class="title">
                                <p>【婺源景德镇·春季特辑】3-4月，婺源江岭篁岭，绝世双岭春色，夜宿晒秋人家，七彩瓷楼+全瓷宴，趣味集市淘宝（4天3晚，4人成行，婺源集合）</p>
                            </div>
                            <div class="price">
                                <span class="price-fh">&yen;</span>
                                <span class="price-jg">1580</span>
                                <span class="price-dw">起</span>
                            </div>
                            <div class="days">
                                <span>4天3晚</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="travel-item">
                        <div class="top">
                            <img src="@/assets/img/travel.jpg" alt="">
                        </div>
                        <span class="gather">深度游 | 婺源县城集合出发</span>
                        <div class="bottom">
                            <div class="title">
                                <p>【婺源景德镇·春季特辑】3-4月，婺源江岭篁岭，绝世双岭春色，夜宿晒秋人家，七彩瓷楼+全瓷宴，趣味集市淘宝（4天3晚，4人成行，婺源集合）</p>
                            </div>
                            <div class="price">
                                <span class="price-fh">&yen;</span>
                                <span class="price-jg">1580</span>
                                <span class="price-dw">起</span>
                            </div>
                            <div class="days">
                                <span>4天3晚</span>
                            </div>
                        </div>
                    </div>
                </li> -->
            </ul>
            <div class="more">
                <div>更多活动<i class="iconfont">&#xe6c7;</i></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: [
        'theme_lines'
    ],
    data() {
        return {
            second_id: 436
        }
    },
    methods: {
        getTravel(second_id) {
            console.log(second_id)
            this.second_id = second_id;
        }
    }
};
</script>
<style lang="scss" scoped>
.travel {
  width: 100%;
  background-color: #fff;
  margin-bottom: .6rem;
  .travel-top {
    position: relative;
    width: 100%;
    height: 3.59375rem;
    font-weight: bolder;
    color: #353535;
    font-size: 1.2rem;
    box-sizing: border-box;
    padding-left: .8rem;
    line-height: 3.59375rem;
  }
  .travel-top::before {
    content: "";
    position: absolute;
    left: 0;
    top: 1.25rem;
    width: .25rem;
    height: 1.1rem;
    background-color: #ffd800;
  }
  .travel-nav{
    margin-bottom: .1rem;
    width: 100%;
    overflow: hidden;
    li{
        display: inline-block;
        color: #999;
        background-color: #f3f3f3;
        margin: 0 0 .625rem .625rem;
        width: 5.0625rem;
        height: 1.875rem;
        line-height: 1.875rem;
        text-align: center;
        font-size: 1rem;
        font-weight: 700;
    }
    .active{
        color: #333;
        background-color: #fee880;
    }
  }
    .travel-list{
        margin:  0 .625rem;
        overflow: hidden;
        li{
            margin-right: .625rem;
            float: left;
            width: 10.78125rem;
            height: 11.25rem;
            .travel-item{
                position: relative;
                .top{
                    img{
                        width: 10.78125rem;
                        height: 6.0625rem;
                        display: block;
                    }
                }
                .gather{
                    position: absolute;
                    left: 0;
                    top: .3rem;
                    padding: .3rem;
                    color: #fff;
                    background-color: rgba(0,0,0,.68);
                    border-top-right-radius: .65rem;
                    border-bottom-right-radius: .65rem;
                }
                .bottom{
                    .title{
                        p{
                            width: 10.78125rem;
                            height: 2.1875rem;
                            font-size: .9375rem;
                            padding-top: .3rem;
                            color: #353535;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                            overflow: hidden;
                        }
                        margin-bottom: .8125rem;
                    }
                    .price{
                        float: left;
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
                    .days{
                        font-size: .8125rem;
                        color: #888;
                        float: right;
                    }
                }

            }
        }
        li:nth-of-type(2n) {
            margin-right: 0;
        }
    }
    .more{
            width: 100%;
            padding-top: .6rem;
            padding-bottom: 1rem;
            margin-top: .2rem;
            div{
                margin: 0 auto;
                text-align: center;
                width: 7.5rem;
                height: 1.875rem;
                line-height: 1.875rem;
                font-size: 1rem;
                color: #333;
                background-color: #ffd800;
                border-radius: .9rem;
                position: relative;
                i{
                    font-size: 1rem;
                    font-weight: 700;
                }
            }
        }

}
</style>

