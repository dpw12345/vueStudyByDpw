<template>
<div>
    <ul>
        <li>
            <img src="../assets/robot/robot1.png" alt="">
            <img src="../assets/robot/robot2.png" alt="">
            <img src="../assets/robot/robot3.png" alt="">
            <img src="../assets/robot/robot4.png" alt="">
            <img src="../assets/robot/robot5.png" alt="">
            <!-- <img :src="picRobot" alt=""> -->
            <!-- <img src="../assets/robot/robot6.png" alt=""> -->
        </li>
    </ul>
</div>
</template>

<script>
import {picRobot} from '../const/pic.js'
export default {
data(){
return {
    // pic:picRobot[0]
}
},
created(){
    console.log(this.picRobot);
},
mounted(){
    console.log(this.picRobot);
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