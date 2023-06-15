<template>
<div id="bus-receive">
    <div class="content weight" :class="isBusFlag&&light">{{ receiveTitle }}</div>
</div>
</template>

<script>
import bus from '@/eventBus/bus'
export default {
data(){
return {
    receiveTitle:'还没有传值过来，什么都没有',
    isBusFlag:false,
    light:'light'
}
},
created(){
    this.receiveBus()
},
methods:{
    receiveBus(){
        bus.$on('sendToBusReceive',(value)=>{
            this.receiveTitle = value.content
            this.isBusFlag = value.isChange
            this.displayBus()
        })
    },
    displayBus(){
        setTimeout(()=>{
            this.receiveTitle = '还没有传值过来，什么都没有',
            this.isBusFlag = false
        },2000)
    }
}
}

</script>
<style scoped lang="less">
#bus-receive{
    text-align: left;
    padding: 10px;
    .content{
        padding-left: 5px;
        background-color: #e5e5e5;
    }
    .light{
        background-color: #09f;
    }
}
</style>