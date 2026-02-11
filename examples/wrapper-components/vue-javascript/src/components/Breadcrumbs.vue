<template>
  <div class="component">
    <h2>Breadcrumb</h2>
    <ifx-breadcrumb>
      <ifx-breadcrumb-item>
        <ifx-breadcrumb-item-label slot="label">Breadcrumb 1</ifx-breadcrumb-item-label>
        <ifx-dropdown-menu>
          <ifx-dropdown-item href="http://google.com">Google</ifx-dropdown-item>
          <ifx-dropdown-item href="http://bing.com">Bing</ifx-dropdown-item>
          <ifx-dropdown-item href="http://yahoo.com">Yahoo</ifx-dropdown-item>
          <ifx-dropdown-item href="http://naver.com">Naver</ifx-dropdown-item>
        </ifx-dropdown-menu>
      </ifx-breadcrumb-item>

      <ifx-breadcrumb-item>
        <ifx-breadcrumb-item-label slot="label">Breadcrumb 2</ifx-breadcrumb-item-label>
        <ifx-dropdown-menu>
          <ifx-dropdown-item href="http://google.com">Google</ifx-dropdown-item>
          <ifx-dropdown-item href="http://bing.com">Bing</ifx-dropdown-item>
          <ifx-dropdown-item href="http://yahoo.com">Yahoo</ifx-dropdown-item>
          <ifx-dropdown-item href="http://naver.com">Naver</ifx-dropdown-item>
        </ifx-dropdown-menu>
      </ifx-breadcrumb-item>

      <ifx-breadcrumb-item>
        <ifx-breadcrumb-item-label slot="label" icon="chipAi16" href="http://google.com">Breadcrumb
          3</ifx-breadcrumb-item-label>
      </ifx-breadcrumb-item>
    </ifx-breadcrumb>
  </div>
</template>