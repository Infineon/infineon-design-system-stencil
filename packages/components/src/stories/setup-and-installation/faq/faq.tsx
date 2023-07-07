import { Component, h } from '@stencil/core';

@Component({
  tag: 'ifx-faq',
  styleUrl: './faq.scss',
  shadow: true,
})
export class Faq {

  render() {
    return (
      <div class='container'>
      <ifx-accordion>
        <ifx-accordion-item caption="What is the Infineon DDS?">
          The Infineon Digital Design System consists of code components, design principles, tools and guidelines as well as a dedicated interdisciplinary team. Its purpose is to support internal and external colleagues create digital user interfaces with a high level of usability as well as a consistent expression of the Infineon brand. The DDS does not focus on the content of a web application but it describes how the design of the application’s structure should be.
        </ifx-accordion-item>
        <ifx-accordion-item caption="How do I get access to the DDS?">
          You can use the provided Figma file as a foundation for mockups and prototypes, use Storybook to view what UI components and variants are available and use code components provided via Storybook or Github.
        </ifx-accordion-item>
        <ifx-accordion-item caption="Can I integrate the Infineon DDS into my project?">
          Yes, you can. We are happy to discuss with you which point in time and which scope of integration is bestsuited for updating your interface to the Infineon DDS. (To avoid that users get confused by a mixture of UI components, we recommend choosing larger updates or technology changes as opportunity to integrate the Infineon DDS.)
        </ifx-accordion-item>
        <ifx-accordion-item caption="Are Infineon DDS components accessable?">
          We have taken WCAG 2.0 Level AA as baseline level for all design decisions inside the Infineon Digital Design System. To make an online experience truly accessible you have to implement the specific code, content, and visual design according to the accessibility standard. Find an introduction to this topic here.
        </ifx-accordion-item>
        <ifx-accordion-item caption="How to request a new component?">
          Please contact us like described in the contribution section! We are planning to expand the number of components continually. If your component is also usable for multiple other projects, there is a good chance we might work together with you.
        </ifx-accordion-item>
      </ifx-accordion>
      </div>
    );
  }
}
