<template>
<div id="event-bus">
    <div class="title weight">{{ title }}</div>
    <div class="content">
        <ul>
            <li v-for="(item,index) in eventBusTips" :key="index">
                <p>{{++index}}:{{ item }}</p>
            </li>
        </ul>
    </div>
    <div class="bus-emit">
        <button style="margin-top: 5px;" @click="busEmit">点击向兄弟组件发送通讯</button>
    </div>
</div>
</template>

<script>
import {mapState } from 'vuex'
import bus from '@/eventBus/bus'
export default {
data(){
return {
    title:'使用全局事件总线eventBus步骤',
    sendContent:{
        content:'eventBus传值成功!',
        isChange:true
    }
}
},
computed:{
    ...mapState('OptionsStore',['eventBusTips'])
},
methods:{
    busEmit(){
        bus.$emit('sendToBusReceive',this.sendContent)
    }
}
}

</script>
<style scoped lang="less">
#event-bus{
    border: 1px solid #000;
    background-color: #95d6fb;
    padding: 5px;
    .title{
        margin-bottom: 10px;
    }

    .content{
        ul{
            li{
                p{

                }
            }
        }
    }
}
</style>