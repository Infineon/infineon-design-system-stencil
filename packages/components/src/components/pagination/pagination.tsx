import { Component, h } from '@stencil/core';

@Component({
  tag: 'ifx-pagination',
  styleUrl: 'pagination.scss',
  shadow: true
})
export class Pagination {

  render() {
    return (
      <div class="container">
        <div class='items__per-page-wrapper'>
          <div class='items__per-page-label'>Results per Page</div>
          <div class='items__per-page-field'>
           <select name="items-per-page" id="items-per-page">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
           </select>
          </div>
        </div>
        <div class='items__total-wrapper'>
          <div class='items__total-button'>
            <ifx-icon-button color='primary' icon='arrow-left-24'></ifx-icon-button>
          </div>
          <div class='page__numbers-wrapper'>
            <div class='page__number-item'>
              <span>1</span>
            </div>
            <div class='page__number-item'>
              <span>2</span>
            </div>
            <div class='page__number-item'>
              <span>3</span>
            </div>
          </div>
           <div class='items__total-button'>
            <ifx-icon-button color='primary' icon='arrow-right-24'></ifx-icon-button>
           </div>
        </div>
      </div>
    );
  }
}