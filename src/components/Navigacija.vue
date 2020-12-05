<template>
  <div class="Navigacija">
      <b-navbar class="type is-light fixed-top">
      <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <i class="fas fa-dumbbell"></i>
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Home
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/about' }">
                About
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/planner' }">
                Planner
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/contact' }">
                Contact
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <b-button type="is-dark" tag="router-link" :to="{ path: '/login' }">Login</b-button>
                    
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>