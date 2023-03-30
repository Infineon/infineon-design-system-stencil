export default {
  title: "Components/Ifx-List-Group",
  args: {
    title: 'Things to buy today',
    description: 'Achtung. Has du Bananen gekauft?',
    flush: false,
    bulletpoint: false,
    created: "30/03/2023 06:25:00"
  },
};


const DefaultTemplate = (args) =>
  `<ifx-list-group flush="${args.flush}" bulletpoint="${args.bulletpoint}">
    <ifx-list-item slot="list-item">Item 1</ifx-list-item>
    <ifx-list-item slot="list-item">Item 2</ifx-list-item>
    <ifx-list-item slot="list-item">Item 3</ifx-list-item>
    <ifx-list-item slot="list-item">Item 3</ifx-list-item>
  </ifx-list-group>`;


export const Default = DefaultTemplate.bind({});
Default.argTypes={
  description: {
    table: {
      disable: true
    }
  },
  title: {
    table: {
      disable: true
    }
  }
}


const NotificationTemplate = (args) =>
  `<ifx-list-group flush="${args.flush}">
    <ifx-list-notification slot="list-notification" created="${args.created}" title="${args.title}">${args.description}</ifx-list-notification>
    <ifx-list-notification slot="list-notification" created="25/02/2023 10:30:00" title="${args.title}">${args.description}</ifx-list-notification>
    <ifx-list-notification slot="list-notification" created="30/03/2023 13:40:00" title="${args.title}">${args.description}</ifx-list-notification>
    <ifx-list-notification slot="list-notification" created="30/03/2023 12:02:00" title="${args.title}">${args.description}</ifx-list-notification>
    <ifx-list-notification slot="list-notification" created="30/03/2023 09:23:00" title="${args.title}">${args.description}</ifx-list-notification>
  </ifx-list-group>`;


export const Notifications = NotificationTemplate.bind({});
Notifications.argTypes={
  bulletpoint: {
    table: {
      disable: true
    }
  },
}

