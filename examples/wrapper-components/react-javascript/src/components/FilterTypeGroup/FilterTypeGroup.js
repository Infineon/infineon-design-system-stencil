import React from 'react';
import { IfxFilterTypeGroup } from '@infineon/infineon-design-system-react';

function FilterTypeGroup() {
    return (
<div><ifx-filter-type-group>
  <div slot="filter-search">
    <ifx-filter-search filter-name="Your filter name"></ifx-filter-search>
  </div>
  <div slot="filter-accordion">
    <ifx-filter-accordion filter-group-name="Filter group 1">
      <ifx-list slot="list" type="checkbox" name="Filter group 1" max-visible-items="10">
    <ifx-list-entry slot="slot0" label="Filter 1" value="true"></ifx-list-entry>
  
    <ifx-list-entry slot="slot1" label="Filter 2" value="false"></ifx-list-entry>
  
    <ifx-list-entry slot="slot2" label="Filter 3" value="true"></ifx-list-entry>
  
    <ifx-list-entry slot="slot3" label="Filter 4" value="false"></ifx-list-entry>
  
    <ifx-list-entry slot="slot4" label="Filter 5" value="false"></ifx-list-entry>
  
    <ifx-list-entry slot="slot5" label="Filter 6" value="false"></ifx-list-entry>
  
    <ifx-list-entry slot="slot6" label="Filter 7" value="false"></ifx-list-entry>
  
    <ifx-list-entry slot="slot7" label="Filter 8" value="false"></ifx-list-entry>
  
      </ifx-list>
    </ifx-filter-accordion>
    <ifx-filter-accordion filter-group-name="Filter group 2">
      <ifx-list slot="list" type="radio-button" name="Filter group 2" max-visible-items="6">
    <ifx-list-entry slot="slot0" label="Filter 1" value="true"></ifx-list-entry>
  
    <ifx-list-entry slot="slot1" label="Filter 2" value="false"></ifx-list-entry>
  
    <ifx-list-entry slot="slot2" label="Filter 3" value="true"></ifx-list-entry>
  
    <ifx-list-entry slot="slot3" label="Filter 4" value="false"></ifx-list-entry>
  
    <ifx-list-entry slot="slot4" label="Filter 5" value="false"></ifx-list-entry>
  
    <ifx-list-entry slot="slot5" label="Filter 6" value="false"></ifx-list-entry>
  
    <ifx-list-entry slot="slot6" label="Filter 7" value="false"></ifx-list-entry>
  
    <ifx-list-entry slot="slot7" label="Filter 8" value="false"></ifx-list-entry>
  
      </ifx-list>
    </ifx-filter-accordion>
  </div>
</ifx-filter-type-group>
</div>
      );
    }
    
    export default FilterTypeGroup;