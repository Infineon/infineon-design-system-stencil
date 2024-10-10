import React from 'react';
import { IfxList } from '@infineon/infineon-design-system-react';
import { IfxListEntry } from '@infineon/infineon-design-system-react';

const List = () => {
  const handleListUpdate = (event) => {
    console.log("list update ", event.detail);
  };

  return (
    <div>
      <h2>List</h2>
      <IfxList name="checkbox-list" max-visible-items="5" type="checkbox" onIfxListUpdate={handleListUpdate}>
        <IfxListEntry type="checkbox" label="Checkbox 1" value="false" slot="slot1">Checkbox 1</IfxListEntry>
        <IfxListEntry type="checkbox" label="Checkbox 2" value="false" slot="slot2">Checkbox 2</IfxListEntry>
        <IfxListEntry type="checkbox" label="Checkbox 3" value="false" slot="slot3">Checkbox 3</IfxListEntry>
        <IfxListEntry type="checkbox" label="Checkbox 4" value="false" slot="slot4">Checkbox 4</IfxListEntry>
        <IfxListEntry type="checkbox" label="Checkbox 5" value="false" slot="slot5">Checkbox 5</IfxListEntry>
        <IfxListEntry type="checkbox" label="Checkbox 6" value="false" slot="slot6">Checkbox 6</IfxListEntry>
        <IfxListEntry type="checkbox" label="Checkbox 7" value="false" slot="slot7">Checkbox 7</IfxListEntry>
      </IfxList>
    </div>
  );
};

export default List;