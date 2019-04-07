<template>
    <div class="strategy">
        <div class="strategy-top">
            游玩攻略
            <router-link to="">
                <div class="strategy-more">更多<i class="iconfont">&#xe6c7;</i></div>
            </router-link>
        </div>
        <div class="strategy-bottom">
            <ul v-if="news" class="strategy-list">
                <li  v-for="(item,index) in news.list" :key="index">
                    <div class="strategy-item">
                        <div class="strategy-left">
                            <p>{{ item.title }}</p>
                            <div class="left-info">
                                <span class="browse-num"><i class="iconfont">&#xe73f;</i>{{ ((item.view) > 10000) ? ((item.view)/10000).toFixed(2)+"万" : item.view}}</span>
                                <span class="collection-num"><i class="iconfont">&#xe60f;</i>{{ item.likes }}</span>
                            </div>
                        </div>
                        <div class="strategy-right">
                            <!-- <img :src="item.thumb" alt=""> -->
                            <img src="@/assets/img/strategy.jpg" alt="">
                        </div>
                    </div>
                </li>
                <!-- <li>
                    <div class="strategy-item">
                        <div class="strategy-left">
                            <p>故宫旅游指南，逛89遍紫禁城才能发现的绝佳赏花线路</p>
                            <div class="left-info">
                                <span class="browse-num"><i class="iconfont">&#xe73f;</i>8946</span>
                                <span class="collection-num"><i class="iconfont">&#xe60f;</i>4</span>
                            </div>
                        </div>
                        <div class="strategy-right">
                            <img src="@/assets/img/strategy.jpg" alt="">
                        </div>
                    </div>
                </li>
                <li>
                    <div class="strategy-item">
                        <div class="strategy-left">
                            <p>故宫旅游指南，逛89遍紫禁城才能发现的绝佳赏花线路</p>
                            <div class="left-info">
                                <span class="browse-num"><i class="iconfont">&#xe73f;</i>8946</span>
                                <span class="collection-num"><i class="iconfont">&#xe60f;</i>4</span>
                            </div>
                        </div>
                        <div class="strategy-right">
                            <img src="@/assets/img/strategy.jpg" alt="">
                        </div>
                    </div>
                </li>
                <li>
                    <div class="strategy-item">
                        <div class="strategy-left">
                            <p>故宫旅游指南，逛89遍紫禁城才能发现的绝佳赏花线路</p>
                            <div class="left-info">
                                <span class="browse-num"><i class="iconfont">&#xe73f;</i>8946</span>
                                <span class="collection-num"><i class="iconfont">&#xe60f;</i>4</span>
                            </div>
                        </div>
                        <div class="strategy-right">
                            <img src="@/assets/img/strategy.jpg" alt="">
                        </div>
                    </div>
                </li>
                <li>
                    <div class="strategy-item">
                        <div class="strategy-left">
                            <p>故宫旅游指南，逛89遍紫禁城才能发现的绝佳赏花线路</p>
                            <div class="left-info">
                                <span class="browse-num"><i class="iconfont">&#xe73f;</i>8946</span>
                                <span class="collection-num"><i class="iconfont">&#xe60f;</i>4</span>
                            </div>
                        </div>
                        <div class="strategy-right">
                            <img src="@/assets/img/strategy.jpg" alt="">
                        </div>
                    </div>
                </li> -->
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: [
        'news'
    ],
    data() {
        return {}
    }
}
</script>
<style lang="scss" scoped>
.strategy{
    width: 100%;
    background-color: #fff;
    .strategy-top {
    position: relative;
    width: 100%;
    height: 3.59375rem;
    font-weight: bolder;
    color: #353535;
    font-size: 1.2rem;
    padding-left: 0.8rem;
    box-sizing: border-box;
    line-height: 3.59375rem;
    .strategy-more {
        position: absolute;
        top: 1.2rem;
        right: 0.6rem;
        width: 3.5rem;
        font-size: 0.8rem;
        height: 1.4375rem;
        line-height: 1.4375rem;
        text-align: center;
        background-color: #ffd800;
        border-radius: 0.6rem;
    }
  }
    .strategy-top::before {
        content: "";
        position: absolute;
        left: 0;
        top: 1.25rem;
        width: 0.25rem;
        height: 1.1rem;
        background-color: #ffd800;
    }
    .strategy-bottom{
        .strategy-list{
            li{
                margin: 0 .625rem .90625rem;
                height: 5.625rem;
                border-bottom: 1px solid #efefef;
                overflow: hidden;
                .strategy-item{
                    .strategy-left{
                        float: left;
                        width: 14.375rem;
                        p{
                            font-size: .9rem;
                            height: 2.5rem;
                            line-height: 1.25rem;
                            color: #353535;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                            overflow: hidden;
                        }
                        .left-info{
                            margin-top: 1rem;
                            font-size: .8rem;
                            color: #999;
                            i{
                                margin-right: .1rem;
                            }
                            .collection-num{
                                margin-left: 1rem;
                            }
                        }
                    }
                    .strategy-right{
                        float: right;
                        overflow: hidden;
                        border-radius: .5rem;
                        img{
                            width: 6.875rem;
                            height: 4.75rem;
                        }
                    }
                }
            }
            li:last-of-type {
                margin-bottom: 0;
                border-bottom: 0;
            }
        }
    }
}
</style>
