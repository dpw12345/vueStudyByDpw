<template>
<div id="todoList">
    <div class="header">
        <div class="left">ToDoList</div>
        <div class="right">
            <input type="text" :placeholder="defaultPlaceholder" @input="addItem" v-model="addValue" @keydown.enter="addValueToList">
        </div>
        <div class="delete" @click="clearValue">X</div>
        <div class="add" @click="addValueToList"><img :src="addWebp" alt=""></div>
    </div>
    <div class="todo">
        <div class="top">正在进行</div>
        <div class="content" v-if="todoList.length > 0">
            <div class="clearChecked" style="margin-bottom:5px">
                <button @click="clearChecked">清除已选中</button>
            </div>
            <ul>
                <li v-for="(item,index) in todoList" :key="index">
                    <input type="checkbox" :checked="item.isChecked" @click="changeItemChecked(item)">
                    <span>{{item.content}}</span>
                    <button v-if="item.isEdit===false" @click="EditItem(item,index)">编辑</button>
                    <button v-if="item.isEdit===false" @click="deleteItem(item,index)">删除</button>
                    <button v-if="item.isEdit===true" @click="backItem(item,index)">返回</button>
                    <button v-if="item.isEdit===true" @click="finishItem(item,index)">完成</button>
                </li>
            </ul>
        </div>
        <!-- todoList.length === 0 -->
        <div class="noItem" v-if="todoList.length === 0">暂无进行的事项</div>
    </div>
    <div class="todo" style="padding-bottom: 50px;">
        <div class="top">已经完成</div>
        <div class="content" v-if="haveDoneList.length > 0">
            <ul>
                <li v-for="(item,index) in haveDoneList" :key="index">
                    <span style="padding-left:50px">{{item.content}}</span>
                    <button v-show="false">编辑</button>
                    <button style="flex:2" @click="clearFinished(item,index)">清除已完成</button>
                </li>
            </ul>
        </div>
        <!-- haveDoneList.length === 0 -->
        <div class="noItem" v-if="haveDoneList.length === 0">暂无已完成的事项</div>
    </div>
</div>
</template>

<script>
export default {
data(){
return {
    defaultPlaceholder:'请输入你的任务名称，按回车键确认',
    addValue:'',
    timeId:null,
    addWebp:require('../assets/add.webp'),
    todoList:[
        {
            id:1,
            isChecked:false,
            content:'起床',
            isDone:false,
            isEdit:false
        }
    ],
    haveDoneList:[
        {
            id:1,
            isChecked:false,
            content:'睡觉',
            isDone:true,
            isEdit:false
        }
    ]
}
},
watch:{
    todoList:{
        handler(newValue,oldValue){
            // console.log(newValue,oldValue);
        },
        deep:true
    }
},
methods:{
    // todo-2 nothing to do
    addItem(){
        clearTimeout(this.timeId)
        this.timeId = setTimeout(() => {
            // console.log(this.addValue);
        }, 2000);
    },
    // clear input's value
    clearValue(){
        this.addValue = ''
    },
    // add item
    addValueToList(){
        if(!this.addValue) return
        this.todoList.push({
            id:2,
            isChecked:false,
            content:this.addValue,
            isDone:false,
            isEdit:false
        })
        this.addValue = ''
    },
    EditItem(item,index){
        item.isEdit = !item.isEdit
    },
    // delete item
    deleteItem(item,index){
        this.todoList.splice(index,1)
    },
    // back
    backItem(item,index){
        this.EditItem(item,index)
    },
    // finish
    finishItem(item,index){
        this.todoList.splice(index,1)
        this.haveDoneList.push(item)
    },
    clearFinished(item,index){
        this.haveDoneList.splice(index,1)
    },
    clearChecked(){
        const result = this.todoList.filter((item,index)=>{
            return item.isChecked === false
        })
        this.todoList = result
    },
    changeItemChecked(item){
        item.isChecked = !item.isChecked
    }
}
}

</script>
<style scoped lang="less">
// todo宽度
@mainWidth:600px;
#todoList{
    border: 1px solid #000;
    padding: 10px;
    background-color: #97b99f;
    width: 800px;
    margin:0 auto;
    .header{
        position: relative;
        margin:0 auto;
        background-color: #464f43;
        width: @mainWidth;
        height: 50px;
        color: aliceblue;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 50px;
        .left{
            flex: 2;
            text-align: left;
            font-size: 26px;
            font-weight: 700;
            
        }
        .right{
            flex: 7;
            text-align: left;
            padding-left: 42px;
            input{
                width: 80%;
                height: 30px;
                border-radius: 4px;
                padding-left: 10px;
                // 去除input边框
                outline: none;
                border: none;
                list-style: none;
            }
        }
        .delete{
            position: absolute;
            right: 80px;
            top: 15px;
            width: 20px;
            height: 20px;
            color: #000;
            cursor: pointer;
            background-color: #fff;
        }
        .add{
            position: absolute;
            right: 30px;
            top: 13px;
            width: 20px;
            height: 20px;
            cursor: pointer;
            img{
                object-fit: contain;
                width: 100%;
                height: 100%;
            }
        }
    }
    .todo{
        width: @mainWidth;
        margin: 10px auto;
        text-align: left;
        padding-left: 10px;
        .top{
            font-size: 22px;
            font-weight: 700;
        }
        .content{
            li{
                display: flex;
                align-items: center;
                background-color: #e3e1e4;
                margin-bottom: 5px;
                input{
                    flex: 1;
                }
                span{
                    flex: 10;
                    border: 1px solid #000;
                    padding-left: 10px;
                }
                button{
                    flex: 1;
                    cursor: pointer;
                }
                button:hover{
                    color: #e3e1e4;
                    background-color: #d9715c;
                }
            }
        }
    }
}
</style>