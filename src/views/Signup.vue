<template>
  <div class="home">
    <div class="columns">
  <div class="column is-2 type is-danger"></div>
  <div class="column">
    <div class="box box1">
      <div class="box box2">
          <section class="upis">
        <b-steps
        type="is-danger"
            
            :animated="isAnimated"
            :rounded="isRounded"
            :has-navigation="hasNavigation"
            :icon-prev="prevIcon"
            :icon-next="nextIcon"
            :v-model="activeStep"
            :label-position="labelPosition"
            :mobile-mode="mobileMode">
            <b-step-item step="1" label="Profile" :clickable="isStepsClickable">
                <section class="tekst">
                    <h1 class="title has-text-centered">Profile</h1>
                    <b-field>
            <input class="input is-danger" type="text" placeholder="First name...">
                    </b-field>
                    <b-field>
            <input class="input is-danger" type="text" placeholder="Last name...">
                    </b-field>
            <b-field>
        <b-datepicker
            type="is danger"
            placeholder="D.O.B"
            :min-date="minDate"
            :max-date="maxDate">
        </b-datepicker>
    </b-field>
        
                </section>
                
            </b-step-item>

            <b-step-item step="2" label="Account" :clickable="isStepsClickable">
                <section class="tekst">
                    <h1 class="title has-text-centered">Account</h1>
                    <div class="field">
    <p class="control has-icons-left">
      <input class="input is-danger" type="text" placeholder="Username...">
      <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
      </span>
    </p>
  </div>
                    <div class="field">
    <p class="control has-icons-left">
      <input class="input is-danger" type="password" placeholder="Password...">
      <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
      </span>
    </p>
  </div>
  <div class="field">
    <p class="control has-icons-left has-icons-right">
      <input class="input is-danger" type="password" placeholder="Confirm Password...">
      <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span>
    </p>
  </div>
                </section>
                
                
            </b-step-item>

            <b-step-item step="3" label="Finish" :clickable="isStepsClickable" disabled>
                <h1 class="title has-text-centered">Finish</h1>
                Click the button bellow to recieve a verification e-mail!
                <b-button type="is-danger" outlined>Verify account</b-button>
            </b-step-item>

            <template
                v-if="customNavigation"
                slot="navigation"
                slot-scope="{previous, next}">
                <b-button
                    outlined
                    type="is-danger"
                    icon-pack="fas"
                    icon-left="backward"
                    :disabled="previous.disabled"
                    @click.prevent="previous.action">
                    Previous
                </b-button>
                <b-button
                    outlined
                    type="is-success"
                    icon-pack="fas"
                    icon-right="forward"
                    :disabled="next.disabled"
                    @click.prevent="next.action">
                    Next
                </b-button>
            </template>
        </b-steps>
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
        data() {
            const today = new Date()

            return {
                date: new Date(),
                minDate: new Date(today.getFullYear() - 90, today.getMonth(), today.getDate()),
                maxDate: new Date(today.getFullYear() - 4, today.getMonth(), today.getDate()),

                activeStep: 0,

                showSocial: false,
                isAnimated: true,
                isRounded: true,
                isStepsClickable: true,

                hasNavigation: true,
                customNavigation: false,
                isProfileSuccess: false,

                prevIcon: 'chevron-left',
                nextIcon: 'chevron-right',
                labelPosition: 'bottom',
                mobileMode: 'minimalist'
            }
        }
    }
</script>

<style scoped>
 .home{
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
 .title{
     margin-top:120px;
 }
 .tekst{
     margin-top: -60px;
     margin-left:153px;
     width:600px;
 }
</style>
