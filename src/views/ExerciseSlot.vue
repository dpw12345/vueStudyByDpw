<template>
<div id="slot">
    <ju-ming-slot>
        <template v-slot:footer>
            <h4>这是具名插槽footer</h4>
        </template>
        <template #header>
            <h4>这是具名插槽header,把v-slot：header简写为#header</h4>
        </template>
    </ju-ming-slot>
    <hr>
    <mo-reng-slot>
        <template v-slot:header>
            <h4>父组件渲染的内容会渲染在字组件的同名处slot位置,父组件的里字组件标签里的template位置并不重要</h4>
            <template>
                <h4>默认插槽就是没取名字，默认名字是default</h4>
            </template>
            <template>
                <h4>如果子组件有多个默认插槽，而父组件所有指定到默认插槽的填充内容，将会且全都填充到子组件的每个默认插槽中。</h4>
            </template>
        </template>
    </mo-reng-slot>
    <hr>
    <zuo-yong-yu-slot>
        <!-- <template slot-scope="value"> -->
        <!-- <template #default="value"> -->
        <template v-slot:default="value">
            {{ value }}
        </template>
        <!-- <template v-slot:foot="valuePro"> -->
        <template #foot="valuePro">
            <h4>具名插槽</h4>
            <p>{{ valuePro }}</p>
        </template>
    </zuo-yong-yu-slot>
</div>
</template>

<script>
import JuMingSlot from '@/components/ExerciseSlot/JuMingSlot.vue'
import MoRengSlot from '@/components/ExerciseSlot/MoRengSlot.vue'
import ZuoYongYuSlot from '@/components/ExerciseSlot/ZuoYongYuSlot.vue'
export default {
  components: { JuMingSlot, MoRengSlot, ZuoYongYuSlot },
data(){
return {}
},
methods:{}
}

</script>
<style scoped lang="less">
#slot{
    margin: 0;
    padding: 0;
    background-color: #09f;
}
</style>