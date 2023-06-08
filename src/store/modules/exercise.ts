const exercise = {
    namespaced: true,
    state:{
        name:'EXERCISE',
        gender:'female'
    },
    // getters:{
    //     named: state=>{
    //         return state.name.toLowerCase()
    //     }
    // },
    mutations: {
        SET_NAME(state: any,payload: any):void{
            // state.name.toLowerCase()
            console.log(state,payload,'----');
        }
    }
}

export default exercise