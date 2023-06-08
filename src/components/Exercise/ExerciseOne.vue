<template>

<div id="navbar">
    <ul>
        <li v-for="(item,index) in navbarData" :key="index" @click="show(index)">{{ item }}</li>
    </ul>
    <div id="content">
        <div class="first" v-if="flag === 1">
            <h4>父传子</h4>
            <input type="text" v-model="value">
            <child-one :value="value" @deleteTextF = deleteTF />
        </div>
        <div class="second" v-if="flag === 2">
            <h4>子传父:{{ sonText }}</h4>
            <child-two  @changFatherText = changeBySon />
        </div>
        <div class="third" v-if="flag === 3">
            <button @click="toSlot">插槽</button>
        </div>
    </div> 
</div>

</template>

<script>
import ChildOne from './ChildOne.vue'
import ChildTwo from './ChildTwo.vue'
export default {
    components:{
        ChildOne:ChildOne,
        ChildTwo:ChildTwo,
    },
data(){
    return {
        navbarData:[
            '第一项','第二项','第三项'
        ],
        flag:1,
        value:'',
        sonText:''
    }

},
methods:{
    show(index){
        this.flag = index+1
    },
    deleteTF(values){
        this.value = ''
        alert(values)
    },
    changeBySon(v){
        this.sonText = v
    },
    toSlot(){
        this.$router.push('/exercise/slot')
    }
}
}

</script>
<style scoped lang="less">
*{
    margin: 0;
    padding: 0;
}
li{
    list-style: none;
    margin: 0 50px 0 50px;
    border: 1px solid #000;
    cursor: pointer;
}
#navbar{
    border: 1px solid #000;
    ul{
        display: flex;
        li:nth-child(1){
            margin-left: 0;
        }
    }
    #content{
        text-align: left;
    }
}
</style>