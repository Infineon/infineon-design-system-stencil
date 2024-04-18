import { Component, h, Element } from "@stencil/core";

@Component({
  tag: 'ifx-overview-table',
  styleUrl: './overview-table.scss',
  shadow: true
})

export class OverviewTable {
  @Element() el;

  componentDidLoad() { 
    const headerEl = this.el.shadowRoot.querySelector('header');
    const headerHeight = headerEl.offsetHeight;
    const wrapperEl = this.el.shadowRoot.querySelector(".wrapper");
    wrapperEl.style.setProperty('--header-height', `${headerHeight}px`);
    this.setPlannedComponentsNumber()
    this.setCompletedComponentsNumber()
    this.setTotalComponentsNumber()
  }

  getPlannedComponents = () => { 
    const plannedComponents = this.el.shadowRoot.querySelectorAll('.planned__component')
    return plannedComponents.length;
  }
  
  setPlannedComponentsNumber = () => { 
    const plannedComponents = this.getPlannedComponents()
    const numberIndicator = this.el.shadowRoot.getElementById('number__indicator-planned')
    numberIndicator.innerHTML = plannedComponents;
  }
  
  getCompletedComponents = () => { 
    const completedComponents = this.el.shadowRoot.querySelectorAll('.completed__component')
    return completedComponents.length;
  }
  
  setCompletedComponentsNumber = () => { 
    const completedComponents = this.getCompletedComponents()
    const numberIndicator = this.el.shadowRoot.getElementById('number__indicator-completed')
    numberIndicator.innerHTML = completedComponents;
  }
  
  setTotalComponentsNumber = () => { 
    const plannedComponents = this.getPlannedComponents()
    const completedComponents = this.getCompletedComponents()
    const numberIndicator = this.el.shadowRoot.getElementById('number__indicator-total')
    const totalNumberOfComponents = plannedComponents + completedComponents;
    numberIndicator.innerHTML = totalNumberOfComponents;
  }

