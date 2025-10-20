

<template>
  <div>
    <h2>ActionList</h2>
    <div>
        <ifx-action-list list-aria-label="Navigation menu">
        <ifx-action-list-item item-title="Dashboard" description="View your main dashboard" value="dashboard" item-aria-label="Navigation item">
            <ifx-icon slot="trailing" icon="chevron-right-16"></ifx-icon>
        </ifx-action-list-item>

        <ifx-action-list-item item-title="Settings" value="settings" item-aria-label="Navigation item">
            <ifx-icon slot="trailing" icon="chevron-right-16"></ifx-icon>
        </ifx-action-list-item>

        <ifx-action-list-item item-title="Profile" description="Manage your profile information" value="profile" disabled="true" item-aria-label="Navigation item">
            <ifx-icon slot="trailing" icon="chevron-right-16"></ifx-icon>
        </ifx-action-list-item>

        <ifx-action-list-item item-title="Advanced Analytics and Reporting Dashboard with Extended Functionality" description="This comprehensive analytics dashboard provides detailed insights into user behavior and system performance metrics." value="analytics" item-aria-label="Navigation item">
            <ifx-icon slot="trailing" icon="chevron-right-16"></ifx-icon>
        </ifx-action-list-item>
        </ifx-action-list>
    </div>
    <br />
    <br />
  </div>
</template>

<script setup>


</script>

  
 