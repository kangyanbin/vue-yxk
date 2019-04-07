<template>
  <div class="details">
    <Header :title='title'></Header>
    <Sile :product='product'></Sile>
    <div class="m-title">
      <div class="pname">
        {{ product.product_name }}
      </div>
      <div class="sname">
        {{ product.sub_name }}
      </div>
    </div>
    <div class="price">
      <div class="price-content">
        &yen;<span>{{ product.adultprice }}</span>起
        <b>成人</b>
      </div>
      <div class="price-content">
        &yen;<span>{{ product.childprice }}</span>起
        <b>儿童</b>
      </div>
    </div>
    <div class="location">
      <img src="../../assets/img/ditu.png" alt="">
      出发地：{{ product.province + product.city }}
    </div>
    <div class="offer">
      <div class="offer-list">
        <div class="tag">立减</div>
        <!-- <span v-html="discount.title"></span> -->
        <span v-if='newdiscount'>{{ newdiscount["discounts"].title }}</span>
        <i>></i>
      </div>
      <div class="offer-list">
        <div class="tag">送券</div>
        <!-- <span v-html="register.title"></span> -->
        <span v-if='newdiscount'>{{ newdiscount["register"].title }}</span>
      </div>
    </div>
    <div class="feature">
      <div class="feature-list" v-for="(item,index) in liangdian" :key="index">{{ item }}</div>
      <!-- <div class="feature-list">深度桂林</div>
      <div class="feature-list">深度桂林深度</div>
      <div class="feature-list">深度桂林</div>
      <div class="feature-list">深度桂林</div> -->
    </div>
    <div class="package">
      <div class="package-head">
        <span>选择套餐类型/日期</span>
        <img src="@/assets/img/package.png" alt="">
      </div>
      <div class="package-box">
        <!-- <swiper :options="swiperOption" class="tabs-content">
            <swiper-slide v-for='item in tabList' :key='item.id'>
                <img :src="item.imgUrl" alt="">
                <p>{{ item.title }}</p>
            </swiper-slide>
        </swiper> -->
        <swiper :options="swiperOption" class="scroller">
            <swiper-slide v-for="(item,index) in batches_list" :key="index">
                <div class="scroll-list">
                  <div class="scroll-date">{{ item.dateline }}</div> 
                  <div class="scroll-title">默认套餐</div> 
                  <div class="scroll-price">&yen;{{ item.price }}</div>
                </div>
            </swiper-slide>
            <!-- <swiper-slide>
                <div class="scroll-list">
                  <div class="scroll-date">02-28(周四)</div> 
                  <div class="scroll-title">默认套餐</div> 
                  <div class="scroll-price">&yen;1190</div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="scroll-list">
                  <div class="scroll-date">02-28(周四)</div> 
                  <div class="scroll-title">默认套餐</div> 
                  <div class="scroll-price">&yen;1190</div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="scroll-list">
                  <div class="scroll-date">02-28(周四)</div> 
                  <div class="scroll-title">默认套餐</div> 
                  <div class="scroll-price">&yen;1190</div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="scroll-list">
                  <div class="scroll-date">02-28(周四)</div> 
                  <div class="scroll-title">默认套餐</div> 
                  <div class="scroll-price">&yen;1190</div>
                </div>
            </swiper-slide> -->
        </swiper>
      </div>
    </div>
    <div class="detail-box">
      <div class="box-header">
        <span class="i"></span>
        <span class="line">详情信息</span>
        <span class="i"></span>
      </div>
      <div class="box-container">
        <img src="@/assets/img/detail1.jpg" alt="">
        <img src="@/assets/img/detail2.jpg" alt="">
        <img src="@/assets/img/detail3.jpg" alt="">
        <img src="@/assets/img/detail4.jpg" alt="">
        <img src="@/assets/img/detail5.jpg" alt="">
        <img src="@/assets/img/detail6.jpg" alt="">
        <div class="box-desc">
          <div class="title"><strong>活动说明</strong></div>
          <div class="context">
            <p><strong>【集合时间】</strong>行程第一天全天集合</p>
            <p><strong>【集合地点】</strong>银川城区酒店（活动出发前3天短信通知）</p>
            <p><strong>【交通工具】</strong>正规空调旅游用车</p>
            <p><strong>【适合人群】</strong>6-65周岁以内身体健康的户外爱好</p>
            <p><strong>【活动强度】</strong>★★★☆（七星最高，三星为中等强度）</p>
            <p><strong>【活动领队】</strong>游侠客资深户外领队（出发前3天发出团通知）</p>
            <p><strong>【通讯频率】</strong>手台频率400 • 500（拥有手台游侠可自行携带）</p>
            <p><strong>【温馨提示】</strong>此条线路为户外徒步线路，建议精简行李使用专业户外背包。游侠客免费提供双人帐篷（2人/顶），介意与他人混合帐篷的亲可以自备或者下单时备注单住帐篷，差价为100元</p>
            <p><strong><span style="color: rgb(255, 0, 0);">【成团须知】</span></strong><span style="color: rgb(255, 0, 0);">若订单报名状态为“已通过”，代表此批次已经成行，支付活动费用成功后即可预定大交通，如因游侠客原因不能成行，游侠客将承担已缴费队员机票退票损失（需提供官方损失凭）</span></p>
          </div>
        </div>
      </div>
    </div>
    <Foot :id='id'></Foot>
  </div>
