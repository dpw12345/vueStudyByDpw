<template>
<div>
    <ul>
        <li v-for="(item,index) in opList" :key="index" @click="toOption(item)">
                {{ item.option }}
        </li>
    </ul>
</div>
</template>

<script>
export default {
data(){
return {
    opList:[
        {
            option:'组件通信',
            path:'options/vueX'
        },
        {
            option:'插槽',
            path:'options/slot'
        },
        {
            option:'v-model&.sync原理',
            path:'options/v-model&sync'
        },
        {
            option:'虚拟滚动vue-virtual-scroller',
            path:'options/virtual-scroller'
        }
    ]
}
},
methods:{
    toOption(item){
        console.log(item);
    }
}
}

</script>
<style scoped>

</style>