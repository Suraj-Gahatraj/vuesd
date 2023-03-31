<template>
  <div>
    <div
      class="for-justify-btwe user-heading pl-0 pt-2 p-6 pr-0 pb-3 border-b-2 border-indigo-10">
      <div class="pl-0 p-6 pt-5 pb-4 w-100">
        <h1 class="font-semibold  ">
          Welcome back hello {{username }}
        </h1>
        <p class=" mt-1">{{ date }}</p>
      </div>
      <div class="mt-1">
        <div class="flex gap-5">
          <div class="hover:animate-bounce dark-light-btn  toggleLightmoonicon " :class="{active :  enableDarkTheme===true}"
                    @click="darkLightToggle">
                    <darkModeIcon/>
                  </div>
          <div class="relative flex" @click="toggleUserLogo">
            <div class="user-logo bg-gradian">BK</div>
            <div class="mt-4 ml-2">
              <img src="../assets/dropdown.png" v-if="dropUserLog === false" />
              <img
                src="../assets/dropdown.png"
                class="rotate-img"
                v-if="dropUserLog === true"
              />
            </div>

            <div
              v-if="dropUserLog === true"
              class="drop-account toggleLight " :class="{active :  enableDarkTheme===true}" >
              <p class="p-3">Settings</p>
              <router-link to="/">
                <p class="p-3">Logout</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters , mapActions } from "vuex";
import darkModeIcon from '../icons/dark-mode-icon.vue'

export default {
  data() {
    return {
      userName: "",
      dropUserLog: false,
      date: "",
      isLightmode:false
    };
  },
  components:{
    darkModeIcon
  },

  methods: {
    ...mapActions(['theme']),
    toggleUserLogo() {
      this.dropUserLog = !this.dropUserLog;
    },

    doLoginCheck() {
      if (this.isLoggedIn === false) {
        this.$router.push("/");
      }

    },
    darkLightToggle(){
      this.isLightmode = !this.isLightmode
      this.theme(this.isLightmode)
      console.log('imside componet  darkLightToggle ' , this.isLightmode)
      
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

      let date_in_words =
        dayName + ",   "  + date + "  " + monthNames[month.getMonth()];

      this.date = date_in_words;
    },
  },

  computed: {
    ...mapGetters({
      username: "getUsername",
      isLoggedIn: "getLoggedInState",
      enableDarkTheme:"getThemeStatus"
    }),
  },


  mounted() {
    this.doLoginCheck();
    this.gettodayDate();
  },
};
</script>

<style >


.for-justify-btwe {
  display: flex;
  justify-content: space-between;
}
.toggleLightmoonicon.active{
  box-shadow: 2px 1px 44px rgb(239, 141, 36);
  background: black;
}


.toggleLightBtn.active {
  padding: 8px;
  background: transparent;
  box-shadow: inset 3px 3px 6px gainsboro;
  border: 0.5px solid #f0f2f7;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.9s ease;
}
.drop-account {
  position: absolute;
  background: white;
  top: 43px;
  left: -140px;
  cursor: pointer;
  z-index: 1;
  width: 200px;
  padding: 2px 6px 2px 4px;
  box-shadow: 0px 18px 26px #0000000b;
}
.drop-account p:hover {
  background: rgb(178, 178, 178);
  color: black;
}
</style>
