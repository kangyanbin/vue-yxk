<template>
    <div class="tips">
        <div class="orderLists-null">
            <img src="@/assets/img/null.png" alt="">
        </div>
        <div class="orderLists-nullMsg">暂时没有订单</div>
    </div>
</template>
<style lang="scss" scoped>
.tips{
    position: fixed;
    top: 35%;
    left: 50%;
    transform:translate(-50%,-50%);
    .orderLists-null{
        img{
            display: block;
            width: 5.5625rem;
            height: 5.5625rem; 
        }
    }
    .orderLists-nullMsg{
        margin-top: 2.5rem;
        text-align: center;
        color: #bbb;
        font-size: .8rem;
    }
}
</style>

