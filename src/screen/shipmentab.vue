<template>
  <div class="main-tab-content-wrapper  
    toggleLight" :class="{active : enableDarkTheme===true}"
  
    >
    <div class="lg:flex gap-2 p-1 ml-2">
      <NavBar/>
      <div
        class="dash-board-main-content-wrapper pl-0 pt-0 mt-2"
        v-if="findedtab === 'Shipmentstab'">
        <div class="">
          <div>
            <GreetingUser/>
    
            <div class="for-justify-btwe  relative pr-0 ">
              <div class="pl-0 p-6 pt-5   w-100">
                <h1 class="font-semibold text-1xl">Shipments</h1>
                <p class=" pt-1 sm:mt-6 md:mt-0 lg:mt-0 ">
                  You can check or create your ddnew orders , ready to shipment
                  and track an orders
                </p>
              </div>

              <div class="sm-icons flex gap-1  ">
                <div class="hover:animate-bounce imgBg">
                  <img src="../assets/download.png" class="h-4" />
                </div>
                <div class="hover:animate-bounce imgBg">
                  <img src="../assets/import icon.png" class="h-4" />
                </div>
                <div class="hover:animate-bounce imgBg">
                  <div class="bg-gradian text-center imgs">+</div>
                </div>
              </div>

              <div class="flex gap-4 toggle-sm mt-2">
                <div class="mt-2 relative" @click="toggledropDownload">
                  <div
                    class="flex gap-2 border-2 border-indigo-10 bg-gray-100 p-1  toggleLight"
                    :class="{ active: enableDarkTheme === true }">
                
                    <div class="mt-1">
                    <downloadIcon/>
                    </div>

                    <p class="text-sm">Download Template</p>
                  </div>

                  <div
                    v-if="dropDownload == true"
                    class="drop-Download toggleLightpop"
                    :class="{ active: enableDarkTheme == true }"
                  >
                    <p class="w-full p-2">Domestic Download</p>
                    <p class="w-full p-2">International Download</p>
                  </div>
                </div>

                <div class="mt-2">
                  <div
                    class="flex gap-2 border-2 border-indigo-10 bg-gray-100 p-1 toggleLight"
                    :class="{ active: enableDarkTheme === true }"
                  >
                  
                    <div class="mt-1">
                      <importIcon/>
                    </div>
                  
                    <p class="text-sm">Import CSV</p>
                  </div>
                </div>

                <div class="add-order-btn bg-gradian mt-2">+ Add order</div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex gap-4 border-b-2 border-indigo-10 w-full mt-4 ">
          <div class="p-3 pl-0 border-b-2 border-transparent opacity-50  tabShipment sm:text-sm md:text-lg  md:font-semibold"
            :class="{ active: tabShipment == 'neworders' }"
            @click="changeshipmentsTab('neworders')">
          <span>
            New orders 
          </span>
          <span class="new-orders-tag ">0</span>
          </div>
         

          <div
            class="flex gap-2 p-3 pl-2 border-b-2 border-transparent opacity-50   relative tabShipment"
            :class="{ active: tabShipment == 'readship' }"
            @click="changeshipmentsTab('readship')"
          >
            <span class="sm:text-sm md:text-lg   md:font-semibold">Ready to ship</span>
            <div class="show-number bg-gradian mt-1">
              <p class="number">0</p>
            </div>
          </div>

          <div
            class="flex ml-5  opacity-50 p-3 pl-4  border-b-2 border-transparent relative tabShipment "
            :class="{ active: tabShipment == 'Shipment history' }"
            @click="changeshipmentsTab('Shipment history')"
          >
            <div class="icon-mask ">
              
               <div class="lottie-wrapper opacity-100 ">
                <lottie-player
                autoplay
                loop
                mode="normal"
                src="/lf30_editor_tcktstkr.json"
                style="width:82px"
              >
              </lottie-player>
               </div>
             
            </div>
            <span class="sm:text-sm md:text-lg  md:font-semibold ml-6">Shipment history</span>
          </div>
        </div>

        <section class="mt-4">
          <div class="for-justify-btwe relative ">
            <div class="flex gap-4 w-full">
              <img src="../assets/Search.png" class="h-4 mt-3" />
              <input
                placeholder="Search by criteria including name, reference, connote …"
                class=" inputs toggleLight"
                :class="{ active: enableDarkTheme == true }"
              />
            </div>

            <div >
              <div
                class="flex gap-4   filter-box toggleLight"
                :class="{ active: enableDarkTheme == true }"
                @click="openModal" >

                <div class="mt-2">
                  <filterIcon/>
                </div>
                
                <p>Filter</p>
              </div>

              <div
                v-if="isfiltermodal === true"
                class="filter-modal toggleLight"
                :class="{ active: enableDarkTheme == true }"
               
              >
                <div class="flex for-justify-btwe filter-modal-border">
                  <p class="font-semibold">Filter by</p>
                  <p class="pr-2 font-semibold" @click="openModal">x</p>
                </div>

                <div
                  class="toggleLight"
                  :class="{ active: enableDarkTheme == true }"
                >
                  <p>Date</p>

                  <div class="drop-option">
                    <div class="border-bottoms">
                      <div
                        @click="togglefilter"
                        class="border-2 border-indigo-10 p-2 mt-2 flex for-justify-btwe"
                      >
                        <span>{{ seletedDate }}</span>

                        <span class="mt-3">
                          <img
                            v-if="isdropDate === false"
                            src="../assets/dropdown.png"
                          />
                          <img
                            v-if="isdropDate === true"
                            src="../assets/dropdown.png"
                            class="rotate-img"
                          />
                        </span>
                      </div>
                      <div v-if="isdropDate === true">
                        <div class="border-b-2 border-indigo-10 pb-2">
                          <div
                            class="drop-select-option"
                            v-for="i in filter_by_date"
                            :key="i"
                          >
                            <p @click="getselectedvalue(i)" class="w-full">
                              {{ i }}
                            </p>
                          </div>
                        </div>

                        <div class="mt-4">
                          <span class="mt-4">
                            <input type="radio" @click="toggleopencalander" />
                          </span>
                          <span class="ml-2">Custom Date</span>
                        </div>
                        <div v-if="iscalandershow === true">
                          <div class="calander-input">
                            <input
                              type="date"
                              class="border-2 border-indigo-10 p-1 ml-4 mt-2 toggleLight"
                              :class="{ active: enableDarkTheme == true }"
                              v-model="coustomDate"
                              @change="setCustomdate"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-gradian p-3 rounded-lg text-white text-center mt-6"
                  @click="openModal"
                >
            
                  Apply Filter
                </div>
              </div>
            </div>
          </div>

          <section
            v-if="tabShipment === 'readship'"
            class="relative tab-content-wrapper  toggleLight "
             :class="{active :  enableDarkTheme===true}"
          >

            <div class="inside-content">
              <boxShare
                heading="You currently have no new ready ship"
                title="You can check for new ship by syncing with your ecommerce integration."
              />

            </div>
          </section>

          <section
            v-if="tabShipment === 'neworders'"
            class="relative tab-content-wrapper  toggleLight "
             :class="{active :  enableDarkTheme===true}"
          >
            <div class="inside-content">
              <boxShare
                toggleLight="false"
                heading="You currently have no new Shipment"
                title="You can check for new Shipment by syncing with your ecommerce integration."
              />
            </div>
          </section>

          <section
            v-if="tabShipment === 'Shipment history'"
            class="relative tab-content-wrapper  toggleLight "
             :class="{active :  enableDarkTheme===true}"
          >
            <div class="inside-content">
              <boxShare
                heading="You currently have no new orders"
                title="You can check for new orders by syncing with your ecommerce integration."
              />
            </div>
          </section>
        </section>
      </div>
    </div>

    <div class="shades w-full  h-full" v-if=" isfiltermodal === true" @click="closeModal"  >
    
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import boxShare from "../sharedComponents/contentBox.vue";
import NavBar from "../sharedComponents/navbar/navBar.vue";
import GreetingUser from '../sharedComponents/greetingUser.vue'
import downloadIcon from '../icons/download-icon.vue'
import importIcon from '../icons/import-icon.vue'
import filterIcon from '../icons/filter-icon.vue'


