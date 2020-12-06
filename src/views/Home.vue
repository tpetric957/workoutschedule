<template>
  <div class="home">
    <section class="uvod">
      <div class="columns">
    <div class="column is-2 type is-danger"></div>
    <div class="column">
      <div class="box box1">
        <div class="box box2">
          <p class="title is-1 is-spaced">Plan your workout today!</p>
  <p class="subtitle is-3">Click the button below to get started</p>
  <b-button tag="router-link" :to="{ path: '/planner' }" type="is-dark" outlined>Start</b-button>
        </div>
      </div>
    </div>
    <div class="column is-6"></div>
  </div>
    </section>
<div class="content">
  <About/>
  <Contact/>
</div>
  </div>
</template>

<script>
import About from '@/components/About.vue';
import Contact from "@/components/Contact.vue";
export default {
  components: {
    About,
    Contact
  },
};
</script>

<style scoped>
 .uvod{
   height: 810px;
   background-image: url("../assets/Background.jpg");
   background-repeat: no-repeat;
   background-position: center top;
 }
 .box1{
   margin-top: 100px;
   margin-left: -100px;
   background: rgba(0, 0, 0, 0.4);
 }
 .box2{
   height:500px;
   background: rgba(245, 245, 245, 0.9);
 }
 .title{
     margin-top:120px;
 }
</style>
