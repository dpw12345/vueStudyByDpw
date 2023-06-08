<template>
    <div>
      <h4>子改变父的值：</h4>
      <input type="text" v-model="sonText" @input="changeFT()">
    </div>
  </template>
  
  <script>
  export default {
    data() {
        return {
            sonText:''
        }
    },
    methods: {
        changeFT(){
            this.$emit('changFatherText',this.sonText)
        }
    },
  };
  </script>
  <style scoped></style>
  