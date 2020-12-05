<template>
  <div class="home">
    
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
<br>
<br>
<div class="content">

</div>
  </div>
</template>

<script>

</script>

<style scoped>
 .home{
   height: auto;
   background-image: url("../assets/Background.jpg");
   background-repeat: no-repeat;
   background-position: center center;
 }
 .box1{
   margin-top: 100px;
   margin-left: -100px;
   background-color: #363636;
 }
 .box2{
   height:500px;
   background-color: whitesmoke;
 }
 .title{
     margin-top:120px;
 }
</style>
