<template>
<div id="options">
    <ul>
        <li v-for="(item,index) in opList" :key="index"  class="options-item">
            <!-- todo-1s -->
                <!-- <div class="item" @click="toOption(item)" :data-content="item.option.length>15&&item.option"> -->
                <div class="item" @click="toOption(item)">
                    {{index+1}}-{{ item.option }}
                </div>
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
            option:'测试',
            path:'options/text'
        },
        {
            option:'引言',
            path:'options/introduction'
        },
        {
            option:'TodoList',
            path:'options/todoList'
        },
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
        this.$router.push({
            path:`/${item.path}`,
            query:{}
        })
    }
}
}

</script>
<style scoped lang="less">
#options{
    // border: 1px solid #000;
    padding: 10px;
    .options-item{
        width: 20%;
        height: 25px;
        .item{
            position: relative;
            color:black;
            text-align: left;
            padding-left:10px;
            cursor: pointer;
            //文字超出省略
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            &:hover{
                color:rgb(101, 182, 135);
            }
            // todo-1:本意是鼠标悬浮，显示省略文字的
            // &:hover::after{
            //     position: absolute;
            //     right: 0;
            //     top: 0;
            //     color:rgb(101, 182, 135);
            //     width: 100px;
            //     height: 10px;
            //     border: 1px solid #000;
            //     content:attr(data-content)
            // }
        }
    }
}
</style>