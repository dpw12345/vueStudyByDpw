<template>
<div id="communicate">
    <div class="title">{{ title }}</div>
    <div class="useReport">
        <ul>
            <li v-for="(item,index) in fatherToSon" :key="index">
                <p style="color: rgb(95, 95, 150);">{{ item.fromFather }}</p>
                <p class="weight">{{ item.fatherDemo }}</p>
                <p style="color: rgb(95, 95, 150);">{{ item.fromSon }}</p>
                <p class="weight">{{ item.sonDemo }}</p>
            </li>
        </ul>
    </div>
    <div class="emitSon">
        <button @click="sendEmit">点击子组件向父组件发送信息</button>
        <p :class="clickFlag&&emitClass">{{ emitSonToFather }}</p>
    </div>
</div>
</template>

<script>
import { mapState, mapMutations, mapActions} from 'vuex'
export default {
props:{
    title:{
        type:String,
    }
},
data(){
return {
    clickFlag:false,
    emitClass:'changeColor'
}
},
watch:{
    emitSonToFather:{
        handler(newV,old){
            this.clickFlag = !this.clickFlag
        },
        deep:true
    }
},
computed: {
    ...mapState('OptionsStore',['fatherToSon','emitSonToFather'])
},
methods:{
    ...mapMutations('OptionsStore',['SEND_EMIT_TO_FATHER']),
    ...mapActions('OptionsStore',['asyncDisplayEmit']),
    sendEmit(){
        this.SEND_EMIT_TO_FATHER('子组件已经向父组件发送信息了')
        this.asyncDisplayEmit('子组件还没有向父组件发送信息')
    }
}
}

</script>
<style scoped lang="less">
#communicate{
    padding:5px;
    background-color: #9eb8a1;
    .title{
        font-weight: 700;
        margin-bottom:5px;
    }
    .useReport{
        li{
         p:last-child{
            margin-bottom: 5px;
         }
        }
    }
    .emitSon{
        .changeColor{
            color:red
        }
    }
}
</style>