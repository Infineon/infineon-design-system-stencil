import { Component, h, Element } from '@stencil/core';

@Component({
    tag: 'ifx-sidebar-header',
    styleUrl: 'sidebar-header.scss',
    shadow: true
})

export class SidebarHeader {
    @Element() el;

    render() {
        return(
            <div class = 'sidebar__header'>
                <div class = 'sidebar__header-label'>
                    <slot />
                </div>
            </div>
        );
    }
}