  render() {
    return (
      <div class='container'>
        <header class='header'>
          <div class="header__info-wrapper">
            <div class="title">DDS Components Overview</div>
            <div class="infoboard__wrapper">
              <div class="basic__info">
                <div>Total Number:</div>
                <div>
                  <ifx-number-indicator id="number__indicator-total"></ifx-number-indicator>
                </div>
              </div>
              <div class="basic__info">
                <div>Completed:</div>
                <div>
                  <ifx-number-indicator id="number__indicator-completed"></ifx-number-indicator>
                </div>
              </div>
              <div class="basic__info">
                <div>Planned:</div>
                <div>
                  <ifx-number-indicator id="number__indicator-planned"></ifx-number-indicator>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="view">
          <div class="wrapper">
            <table>
              <thead>
                <tr>
                  <th class="sticky-col first-col">Preview</th>
                  <th class="sticky-col second-col">Component</th>
                  <th>
                    <div class="version__wrapper">
                      <span>Version 1</span>
                    </div>
                  </th>
                  <th>
                    <div class="version__wrapper">
                    <span>Version 2</span>
                    </div>
                  </th>
                  <th>Version 3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-accordion--development" size="m" variant="bold">Accordion</ifx-link>
                  </td>
                  <td>
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Includes essential functionality such as expand/collapse behavior and minimal customization options</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Adheres to web standards</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Provides a simple and lightweight way to organize and display collapsible content</span>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Auto collapse feature</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Initial collapse feature</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-alert--development" size="m" variant="bold">Alert</ifx-link>
                  </td>
                  <td>
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Provides a lightweight and customizable interface for presenting alerts, including options for different alert types (e.g., primary, success, danger, warning) and basic styling configurations</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Adheres to web standards</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Configurable close button</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Additional Info variant</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-badge--development" size="m" variant="bold">Badge</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Offers simple customization options for displaying badges, allowing developers to indicate specific actions, statuses, or categories with visual cues</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Designed to seamlessly integrate with existing UI elements and adhere to web standards</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-breadcrumb--development" size="m" variant="bold">Breadcrumb</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Provides a simple and customizable way to display a sequential trail of links or indicators,  representing the user's current location within a hierarchy of content</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Adheres to web standards</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Possibility to add an icon</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Incorporated dropdown-menu for individual items</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-button--development" size="m" variant="bold">Button</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Includes basic styling options such as colors, sizes, and states, providing essential functionality for initiating actions</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Adheres to web standards</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>fullWidth feature</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Icon integration</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Link integration</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Form integration</span>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-card--development" size="m" variant="bold">Card</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Provides a structured and customizable layout, featuring elements such as headings, images, text, and buttons</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Adheres to web standards</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Horizontal and Vertical layout</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Possibility to embed multiple buttons</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>A switch between a Link and a Button</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Enhanced stylying behavior</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-checkbox--development" size="m" variant="bold">Checkbox</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Offers a simple and customizable checkbox input, allowing users to toggle between checked and unchecked states</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Adheres to web standards</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Indeterminate state variant</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-chip--development" size="m" variant="bold">Chip</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Provides a simple and customizable interface, representing discrete units of information or user interactions, such as labels, categories, or removable entities</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Adheres to web standards</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Incorporated dropdown-menu for individual item selection</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-dropdown--development" size="m" variant="bold">Dropdown</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Offers a versatile and interactive user interface element for presenting a list of options or actions</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Ensures consistent behavior and compatibility with web standards for a reliable user experience, while intentionally limiting customization options to emphasize a standardized appearance and behavior</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Search filter</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Header section</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Menu Item Divider</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Icon incorporated</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Extended customization and configurations</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Separate label trigger</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-footer--development" size="m" variant="bold">Footer</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Provides a standardized and customizable way to display essential information, navigation links, and branding at the bottom of web pages or application interfaces</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Offers a flexible and configurable layout for organizing copyright notices, contact details, sitemap links, and other pertinent information</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Adheres to web standards</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Small, Medium and Large variants</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Customizable and removable links</span>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-icon-button--development" size="m" variant="bold">Icon Button</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Offers a compact and interactive icon-based button element</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Provides a limited scope of customization</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Adheres to web standards</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Additional Round and Square shape variants</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Small, Medium and Large size</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-icon--development" size="m" variant="bold">Icon</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Offers a wide range of iconography options, allowing developers to easily incorporate symbols, glyphs, or visual indicators to enhance the user interface and convey information or actions effectively</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-link--development" size="m" variant="bold">Link</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Provides a flexible and customizable element for creating hyperlinks within a web application</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Offers essential functionality for defining clickable text or elements</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Adheres to web standards</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Small, Medium, Large, Extra Large size variants</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Icon incorporated</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Bold, Underlined, Title, Menu state variants</span>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-modal--development" size="m" variant="bold">Modal</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Provides a customizable modal window, typically used for displaying contextual information, user interactions, or additional content without navigating away from the current context</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Adheres to webstandards</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Alert-brand and Alert-danger theme variants</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Extended customization</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Removable close button</span>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-navbar--development" size="m" variant="bold">Navbar</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Provides a standardized and customizable navigation bar for organizing and presenting essential links, menus, branding, and interactive elements within a web application</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Adheres to web stadards</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Navbar-profile component</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Mobile Responsiveness</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Mobile Sidebar</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Extended customization</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-number-indicator--development" size="m" variant="bold">Number Indicator</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Provides a compact and configurable display for showcasing numeric data</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Adheres to web standards</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Inverted option</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-pagination--development" size="m" variant="bold">Pagination</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Offers a configurable set of controls for navigating through sequential pages of content, typically used for displaying large datasets or segmented information</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Adheres to web standards</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Extended customization</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Configurable Results Per Page option</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-progress-bar--development" size="m" variant="bold">Progress Bar</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Offers a customizable and dynamic bar that visually represents the advancement of a process, typically used to convey loading status, or task completion</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Adheres to web standards</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Extended customization</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Show percentage option</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Small and With Label variants included</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-radio-button--development" size="m" variant="bold">Radio Button</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Offers a customizable radio input, allowing users to make a single selection from a predefined list of options, typically used for multiple-choice selection or exclusive input</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Adheres to web standards</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-search-bar--development" size="m" variant="bold">Search Bar</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Offers a dynamic and customizable input area that allows users to input search terms and trigger search actions, typically used for querying and filtering content within the application</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Adheres to web standards</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Collapsable option</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-search-field--development" size="m" variant="bold">Search Field</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Offers an interactive and adaptable input area that allows users to enter search terms and trigger search actions, facilitating efficient querying and filtering of content within the application</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Adheres to web standards</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Show Delete Icon option</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-select-single-select--development" size="m" variant="bold">Single Select</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Provides a user-friendly and interactive dropdown list for selecting a single option from a set of choices within a web application</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Extended customization</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Option to enable and disable the search</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-select-multi-select--development" size="m" variant="bold">Multi Select</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Provides a dynamic and customizable dropdown list that allows users to make multiple selections from a list of options</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Adheres to web standards</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Extended customization</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Nestable options</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Option to enable and disable the search</span>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-sidebar--development" size="m" variant="bold">Sidebar</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Offers a configurable and collapsible panel that typically occupies the side of the screen, allowing users to access additional sections, or menus while maintaining the main content area</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Adheres to web standards</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Extended customization</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Multi-layer nestable items and menu</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Initial collapse option</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Active and action item feature</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Number indicator integration</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Removable Footer, Header and Logo</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Removable and customizable Links</span>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-slider--development" size="m" variant="bold">Slider</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Provides an interactive and customizable input control for selecting a value within a defined range, often used for settings such as volume control, data selection, or numerical input</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Adheres to web standards</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                    <li>
                      <span>
                        <ifx-icon icon="check12"></ifx-icon>
                      </span>
                      <span>Icon incorporated</span>
                    </li>
                    <li>
                      <span>
                        <ifx-icon icon="check12"></ifx-icon>
                      </span>
                      <span>Percentage variant</span>
                    </li>
                    <li>
                      <span>
                        <ifx-icon icon="check12"></ifx-icon>
                      </span>
                      <span>Text variant</span>
                    </li>
                    <li>
                      <span>
                        <ifx-icon icon="check12"></ifx-icon>
                      </span>
                      <span>React, Vue and Angular wrapper integration</span>
                    </li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-spinner--development" size="m" variant="bold">Spinner</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Offers a customizable and animated symbol that conveys to users that a task is in progress, typically used to signify loading content, data retrieval, or pending operations</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Adheres to web standards</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Brand variant</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-status--development" size="m" variant="bold">Status</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Provides a visual indicator for conveying the state, status, or condition of an item, process, or entity within a web application</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Ocean, Orange, Grey, Light-grey, Red, Green and Berry color variants</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Removable border</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-switch--development" size="m" variant="bold">Switch</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Provides an interactive and customizable interface for toggling between two states, typically representing an on/off or active/inactive status within a web application</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Adheres to web standards</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Incorporated label feature</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-table-basic--development" size="m" variant="bold">Basic Table</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Offers essential functionality for organizing data into rows and columns, allowing users to view, sort, and interact with structured information efficiently</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Includes basic features such as column sorting</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Compact and Default variant</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-tabs--development" size="m" variant="bold">Tabs</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Offers a customizable and interactive layout that allows users to switch between different content panels, typically used for organizing related information or functional sections</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Adheres to web standards</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Horizontal and Vertical orientation</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Extended customization</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-tag--development" size="m" variant="bold">Tag</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Offers a customizable and stylized marker that allows users to quickly identify and associate specific items or content with descriptive labels or categories</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Icon incorporated</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-text-field--development" size="m" variant="bold">Text Field</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Offers a customizable and accessible interface that allows users to input and modify text, facilitating various data entry and form submission tasks</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Adheres to web standards</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Extended customization</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Possibility for icon configuration</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Form integration</span>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="completed__component sticky-col second-col">
                    <ifx-link href="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-tooltip--development" size="m" variant="bold">Tooltip</ifx-link>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Provides a simple and informative interface for displaying supplementary text or contextual information when users interact with specific elements within a web application</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Adheres to web standards</span>
                      </li>
                    </ul>
                  </td>
                  <td >
                    <ul>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Compact, dismissible and Extended variants</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Auto-adjusting position</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>Icon incorporated</span>
                      </li>
                      <li>
                        <span>
                          <ifx-icon icon="check12"></ifx-icon>
                        </span>
                        <span>React, Vue and Angular wrapper integration</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
            
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="planned__component sticky-col second-col">
                    <ifx-link href="" size="m" variant="bold">Advanced Table</ifx-link>
                  </td>
                  <td>
                    <ul>
                      <li class="planned__component-wrapper">
                        <span>
                          <ifx-icon class="planned__icon" icon="clock24"></ifx-icon>
                        </span>
                        <span>Planned</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
            
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="planned__component sticky-col second-col">
                    <ifx-link href="" size="m" variant="bold">Card Group</ifx-link>
                  </td>
                  <td>
                    <ul>
                      <li class="planned__component-wrapper">
                        <span>
                          <ifx-icon class="planned__icon" icon="clock24"></ifx-icon>
                        </span>
                        <span>Planned</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
            
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="planned__component sticky-col second-col">
                    <ifx-link href="" size="m" variant="bold">Radio Group</ifx-link>
                  </td>
                  <td>
                    <ul>
                      <li class="planned__component-wrapper">
                        <span>
                          <ifx-icon class="planned__icon" icon="clock24"></ifx-icon>
                        </span>
                        <span>Planned</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
            
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="planned__component sticky-col second-col">
                    <ifx-link href="" size="m" variant="bold">Basic Date Picker</ifx-link>
                  </td>
                  <td>
                    <ul>
                      <li class="planned__component-wrapper">
                        <span>
                          <ifx-icon class="planned__icon" icon="clock24"></ifx-icon>
                        </span>
                        <span>Planned</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
            
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="planned__component sticky-col second-col">
                    <ifx-link href="" size="m" variant="bold">Advanced Date Picker</ifx-link>
                  </td>
                  <td>
                    <ul>
                      <li class="planned__component-wrapper">
                        <span>
                          <ifx-icon class="planned__icon" icon="clock24"></ifx-icon>
                        </span>
                        <span>Planned</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
            
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="planned__component sticky-col second-col">
                    <ifx-link href="" size="m" variant="bold">Text Area</ifx-link>
                  </td>
                  <td>
                    <ul>
                      <li class="planned__component-wrapper">
                        <span>
                          <ifx-icon class="planned__icon" icon="clock24"></ifx-icon>
                        </span>
                        <span>Planned</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
            
                <tr>
                  <td class="sticky-col first-col"></td>
                  <td class="planned__component sticky-col second-col">
                    <ifx-link href="" size="m" variant="bold">Popover</ifx-link>
                  </td>
                  <td>
                    <ul>
                      <li class="planned__component-wrapper">
                        <span>
                          <ifx-icon class="planned__icon" icon="clock24"></ifx-icon>
                        </span>
                        <span>Planned</span>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}