import React from 'react';
import { IfxChoices } from '@infineon/infineon-design-system-react';

function Spinner() {
  return (
    <div>
      <IfxChoices type="single" value="undefined" ifx-size="medium (40px)" placeholder="true" search-enabled="true"
        search-placeholder-value="Search..." ifx-disabled="false" ifx-error="false" ifx-error-message="Some error"
        ifx-label="" ifx-placeholder-value="Placeholder"
        ifx-choices="[{&quot;value&quot;:&quot;a&quot;,&quot;label&quot;:&quot;option a&quot;,&quot;selected&quot;:false},{&quot;value&quot;:&quot;b&quot;,&quot;label&quot;:&quot;option b&quot;,&quot;selected&quot;:false},{&quot;value&quot;:&quot;c&quot;,&quot;label&quot;:&quot;option c&quot;,&quot;selected&quot;:false}]"></IfxChoices>
    </div>
  )
}

export default Spinner;


