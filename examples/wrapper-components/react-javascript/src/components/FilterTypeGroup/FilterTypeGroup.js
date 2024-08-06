import React from 'react';
import { IfxFilterTypeGroup, IfxFilterAccordion, IfxList, IfxListEntry, IfxFilterSearch } from '@infineon/infineon-design-system-react';
function FilterTypeGroup() {
  return (
<div><IfxFilterTypeGroup>
  <div slot="filter-search">
  <IfxFilterSearch filter-name="Your filter name"></IfxFilterSearch>
  </div>
  <div slot="filter-accordion">
  <IfxFilterAccordion filter-group-name="Filter group 1">
    <IfxList slot="list" type="checkbox" name="Filter group 1" max-visible-items="10">
  <IfxListEntry slot="slot0" label="Filter 1" value="true"></IfxListEntry>
  
  <IfxListEntry slot="slot1" label="Filter 2" value="false"></IfxListEntry>
  
  <IfxListEntry slot="slot2" label="Filter 3" value="true"></IfxListEntry>
  
  <IfxListEntry slot="slot3" label="Filter 4" value="false"></IfxListEntry>
  
  <IfxListEntry slot="slot4" label="Filter 5" value="false"></IfxListEntry>
  
  <IfxListEntry slot="slot5" label="Filter 6" value="false"></IfxListEntry>
  
  <IfxListEntry slot="slot6" label="Filter 7" value="false"></IfxListEntry>
  
  <IfxListEntry slot="slot7" label="Filter 8" value="false"></IfxListEntry>
  
    </IfxList>
  </IfxFilterAccordion>
  <IfxFilterAccordion filter-group-name="Filter group 2">
    <IfxList slot="list" type="radio-button" name="Filter group 2" max-visible-items="6">
  <IfxListEntry slot="slot0" label="Filter 1" value="true"></IfxListEntry>
  
  <IfxListEntry slot="slot1" label="Filter 2" value="false"></IfxListEntry>
  
  <IfxListEntry slot="slot2" label="Filter 3" value="true"></IfxListEntry>
  
  <IfxListEntry slot="slot3" label="Filter 4" value="false"></IfxListEntry>
  
  <IfxListEntry slot="slot4" label="Filter 5" value="false"></IfxListEntry>
  
  <IfxListEntry slot="slot5" label="Filter 6" value="false"></IfxListEntry>
  
  <IfxListEntry slot="slot6" label="Filter 7" value="false"></IfxListEntry>
  
  <IfxListEntry slot="slot7" label="Filter 8" value="false"></IfxListEntry>
  
    </IfxList>
  </IfxFilterAccordion>
  </div>
</IfxFilterTypeGroup>
</div>
    );
  }
  
  export default FilterTypeGroup;

