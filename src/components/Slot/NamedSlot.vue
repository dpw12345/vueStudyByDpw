<template>
    <div id="named-slot">
        <p class="weight">具名插槽</p>
        <div class="title">{{ title }}</div>
        <div class="title">{{ content[0] }}</div>
        <div class="title">{{ content[1] }}</div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
        <div class="middle">
            <slot name="middle"></slot>
        </div>
        <div class="header">
            <slot name="header"></slot>
        </div>
    </div>
    </template>
    
    <script>
    export default {
    data(){
    return {
        title:'具名插槽的位置渲染是由在子组件中<slot></slot>的位置决定的，其中v-slot:名字A 可以简写为#名字A',
        content:[
            '父:<named-slot> <template v-slot:header><p>这是header</p></template></named-slot>',
            '子:<slot name="header"></slot>'
        ]
    }
    },
    methods:{}
    }
    
    </script>
    <style scoped lang="less">
    #named-slot{
    }
    </style>