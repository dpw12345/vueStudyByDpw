<template>
  <div>
    <h4>来自父的值：{{ valueS }}     <span @click="deleteText">{{ deleted }}</span></h4>
  </div>
</template>

<script>
export default {
  props:{
    value:{
      type:String,
      default:'123',
    }
  },
  data() {
    return {
      deleted:'X',
    }
  },
  computed:{
    valueS:{
      get(){
        return this.value
      },
      set(o){
        console.log(o);
      }
    }
  },
  methods: {
    deleteText(){
      this.valueS = ''
      this.$emit('deleteTextF','delete father text')
    }
  },
};
</script>
<style scoped>
span{
  border: 1px solid #000;
  border-radius: 999px;
  width: 24px;
  height: 24px;
  padding: 2px 6px;
}
</style>
