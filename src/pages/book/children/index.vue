<template>
    <div class="index">
        <div class="head">
            <div class="back" @click="go()">
                <i class="iconfont">&#xe6bc;</i>
            </div>
            <div class="title">填写订单</div>
        </div>
        <div class="index-title">
            <div class="title-content">
                <div class="title-line">【游侠宝贝·秘境神农架夏令营】2019 亲子游学6日：野生金丝猴-蜂巢采蜜-穿越原始森林-大九湖寻鹿-制作植物标本-玩皮影-反盗猎体验</div>
                <div class="title-package">批次套餐：秘境神农架</div>
            </div>
            <div class="title-box">
                <div class="tag">
                    <span>亲子游</span>
                    <span>|跟团游</span>
                </div>
                <div class="tag">6天5晚</div>
            </div>
        </div>
        <div class="index-start">
            <div class="start-title">出行日期</div>
            <div class="start-date">2019-04-29(周一) ~ 2019-05-04(周六)</div>
        </div>
        <div class="index-people">
            <div class="people-adult">
                <div class="people-content">
                    <div class="people-name">成人</div>
                    <div class="people-price">￥3580</div>
                </div>
                <div class="addcut">
                    <div class="cut" @click="cut('adult')">-</div>
                    <div class="num">{{adultNum}}</div>
                    <div class="add" @click="add('adult')">+</div>
                </div>
            </div>
            <div class="people-child">
                <div class="people-content">
                    <div class="people-name">儿童</div>
                    <div class="people-price">￥1580</div>
                </div>
                <div class="addcut">
                    <div class="cut" @click="cut('child')">-</div>
                    <div class="num">{{childNum}}</div>
                    <div class="add" @click="add('child')">+</div>
                </div>
            </div>
        </div>
        <div class="index-man">
            <div class="man-title">
                预订人信息
                <span>(用于接收订单反馈)</span>
            </div>
            <div class="man-content">
                <div class="man-list">
                    <div class="list-name">
                        姓名
                        <span>*</span>
                    </div>
                    <input type="text" placeholder="必填,姓名" maxlength="8">
                </div>
                <div class="man-list">
                    <div class="list-name">
                        手机
                        <span>*</span>
                    </div>
                    <input type="text" placeholder="必填,手机" maxlength="11">
                </div>
            </div>
        </div>
        <div class="index-notice">
            <div class="notice-title">
                备注
            </div>
            <div class="notice-content">
                <div class="left">信息</div>
                <div class="right">
                    <textarea placeholder="男女报名如无法同住或分开报名需安排同住或同车，请备注" rows="3" cols="40" maxlength="200" class="textarea"></textarea>
                </div>
            </div>
        </div>
        <div class="bottom"></div>
        <div class="footer">
            <div class="left">
                <div class="left-top">总额： <span>&yen;{{count}}</span></div>
                <div class="left-bottom">
                    成人:
                    <span>{{adultNum}}</span>
                    儿童:
                    <span>{{childNum}}</span>
                </div>
            </div>
            <div class="right" @click="submit()">提交订单</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            adultNum: 1,
            adultPrice: 3590,
            childNum: 1,
            childPrice: 1590
        }
    },
    created() {
        
    },
    methods: {
        go() {
            this.$router.go(-2);
        },
        cut(people) {
            if(people === "adult"){
                if(this.adultNum === 1) return;
                this.adultNum--;
                return;
            }
            if(people === "child"){
                if(this.childNum === 1) return;
                this.childNum--;
                return;
            }
        },
        add(people) {
            if(people === "adult"){
                this.adultNum++;
                return;
            }
            if(people === "child"){
                this.childNum++;
                return;
            }
        },
        submit() {
            console.log(this.count+"提交成功");
        }
    },
    computed: {
        count() {
            return this.adultNum * this.adultPrice + this.childNum * this.childPrice;
        }
    }
}
</script>
<style lang="scss" scoped>
.index{
    background: #f5f5f5;
    .head{
        position: relative;
        width: 100%;
        height: 2.8125rem;
        text-align: center;
        background: #f7f7f7;
        border-bottom: 1px solid #eee;
        .back{
            position: absolute;
            left: .6rem;
            top: 0;
            line-height: 2.8125rem;
            .iconfont{
                font-size: 1.4rem;
            }
        }
        .title{
            display: inline-block;
            height: 2.8125rem;
            line-height: 2.8125rem;
            font-size: 1rem;
            color: #333;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
    .index-title{
        margin: 0 auto;
        margin-top: .7rem;
        width: 22rem;
        border-radius: .1rem;
        background: #fff;
        .title-content{
            padding: .625rem;
            font-size: .9rem;
            line-height: 1.2rem;
            .title-package{
                margin-top: .4rem;
            }
        }
        .title-box{
            width: 22rem;
            display: flex;
            align-items: center;
            height: 2.6rem;
            border-top: 1px solid #e5e5e5;
            .tag{
                height: 1.3rem;
                line-height: 1.3rem;
                padding: 0 .3rem;
                font-size: .8rem;
                margin-left: .3rem;
                border: 1px solid #fcbc00;
                border-radius: .3rem;
                color: #fcbc00;
            }
        }
    }
    .index-start{
        margin: 0 auto;
        margin-top: .7rem;
        width: 22rem;
        border-radius: .1rem;
        background: #fff;
        .start-title{
            padding-left: 1rem;
            font-size: 1rem;
            height: 2.5rem;
            line-height: 2.5rem;
        }
        .start-date{
            border-top: 1px solid #e5e5e5;
            height: 2rem;
            padding-left: 1rem;
            font-size: .8rem;
            line-height: 2rem;
        }
    }
    .index-people{
        margin: 0 auto;
        margin-top: .7rem;
        width: 22rem;
        border-radius: .1rem;
        background: #fff;
        .people-adult,.people-child{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: .9rem;
            height: 2.5rem;
            .people-content{
                display: flex;
                margin-left: 1rem;
                .people-price{
                    margin-left: 1rem;
                }
            }
            .addcut{
                display: flex;
                margin-right: 1rem;
                align-items: center;
                .cut,.add{
                    color: #fcbc00;
                    border: 1px solid #fcbc00;
                    border-radius: 50%;
                    width: 1.6rem;
                    height: 1.6rem;
                    line-height: 1.6rem;
                    text-align: center;
                    box-sizing: border-box;
                    
                }
                .num{
                    margin: 0 .5rem;
                }
            }
        }
        .people-child{
            border-top: 1px solid #e5e5e5;         
        }
    }
    .index-man{
        margin: 0 auto;
        margin-top: .7rem;
        width: 22rem;
        border-radius: .1rem;
        background: #fff;
        .man-title{
            padding-left: 1rem;
            font-size: 1rem;
            height: 2.5rem;
            line-height: 2.5rem;
            border-bottom: 1px solid #eee;
            span{
                font-size: .8rem;
            }
        }
        .man-content{
            .man-list{
                display: flex;
                width: 100%;
                height: 2.5rem;
                border-bottom: 1px solid #eee;
                align-items: center;
                .list-name{
                    margin-left: 1rem;
                    font-size: .9rem;
                    span{
                        color: #ff5454;
                    }
                }
                input{
                    width: 15.625rem;
                    margin-left: .3rem;
                    height: 1.5rem;
                    font-size: .9rem;
                    color: #333;
                    border: none;
                    outline: none;
                }
            }
        }
    }
    .index-notice{
        margin: 0 auto;
        margin-top: .7rem;
        width: 22rem;
        border-radius: .1rem;
        background: #fff;
        .notice-title{
            padding-left: 1rem;
            font-size: 1rem;
            height: 2.5rem;
            line-height: 2.5rem;
            border-bottom: 1px solid #eee;
        }
        .notice-content{
            display: flex;
            .left{
                margin-left: 1rem;
                font-size: .9rem;
            }
            .right{
                margin-left: 1rem;
                font-size: .9rem;
                .textarea{
                    font-size: .9rem;
                    border: none;
                    outline: none;
                }
            }
        }
    }
    .bottom{
        height: 1rem;
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
        .left{
            margin-left: 1rem;
            .left-top{
                font-size: 1rem;
                span{
                    color: #fed101;
                }
            }
            .left-bottom{
                font-size: .8rem;
                color: #888;
            }
        }
        .right{
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