<template>
    <div class="component">
      <h2>Segmented Control</h2>
      <ifx-segmented-control caption='Caption text to describe the controls' label='Group Label' size='regular' required='false' error='false'>
        <ifx-segment selected='true' icon='star-16' value='value1'> Label </ifx-segment>
        <ifx-segment icon='star-16' value='value2'> Label </ifx-segment>
        <ifx-segment icon='star-16' value='value3'> Label </ifx-segment>
        <ifx-segment icon='star-16' value='value4'> Label </ifx-segment>
      </ifx-segmented-control>
      <br />
      <ifx-segmented-control caption='Caption text to describe the controls' label='Group Label' size='regular' required='true' error='true'>
        <ifx-segment selected='true' icon='star-16' value='value1'> Label </ifx-segment>
        <ifx-segment icon='star-16' value='value2'> Label </ifx-segment>
        <ifx-segment icon='star-16' value='value3'> Label </ifx-segment>
        <ifx-segment icon='star-16' value='value4'> Label </ifx-segment>
      </ifx-segmented-control>
      <br />
      <br />
    </div>
</template>
  
  <style scoped></style>