import * as LottiePlayer from "@lottiefiles/lottie-player";

export default {
  data() {
    return {
      findedtab: "Shipmentstab",
      Tab: "Shipments",
      date:'',
      tabShipment: "readship",
      seletedDate: "Past Week",
      coustomDate: "",
      filter_by_date: ["Past Week", "Past Month", "Past Year", "All Time"],

      //toggle modal
      isfiltermodal: false,
      dropUserLog: false,
      dropDownload: false,
      SideBarhideShow: false,
      iscalandershow: false,
      isdropDate: false,

   
    };
  },

  components: {
    boxShare,
    NavBar,
    GreetingUser,
    downloadIcon,
    importIcon,
    filterIcon
    
  },


  methods: {
   

    changeshipmentsTab(tabName) {
      this.tabShipment = tabName;
      
    },

    toggleUserLogo() {
      this.dropUserLog = !this.dropUserLog;
    },
    toggledropDownload() {
      this.dropDownload = !this.dropDownload;
    },
    openModal() {
      console.log('openModal')
      this.isfiltermodal = !this.isfiltermodal;
    },
    closeModal(){
      console.log('inside this.isfiltermodal === true')
      this.isfiltermodal =false   
    },
    toggleopencalander() {
      this.iscalandershow = !this.iscalandershow;
  
    },
    togglefilter() {
      this.isdropDate = !this.isdropDate;
    },
    setCustomdate() {
      this.seletedDate = this.coustomDate;
      this.isdropDate = !this.isdropDate;
    },
    getselectedvalue(value) {
      this.seletedDate = value;
      this.isdropDate = !this.isdropDate;
    },
    togglebar() {
      this.SideBarhideShow = !this.SideBarhideShow;
    },
 
    doLoginCheck()
    {
      if(this.isLoggedIn === false){

        this.$router.push('/')
      }
    },
    gettodayDate() {
      var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      var day = new Date();
      var dayName = days[day.getDay()];

      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const month = new Date();
    
      let date = new Date().getDate();

      let date_in_words=dayName+" ,"+ date+" "+monthNames[month.getMonth()];

      this.date=date_in_words;
    
    },

  
  },
     //["getUsername","getLoggedInState"]

     computed:{
    ...mapGetters({
      username:"getUsername",
      isLoggedIn:"getLoggedInState",
      enableDarkTheme:"getThemeStatus"
    }),
  },

  mounted(){

      this.doLoginCheck();
      this.gettodayDate();

}

 



};
</script>


