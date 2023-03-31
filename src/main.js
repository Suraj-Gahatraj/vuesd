import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router/index'

const store = createStore({
    state () {
      return {
        // username:{name:'Bikash',last_name:"Khadka"},
        userEmail:'',
        isLoggedIn:false,
        darkTheme:Boolean
      }
    },

    getters:{
          getUsername(state)
          {
            return state.userEmail
          },
          getLoggedInState(state){
           
            return state.isLoggedIn
          },
          getThemeStatus(state){
            return state.darkTheme
          }
    },

    mutations: {
      setUserEmail(state,data){
       
        state.userEmail=data
        state.isLoggedIn=true
      },
      setThemeStatus(state,data){
          state.darkTheme=data
  

      }
  },

    actions : {
      login(context,data){

        context.commit('setUserEmail',data)
      },
      theme(context,data){
        context.commit('setThemeStatus', data)
      }

    }
  })


const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')
