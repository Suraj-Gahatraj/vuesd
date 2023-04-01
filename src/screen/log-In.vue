
<template>

    <div class="login-content-wrapper  p-6 pl-10">
        <img src="../assets/Logo.png"/>

        <div class="form-contian">

        <div class="login-form-wrapper  pb-6">

            <form class="login-form-content relative pt-10 mt-10 p-10 pb-0 ">
               
                <p class="text-center font-semibold sm:text-2xl md:text-3xl">Welcome back</p>
                <p class="text-center  pt-2 sm:text-base lg:text-lg">Log In to manage your deliveries and access other services.</p>

                <div class=" p-10 pb-6 error" :class="{active : error===true}">
                  <label class="font-semibol ">Email</label>
                  <br/>
                  <input placeholder="Enter your email" v-model="userlogdata.email" v-on:input="enableDisableLoginButton"  class="w-full mt-2 "/>
            
                  <p class="mt-1 text-sm" v-if="error===true">{{ error_info.error_message }}</p>
                </div>

                <div class=" pt-0 p-10 error" :class="{active : error===true}">
                  <label class="font-semibol " >Password</label>
                  <br/>
                  <div class="relative">
                    <input type="password" placeholder="Enter your password" id="passwordtype" v-model="userlogdata.password" v-on:input="enableDisableLoginButton"   class="w-full mt-2" />
                    <img src="../assets/eye_visibility.png"  class="eyeImg" @click="togglePasswordvisibilty"/>

                    <p v-if="error===true">{{ error_info.message }}</p>
                  </div>
                </div>

            </form>

            <div class=" log-in-btn mt-1  text-center isLogInActive  " :class="{active : isLogInActive===true}"  @click="loginT">Log In</div>
                   
            <div class="">
              <span class="underline  float-right   pt-5 hover:decoration-red-500 forget-pw-link pb-6">Forgot Password?</span>
            </div>
          
        </div>

        
      </div>

    </div>
  
</template>

<script>
import { mapActions } from "vuex";
export default {
 data(){

  return{

    error:false,
    error_info:{
    error_message:'',
    error_type:'',
    },

    
    warring:'Log In',
    userlogdata:{
      email:'',
      password:''
    },
    isLogInActive:false,
    

  }
 },

 methods:{

  ...mapActions(['login']),

  clickedOndisableBtn(){
    this.isclickedOndisabBtn =true
   this.warring='This is not able for now.'
  },
  enableDisableLoginButton(){
    if(this.userlogdata.email.length>0 && this.userlogdata.password.length>0)
    {
      this.isLogInActive=true
    } else{
      
      this.isLogInActive=false;
    }
  },

 
  loginT()
  {
    let email=this.userlogdata.email;
    if(email.match(/(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi))
    {
      this.login(this.userlogdata.email)

      this.$router.push('/shipmentTab');
    }

    else
    {
      this.error=true;
      this.error_info.error_message='Email is Invalid'
    }

  },

  togglePasswordvisibilty(){

  
    var x = document.getElementById("passwordtype");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }

  }
 
  }

}
</script>

<style  scoped>
*{

font: normal normal  Lato;
}
h1 , p{
  color: #1c1c1c;
}

.form-contian{
  /* height:890px; */
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.error.active input{
  border: 1px solid red ;
}

.error.active p {
  color: red;
}


.login-form-wrapper{
  margin: auto;
  width:637px;
  padding-bottom: 69px;
  box-shadow: 30px 53px 26px rgba(243, 72, 86, 0.03);
  border: 1px solid #F0F2F7;
  transition: 0.9s ease;
}


input{
    padding: 16px;
    border: 1px solid gainsboro;  
    border-radius: 5px;
    outline: gainsboro;
}
.warring-mgs{
  color:gainsboro
}
.log-in-btn{
    background: gainsboro;
    color: white;
    padding: 14px;
    width:70%;
    border-radius: 5px;
    margin-right: auto;
    margin-left: auto;
}
.isLogInActive.active{
  background: linear-gradient(95deg, #f5564a 0%, #f34558 100%);
    color: white;
    padding: 14px;
    border-radius: 5px;

}

.eyeImg{
    position: absolute;
    right: 15px;
    top: 31px;
    cursor: pointer;
}
.forget-pw-link{
  cursor: pointer;
  width: 39%;
}
@media only screen and (max-width: 600px) {
  .login-form-wrapper{
  
width: 431px;

  }
  .eyeImg{

    right: 5px;
    top: 30px;
    height: 7px;
  
  }

  input,
input::placeholder {
  font-size: 10px;
}

}
@media only screen and (min-width: 600px) {
  input,
input::placeholder {
    font-size: 18px;
 
}
  .eyeImg{
    position: absolute;
    right: 14px;
    top: 33px;
    height: auto;
}
}

@media only screen and (min-width: 1400px) {
  /* .login-form-wrapper{
    margin-top: 13%;
  } */
  
}



</style>