<template>
    <div class="spike">
        <swiper :options="swiperOption">
            <!-- <swiper-slide>
                <div class="spike-top">
                    <img src="@/assets/img/spike.png" alt="">
                    <span class="blank">距离结束</span>
                    <count-down :currentTime="1550411998127" :startTime="1550400998127" :endTime="1550490084527" :dayTxt="'天'" :hourTxt="':'" :minutesTxt="':'" :secondsTxt="''">
                    </count-down>
                </div>
                <div class="spike-bottom">
                    <img src="@/assets/img/spike1.jpg" alt="" class="left">
                    <div class="bottom-title">
                        <p>[寻梅特惠·九峰山]2.23周六，江南赏梅胜地，春起梅花，冬后徒步，登顶九峰之巅，漫步在九峰山梅花林，犹如徜徉在雪海香涛中。（赏花轻徒步）</p>
                        <div class="bottom-price">
                            <span class="prices-left">￥<span>80</span></span>
                            <span class="spike-lave">仅剩50个</span>
                        </div>
                    </div>
                </div>
            </swiper-slide> -->
            <swiper-slide v-for="(item,index) in sale" :key="index">
                <div class="spike-top">
                    <img src="@/assets/img/spike.png" alt="">
                    <span class="blank">距离结束</span>
                    <count-down :currentTime="1550411998127" :startTime="1550400998127" :endTime="1550490084527" :dayTxt="'天'" :hourTxt="':'" :minutesTxt="':'" :secondsTxt="''">
                    </count-down>
                </div>
                <div class="spike-bottom">
                    <img src="@/assets/img/spike1.jpg" alt="" class="left">
                    <div class="bottom-title">
                        <p>{{ item.pname }}</p>
                        <div class="bottom-price">
                            <span class="prices-left">&yen;<span>{{ item.price }}</span></span>
                            <span class="spike-lave">仅剩{{ item.stock }}</span>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
import CountDown from 'vue2-countdown'
export default {
    components: {
        CountDown
    },
    props: [
        'sale'
    ],
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: ".swiper-pagination"
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.spike-top{
    width: 100%;
    height: 3.03125rem;
    display: flex;
    align-items: center;
    padding: 0 .5rem;
    img{
        width: 4.4375rem;
        height: .96875rem;
    }
    .blank{
        font-size: .6rem;
        color: #999;
    }
    span{
        margin-left: .5rem;
    }
    div{
        margin-left: .5rem; 
        font-size: 0.75rem;  
    }
}
.spike-bottom{
    display: flex;
    justify-content: space-between;
    padding: 0 1rem 1.5rem 1rem;
    
    img{
        width: 7.25rem;
        height: 4.96875rem;
    }
    .bottom-title{ 
        width: 13.75rem;
        p{
            line-height: 1.2rem;
            text-align: center;
            font-size: .9rem;
            color: #333;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
        }
        .bottom-price{
            margin-top: 1rem;
            display: flex;
            justify-content: space-between;
            .prices-left{
                font-size: .6rem;
                color: #ff6000;
                span{
                    font-size: 1rem;
                }
            }
            .spike-lave{
                width: 3.875rem;
                height: 1.375rem;
                line-height: 1.375rem;
                text-align: center;
                font-size: .5rem;
                color: #444;
                border: 1px solid #444;
                border-radius: .3rem;
                background: #fed101;
            }
        }
    }
    
}

</style>