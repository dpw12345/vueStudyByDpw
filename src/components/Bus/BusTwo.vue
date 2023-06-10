<template>
<div>busTwo</div>
</template>

<script>
import bus from '../../eventBus/bus'
export default {
data(){
return {}
},
created() {
    this.getBusValue()
},
methods:{
    getBusValue(){
        bus.$on('bus',(v)=>{
            console.log(v,'bus-vv');
        })
    }
}
}

</script>
<style scoped>

</style>