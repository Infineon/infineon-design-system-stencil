 import { IfxBreadcrumb, IfxBreadcrumbItem, IfxBreadcrumbItemLabel, IfxDropdownMenu, IfxDropdownItem } from '@infineon/infineon-design-system-react';

function Breadcrumbs() {
  return (
    <div>
      <IfxBreadcrumb>
        <IfxBreadcrumbItem>
          <IfxBreadcrumbItemLabel slot="label" icon="">Breadcrumb 1</IfxBreadcrumbItemLabel>
          <IfxDropdownMenu>
            <IfxDropdownItem url="http://google.com">Google</IfxDropdownItem>
            <IfxDropdownItem url="http://bing.com">Bing</IfxDropdownItem>
            <IfxDropdownItem url="http://yahoo.com">Yahoo</IfxDropdownItem>
            <IfxDropdownItem url="http://naver.com">Naver</IfxDropdownItem>
          </IfxDropdownMenu>
        </IfxBreadcrumbItem>

        <IfxBreadcrumbItem>
          <IfxBreadcrumbItemLabel slot="label" icon="">Breadcrumb 2</IfxBreadcrumbItemLabel>
          <IfxDropdownMenu>
          <IfxDropdownItem url="http://google.com">Google</IfxDropdownItem>
          <IfxDropdownItem url="http://bing.com">Bing</IfxDropdownItem>
          <IfxDropdownItem url="http://yahoo.com">Yahoo</IfxDropdownItem>
          <IfxDropdownItem url="http://naver.com">Naver</IfxDropdownItem>
          </IfxDropdownMenu>
        </IfxBreadcrumbItem>

        <IfxBreadcrumbItem>
          <IfxBreadcrumbItemLabel slot="label" icon="" url="http://google.com">Breadcrumb 3</IfxBreadcrumbItemLabel>
        </IfxBreadcrumbItem>
      </IfxBreadcrumb>
    </div>
  );
}

export default Breadcrumbs;