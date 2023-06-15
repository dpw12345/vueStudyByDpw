<template>
<div id="vueX">
    <div class="communicate">
        <child-communicate :title="toSonTitle"/>
    </div>
    <hr>
    <div class="event-bus">
        <child-event-bus />
    </div>
    <div class="bus-receive">
        <child-event-bus-receive />
    </div>
    <div class="use-store">
        <child-use-vue-x />
    </div>
</div>
</template>

<script>
import ChildCommunicate from '@/components/VueX/ChildCommunicate.vue'
import ChildEventBus from '@/components/VueX/ChildEventBus.vue'
import ChildEventBusReceive from '@/components/VueX/ChildEventBusReceive.vue'
import ChildUseVueX from '@/components/VueX/ChildUseVueX.vue'
export default {
  components: { ChildCommunicate ,ChildEventBus, ChildEventBusReceive, ChildUseVueX},
data(){
return {
    toSonTitle:'由父组件传递给子组件的title'
}
},
methods:{}
}

</script>
<style scoped lang="less">
@padding-content:10px;
#vueX{
    width: 1200px;
    margin: auto;
    padding: @padding-content;
    .communicate{
        padding: @padding-content;
        text-align: left;
    }
    .event-bus{
        padding: @padding-content;
        text-align: left;
    }
}
</style>