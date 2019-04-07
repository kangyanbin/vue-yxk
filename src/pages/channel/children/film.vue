<template>
    <div class="film">
        <div class="film-top">
            目的地视频
            <router-link to="">
                <div class="more">更多<i class="iconfont">&#xe6c7;</i></div>
            </router-link>
        </div>
        <div class="film-box">
            <swiper v-if="film" :options="swiperOption" class="slider">
            <!-- <swiper-slide v-for="(item,index) in batches_list" :key="index">
                <div class="scroll-list">
                  <div class="scroll-date">{{ item.dateline }}</div> 
                  <div class="scroll-title">默认套餐</div> 
                  <div class="scroll-price">&yen;{{ item.price }}</div>
                </div>
            </swiper-slide> -->
            <swiper-slide v-for="(item,index) in film.list" :key="index">
                <div class="item">
                    <div class="item-top">
                        <!-- <img :src="item.thumb" alt=""> -->
                        <img src="@/assets/img/film1.png" alt="">
                        <i class="film-play"></i>
                        <span class="film-time">{{ item.duration }}</span>
                    </div>
                    <div class="item-bottom">
                        <p>{{ item.title }}</p>
                        <div class="bottom-info">
                            <span class="play-num"><i class="iconfont">&#xe768;</i> {{ ((item.view_count)/10000).toFixed(2) }}万</span>
                            <span class="comment-num"><i class="iconfont">&#xe621;</i>{{ item.comments }}</span>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <!-- <swiper-slide>
                <div class="item">
                    <div class="item-top">
                        <img src="@/assets/img/film1.png" alt="">
                        <i class="film-play"></i>
                        <span class="film-time">01′51″</span>
                    </div>
                    <div class="item-bottom">
                        <p>在路上-德吉的民宿梦</p>
                        <div class="bottom-info">
                            <span class="play-num"><i class="iconfont">&#xe768;</i> 4.00万</span>
                            <span class="comment-num"><i class="iconfont">&#xe621;</i>32</span>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="item">
                    <div class="item-top">
                        <img src="@/assets/img/film1.png" alt="">
                        <i class="film-play"></i>
                        <span class="film-time">01′51″</span>
                    </div>
                    <div class="item-bottom">
                        <p>在路上-德吉的民宿梦</p>
                        <div class="bottom-info">
                            <span class="play-num"><i class="iconfont">&#xe768;</i> 4.00万</span>
                            <span class="comment-num"><i class="iconfont">&#xe621;</i>32</span>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="item">
                    <div class="item-top">
                        <img src="@/assets/img/film1.png" alt="">
                        <i class="film-play"></i>
                        <span class="film-time">01′51″</span>
                    </div>
                    <div class="item-bottom">
                        <p>在路上-德吉的民宿梦</p>
                        <div class="bottom-info">
                            <span class="play-num"><i class="iconfont">&#xe768;</i> 4.00万</span>
                            <span class="comment-num"><i class="iconfont">&#xe621;</i>32</span>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="item">
                    <div class="item-top">
                        <img src="@/assets/img/film1.png" alt="">
                        <i class="film-play"></i>
                        <span class="film-time">01′51″</span>
                    </div>
                    <div class="item-bottom">
                        <p>在路上-德吉的民宿梦</p>
                        <div class="bottom-info">
                            <span class="play-num"><i class="iconfont">&#xe768;</i> 4.00万</span>
                            <span class="comment-num"><i class="iconfont">&#xe621;</i>32</span>
                        </div>
                    </div>
                </div>
            </swiper-slide> -->
        </swiper>
        </div>
    </div>
</template>
<script>
export default {
    props: [
        'film'
    ],
    data() {
        return {
        swiperOption: {
            slidesPerView: 2.15
        }
        };
    }
};
</script>
<style lang="scss" scoped>
.film {
  width: 100%;
  background-color: #fff;
  margin-bottom: 0.6rem;
  .film-top {
    position: relative;
    width: 100%;
    height: 3.59375rem;
    font-weight: bolder;
    color: #353535;
    font-size: 1.2rem;
    padding-left: 0.8rem;
    box-sizing: border-box;
    line-height: 3.59375rem;
    .more {
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
  .film-top::before {
    content: "";
    position: absolute;
    left: 0;
    top: 1.25rem;
    width: 0.25rem;
    height: 1.1rem;
    background-color: #ffd800;
  }
  .film-box {
      padding-bottom: 1rem;
    .slider {
        padding-left: .625rem;
      .item {
        margin-right: .625rem;
        // width: 9.90625rem;
        height: 10.59375rem;
        border: 2px solid #f7f7f7;
        .item-top{
            position: relative;
            width: 100%;
            height: 5.625rem;
            img{
                width: 100%;
                height: 100%;
            }
            .film-play{
                position: absolute;
                left: 50%;
                top: 50%;
                margin-left: -1.09375rem;
                margin-top: -1.09375rem;
                width: 2.1875rem;
                height: 2.1875rem;
                background: url('../../../assets/img/play.png') no-repeat;
                background-size: contain;
            }
            .film-time{
                position: absolute;
                right: .6rem;
                bottom: .4rem;
                font-size: .8rem;
                color: #fff;
            }
        }
        .item-bottom{
            p{
                margin: .3rem .5rem 0rem;
                height: 2.25rem;
                line-height: 1.125rem;
                font-size: .8rem;
                color: #353535;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }
            .bottom-info{
                margin-top: .78125rem;
                overflow: hidden;
                font-size: .8rem;
                color: #999;
                .play-num{
                    float: left;
                    margin-left: .8rem;
                }
                .comment-num{
                    float: right;
                    margin-right: .8rem;
                }
            }
        }
      }
    }
  }
}
</style>
