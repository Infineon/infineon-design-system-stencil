

<template>
  <div>
    <ifx-navbar  show-logo-and-appname="true" application-name="App name" fixed="false" logo-href="http://google.com" logo-href-target="_self">
    <ifx-navbar-item icon="calendar16" slot="left-item" target="" href="" >
      Menu Item 1
      <ifx-navbar-item icon="calendar16">
        Layer 1 Nested Item 1
        <ifx-navbar-item>
          Layer 2 Nested Item 2
          <ifx-navbar-item href="http://google.com" target="_blank">Link Layer 3 Nested Item 1</ifx-navbar-item>
          <ifx-navbar-item>Layer 3 Nested Item 2</ifx-navbar-item>
          <ifx-navbar-item>Layer 3 Nested Item 3</ifx-navbar-item>
          <ifx-navbar-item>Layer 3 Nested Item 4</ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item >Layer 2 Nested Item 3</ifx-navbar-item>
        <ifx-navbar-item>Layer 2 Nested Item 4</ifx-navbar-item>
        <ifx-navbar-item>Layer 2 Nested Item 5</ifx-navbar-item>
      </ifx-navbar-item>

      <ifx-navbar-item>
        Layer 1 Nested Item 2
        <ifx-navbar-item>Layer 2 Item 1</ifx-navbar-item>
        <ifx-navbar-item>Layer 2 Item 2</ifx-navbar-item>
        <ifx-navbar-item>Layer 2 Item 3</ifx-navbar-item>
      </ifx-navbar-item>

      <ifx-navbar-item>Nested Item 3</ifx-navbar-item>

      <ifx-navbar-item>
        Layer 1 Nested Item 4
        <ifx-navbar-item>Nested Item 4</ifx-navbar-item>
      </ifx-navbar-item>

    </ifx-navbar-item>

    <ifx-navbar-item href="http://google.com" target="_blank" slot="left-item" icon="calendar16" show-label="true">
      Menu Item 2
    </ifx-navbar-item>

    <ifx-navbar-item slot="left-item">
      More
      <ifx-navbar-item>Item1</ifx-navbar-item>
      <ifx-navbar-item>Item2</ifx-navbar-item>
    </ifx-navbar-item>

    <ifx-search-bar slot="search-bar-left" is-open="false"></ifx-search-bar>

    <ifx-navbar-item slot="right-item" target="_blank" href="http://google.com" hide-on-mobile="false" show-label="false" icon="cartf16">Right Item</ifx-navbar-item>
    <ifx-navbar-item slot="right-item" hide-on-mobile="true" show-label='true' icon="airplane16">
      Right Item
      <ifx-navbar-item>
        Nested one
        <ifx-navbar-item>
          Nested one
          <ifx-navbar-item>
            Nested one
            <ifx-navbar-item>Final one</ifx-navbar-item>
          </ifx-navbar-item>
        </ifx-navbar-item>
      </ifx-navbar-item>
    </ifx-navbar-item>

    <ifx-navbar-profile slot="right-item" image-url="https://i.pinimg.com/originals/82/d4/92/82d4926dcf09dd4c73eb1a6c0300c135.jpg" show-label="true" href="" target="_blank">
      User
      <ifx-navbar-item>Item</ifx-navbar-item>
      <ifx-navbar-item>Item</ifx-navbar-item>
      <ifx-navbar-item>Item</ifx-navbar-item>
      <ifx-navbar-item>Item</ifx-navbar-item>
    </ifx-navbar-profile>
  </ifx-navbar>
  </div>
</template>

<script setup>



</script>


 