<style>




input[type="radio"]:checked:after {
  width: 19px;
  height: 19px;
  border-radius: 15px;
  top: -4px;
  left: -1px;
  position: relative;
  background-color: #8e8e8e;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 3px solid #cbcbcb;
}



.bgwhite {
  background: white;
}
.shades{
  background: transparent;
    position: absolute;
    opacity: 0.4;
    height: calc(140% - 10px );
    top: 0px;
  
}
.animation {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    left: -18px;
    top:-9;
}
html{
  color: #393a60;
}
.main-tab-content-wrapper {
  background-color: #fafafa;
  
  width: 100%;
  margin-left: auto;
  margin-right: auto;

}
.show-number {
  
    font-size: 0.8em;
    color: white;
    border-radius: 5px;
    display: flex;
     text-align: center;
    justify-content: center;
    align-items: center;
     width: 20px; 
    height: 20px;
   
}
.number{

padding: 0px;
margin: 0px;

}
.tabShipment.active {
  color: #f97031;
  opacity: 1;
  transition: 0.4s ease;
  border-bottom: 2px solid #f97031;
}

.icon-mask{
  position: absolute;
    left: -21px;
    top: -17px;
}
.side-topnavbar {
  position: absolute;
  z-index: 1;
  top: 0px;
  left: -25px;
}
.toggleLight.active {
  background: rgb(0 0 0 / 94%);
  color: white;
  transition: 0.9s ease-in-out;
}
.new-orders-tag{
  border-radius: 0.313rem;
  color: black;
   border: 0.063rem solid #f0f2f7;
  background-color: #ffffff;
    margin-left: 5px;
    font-size: 0.8em;
    padding: 0px 5px 0px 5px;
}

.drop-menu {
  display: flex;
  border: 1px solid gainsboro;
}
.drop-select-option p {
  padding: 8px;
  padding-left: 4px;
}
.drop-select-option p:hover {
  background: gainsboro;
  transition: 0.9s ease;
}

.toggleLightpop.active {
  background: rgb(36, 36, 36);
  color: black;
  box-shadow: 2px 1px 6px rgb(239, 141, 36);
  position: absolute;
  transition: 0.7s ease;
  z-index: 1;
  color: white;
}
.toggleLightpop.active p:hover {
  background: rgb(255, 220, 220);
  color: black;
  transition: 0.9s ease-in-out;
}
.inputs {
  outline: none;
  width: 425px;
  background: #fafafa;
}

