<template>
<div>
    <ul>
        <li>
            <img src="../assets/robot/robot1.png" alt="">
            <img src="../assets/robot/robot2.png" alt="">
            <img src="../assets/robot/robot3.png" alt="">
            <img src="../assets/robot/robot4.png" alt="">
            <img src="../assets/robot/robot5.png" alt="">
            <img src="../assets/robot/robot6.png" alt="">
        </li>
    </ul>
</div>
</template>

<script>
export default {
data(){
return {
}
},
created(){
},
mounted(){
},
methods:{}
}

</script>
<style scoped>
li{
    display: flex;
}
img{
    width: 450px;
    border: 1px solid #000;
    object-fit: contain;
}

</style>