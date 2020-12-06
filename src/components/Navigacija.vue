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
            <b-navbar-item href="#about">
                About
            </b-navbar-item>
            <b-navbar-item href="#contact">
                Contact
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/planner' }">
                Planner
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <b-button type="is-dark" tag="router-link" :to="{ path: '/login' }">Log in</b-button>
            </b-navbar-item>
        </template>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>

</script>

<style>

</style>