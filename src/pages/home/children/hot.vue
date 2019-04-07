<template>
    <div class="hot-line">
        <div class="hot-header">
            <span class="i"></span>
            <span class="line">热门目的地推荐</span>
            <span class="i"></span>
        </div>
        <div class="hot-body">
            <a href="#" class="hot-content" v-for="(item,index) in list" :key="index">
                <div class="content-top">
                    <img src="@/assets/img/hot1.jpg" alt="">
                    <div class="top-type">跟团游 | 南京出发</div>
                    <div class="top-box">
                        <div class="price">&yen;620起</div>
                        <div class="day">4天</div>
                    </div>
                </div>
                <div class="content-bottom">
                    <div class="bottom-title">
                        [春行江苏-百花开]3-4月每批确定成型 扬州瘦西湖-个园-兴化油菜花-李中水上森林-鼋头渚樱花-乌镇，赏千秋粉黛，提前入园享鼋头渚樱花，一晚五星酒店（4日/5日，赏花休闲游，高铁集散，不走回头路）
                    </div>
                    <div class="bottom-desc">
                        <span>深度游</span>
                        &lt;烟花三月下江南&gt;赏瘦西湖百花，兴化油菜花，鼋头渚樱花雨，绝佳春色，强烈推荐
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: ["1","1","1","1","1","1"]
        }
    }
}
</script>
<style lang="scss" scoped>
.hot-line{
    margin-bottom: 3.75rem;
    .hot-header{
        width: 100%;
        height: 2.3125rem;
        display: flex;
        align-items: center;
        justify-content: center;
        .line{
            margin: 0 .5rem;
            font-size: 1rem;
            color: #fdc522;
        }
        .i{
            display: inline-block;
            width: 6rem;
            height: .07rem;
            background: #ededed;
        }
    }
    .hot-body{
        .hot-content{
            .content-top{
                position: relative;
                img{
                    display: block;
                    width: 100%;
                    height: 11.25rem;
                }
                .top-type{
                    position: absolute;
                    left: .7rem;
                    top: .6rem;
                    z-index: 100;
                    padding: 0 .5rem;
                    height: 1.25rem;
                    line-height: 1.25rem;
                    color: #fff;
                    border-radius: .6rem;
                    background: rgba(0,0,0,.4);
                }
                .top-box{
                    position: absolute;
                    right: .5rem;
                    bottom: .4rem;
                    // width: 4.375rem;
                    // height: 2.25rem;
                    text-align: center;
                    .price{
                        padding: .2rem .3rem;
                        color: #fff;
                        background: #ffc31a;
                    }
                    .day{
                        padding: .1rem .3rem;
                        color: #ffc112;
                        background: #fff;
                    }
                }
            }
            .content-bottom{
                height: 3.875rem;
                padding: 0 .5rem;
                div{
                    line-height: 1.6rem;
                    font-size: .85rem;
                    color: #000;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                .bottom-title{
                    padding-top: .3rem;
                }
                .bottom-desc{
                    color: #b4b4b4;
                    span{
                        height: 1rem;
                        padding: 0 .2rem;
                        line-height: normal;
                        display: inline-block;
                        color: #fff;
                        background: #f68b6e;
                    }
                }
            }
        }
    }
}
</style>