.bg-gradian {
  color: #f0f2f7;
  background: linear-gradient(106deg, #f97031 0%, #f1306b 100%);
}
.highlight-active {
  color: #f97031;
  border-bottom: 2px solid #f97031;
}
.add-order-btn {
  
  color: white;
  padding: 7px 11px 0px 11px;
  height: 39px;
  border-radius: 1px;
  cursor: pointer;
}

.add-order-btn:hover {
  background: transparent linear-gradient(105deg, #f36d34 0%, #f30f54 100%) 0%
    0% no-repeat padding-box;
}

.color {
  color: #393a60;
}

.filter-box {
  background: white;
  padding: 8px 8px 8px 8px;
}

.rotate-img {
  transform: rotate(3.142rad);
}

.list-side-info:hover {
  color: #f97031;
}

image {
  background: white;
}


.drop-Download {
  position: absolute;
  background: white;
  top: 40px;
  left: -47px;
  cursor: pointer;
  width: 192px;
  box-shadow: 8px 18px 33px #0000000b;
}

.for-justify-btwe {
  display: flex;
  justify-content: space-between;
}
.dark-light-btn {
  background: white;
  padding: 8px;
  box-shadow: inset 1px 1px 1px #00000029;
  border: 0.5px solid #f0f2f7;
  border-radius: 5px;
  cursor: pointer;
}
.dark-light-btn:hover {
  box-shadow: inset 3px 3px 3px #00000029;
}
.user-logo {
  padding: 8px 10px 8px 10px;
  color: white;
  border-radius: 50%;
  cursor: pointer;
}
.user-logo:hover {
  box-shadow: inset 1px 1px 1px #00000029;
  background: transparent linear-gradient(105deg, #fba37a 0%, #eb084c 100%) 0%
    0% no-repeat padding-box;
}
.tab-content-wrapper {
  background: white;
  height: 452px;
  margin-top: 29px;
  margin-left: auto;
  margin-right: auto;

}

.sm-icons {
  position: absolute;
  right: 2px;
  top: 28px;
  color: white;
}
.imgBg {
  padding: 12px 7px 5px 9px;
  justify-content: center;
  border-radius: 50%;
}
.imgBg:hover {
  background: rgb(237, 237, 237);
}
.imgs {
  border-radius: 50%;
  margin-top: -7px;
  padding: 1px 2px 3px 2px;
  width: 201%;
}
.date-select {
  padding: 8px 1px 8px 1px;
  margin-top: 10px;
  outline: gainsboro;
  border: 1px solid gainsboro;
}
.filter-modal {
  width: 247px;
  z-index: 1;
  right: 10px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 10px 20px 40px #0000000d;
  top: 47px;
  padding: 9px 5px 13px 10px;
  position: absolute;
}
.filter-modal-border {
  padding-bottom: 8px;
  border-bottom: 1px solid gainsboro;
}
.user-heading {
  margin-top: 105px;
}


@media only screen and (max-width: 600px) {

  .side-topnavbar
  {
    position:fixed;
    z-index:1;
    top:0px;
    left:0;
    height:100%;
  }
  .toggle-sm {
    display: none;
  }
  .main-tab-content-wrapper {
    min-width: 452px;
  }
  .inputs {
    outline: none;
    width: 235px;
  }



 
  .dash-board-main-content-wrapper {
    margin-left: auto;
    margin-right: auto;
  }
  .add-order-btn-round button {
    color: #f97031;
    font-weight: bold;
    font-size: 2em;
  }
  .sm-icons {

  top: 18px;
 
}

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .main-tab-content-wrapper {
    width: 92%;
  }

  .dash-board-main-content-wrapper {
    margin-left: auto;
    margin-right: auto;
  }
  .toggle-sm{
    display: none;
  }

.add-order-btn {
  padding: 4px 19px 0px 20px;
    height: 32px;
    width: 131px;
}
.sm-icons {

top: 15px;

}

}


/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

  .dash-board-main-content-wrapper {
    margin-left: auto;
    margin-right: auto;
    width: 718px;
  }
  .main-tab-content-wrapper {
    width: 100%;
    min-width: 452px;
  }
  .user-heading {
    margin-top: 0px;
  }
  .toggle-sm {
    display: none;
  }
  .sm-icons {
    display: flex;
  }

 
} /* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

  .toggle-sm {
    width: 445px;
  }
  

  .dash-board-main-content-wrapper {
    min-width: 76%;
    margin-left: auto;
    margin-right: auto;
  }

}

@media only screen and (min-width: 1300px) {
.toggle-sm {
    display: flex;
  } 
  .sm-icons {
    display: none;
  }
  .main-tab-content-wrapper {
    min-width: 452px;
  }
 

}

@media only screen and (min-width: 1400px) {
  .dash-board-main-content-wrapper {
    min-width: 81% !important;
  
  }

  .main-tab-content-wrapper {
    min-width: auto;
  }
 
 .toggle-sm{
  width: 427px;
 }
  html{
    font-size: 1rem;
  }
  .inputs{
    width: 516px;
  }
 
  .tab-content-wrapper {
    min-height:520px;
  }

  .main-tab-content-wrapper {
    min-width: 452px;
  }
  .dash-board-main-content-wrapper {
    min-width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  .icon-mask {
    position: absolute;
    left: -24px;
    top: -21px;
  }
  
 

}
</style>
