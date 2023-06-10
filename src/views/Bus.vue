<template>
<div>
    <h4>组件通讯</h4>
    <bus-one />
    <hr>
    <bus-two />
</div>
</template>

<script>
import BusOne from '@/components/Bus/BusOne.vue'
import BusTwo from '@/components/Bus/BusTwo.vue'
export default {
  components: { BusOne,BusTwo },
data(){
return {}
},
methods:{}
}

</script>
<style scoped>

</style>