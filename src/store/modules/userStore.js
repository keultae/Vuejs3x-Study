const userStore = {
  namespaced: true,
  state: {
      userName: '도로시'
  },
  getters: {
      GE_USER_NAME: state => state.userName
  },
  mutations: {
      MU_USER_NAME: (state, payload) => {
          /*
              여기서는 payload를 객체로 받습니다.
              payload를 객체로 받으면, mutation를 조금더 유연하게 사용할 수 있기는 합니다.
          */
        //   state.userName = payload.userName
        console.log("userStore > mutations > MU_USER_NAME start")
        setTimeout( () => {
            state.userName = payload.userName
            console.log("userStore > mutations > MU_USER_NAME > state.userName")
        }, 5000 )
        console.log("userStore > mutations > MU_USER_NAME end")
      }
  },
  actions: {
    //   AC_USER_NAME: ({ commit }, payload) => {
    //     //   console.log("userStore 1");
    //     //   setTimeout(function() {
    //     //     console.log("userStore commit begin");
    //     //     commit('MU_USER_NAME', payload)
    //     //     console.log("userStore commit end");
    //     //   }, 5000);
    //     //   console.log("userStore 2");
    //       commit('MU_USER_NAME', payload)
    //   }
      AC_USER_NAME: (context, payload) => {
        console.log("userStore > actions > AC_USER_NAME start")
        setTimeout( () => {
            context.commit('MU_USER_NAME', payload)
            console.log("userStore > actions > AC_USER_NAME > call MU_USER_NAME")
        }, 5000 )
        
        console.log("userStore > actions > AC_USER_NAME end")
      }
  },

  modules: {
      userChild: {
        namespaced: true,
          state: {
              childName: 'CHILD_NAME'
          },
          getters: {
              GE_CHILD_NAME: state => state.childName
          }
      }
  }
}

export default userStore