</template>
<script>
import Header from '../../components/header.vue'
import Sile from './children/sile.vue'
import Foot from './children/foot.vue'
export default {
    data() {
      return {
        title: "活动详情",
        id: this.$route.query.id,
        product: [],
        // discount: {},
        newdiscount: null,
        // register: {},
        liangdian: [],
        batches_list: [],
        swiperOption: {
          slidesPerView : 2.55
        }
      }
    },
    created(){
        console.log(this.$route.query.id)
    },
    components: {
      Header,
      Sile,
      Foot
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        this.axios.get('http://localhost:8080/api/details.json').then((res)=>{
          this.product = res.data.data.product;
          this.newdiscount = res.data.data.discount;
          // this.discount = res.data.data.discount.discounts;
          // this.register = res.data.data.discount.register;
          this.liangdian = res.data.data.liangdian;
          this.batches_list = res.data.data.batches_list;
          // console.log(res.data.data.product)
          // console.log(this.newdiscount.discounts.title)
        })
      },
      // menu() {
      //   window.scrollTo(0,0);
      // }
    },
    activated() {
      // this.menu();
    }
}
</script>

<style lang="scss" scoped>
.details{
  background: #f5f5f5;
  margin-bottom: 3.75rem;
  .m-title{
      padding: .625rem .9375rem;
      background: #fff;
      .pname{
        font-size: 1rem;
        line-height: 1.3;
        font-weight: 700;
        color: #333;
      }
      .sname{
        color: #666;
        line-height: 1.2rem;
        font-size: .85rem;
        margin-top: .3rem;
      }
  }
  .price{
    padding: 0 .9375rem .625rem .9375rem;
    display: flex;
    align-items: baseline;
    background: #fff;
    .price-content{
      width: 9rem;
      color: #ff7100;
      span{
        font-size: 1.3rem;
        font-weight: 700;
      }
      b{
        border: 1px solid #ff7100;
        height: 0.9375rem;
        width: 1.7rem;
        padding: .02rem;
        border-radius: .3rem;
        font-weight: 500;
        font-size: .8rem;
        margin-left: .2rem;
      }
    }
  }
  .location{
    padding-left: 2rem;
    height: 2.375rem;
    line-height: 2.375rem;
    font-size: .85rem;
    color: #333;
    position: relative;
    background: #fff;
    img{
      position: absolute;
      left: .95rem;
      top: .7rem;
      width: .6rem;
      height: .8rem;
    }
  }
  .offer{
    margin-top: .6rem;
    padding: .625rem;
    padding-left: .9rem;
    background: #fff;
    .offer-list{
      display: flex;
      margin-bottom: .7rem;
      position: relative;
      .tag{
        padding: .05rem;
        color: #ff7100;
        border: 1px solid #ff7100;
        margin-right: .6rem;
      }
      span{
        display: block;
        height: 1.0625rem;
        line-height: 1.0625rem;
      }
      i{
        position: absolute;
        right: 0;
        color: #ff7100;
        font-weight: 700;
        font-size: 1rem;
      }
    }
  }
  .feature{
    position: relative;
    padding-left: .8rem;
    background: #fff;
    .feature-list{
      display: inline-block;
      padding: .3rem;
      margin-right: .7rem;
      margin-bottom: .7rem;
      border: 1px dashed #26b964;
      color: #26b964;
    }
  }
  .feature:before {
      content: "";
      position: absolute;
      left: .8rem;
      top: -.7rem;
      width: 95%;
      height: 1px;
      background: #eee;
  }
  .package{
    margin-top: .5rem;
    background: #fff;
    .package-head{
      width: 100%;
      height: 2.28125rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      span{
        margin-left: 1.5rem;
      }
      img{
        margin-right: 1rem;
        width: 4.46875rem;
        height: .96875rem;
      }
    }
    .package-head:before {
      content: "";
      position: absolute;
      left: .75rem;
      top: .6rem;
      width: .3rem;
      height: .9rem;
      border-radius: .5rem;
      border: 1px solid #444;
      background: #fed101;
    }
    .package-box{
      height: 4.4375rem;
      .scroller{
        .scroll-list{
          width: 7.4375rem;
          height: 3.8125rem;
          margin: 0 auto;
          border: 1px solid #ebebeb;
          border-radius: .3rem;
          padding-top: .5rem;
          box-sizing: border-box;
          div{
            text-align: center;
            line-height: 1rem;
          }
          .scroll-price{
            color: #ff7100;
          }
          .scroll-title{
            color: #888;
          }
        }
      }
    }
  }
  .detail-box{
    .box-header{
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
        width: 7rem;
        height: .07rem;
        background: rgb(141, 133, 133);
      }
    }
    .box-container{
      font-size: 0;
      img{
        width: 100%;
        height: auto;
      }
      .box-desc{
        padding: 0 .6rem;
        font-size: 1rem;
        .title{
          box-sizing: border-box;
          padding-left: .8rem;
          position: relative;
          width: 100%;
          height: 2.5rem;
          line-height: 2.5rem;
          border-bottom: 1px solid #eee;
          margin-bottom: .6rem;
        }
        .title::before{
          content: '';
          position: absolute;
          top: .9rem;
          left: -4px;
          display: block;
          width: 10px;
          height: 10px;
          background: yellow;
        }
        .context{
          font-size: .9rem;
        }
      }
    }
  }
}
</style>
