<template>
  <div class="contact" id="contact">
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
                         placeholder="JohnKennedy@gmail.com" class="is-dark">
                    </b-input>
                </b-field>
                <b-field label="Message">
                    <b-input class="is-dark" maxlength="200" type="textarea"  placeholder="Start typing..."></b-input>
                </b-field>
    </section>
      </div>
    </div>
  </div>
  <div class="column is-2"></div>
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
   background-image: url("../assets/Background-contact.jpg");
 }
 .box1{
   margin-top: 100px;
   background: rgba(0, 0, 0, 0.4);
 }
 .box2{
   height:500px;
   background: rgba(245, 245, 245, 0.9);
 }
 section{
     margin-left:260px;
     width:500px;
 }
</style>