<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxButton, IfxNavbar, IfxNavbarItem, IfxNavbarProfile, IfxSearchBar, IfxTextField } from '@infineon/infineon-design-system-vue';

const applicationName = ref("Application name");
const showLogoAndAppname = ref(true);
const logoHref = ref("http://google.com");
const logoHrefTargetOptions = ["_self","_blank","_parent"];
const logoHrefTargetIndex = ref(0);

const handleApplicationNameChange = (nextValue: string) => { applicationName.value = nextValue; };
const handleShowLogoAndAppnameChange = () => { showLogoAndAppname.value = !showLogoAndAppname.value; };
const handleLogoHrefChange = (nextValue: string) => { logoHref.value = nextValue; };
const handleLogoHrefTargetChange = () => { logoHrefTargetIndex.value = (logoHrefTargetIndex.value + 1) % logoHrefTargetOptions.length; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "applicationName": applicationName.value,
  "showLogoAndAppname": showLogoAndAppname.value,
  "logoHref": logoHref.value,
  "logoHrefTarget": logoHrefTargetOptions[logoHrefTargetIndex.value],
}));

const handleNavbarMobileMenuIsOpen = (event: CustomEvent) => {
  console.log('ifxNavbarMobileMenuIsOpen:', event);
  // Add your handler logic here
};

const handleNavItem = (event: CustomEvent) => {
  console.log('ifxNavItem:', event);
  // Add your handler logic here
};

const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event);
  // Add your handler logic here
};

const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event);
  // Add your handler logic here
};

const getInputValue = (event: Event) => String((event.target as HTMLInputElement | null)?.value ?? "");

const formatPropValueForCode = (name: string, value: unknown): string => {
  if (typeof value === 'boolean') return ':' + name + '="' + String(value) + '"';
  if (typeof value === 'number') return ':' + name + '="' + String(value) + '"';
  if (value === null) return ':' + name + '="null"';
  if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
    const escaped = JSON.stringify(value).replace(/'/g, "\\'");
    return ":" + name + "='" + escaped + "'";
  }
  const escaped = String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  return name + '="' + escaped + '"';
};

const controlledPropsCode = computed(() => [
  ["applicationName", applicationName.value],
  ["showLogoAndAppname", showLogoAndAppname.value],
  ["logoHref", logoHref.value],
  ["logoHrefTarget", logoHrefTargetOptions[logoHrefTargetIndex.value]],
]
  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))
  .join('\n'));

const codeTemplate = computed(() => `<script setup lang="ts">
import { IfxNavbar, IfxNavbarItem, IfxNavbarProfile, IfxSearchBar } from '@infineon/infineon-design-system-vue';

const handleNavbarMobileMenuIsOpen = (event: CustomEvent) => {
  console.log('ifxNavbarMobileMenuIsOpen:', event);
  // Add your handler logic here
};

const handleNavItem = (event: CustomEvent) => {
  console.log('ifxNavItem:', event);
  // Add your handler logic here
};

const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event);
  // Add your handler logic here
};

const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-navbar
      :fixed="false"
      @ifxNavbarMobileMenuIsOpen="handleNavbarMobileMenuIsOpen"
      __CONTROLLED_PROPS__>
      <ifx-navbar-item
        icon=""
        slot="left-item"
        target="_self"
        href=""
        :hide-on-mobile="true"
        @ifxNavItem="handleNavItem">
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
        :show-label="true">
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
      <ifx-search-bar
        slot="search-bar-left"
        :is-open="false"
        @ifxInput="handleInput"
        @ifxOpen="handleOpen" />
      <ifx-navbar-item
        number-indicator=""
        slot="right-item"
        target="_blank"
        href="http://google.com"
        hide-on-mobile=""
        :show-label="false"
        icon="image-16" />
      <ifx-navbar-item
        :dot-indicator="false"
        slot="right-item"
        hide-on-mobile=""
        :show-label="false"
        icon="image-16" />
      <ifx-navbar-profile
        user-name=""
        slot="right-item"
        image-url=""
        :show-label="true"
        href=""
        target="_self"
        alt="profile image" />
    </ifx-navbar>
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-navbar
      :fixed="false"
      @ifxNavbarMobileMenuIsOpen="handleNavbarMobileMenuIsOpen"
      v-bind="controlledProps">
      <ifx-navbar-item
        icon=""
        slot="left-item"
        target="_self"
        href=""
        :hide-on-mobile="true"
        @ifxNavItem="handleNavItem">
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
        :show-label="true">
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
      <ifx-search-bar
        slot="search-bar-left"
        :is-open="false"
        @ifxInput="handleInput"
        @ifxOpen="handleOpen" />
      <ifx-navbar-item
        number-indicator=""
        slot="right-item"
        target="_blank"
        href="http://google.com"
        hide-on-mobile=""
        :show-label="false"
        icon="image-16" />
      <ifx-navbar-item
        :dot-indicator="false"
        slot="right-item"
        hide-on-mobile=""
        :show-label="false"
        icon="image-16" />
      <ifx-navbar-profile
        user-name=""
        slot="right-item"
        image-url=""
        :show-label="true"
        href=""
        target="_self"
        alt="profile image" />
    </ifx-navbar>
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="handleShowLogoAndAppnameChange">Toggle ShowLogoAndAppname</ifx-button>
        <ifx-button variant="secondary" @click="handleLogoHrefTargetChange">Toggle LogoHrefTarget</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="applicationName" type="text" :value="String(applicationName)" @input="handleApplicationNameChange(getInputValue($event))" />
        <ifx-text-field label="logoHref" type="text" :value="String(logoHref)" @input="handleLogoHrefChange(getInputValue($event))" />
    </div>

    <div class="state">
      <div><b>applicationName:</b> {{ String(applicationName) }}</div>
      <div><b>showLogoAndAppname:</b> {{ String(showLogoAndAppname) }}</div>
      <div><b>logoHref:</b> {{ String(logoHref) }}</div>
      <div><b>logoHrefTarget:</b> {{ String(logoHrefTargetOptions[logoHrefTargetIndex]) }}</div>
    </div>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
