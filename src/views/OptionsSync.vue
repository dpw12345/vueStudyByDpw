<template>
<div id="sync" class="padding-content">
    <div class="model">
        <p class="weight">v-model</p>
        <p>{{ modelTitle }}</p>
        <model :title="modelTitle" @input="changeModel"/>
        简便使用：<input type="text" v-model="easyUse">:{{ easyUse }}
    </div>
    <hr>
    <div class="sync">
        <p class="weight">sync</p>
        <p>syncOne:{{ syncOne }}</p>
        <p>syncTwo:{{ syncTwo }}</p>
        <sync :syncOne="syncOne" :syncTwo="syncTwo" @update:syncOneEmit="oneEmit" @update:syncTwoEmit="twoEmit"/>
    </div>
    <div class="easy-sync">
        <P class=weight>sync简便使用</P>
        <easy-sync :easyOne.sync="easyOne" :easyTwo.sync="easyTwo"/>
        简便使用1:{{ easyOne }}
        简便使用2:{{ easyTwo }}
    </div>
</div>
</template>

<script>
import Model from '@/components/Sync/Model.vue'
import Sync from '@/components/Sync/Sync.vue'
import EasySync from '@/components/Sync/EasySync.vue'
export default {
  components: { Model, Sync, EasySync },
data(){
return {
    modelTitle:'v-model双向绑定原理用在表单组件比如input上',
    easyUse:'简用',
    syncOne:'syncOne',
    syncTwo:'syncTwo',
    easyOne:'easyOne',
    easyTwo:'easyTwo'
}
},
methods:{
    changeModel(value){
        this.modelTitle = value
    },
    oneEmit(value){
        this.syncOne = value
    },
    twoEmit(value){
        this.syncTwo = value
    }
}
}

</script>
<style scoped lang="less">
#sync{
    width: 1200px;
    margin: auto;
    text-align: left;
    background-color: #a2d4f8;
    .sync{
        margin-top: 50px;
        margin-bottom: 50px;
    }
}
</style>