import React from 'react';
import { IfxListGroup, IfxListItem, IfxListNotification } from '@infineon/infineon-design-system-react';

function ListGroup() {
    return (
        <div>

            <div>
                <p>
                List-group default:
                </p>
            </div>

           <IfxListGroup flush='true' bulletpoint="true" notification = "false">
                <IfxListItem slot="list-item" badge="true" badge-value="1">First Item of List</IfxListItem>
                <IfxListItem slot="list-item" badge="true" badge-value="10">Second Item of List</IfxListItem>
                <IfxListItem slot="list-item">Third Item of List</IfxListItem>
                <IfxListItem slot="list-item">Fourth Item of List</IfxListItem>
           </IfxListGroup> 

           <div>
                <p>
                List-group notification:
                </p>
            </div>

            <IfxListGroup flush='true' bulletpoint="true" notification="true">
                <IfxListNotification slot="list-notification" creation-time="14/07/2023 06:25:00" title="Notification title">Notification first Item description</IfxListNotification>
                <IfxListNotification slot="list-notification" creation-time="13/07/2023 10:30:00" title="Notification title">Notification second Item description</IfxListNotification>
                <IfxListNotification slot="list-notification" creation-time="13/07/2023 13:40:00" title="Notification title">Notification third Item description</IfxListNotification>
                <IfxListNotification slot="list-notification" creation-time="13/07/2023 12:02:00" title="Notification title">Notification fourth Item description</IfxListNotification>
                <IfxListNotification slot="list-notification" creation-time="13/07/2023 09:23:00" title="Notification title">Notification fifth Item description</IfxListNotification>
            </IfxListGroup>

        </div>
    );
}

export default ListGroup;