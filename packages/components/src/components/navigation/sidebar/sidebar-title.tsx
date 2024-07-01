import { Component, h, Element } from '@stencil/core';

@Component({
    tag: 'ifx-sidebar-title',
    styleUrl: 'sidebar-title.scss',
    shadow: true
})

export class SidebarTitle {
    @Element() el;

    render() {
        return(
            <div class = 'sidebar__title'>
                <div class = 'sidebar__title-label'>
                    <slot />
                </div>
            </div>
        );
    }
}