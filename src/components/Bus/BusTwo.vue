<template>
<div>
    <p>BusTwo</p>
    <p>{{ title }}</p>
</div>
</template>

<script>
import bus from '../../eventBus/bus'
export default {
data(){
return {
    title:''
}
},
created() {
    this.getBusValue()
},
methods:{
    getBusValue(){
        bus.$on('bus',(v)=>{
            this.title = v
            setTimeout(()=>{
                this.title=''
            },1000)
        })
    }
}
}

</script>
<style scoped>

</style>