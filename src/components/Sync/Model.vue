<template>
<div id="model">
    <div class="content">
        输入:<input type="text" :value="title" @input="sendEmit"/>
    </div>
    <div class="tips">
        <ul>
            <li v-for="(item,index) in modelTips" :key="index"> {{ ++index }}:{{ item }}</li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
props:{
    title:String
},
data(){
return {
    modelTips:[
        '父组件给子组件标签传递. <model :title="modelTitle"/>',
        '子组件用props接收，并用:value属性绑定在input上。<input type="text" :value="title"/>',
        '子组件使用@input事件配合$emit()将input最新的值传给父组件 <input type="text" :value="title" @input="sendEmit"/>',
        'sendEmit(event){ this.$emit("input",event.target.value) }',
        '父组件接收 <model :title="modelTitle" @input="changeModel"/> 并在changeModel中赋值给modelTitle',
        'changeModel(value){ this.modelTitle = value }'
    ]
}
},
methods:{
    sendEmit(event){
        this.$emit('input',event.target.value)
    }
}
}

</script>
<style scoped lang="less">
#model{
    .content{
        input{
            width: 30%;
            height: 30px;
        }

    }
}
</style>