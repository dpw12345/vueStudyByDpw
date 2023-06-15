<template>
    <div id="domain-slot">
        <p class="weight">作用域插槽</p>
        <div class="title">{{ title }}</div>
        <slot name="domainSlot" :value="content"></slot>
    </div>
    </template>
    
    <script>
    export default {
    data(){
    return {
        title:'作用域插槽其实就是带数据的插槽,子组件将数据传递给父组件，父组件拿到该数据渲染好后将带标签的内容放回子组件内渲染出来',
        content:[
        '数据由子组件提供',
        '数据传递给父组件',
        '数据在父组件内只用在插槽处',
        '子:<slot name="domainSlot" :value="content"></slot> 这里v-slot:可以简写为#',
        '父:<domain-slot><template v-slot:domainSlot="scope"></template></domain-slot> 这里v-slot:可以简写为#',
        '这里scope只是用来接收数据的对象的变量名，可以任意取'
        ]
    }
    },
    methods:{}
    }
    
    </script>
    <style scoped lang="less">
    #domain-slot{
    }
    </style>