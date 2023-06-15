<template>
<div id="use-slot">
    <div class="title weight padding-content">{{ title }}</div>
    <div class="title padding-content" v-html="introduction"></div>
    <div class="default-slot padding-content">
        <default-slot>
            <template>
                <p>这是默认插槽，名字是default</p>
            </template>
        </default-slot>
    </div>
    <div class="named-slot padding-content">
        <named-slot>
            <template v-slot:header>
                <p>这是header</p>
            </template>
            <template #middle>
                <p>这是middle</p>
            </template>
            <template v-slot:footer>
                <p>这是footer</p>
            </template>
        </named-slot>
    </div>
    <div class="domain-slot padding-content">
        <domain-slot>
            <template v-slot:domainSlot="scope">
                <ul>
                    <!-- 这里scope只是用来接收数据的一个变量，叫什么无所谓，可以直接解构获取传递来的数据也一样 {value} -->
                    <li v-for="(item,index) in scope.value" :key="index">{{++index}}:{{ item }}</li>
                </ul>
            </template>
        </domain-slot>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import DefaultSlot from '@/components/Slot/DefaultSlot.vue'
import NamedSlot from '@/components/Slot/NamedSlot.vue'
import DomainSlot from '@/components/Slot/DomainSlot.vue'
export default {
  components: { DefaultSlot, NamedSlot, DomainSlot },
data(){
return {
    title:'插槽的种类及使用',
}
},
computed:{
    ...mapState('OptionsSlot',['introduction'])
},
methods:{}
}

</script>
<style scoped lang="less">
#use-slot{
    text-align: left;
    padding: 10px;
    width: 1200px;
    margin: auto;
    background-color: #80a89c;
    .title{}
    .default-slot{
    }
    .named-slot{
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .domain-slot{
    }
}
</style>