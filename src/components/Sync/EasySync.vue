<template>
    <div id="sync">
        <div class="title">{{ title }}</div>
        <div class="use-one">
            use-one:<input type="text" :value="easyOne" @input="syncOneEmit">
        </div>
        <div class="use-one">
            use-two:<input type="text" :value="easyTwo" @input="syncTwoEmit">
        </div>
        <div class="use-tips">{{ tips }}</div>
        <div class="use-tips">{{ tips2 }}</div>
    </div>
    </template>
    
    <script>
    export default {
    props:{
        easyOne:String,
        easyTwo:String,
    },
    data(){
    return {
        title:'',
        tips:'子组件标签：<easy-sync :easyOne="easyOne"  @update:easyOne="oneEmit"/> => <easy-sync :easyOne.sync="easyOne"/>',
        tips2:'子组件里input：<input type="text" :value="easyOne" @input="$emit(“update:easyOne”,$event.target.value)">'
    }
    },
    methods:{
        syncOneEmit(event){
            this.$emit('update:easyOne',event.target.value)
        },
        syncTwoEmit(event){
            this.$emit('update:easyTwo',event.target.value)
    
        }
    }
    }
    
    </script>
    <style scoped lang="less">
    #sync{
        .use-one{}
    }
    
    </style>