<template>
  <div>
    <h4>exercise:{{ name }}:{{ gender }}:{{name2}}</h4>
    <button @click="jump()">跳转</button>
    <ul>
      <li>
        <button @click="fn">点击</button>
      </li>
    </ul>
    <hr>
    <sync :title.sync="title" :bottom.sync="bottom"/>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import syncVue from '../components/Sync/sync.vue'
export default {
  components:{
    sync:syncVue
  },
  created() {
    // console.log(this.$route.params,'9');
  },
  data() {
    return {
      title:'title',
      bottom:'bottom'
    }
  },
  computed:{
    // ...mapState('exercise',{
    //   name:state=>state.name,
    //   gender:state=>state.gender
    // })
    ...mapState('exercise',['name','gender']),
    ...mapState('exercise2',['name2'])
  },
  methods: {
    ...mapMutations('exercise',['SET_NAME']),
    jump(){
      this.$router.push('/exercise/one')
    },
    fn(){
      // this.$store.commit('exercise/SET_NAME', '000')
      this.SET_NAME('929')
    }
  },
};
</script>
<style scoped></style>
