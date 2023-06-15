<template>
<div id="sync">
    <div class="title">{{ title }}</div>
    <div class="use-one">
        use-one:<input type="text" :value="syncOne" @input="syncOneEmit">
    </div>
    <div class="use-one">
        use-two:<input type="text" :value="syncTwo" @input="syncTwoEmit">
    </div>
    <div class="tips">
        <ul>
            <li v-for="(item,index) in syncTips" :key="index"> {{ ++index }}:{{ item }}</li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
props:{
    syncOne:String,
    syncTwo:String,
},
data(){
return {
    title:'',
    syncTips:[
        '步骤同v-model原理一致，就是$emit(”自定义事件“，数据)中自定义事件需要以 update:XXX为命名格式'
    ]
}
},
methods:{
    syncOneEmit(event){
        this.$emit('update:syncOneEmit',event.target.value)
    },
    syncTwoEmit(event){
        this.$emit('update:syncTwoEmit',event.target.value)

    }
}
}

</script>
<style scoped lang="less">
#sync{
    .use-one{}
}

</style>