<template>
<div id="use-store">
    <div class="title weight">{{ title }}</div>
    <div class="content">
        <ul>
            <li v-for="(item,index) in storeUseTips" :key="index">
                <p>{{++index}}:{{ item }}</p>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import { mapState, mapMutations, mapActions} from 'vuex'
export default {
data(){
return {}
},
computed: {
    ...mapState('OptionsStore',{
        title:(state)=>state.storeTitle,
        storeUseTips:(state)=>state.storeUseTips
    })
},
methods:{}
}

</script>
<style scoped lang="less">
#use-store{
    text-align: left;
    margin: 10px;
    padding: 5px;
    background-color: #80a89c;
}
</style>