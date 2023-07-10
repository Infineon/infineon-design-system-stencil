import React from 'react';
import { IfxButton, IfxDropdown, IfxDropdownItem, IfxDropdownMenu, IfxFilterInput, IfxSearchInput } from '@infineon/infineon-design-system-react';

function Dropdown() {
    return (
        <div>

            <div>
            <p>
            Default Dropdown Field:
            </p>
            </div>

           <IfxDropdown >
            <IfxButton color="primary" size="m" variant="solid" disabled="false">Dropdown Button</IfxButton>
            <IfxDropdownMenu>
                <IfxDropdownItem>Dropdown Item 1</IfxDropdownItem>
                <IfxDropdownItem>Dropdown Item 2</IfxDropdownItem>
                <IfxDropdownItem>Dropdown Item 3</IfxDropdownItem>
                <IfxDropdownItem>Dropdown Item 4</IfxDropdownItem>
            </IfxDropdownMenu>
            </IfxDropdown> 

            <div>
            <p>
            Dropdown with Search Field:
            </p>
            </div>

            <IfxDropdown>
                <IfxButton color="secondary" size="m" variant="solid" disabled="false">Dropdown Button Search</IfxButton>
                <IfxDropdownMenu>
                <IfxSearchInput></IfxSearchInput>
                    <IfxDropdownItem>Dropdown Search Item 1</IfxDropdownItem>
                    <IfxDropdownItem>Dropdown Search Item 2</IfxDropdownItem>
                    <IfxDropdownItem>Dropdown Search Item 3</IfxDropdownItem>
                    <IfxDropdownItem>Dropdown Search Item 4</IfxDropdownItem>
                </IfxDropdownMenu>
            </IfxDropdown>

            <div>
            <p>
            Dropdown with Search Field:
            </p>
            </div>

            <IfxDropdown>
            <IfxButton color="primary" size="m" variant="solid" disabled="false">Dropdown with Icon</IfxButton>
            <IfxDropdownMenu>
                <IfxDropdownItem icon='c-check-16'>Dropdown Icon Item 1</IfxDropdownItem>
                <IfxDropdownItem icon='c-check-16'>Dropdown Icon Item 2</IfxDropdownItem>
                <IfxDropdownItem icon='c-check-16'>Dropdown Icon Item 3</IfxDropdownItem>
                <IfxDropdownItem icon='c-check-16'>Dropdown Icon Item 4</IfxDropdownItem>
            </IfxDropdownMenu>
            </IfxDropdown>

            <div>
            <p>
            Dropdown with Search Field:
            </p>
            </div>

            <IfxDropdown>
            <IfxButton color="primary" size="m" variant="solid" disabled="false">Dropdown with Filter Option</IfxButton>
            <IfxDropdownMenu>
                <IfxFilterInput>
                <option value="">Filter Item 1</option>
                <option value="">Filter Item 2</option>
                <option value="">Filter Item 3</option>
                <option value="">Filter Item 4</option>
                </IfxFilterInput>
                <IfxDropdownItem checkable>Dropdown Filter Item 1</IfxDropdownItem>
                <IfxDropdownItem checkable>Dropdown Filter Item 2</IfxDropdownItem>
                <IfxDropdownItem checkable>Dropdown Filter Item 3</IfxDropdownItem>
                <IfxDropdownItem checkable>Dropdown Filter Item 4</IfxDropdownItem>
            </IfxDropdownMenu>
            </IfxDropdown>

        </div>
    );
}

export default Dropdown;