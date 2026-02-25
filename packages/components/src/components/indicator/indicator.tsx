import { Component, Element, h, Prop, State } from "@stencil/core";
import { isNestedInIfxComponent } from "../..//shared/utils/dom-utils";
import { detectFramework } from "../..//shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

@Component({
	tag: "ifx-indicator",
	styleUrl: "indicator.scss",
	shadow: true,
})
export class Indicator {
  @Element() el: HTMLIfxIndicatorElement;
  @State() filteredNumber: string | number;
  /** Renders the indicator with an inverted color scheme for dark backgrounds. */
  @Prop() readonly inverted: boolean = false;
  /** Provide a short, descriptive text that explains the indicator's meaning or value. */
  @Prop() readonly ariaLabeled: string | null;
  /** Sets variant of the Indicator */
  @Prop() readonly variant: string = 'number'
    /** Numeric value to display when using the 'number' variant */
  @Prop() readonly number: number = 0;
    /** Disables the indicator's interactions. */
  @Prop() readonly disabled: boolean = false;

	private handleNumber() {
		this.filteredNumber =
			!isNaN(this.number) && this.number > 99 ? "99+" : this.number;
	}

	componentWillLoad() {
		this.handleNumber();
	}

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-indicator", await framework);
		}
	}

	componentWillUpdate() {
		this.handleNumber();
	}

  render() {
    return (
      <div aria-label={this.ariaLabeled} class='indicator__container'>
       {this.variant === 'number' && 
       <div class={`number__container ${this.inverted ? 'inverted' : ""} ${this.disabled ? 'disabled' : ""}`}>
          <div class="number__wrapper">
            {this.filteredNumber}
          </div> 
       </div>}
       {this.variant === 'dot' && <div class={`dot__wrapper ${this.disabled ? 'disabled' : ""}`}></div>}
      </div>
    );
  }
}
