export default {
  title: "Components/Ifx-List-Group",
  args: {
    title: 'Notification title',
    description: 'Notification description',
    flush: false,
    bulletpoint: false,
    badge: false,
    badgeValue: 0,
    creationTime: "30/03/2023 06:25:00"
  },
};


const DefaultTemplate = (args) =>
  `<ifx-list-group flush="${args.flush}" bulletpoint="${args.bulletpoint}">
    <ifx-list-item slot="list-item" badge="${args.badge}" badge-value="${args.badgeValue}">Item 1</ifx-list-item>
    <ifx-list-item slot="list-item" badge="${args.badge}" badge-value="${args.badgeValue}">Item 2</ifx-list-item>
    <ifx-list-item slot="list-item">Item 3</ifx-list-item>
    <ifx-list-item slot="list-item">Item 3</ifx-list-item>
  </ifx-list-group>`;


export const Default = DefaultTemplate.bind({});
Default.argTypes = {
  description: {
    table: {
      disable: true
    }
  },
  title: {
    table: {
      disable: true
    }
  },
  creationTime: {
    table: {
      disable: true
    }
  }
}


const NotificationTemplate = (args) =>
  `<ifx-list-group flush="${args.flush}">
    <ifx-list-notification slot="list-notification" creation-time="${args.creationTime}" title="${args.title}">${args.description}</ifx-list-notification>
    <ifx-list-notification slot="list-notification" creation-time="25/02/2023 10:30:00" title="${args.title}">${args.description}</ifx-list-notification>
    <ifx-list-notification slot="list-notification" creation-time="30/03/2023 13:40:00" title="${args.title}">${args.description}</ifx-list-notification>
    <ifx-list-notification slot="list-notification" creation-time="30/03/2023 12:02:00" title="${args.title}">${args.description}</ifx-list-notification>
    <ifx-list-notification slot="list-notification" creation-time="30/03/2023 09:23:00" title="${args.title}">${args.description}</ifx-list-notification>
  </ifx-list-group>`;


export const Notifications = NotificationTemplate.bind({});
Notifications.argTypes = {
  bulletpoint: {
    table: {
      disable: true
    }
  },
  badge: {
    table: {
      disable: true
    }
  },
  badgeValue: {
    table: {
      disable: true
    }
  },
}

