<template>
  <div class="contact">
    <div class="columns">
  <div class="column is-2"></div>
  <div class="column">
    <div class="box box1">
      <div class="box box2">
        <p class="title is-1 is-spaced">Having trouble with our page?</p>
<p class="subtitle is-3">Please contact us!</p>
    <section>
        <hr>
        <b-field label="Email">
                    <b-input type="email"
                         placeholder="JohnKennedy@gmail.com">
                    </b-input>
                </b-field>
                <b-field label="Message">
                    <b-input maxlength="200" type="textarea"  placeholder="Start typing..."></b-input>
                </b-field>
    </section>
      </div>
    </div>
  </div>
  <div class="column is-2">Auto</div>
</div>
<br>
<br>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 .contact{
   height: auto;
   background-color: #363636;
 }
 .box1{
   margin-top: 100px;
   background-color: whitesmoke;
 }
 .box2{
   height:500px;
 }
 section{
     margin-left:220px;
     width:500px;
 }
</style>