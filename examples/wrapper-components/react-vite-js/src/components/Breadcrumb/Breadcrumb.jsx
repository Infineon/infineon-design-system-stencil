import { IfxBreadcrumb, IfxBreadcrumbItem, IfxBreadcrumbItemLabel, IfxDropdownMenu, IfxDropdownItem } from '@infineon/infineon-design-system-react';

function Breadcrumb() {
  return (
    <div className="component">
      <h2>Breadcrumb</h2>
      <IfxBreadcrumb>
        <IfxBreadcrumbItem>
          <IfxBreadcrumbItemLabel slot="label">Breadcrumb 1</IfxBreadcrumbItemLabel>
          <IfxDropdownMenu>
            <IfxDropdownItem href="http://google.com">Google</IfxDropdownItem>
            <IfxDropdownItem href="http://bing.com">Bing</IfxDropdownItem>
            <IfxDropdownItem href="http://yahoo.com">Yahoo</IfxDropdownItem>
            <IfxDropdownItem href="http://naver.com">Naver</IfxDropdownItem>
          </IfxDropdownMenu>
        </IfxBreadcrumbItem>

        <IfxBreadcrumbItem>
          <IfxBreadcrumbItemLabel slot="label">Breadcrumb 2</IfxBreadcrumbItemLabel>
          <IfxDropdownMenu>
            <IfxDropdownItem href="http://google.com">Google</IfxDropdownItem>
            <IfxDropdownItem href="http://bing.com">Bing</IfxDropdownItem>
            <IfxDropdownItem href="http://yahoo.com">Yahoo</IfxDropdownItem>
            <IfxDropdownItem href="http://naver.com">Naver</IfxDropdownItem>
          </IfxDropdownMenu>
        </IfxBreadcrumbItem>

        <IfxBreadcrumbItem>
          <IfxBreadcrumbItemLabel slot="label" icon="chipAi16" href="http://google.com">Breadcrumb 3</IfxBreadcrumbItemLabel>
        </IfxBreadcrumbItem>
      </IfxBreadcrumb>
    </div>
  );
}

export default Breadcrumb;