<template>
    <div class="loding">
        <div class="container"></div>
        <div class="svg">
            <img src="@/assets/img/loding.svg" alt="">
            <div class="text">正在加载中...</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.loding{
    .container{
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .svg{
        position: fixed;
        width: 8rem;
        height: 7.3rem;
        z-index: 5000;
        margin-left: -4rem;
        top: 30%;
        left: 50%;
        background: hsla(0,0%,7%,.7);
        border-radius: .5rem;
        img{
            width: 50px;
            height: 50px;
            margin: 1rem auto;
            display: block;
            animation: weuiLoading 1s steps(12) infinite;
        }
        .text{
            text-align: center;
            font-size: 1rem;
            margin-top: 1rem;
            color: #fff;
        }
    }
}
@keyframes weuiLoading{
    0%{
        transform: rotateZ(0deg);
    }
    100%{
        transform: rotateZ(360deg);
    }
}
</style>
