<template>
      <div class="logo-ham-menu absolute ">
        <div v-if="SideBarhideShow === false" class="flex gap-2 p-6 pl-0">
          <img src="../../assets/hamburget menu icon.png" class="h-4 mt-5" @click=togglebar />
          <img src="../../assets/Logo.png" class="h-16" />
        </div>

        <div v-if="SideBarhideShow === true" class="shadow-2xl side-topnavbar ">
            <NavBar @togglenav="togglebar"/>
        </div>
      </div>
      <div class="top-main-logo">
         <NavBar/>
      </div>
</template>

<script>
import NavBar from '../navBarcomponent.vue';
import { mapGetters } from "vuex";

export default {
  components: { NavBar},

  data() {
    return {
      SideBarhideShow:false,
    };
  },


  methods: {
    togglebar(){

      this.SideBarhideShow = !this. SideBarhideShow

    }
   
   },
   computed: {
    ...mapGetters({
      enableDzrkTheme:"getThemeStatus"
    }),
  },

 
};
</script>

<style  scoped>
.side-topnavbar{
  position: absolute;
  z-index: 1;
  top: 0px;
  left: -25px;
  transition: 0.9s ease-in-out;
}

.toggletheme.active {
  background: rgb(0 0 0 / 94%);
  color: white;
  transition: 0.9s ease-in-out;

}

</style>
