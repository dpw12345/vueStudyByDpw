<template>
<div>
    <h3>作用域插槽</h3>
    <slot :value="slotValue" :cc="sl"></slot>
    <slot name="foot" :va="zyyJm"></slot>
</div>
</template>

<script>
export default {
data(){
return {
    slotValue:['数据由字组件提供','数据传递给父组件','数据在父组件内只用在插槽处'],
    sl:'这是作用域插槽',
    zyyJm:'这是作用域插槽+具名插槽'
}
},
methods:{}
}

</script>
<style scoped>

</style>