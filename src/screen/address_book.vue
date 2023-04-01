<template>
  <div class="main-tab-content-wrapper  
    toggleLight" :class="{active : enableDarkTheme===true}"
  
    >
    <div class="lg:flex gap-2 p-1 ml-2">
      <NavBar/>
      <div
        class="dash-board-main-content-wrapper pl-0 pt-0 mt-2"
       >
        <div class="">
          <div>
            <GreetingUser/>
    
            <div class="for-justify-btwe  relative pr-0 ">
              <div class="pl-0 p-6 pt-5   w-100">
                <h1 class="font-semibold text-1xl">Address book</h1>
                <p class=" pt-1 sm:mt-6 md:mt-0 lg:mt-0 ">
                  You can check or create your new orders , ready toManifest Address book track an orders
                </p>
              </div>

              <div class="sm-icons flex gap-1  ">
                <div class="hover:animate-bounce imgBg">
                  <img src="../assets/download.png" class="h-4" />
                </div>
                <div class="hover:animate-bounce imgBg">
                  <img src="../assets/importFile_icon.png" class="h-4" />
                </div>
                <div class="hover:animate-bounce imgBg">
                  <div class="bg-gradian text-center imgs">+</div>
                </div>
              </div>

              
            </div>
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
            
            class="relative tab-content-wrapper  toggleLight "
             :class="{active :  enableDarkTheme===true}"
          >

            <div class="inside-content">
              <boxShare
                heading="You currently have no new Address book"
                title="You can check for Address book by syncing with your ecommerce integration."
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




export default {
  data() {
    return {
      date:'',
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


};
</script>



