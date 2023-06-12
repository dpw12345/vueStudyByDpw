<template>
<div>
    <h4>v-model语法糖sync：title-{{ title }}</h4>
    <input type="text" :value="title" @input="$emit('update:title',$event.target.value)">
    <h4>v-model语法糖sync：bottom-{{ bottom }}</h4>
    <input type="text" :value="bottom" @input="$emit('update:bottom',$event.target.value)">
    
</div>
</template>

<script>
export default {
data(){
return {
}
},
props:{
    title:{
        type:String
    },bottom:{
        type:String
    }
},
methods:{}
}

</script>
<style scoped>

</style>