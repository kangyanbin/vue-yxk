<template>
    <div class="search">
        <div class="search-header">
            <router-link to="/home">
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
        </div>
        <div class="history-search">
            <div class="history-title">
                <div class="left">历史搜索</div>
                <div class="right" @click="removeHistory()">清空记录</div>
            </div>
            <div class="history-list">
                <span v-for="(item,index) in searchHistory" :key="index" @click="search(item)">{{ item }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            inputVal: "",
            //searchHistory: ["土耳其","北京深度游","土耳其","北京深度游","土耳其","北京深度游"]
            searchHistory: []
        }
    },
    mounted() {
        if (this.getStore("historyData")) {
            this.searchHistory = JSON.parse(this.getStore("historyData"));
        }
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
        //删除localStorage
        removeStore(name) {
            if (!name) return;
            window.localStorage.removeItem(name);
        },
        //点击搜索按钮
        search(val) {
            //判断是否有参数传过来
            this.inputVal = val||this.inputVal;
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
            //路由跳转
            this.$router.push({path: '/search/results',query:{keyword:this.inputVal}});
            this.inputVal = "";
        },
        //删除历史记录
        removeHistory() {
            this.searchHistory = [];
            this.setStore('historyData',this.searchHistory);
        }
    }
}
</script>

<style lang="scss" scoped>
.search{
    .search-header{
        position: relative;
        width: 100%;
        height: 2.8125rem;
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
    }
    .history-search{
        padding: 0 1rem;
        .history-title{
            margin-top: 1rem;
            display: flex;
            justify-content: space-between;
            .left{
                font-size: .8rem;
            }
            .right{
                color: #ff7100;
                font-size: .8rem;
            }
        }
        .history-list{
            margin-top: 1rem;
            span{
                display: inline-block;
                height: 1.75rem;
                line-height: 1.75rem;
                background: #f5f5f5;
                font-size: .8rem;
                padding: 0 .6rem;
                margin: .3rem;
                border-radius: .6rem;
            }
        }
    }
}

</style>