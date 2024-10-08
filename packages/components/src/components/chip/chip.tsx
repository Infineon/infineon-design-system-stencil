import { h, Component, Element, Event, EventEmitter, Listen, Prop, State, Watch } from '@stencil/core';
import { ChipItemSelectEvent } from './interfaces';

@Component({
  tag: 'ifx-chip',
  styleUrl: 'chip.scss',
  shadow: true
})
export class Chip {
  @Element() chip: HTMLIfxChipElement;

  @Event() ifxChipChange: EventEmitter<{ previousSelection: Array<ChipItemSelectEvent>, currentSelection: Array<ChipItemSelectEvent>, name: string }>;
  @Prop() placeholder: string = '';
  @Prop() size: 'small' | 'large' = 'large';
  @Prop({ mutable: true }) value: Array<string> | string = undefined;
  @Prop() variant: 'single' | 'multi' = 'single';
  @Prop() readOnly: boolean = false;

  @State() opened: boolean = false;
  @State() selectedOptions: Array<ChipItemSelectEvent> = [];

  @Watch('value')
  handleValueChange(newValue: Array<string> | string) {
    this.syncSelectedOptionsWithProp(newValue);
  }

  @Watch('readOnly')
  handleReadOnlyChange(newValue: boolean) {
    if (newValue) {
      this.opened = false;
    }
  }

  @Listen('mousedown', { target: 'document' })
  closeDropdownOnOutsideClick(event: MouseEvent) {
    const path = event.composedPath();
    const chipWrapper: HTMLElement = this.chip.shadowRoot.querySelector('.chip__wrapper');
    const chipDropdown: HTMLElement = this.chip.shadowRoot.querySelector('.chip__dropdown');
    if (!path.includes(chipDropdown) && !path.includes(chipWrapper) && this.opened) {
      this.toggleDropdownMenu();
    }
  }

  @Listen('ifxChipItemSelect')
  updateSelectedOptions(event: CustomEvent<ChipItemSelectEvent>) {
    const eventDetail: ChipItemSelectEvent = event.detail;
    const previousSelection: Array<ChipItemSelectEvent> = [...this.selectedOptions];

    if (this.variant !== 'multi') {
      if (eventDetail.selected) {
        this.opened = false;
        const chipItems: NodeList = this.getChipItems();
        chipItems.forEach((chipItem: HTMLIfxChipItemElement) => {
          if (chipItem.selected && chipItem !== event.target) {
            chipItem.chipState = {
              ...chipItem.chipState,
              emitIfxChipItemSelect: false,
            };
            chipItem.selected = false;
          }
        });
        this.selectedOptions = [eventDetail];
      } else {
        this.selectedOptions = [];
      }
      this.value = this.selectedOptions[0] ? this.selectedOptions[0].value : undefined;
    } else {
      if (eventDetail.selected) {
        // Prevent duplicate entries
        if (!this.selectedOptions.find(option => option.value === eventDetail.value)) {
          this.selectedOptions = [...this.selectedOptions, eventDetail];
        }
      } else {
        this.selectedOptions = this.selectedOptions.filter((option) => option.key !== eventDetail.key);
      }
      this.value = this.selectedOptions.map((option) => option.value);
    }

    if (eventDetail.emitIfxChipChange) {
      this.ifxChipChange.emit({
        previousSelection: previousSelection,
        currentSelection: this.selectedOptions,
        name: this.placeholder
      });
    }
  }

  getChipItems(): NodeList {
    return this.chip.querySelectorAll('ifx-chip-item');
  }

  getSelectedOptions(): string {
    if (this.variant !== 'multi') {
      return this.selectedOptions.map(option => option.label).join('');
    }
    return this.selectedOptions.slice(0, 2).map(option => option.label).join(', ');
  }

  toggleDropdownMenu() {
    if (this.readOnly) return;
    this.opened = !this.opened;
  }

  handleUnselectButtonClick(event: MouseEvent) {
    event.stopPropagation();
    this.opened = false;

    let itemGotUnselected = false;
    const chipItems: NodeList = this.getChipItems();
    chipItems.forEach((chipItem: HTMLIfxChipItemElement) => {
      if (chipItem.selected) {
        itemGotUnselected = true;
        chipItem.chipState = {
          ...chipItem.chipState,
          emitIfxChipItemSelect: false,
        }
        chipItem.selected = false;
      }
    });

    /* Emit event only if at least one item was unselected. */
    if (itemGotUnselected) {
      const previousSelection: Array<ChipItemSelectEvent> = this.selectedOptions;
      this.selectedOptions = [];
      this.value = [];
      this.ifxChipChange.emit({
        previousSelection: previousSelection,
        currentSelection: [],
        name: this.placeholder
      });
    }
  }

