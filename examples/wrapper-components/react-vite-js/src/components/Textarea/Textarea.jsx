import { IfxButton, IfxTextarea } from '@infineon/infineon-design-system-react';

function Textarea() {

  const handleInput = (event) => {
    console.log('Textarea', event.detail)
  }

  return (
    <div>
      <form id="form-for-textarea">
        <IfxTextarea name='ts' onIfxInput={handleInput} placeholder="Placeholder" />
        <IfxButton type="submit" theme="default" size="s" disabled="false">
          Submit form
        </IfxButton>
        <IfxButton type="reset" variant="secondary" theme="default" size="s" disabled="false">
          Reset form
        </IfxButton>
      </form>
    </div>
  );
}

export default Textarea;