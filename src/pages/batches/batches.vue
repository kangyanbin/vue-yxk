<template>
    <div class="batches">
        <Header :title='title' :show='false'></Header>
        <div class="package">
            <div class="package-head">
                选择批次套餐
            </div>
            <div class="package-list">
                <div class="item" v-for="(item,index) in this.package" :key="index"
                 :class="{active: pkgActive === item.pkgid}" @click="setPkg(item.pkgid)" >{{ item.title }}</div>
                <!-- <div class="item" :class="{active: pkgActive === 1}" @click="setPkg(1)">徽商环游记</div>
                <div class="item" :class="{active: pkgActive === 2}" @click="setPkg(2)">北京环游记</div> -->
            </div>
        </div>
        <div class="date-price">
            <div class="date-head">
                选择日期
            </div>
            <div class="price-list">
                <!-- <div class="item active">
                    <div>04-05</div>
                    <div class="price">&yen;490</div>
                </div>
                <div class="item">
                    <div>04-06</div>
                    <div class="price">&yen;490</div>
                </div> -->
                <div class="item" v-for="(item,index) in this.date[this.pkgActive]" :key="index"
                 :class="{active: dateActive === item.dateId}" @click="setDate($event,item.dateId)">
                    <div>{{ item.dateTime }}</div>
                    <div class="price">&yen;{{ item.datePrice }}</div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="footer-people">
                <div class="footer-man" v-show="manPrice">
                    成人:
                    <span>{{ manPrice }}</span>
                </div>
                <div class="footer-man" v-show="manPrice">
                    儿童:
                    <span>{{ manPrice }}</span>
                </div>
            </div>
            <div class="footer-buy" @click="toBuy()">立即购买</div>
        </div>
    </div>
</template>
<script>
import Header from '../../components/header.vue'
export default {
    data() {
        return {
            title: "选择套餐/日期",
            pkgActive: 1111,               //选中的套餐id
            dateActive: "",                //选中的日期id
            manPrice: "",                  //选中的价钱
            detailId: this.$route.query.id,//详情页id
            pkgid: 1111,                   //套餐id
            dateId: "",                    ////选中的日期id
            package: [{
                pkgid: 1111,
                title: "徽商环游记",
            },{
                pkgid: 2222,
                title: "北京环游记",
            }],
            date: {
                "1111": [
                    {
                        dateId: 1001,
                        dateTime: "04-05",
                        datePrice: "490"
                    },
                    {
                        dateId: 1002,
                        dateTime: "04-06",
                        datePrice: "488"
                    }
                ],
                "2222": [
                    {
                        dateId: 2001,
                        dateTime: "04-07",
                        datePrice: "490"
                    },
                    {
                        dateId: 2002,
                        dateTime: "04-08",
                        datePrice: "490"
                    }
                ]
            }
        }
    },
    components: {
        Header
    },
    methods: {
        //点击套餐
        setPkg(id) {
            this.pkgid = id;
            this.pkgActive = id;
            this.manPrice = "";
            this.dateActive = "";
        },
        //点击日期
        setDate(e,dateId) {
            if(this.dateActive === dateId){
                this.manPrice = "";
                this.dateActive = "";
                return;
            }
            this.manPrice = e.currentTarget.lastElementChild.innerText;
            // console.log(e.currentTarget.lastElementChild.innerText);
            // console.log(pkgid)
            this.dateActive = dateId;
            this.dateId = dateId;
        },
        //点击购买
        toBuy() {
            if(this.dateActive === ""){
                console.log("请选择日期");
            }else{
                this.$router.push({
                    path: '/book',
                    query: {
                        id: this.detailId,
                        pkgid: this.pkgid,
                        dateId: this.dateId

                    }
                });
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.batches{
    .package{
        font-size: 1rem;
        padding-left: 1rem;
        .package-head{
            font-weight: 700;
            height: 2rem;
            line-height: 2rem;
        }
        .package-list{
            .item{
                display: inline-block;
                border: 1px solid #bbb;
                margin: 0 .65rem .65rem 0;
                padding: .6rem;
                border-radius: .3rem;
            }
            .active{
                color: #333;
                border-color: #fed101;
                background: #fff5c5
            }
        }
    }
    .date-price{
        font-size: 1rem;
        padding-left: 1rem;
        .date-head{
            font-weight: 700;
            height: 2rem;
            line-height: 2rem;
        }
        .price-list{
            .item{
                display: inline-block;
                border: 1px solid #bbb;
                margin: 0 .65rem .65rem 0;
                padding: .6rem;
                border-radius: .3rem;
                .price{
                    margin-top: .2rem;
                    color: blue;
                }
            }
            .active{
                color: #333;
                border-color: #fed101;
                background: #fff5c5
            }
        }
    }
    .footer{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #eee;
        background: #fff;
        z-index: 999;
        height: 3rem;
        align-items: center;
        .footer-people{
            margin-left: 1rem;
            font-size: .9rem;
            .footer-man{
                color: #888;
                line-height: 1rem;
                span{
                    color: #fed101;
                }
            }
        }
        .footer-buy{
            margin-right: .8rem;
            width: 8rem;
            height: 2.5rem;
            line-height: 2.5rem;
            text-align: center;
            font-size: 1rem;
            color: #333;
            border-radius: .3rem;
            background: #fed101;
        }
    }
}
</style>
