<template>
    <div class=" content-bg toggletheme " :class="{active : enableDzrkTheme===true}" >
      <div class="p-6 pt-3 flex gap-4   ">
        <img src="../assets/hamburget menu icon.png" class="sm-screen h-4 mt-5" @click="$emit('togglenav')" />
        <img src="../assets/Logo.png" class="h-16" />
      </div>

      <div class="p-6">
        <button
          class="create-shipment-btn flex gap-4 justify-center w-full ">
          <img src="../assets/plus icon - bg.png" /> Create
          shipment
        </button>
      </div>

      <section class="pb-10 mt-10 ml-2">
        <div class="slided-side-nav pr-2">
          <div  @click="changenNav('/get-quote')" class="list-side-info flex gap-4 pt-8 navtab " :class="{active : navtab ==='get_quote'}">
 
            <div class="pt-1">
              <getQuoteIcon />
            </div>
           
            <p>Get Quote</p>
          </div>


        
          <div @click="changenNav('/shipmentTab')" class="list-side-info  flex pt-8  navtab " :class="{active : navtab ==='shipmentab'}" >
            <div class="flex gap-4" >

              <span class="flex gap-4 ">
                <div class="pt-1">
                <shipmentIcon/>
              </div>
                <p class="">Shipments</p>
              </span>

              <span class="number-of-shipment bg-gradian ">1</span>
            </div>
          </div>
   

          <div @click="changenNav('/manifest-history')" class="list-side-info flex gap-4 pt-8 navtab " :class="{active : navtab ==='manifest-history'}"  >
            <div class="pt-1">
            <historyIcon/>
            </div>
            <p>Manifest history</p>
          </div>
  


          <div @click="changenNav('/address_book')" class="list-side-info flex gap-4 pt-8 navtab " :class="{active : navtab ==='address_book'}"  >

            <div class="pt-1">
           <addressBookIcon/>
           </div>
           
            <p>Address book </p>
          </div>
      
        </div>
      </section>

      <section class="border-b-2 border-indigo-10 pb-10 md:30 lg:mt-48 ">
        <div class="new-shipment-info bg-gradian  mt-20">
          <div class="flex gap-2 text-sm">
            <img src="../assets/fire icon.png" class="h-4 ml-1 mt-1" />
            <div class="w-full leading-7">
              <p>A new shipment has been added.</p>
              <p>Details ></p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="p-6 flex flex-col gap-4 mt-4">
          <div class="flex gap-4 pt-4">
            <img src="../assets/setting.png" class="h-6" />
            <p>Settings</p>
          </div>

          <div class="flex gap-4 pt-4">
            <img src="../assets/help icon.png" class="h-6" />
            <p>Help & support</p>
          </div>
        </div>
      </section>
    </div>


</template>


<script>

import { mapGetters } from "vuex";
import getQuoteIcon from '../icons/get-quote-icon.vue';
import shipmentIcon from '../icons/shipment-icon.vue'
import historyIcon from '../icons/history-icon.vue'
import addressBookIcon from '../icons/address-book-icon.vue'

export default{
  components: { getQuoteIcon , shipmentIcon ,historyIcon ,addressBookIcon},
  data(){
    return{
      navtab:'shipmentab'
    }
  },
  methods:{
 
    changenNav(navpath){
      console.log(' changenNav')
       this.$router.push(navpath);
       console.log(navpath)
    },

    setTab()
    {
    
      this.navtab=this.$route.name; 
    }
  },
  
  computed: {
    ...mapGetters({
      enableDzrkTheme:"getThemeStatus"
    }),
  },

  mounted(){
    this.setTab();
  }


}

</script>


<style >
.content-wrapper{
  width: 326px;
}
.navtab.active {
color: #f97031;
border-left: 5px solid #f97031;
background-color: #fffcfa;
width: 100%;
transition: 0.5s ease;

}
.content-bg{
  background-color: #ffffff;
}

.toggletheme.active {
  background: rgb(0 0 0 / 94%);
  color: white;
  transition: 0.9s ease-in-out;

}


.bg-gradian {
background: transparent linear-gradient(105deg, #f97031 0%, #f1306b 100%) 0%
  0% no-repeat padding-box;
}

.create-shipment-btn {
background: #fffcfa 0% 0% no-repeat padding-box;
border: 0.5px solid #f0f2f7;
padding: 10px 0px 10px 0px;
border-radius: 5px;
transition: 0.2s;
color: black;
}
.list-side-info {
  cursor: pointer;
  border-left: 5px solid transparent;
padding: 15px 0px 15px 21px;
}
.list-side-info :hover{
  color: #f97031;
}
.number-of-shipment {
color: white;
padding: 1px 9px 2px 9px;
border-radius: 8px;
margin-left: 70px;
}
.logo-ham-menu {

  width: 437px;
  position: absolute;
  z-index: 1;
}

.new-shipment-info {
  border-radius: 5px;
    color: white;
    margin-right: auto;
    padding: 12px 4px 12px 4px;
    margin-left: auto;
    width: 94%;
  
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
.side-bar-content-wrapper {
  display: none;
}
.sm-screen{
  display: block;
}
.logo-ham-menu {
  display: block;

}
.top-main-logo {
  display: none;
}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
.side-bar-content-wrapper {
  display: none;
}
.logo-ham-menu {
  display: block;
}

.top-main-logo {
  display: none;
}
.toggle-sm {
  display: none;
}
.main-icon {
  display: flex;
}

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
.side-bar-content-wrapper {
  display: flex;
}
.logo-ham-menu {
  display: block;
}
.top-main-logo {
  display: none;
}

.main-icon {
  display: flex;
}


}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .main-icon {
  display: none;
}
.sm-screen{
  display: none;
}
.logo-ham-menu {
  display: none;
}
.top-main-logo {
  display: block;
}
.toggle-sm {
  display: flex;
}


}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

.logo-ham-menu {
  display: none;
}
.tab-content-wrapper {
   
    height: 362px;
  }

  .content-bg{
    width: 16.563rem !important;
    
  }
.dash-board-main-content-wrapper {
  min-width:1100px;
}
.number-of-shipment{
  margin-left:58px !important;
}
}

@media only screen and (min-width: 1350px) {


}



@media only screen and (min-width: 1400px) {
  .content-bg {
    background-color: #ffffff;
    width: 16.563rem !important;
    margin-top:8px;
    min-height: calc(110vh - 10px);
  }

  .number-of-shipment {
    margin-left:65px !important;
  }
}
</style>
