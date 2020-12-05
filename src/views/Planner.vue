<template>
    <div class="planner">
    <div class="columns">
  <div class="column is-2 type is-danger"></div>
  <div class="column">
    <div class="box box1">
      <div class="box box2">
        <p class="title is-1 is-spaced">Workout Planner</p>
<p class="subtitle is-3">Create your ideal workout plan</p>
      <section>
        <b-tabs position="is-centered" class="block">
            <b-tab-item label="Monday">
              <Picker/>
            </b-tab-item>
            <b-tab-item label="Tuesday">
              <Picker/>
            </b-tab-item>
            <b-tab-item label="Wednesday">
              <Picker/>
            </b-tab-item>
            <b-tab-item label="Thursday">
              <Picker/>
            </b-tab-item>
            <b-tab-item label="Friday">
              <Picker/>
            </b-tab-item>
        </b-tabs>
    </section>
      </div>
    </div>
  </div>
  <div class="column is-2"></div>
</div>
  </div>
</template>

<script>
import Picker from '@/components/Picker.vue';

export default {
  components: {
    Picker
  },
};
</script>

<style scoped>
 .planner{
   background-color: #363636;
	background-image: url("../assets/Background-picker.jpg");
  background-position: center;
  height:1080px;
 }
 .box1{
   margin-top: 100px;
   background-color: whitesmoke;
 }
</style>