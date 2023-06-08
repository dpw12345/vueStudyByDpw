<template>
<div>
    <h3>具名插槽header</h3>
    <slot name="header"></slot>
    <h3>具名插槽footer</h3>
    <slot name="footer"></slot>
</div>
</template>

<script>
export default {
data(){
return {}
},
methods:{}
}

</script>
<style scoped>

</style>