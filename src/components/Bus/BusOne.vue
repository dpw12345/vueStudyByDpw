<template>
<div>
    <h4>BusOne</h4>
    <button @click="emitBus()">触发eventBus</button>
</div>
</template>

<script>
import bus from '../../eventBus/bus'
export default {
data(){
return {
    eventBusTitle:'这是来自bus传递的值'
}
},
methods:{
    emitBus(){
        bus.$emit('bus',this.eventBusTitle)
    }
}
}

</script>
<style scoped>

</style>