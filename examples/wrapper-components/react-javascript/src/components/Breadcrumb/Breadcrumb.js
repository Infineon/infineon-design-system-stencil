import React from 'react';
import { IfxBreadcrumb, IfxBreadcrumbItem, IfxBreadcrumbItemLabel } from '@infineon/infineon-design-system-react';


function Breadcrumb() {

    const handleComponentDidLoad = (event) =>{
        console.log("component did load")
    }


    return (
        <div>
            <IfxBreadcrumb>
                <IfxBreadcrumbItem>
                    <IfxBreadcrumbItemLabel slot='label' icon='arrow-down-16' componentDidLoad={handleComponentDidLoad}>Breadcrumb1</IfxBreadcrumbItemLabel>
                        <ifxdropdown-menu>
                            <ifx-dropdown-item url="http://google.com">Google</ifx-dropdown-item>
                            <ifx-dropdown-item url="http://bing.com">Bing</ifx-dropdown-item>
                            <ifx-dropdown-item url="http://yahoo.com">Yahoo</ifx-dropdown-item>
                            <ifx-dropdown-item url="http://naver.com">Naver</ifx-dropdown-item>
                        </ifxdropdown-menu>           
                </IfxBreadcrumbItem>

                <IfxBreadcrumbItem>
                    <IfxBreadcrumbItemLabel slot='label' icon='arrow-down-16' url="http://google.com">Breadcrumb2</IfxBreadcrumbItemLabel>
                        <ifxdropdown-menu>
                            <ifx-dropdown-item url="http://google.com">Google</ifx-dropdown-item>
                            <ifx-dropdown-item url="http://bing.com">Bing</ifx-dropdown-item>
                            <ifx-dropdown-item url="http://yahoo.com">Yahoo</ifx-dropdown-item>
                            <ifx-dropdown-item url="http://naver.com">Naver</ifx-dropdown-item>
                        </ifxdropdown-menu>  
                </IfxBreadcrumbItem> 

                <IfxBreadcrumbItem>
                    <IfxBreadcrumbItemLabel slot='label' icon='arrow-down-16' target='right'>Breadcrumb3aaaaaaaa</IfxBreadcrumbItemLabel>
                        <ifxdropdown-menu>
                            <ifx-dropdown-item url="http://google.com">Google</ifx-dropdown-item>
                            <ifx-dropdown-item url="http://bing.com">Bing</ifx-dropdown-item>
                            <ifx-dropdown-item url="http://yahoo.com">Yahoo</ifx-dropdown-item>
                            <ifx-dropdown-item url="http://naver.com">Naver</ifx-dropdown-item>
                        </ifxdropdown-menu>  
                </IfxBreadcrumbItem>
            </IfxBreadcrumb>
        </div>
    );
}

export default Breadcrumb;