  handleWrapperClick() {
    if (!this.readOnly) {
      this.toggleDropdownMenu();
    }
  }

  handleWrapperKeyDown(event: KeyboardEvent) {
    if (!this.readOnly && (event.code === 'Space' || event.code === 'Enter')) {
      this.toggleDropdownMenu();
    }
  }

  syncChipState() {
    const chipItems: NodeList = this.getChipItems();
    let key: number = 0;
    chipItems.forEach((chipItem: HTMLIfxChipItemElement) => {
      chipItem.chipState = {
        emitIfxChipItemSelect: true,
        size: (this.size === 'small' ? 'small' : 'large'),
        variant: (this.variant === 'multi' ? 'multi' : 'single'),
        key: key++
      };
    });
  }

  syncSelectedOptionsWithProp(newValue: Array<string> | string) {
    // Clear old selected options
    this.selectedOptions = [];

    const generateKey = (() => {
      let count = 0;
      return () => count++;
    })();

    if (Array.isArray(newValue)) {
      this.selectedOptions = newValue.map(value => ({
        value,
        label: value,
        selected: true,
        key: generateKey(),
        emitIfxChipChange: true
      }));
    } else if (typeof newValue === 'string') {
      this.selectedOptions = [{
        value: newValue,
        label: newValue,
        selected: true,
        key: generateKey(),
        emitIfxChipChange: true
      }];
    }

    this.syncChipState();
  }

  componentWillLoad() {
    this.syncSelectedOptionsWithProp(this.value);
  }

  render() {
    return (
      <div aria-value={this.getSelectedOptions()} aria-label='chip with a dropdown menu' class='chip'>
        <div class={`chip__wrapper chip__wrapper--${this.size === 'small' ? 'small' : 'large'}
                  chip__wrapper--${this.variant === 'multi' ? 'multi' : 'single'}
                  ${this.opened && !this.readOnly ? 'chip__wrapper--opened' : ''}
                  ${this.selectedOptions.length ? 'chip__wrapper--selected' : ''}`}
          tabIndex={0}
          onClick={!this.readOnly ? () => { this.handleWrapperClick() } : undefined}
          onKeyDown={!this.readOnly ? (e) => { this.handleWrapperKeyDown(e) } : undefined}>

          <div class='wrapper__label'>
            {
              (this.selectedOptions.length === 0) && `${this.placeholder}`
            }

            {
              (this.selectedOptions.length !== 0 && (this.variant === 'multi' || this.readOnly) && this.placeholder !== '') &&
              `${this.placeholder}:`
            }

            {
              (this.selectedOptions.length !== 0) &&
              <div class='label__selected-options'>
                {this.getSelectedOptions()}
              </div>
            }

            {
              (this.selectedOptions.length > 2 && this.variant === 'multi') &&
              <ifx-number-indicator>  {`+${this.selectedOptions.length - 2}`} </ifx-number-indicator>
            }
          </div>

          {
            !this.readOnly && (this.variant !== 'multi' || (this.variant === 'multi' && this.selectedOptions.length === 0)) &&
            <div class='wrapper__open-button'>
              <ifx-icon key={1} icon={`chevrondown16`} />
            </div>
          }


          { 
            (this.variant !== 'multi' && this.readOnly !== false && this.selectedOptions.length > 0) &&
            <div class='wrapper__unselect-button' onClick={(e) => { this.handleUnselectButtonClick(e) }}>
              <ifx-icon key={2} icon={`cross16`} />
            </div>
          }

          {
            ((this.selectedOptions.length >= 1) && this.variant === 'multi') &&
            <div class='wrapper__unselect-button' onClick={(e) => { this.handleUnselectButtonClick(e) }}>
              <ifx-icon key={2} icon={`cross16`} />
            </div>
          }

        </div>

        {
          this.opened && !this.readOnly &&
          <div class='chip__dropdown'>
            <slot />
          </div>
        }
      </div>
    );
  }
}
