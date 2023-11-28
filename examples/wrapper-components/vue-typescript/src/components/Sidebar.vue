<template>
  <div class="app">
    <ifx-sidebar application-name="Application name"  id="sidebar">
      <ifx-sidebar-item active="false">
        Header Section
        <ifx-sidebar-item icon="image-16" active="false" >
          Second layer
          <ifx-sidebar-item target="_blank" active="true" icon="image-16">
          3rd layer Menu Item
          </ifx-sidebar-item>

          <ifx-sidebar-item target="_blank" active="false" icon="image-16" value="thisPage">
          This Page
          </ifx-sidebar-item>

          <ifx-sidebar-item target="_blank" active="false" icon="image-16">
          3rd layer Menu Item
          </ifx-sidebar-item>
        </ifx-sidebar-item>

        <ifx-sidebar-item icon="image-16" active="false">
          Second layer
          <ifx-sidebar-item target="_blank" icon="image-16" active="false">
          Menu Item
          </ifx-sidebar-item>
        </ifx-sidebar-item>

        <ifx-sidebar-item icon="image-16" active="false">
          Second layer
          <ifx-sidebar-item target="_blank" icon="image-16" active="false">
          Menu Item
          </ifx-sidebar-item>
        </ifx-sidebar-item>
      </ifx-sidebar-item>
      
      <!-- header section -->
      <ifx-sidebar-item active="false">
      Header Section
      <ifx-sidebar-item icon="image-16" active="false">
        Menu Item
        <ifx-sidebar-item active="false" target="_blank" icon="image-16">
        Sub Menu Item
        </ifx-sidebar-item>
        <ifx-sidebar-item target="_blank" icon="image-16" value="thisPage">
        This one too
        </ifx-sidebar-item>
        <ifx-sidebar-item target="_blank" icon="image-16">
        Menu Item
        </ifx-sidebar-item>
      </ifx-sidebar-item>
      <ifx-sidebar-item icon="image-16">
        Menu Item
        <ifx-sidebar-item target="_blank" icon="image-16">
        Menu Item
        </ifx-sidebar-item>
      </ifx-sidebar-item>
      <ifx-sidebar-item icon="image-16">
        Menu Item
        <ifx-sidebar-item target="_blank" icon="image-16">
        Menu Item
        </ifx-sidebar-item>
      </ifx-sidebar-item>
      </ifx-sidebar-item>

      <!-- header section -->
      <ifx-sidebar-item>
      Header Section
      <ifx-sidebar-item icon="image-16">
        Menu Item
        <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
        Menu Item
        </ifx-sidebar-item>
        <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
        Menu Item
        </ifx-sidebar-item>
        <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
        Menu Item
        </ifx-sidebar-item>
      </ifx-sidebar-item>
      <ifx-sidebar-item icon="image-16">
        Menu Item
        <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
        Menu Item
        </ifx-sidebar-item>
      </ifx-sidebar-item>
      <ifx-sidebar-item icon="image-16">
        Menu Item
        <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
        Menu Item
        </ifx-sidebar-item>
      </ifx-sidebar-item>
      </ifx-sidebar-item>
    </ifx-sidebar>
  </div>
</template>

<script setup>
    window.addEventListener('load', () => { 
      const sidebar = document.getElementById('sidebar')
      sidebar.addEventListener('ifxSidebar', (e) => { 
        if(e.detail.value === 'thisPage') { 
          e.detail.component.setAttribute('active', 'true')
          //do something
        }
      })
    })


</script>


<style scoped>
.app {

}
</style>
