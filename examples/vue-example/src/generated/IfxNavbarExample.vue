<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import { IfxNavbar, IfxNavbarItem, IfxNavbarProfile, IfxSearchBar } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-navbar
      show-logo-and-appname="true"
      application-name="Application name"
      fixed="false"
      logo-href="http://google.com"
      logo-href-target="_self">
      <ifx-navbar-item
        icon=""
        slot="left-item"
        target="_self"
        href=""
        hide-on-mobile="true">
        <ifx-navbar-item icon="">
          <ifx-navbar-item>
            <ifx-navbar-item
              href="http://google.com"
              target="_blank">
              Link Layer 3 Nested Item 1
            </ifx-navbar-item>
            <ifx-navbar-item>
              Layer 3 Nested Item 2
            </ifx-navbar-item>
            <ifx-navbar-item>
              Layer 3 Nested Item 3
            </ifx-navbar-item>
            <ifx-navbar-item>
              Layer 3 Nested Item 4
            </ifx-navbar-item>
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Nested Item 3
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Nested Item 4
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Nested Item 5
          </ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Item 1
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Item 2
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Item 3
          </ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item>
          Nested Item 3
        </ifx-navbar-item>
        <ifx-navbar-item>
          <ifx-navbar-item>
            Nested Item 4
          </ifx-navbar-item>
        </ifx-navbar-item>
      </ifx-navbar-item>
      <ifx-navbar-item
        href=""
        target="_self"
        slot="left-item"
        icon=""
        show-label="true">
        Menu Item
      </ifx-navbar-item>
      <ifx-navbar-item slot="left-item">
        <ifx-navbar-item>
          Item1
        </ifx-navbar-item>
        <ifx-navbar-item>
          Item2
        </ifx-navbar-item>
      </ifx-navbar-item>
      <ifx-search-bar slot="search-bar-left" />
      <ifx-navbar-item
        number-indicator=""
        slot="right-item"
        target="_blank"
        href="http://google.com"
        hide-on-mobile=""
        show-label="false"
        icon="image-16" />
      <ifx-navbar-item
        dot-indicator="false"
        slot="right-item"
        hide-on-mobile=""
        show-label="false"
        icon="image-16" />
      <ifx-navbar-profile
        user-name=""
        slot="right-item"
        image-url=""
        show-label="true"
        href=""
        target="_self"
        alt="profile image" />
    </ifx-navbar>
  </div>
${'</'}template>`;

onMounted(() => {
  nextTick(() => {
    Prism.highlightAll();
  });
});
</script>

<template>
  <div>
    <ifx-navbar
      show-logo-and-appname="true"
      application-name="Application name"
      fixed="false"
      logo-href="http://google.com"
      logo-href-target="_self">
      <ifx-navbar-item
        icon=""
        slot="left-item"
        target="_self"
        href=""
        hide-on-mobile="true">
        <ifx-navbar-item icon="">
          <ifx-navbar-item>
            <ifx-navbar-item
              href="http://google.com"
              target="_blank">
              Link Layer 3 Nested Item 1
            </ifx-navbar-item>
            <ifx-navbar-item>
              Layer 3 Nested Item 2
            </ifx-navbar-item>
            <ifx-navbar-item>
              Layer 3 Nested Item 3
            </ifx-navbar-item>
            <ifx-navbar-item>
              Layer 3 Nested Item 4
            </ifx-navbar-item>
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Nested Item 3
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Nested Item 4
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Nested Item 5
          </ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Item 1
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Item 2
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Item 3
          </ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item>
          Nested Item 3
        </ifx-navbar-item>
        <ifx-navbar-item>
          <ifx-navbar-item>
            Nested Item 4
          </ifx-navbar-item>
        </ifx-navbar-item>
      </ifx-navbar-item>
      <ifx-navbar-item
        href=""
        target="_self"
        slot="left-item"
        icon=""
        show-label="true">
        Menu Item
      </ifx-navbar-item>
      <ifx-navbar-item slot="left-item">
        <ifx-navbar-item>
          Item1
        </ifx-navbar-item>
        <ifx-navbar-item>
          Item2
        </ifx-navbar-item>
      </ifx-navbar-item>
      <ifx-search-bar slot="search-bar-left" />
      <ifx-navbar-item
        number-indicator=""
        slot="right-item"
        target="_blank"
        href="http://google.com"
        hide-on-mobile=""
        show-label="false"
        icon="image-16" />
      <ifx-navbar-item
        dot-indicator="false"
        slot="right-item"
        hide-on-mobile=""
        show-label="false"
        icon="image-16" />
      <ifx-navbar-profile
        user-name=""
        slot="right-item"
        image-url=""
        show-label="true"
        href=""
        target="_self"
        alt="profile image" />
    </ifx-navbar>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
