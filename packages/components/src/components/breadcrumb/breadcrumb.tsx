import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ifx-breadcrumb',
  styleUrl: 'breadcrumb.scss',
  shadow: true
})
export class Breadcrumb {
  @Prop() breadcrumbs: { text: string, url: string }[];

  render() {
    return (
      <Host>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            {this.breadcrumbs && this.breadcrumbs.map((breadcrumb, index) =>
              <li class="breadcrumb-item" aria-current={index === this.breadcrumbs.length - 1 ? 'page' : undefined}>
                {index !== this.breadcrumbs.length - 1 ?
                  <a href={breadcrumb.url}>{breadcrumb.text}</a> : breadcrumb.text}
                {index !== this.breadcrumbs.length - 1 && <span class="separator">/</span>}
              </li>
            )}
          </ol>
        </nav>
      </Host>
    );
  }
}
