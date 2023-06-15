const OptionsVueStore:any = {
    namespaced: true,
    state:{
        fatherToSon:[
        {
            fromFather:'01-父向子组件传值，在子组件标签使用 v-bind:prop(可简写:prop)，单向数据流，子组件不能更改来自父组件传来的值',
            fatherDemo:'<child-communicate :title/>',
            fromSon:'02-子组件用props接收父组件传来的值，props与data同级',
            sonDemo:'props:{title:{type:string,default:"fromFather"}}'
        },
        {
            fromSon:'01-子组件使用自定义事件this.$emit(“事件名”,"子组件要传递的值"),每次调用这个函数，就会传一次值给父组件',
            sonDemo:'this.$emit("sendTitleToFather",titleToFather)',
            fromFather:'02-父组件在子组件标签用v-on:事件名=fn()可简写为@事件名=fn,传递的值在fn接收的参数里',
            fatherDemo:'<child-communicate @sendTitleToFather = fn()/> fn(value){这个value就是来自子组件传的值}',
        }
        ],
        emitSonToFather:'子组件还没有向父组件发送信息',
        eventBusTips:[
            '首先创建一个eventBus.js文件,内容为 import Vue from "vue" export default new Vue()',
            '在两个需要通讯的组件引入这个js文件 即 import bus from ‘@/eventBus/eventBus.js',
            '通过bus.$emit("自定义名字A",数据) 发送数据',
            '通过bus.$on("自定义名字A",(v)=>{ 回调函数里的参数v就是接收的数据 })',
            '通过bus.$off("自定义名字A",{})移除通讯，避免性能浪费'
        ],
        storeTitle:'vuex的使用方法',
        storeUseTips:[
            '在项目根目录下 创建一个名为 store 的文件夹，里面有一个 modules 文件夹和 index.js文件',
            'modules文件夹是为了vuex状态模块化使用，当vuex里的数据太多了不容易分辨各个模块各自使用的数据时，模块化能使项目各组件数据清晰明了',
            '在index里store中增加 modules:{},将引入module文件夹里的仓库文件放到该对象内，例如 modules:{moduleA,moduleB}',
            '模块化需要用namespaced开启，这个需要在modules里下各个模块文件里开启,方式为 namespaced:true，它与state同级',
            'state和getters里的数据都将在computed对象里存储,mutations和actions的函数都将在methods对象里存储',
            "...mapState('moduleA',['name','gender'])等同于 ...mapState('moduleA',{name:state=>state.name}) getters同理",
            "this.$store.commit('moduleA/SET_NAME',传参数) 等同于 ...mapMutations('moduleA',['SET_NAME'])",
            "this.$store.dispatch('moduleA/setName',传参数) 等同于 ...mapActions('moduleA',['setName'])",
            "如果你想要用其他vuex模块的数据的话，只需要照常引用即可，如...mapState('moduleA',['name1']);...mapState('moduleB',['name2'])"

        ]
    },
    getters:{

    },
    mutations: {
        SEND_EMIT_TO_FATHER(state:any,payload:string){
            state.emitSonToFather = payload
        }
        
    },
    actions:{
        asyncDisplayEmit(context:any,payload:string){
            setTimeout(()=>{
                context.commit('SEND_EMIT_TO_FATHER',payload)
            },2000)
        }

    }
}
export default OptionsVueStore