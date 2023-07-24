

<template>
  <div>
    <ifx-navbar application-name="Application name" fixed="true">
    <ifx-navbar-menu-item  slot="left-menu-item">Menu Item</ifx-navbar-menu-item>
    <ifx-navbar-menu-item  slot="left-menu-item">Menu Item</ifx-navbar-menu-item>
 
    <ifx-dropdown-menu slot="dropdown-menu">
      <ifx-dropdown-item>Menu Item</ifx-dropdown-item>
      <ifx-dropdown-item>Menu Item</ifx-dropdown-item>
      <ifx-dropdown-item>Menu Item</ifx-dropdown-item>
    </ifx-dropdown-menu>

    <ifx-search-bar size="default" slot="search-bar-right" is-open="false" show-close-button="true"></ifx-search-bar>

    <ifx-navbar-menu-item hide-label="false" slot="right-menu-item">Right One</ifx-navbar-menu-item>
    <ifx-navbar-menu-item hide-label="false" slot="right-menu-item">Right Two</ifx-navbar-menu-item>
    <ifx-navbar-menu-item hide-label="false" slot="right-menu-profile-item">Tisho</ifx-navbar-menu-item>
  </ifx-navbar>

  </div>
</template>

<script setup>



</script>


 