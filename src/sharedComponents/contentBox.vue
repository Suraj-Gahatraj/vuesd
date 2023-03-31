
<template>

<div class="box-container-wrapper">
  <div class="box toggleLight " :class="{active :  enableDarkTheme===true}">     
        <div class="empty-box-icon pb-2">
          <emptyBoxIcon/>
        </div>
           <h1 class="font-semibold text-center text-1xl">{{ heading }}</h1>
           <p class="text-center text-sm pt-1">{{title}}
         </p>
    </div>
</div>
   

</template>



<script>
import { mapGetters } from "vuex";
import emptyBoxIcon from '../icons/empty-box-icon.vue';

export default {
  props: [
    "heading",
    "title"
],

components:{emptyBoxIcon},

computed: {
    ...mapGetters({
      enableDarkTheme:"getThemeStatus"
    }),
  }
}

</script>

<style scoped>
.box-container-wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 559px;
}
.box{
  margin: auto;
  margin-top: 8%;
  max-width: 550px;
  height: 150px;
}
.box svg{
  margin-left: 8%;
 
}
.box p{
  font-size: 0.875rem;
    line-height: 1.25rem;
    width: 283px;
    margin-left: auto;
    margin-right: auto;

}
.toggleLight.active {
  background: rgb(0 0 0 / 94%);
  color: white;
  transition: 0.9s ease-in-out;

}

.icons-emtpy-box{

margin-left: auto;
margin-right: auto;

}

@media only screen and (max-width: 600px) {
  .box{
  width: 80%;
  
}
.box h1{
  margin-left: auto;
    margin-right: auto;
    width: 258px;
}


}
@media only screen and (max-width: 600px) {
  /* img{

margin-left:auto;
margin-right: auto;

} */

.box svg{
  margin-left: 19%;
}
}



</style>


