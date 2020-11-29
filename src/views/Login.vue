<template>
  <div class="login">
    <div class="columns">
  <div class="column is-2"></div>
  <div class="column">
    <div class="box box1">
      <div class="box box2">
          <div class="columns">
              <div class="column is-3"></div>
              <div class="column">
                <section>
        <b-tabs position="is-centered" class="block">
            <b-tab-item label="Sign up">
              <div class="forma">
                  <div class="field">
    <p class="control">
      <input class="input is-dark" type="text" placeholder="First Name...">
    </p>
  </div>
  <div class="field">
    <p class="control">
      <input class="input is-dark" type="text" placeholder="Last Name...">
    </p>
  </div>
  <div class="field">
    <p class="control has-icons-left">
      <input class="input is-dark" type="text" placeholder="Username...">
      <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
      </span>
    </p>
  </div>
  <div class="field">
    <p class="control has-icons-left">
      <input class="input is-dark" type="password" placeholder="Password">
      <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
      </span>
    </p>
  </div>
  <div class="field">
    <p class="control has-icons-left">
      <input class="input is-dark" type="password" placeholder="Repeat password">
      <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
      </span>
    </p>
  </div>
  <b-button type="is-dark" outlined>Sign up</b-button>
                </div>
            </b-tab-item>
            <b-tab-item label="Log in">
              <div class="forma">
                  <div class="field">
    <p class="control has-icons-left">
      <input class="input is-dark" type="text" placeholder="Username">
      <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
      </span>
    </p>
  </div>
  <div class="field">
    <p class="control has-icons-left">
      <input class="input is-dark" type="password" placeholder="Password">
      <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
      </span>
    </p>
  </div>
  <b-button type="is-dark" outlined>Log in</b-button>
                </div>
            </b-tab-item>
        </b-tabs>
                </section>
              </div>
              <div class="column is-3"></div>
          </div>
        
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

</script>

<style scoped>
 .login{
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
 .box2 p{
   margin-top:50px;
 }
 .field p{
   margin-top:0px;
 }
 .forma{
   margin-top:50px;
 }
</style>
