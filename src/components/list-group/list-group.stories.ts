export default {
  title: "Components/Ifx-List-Group",
  args: {
    title: 'Things to buy today',
    description: 'Achtung. Has du Bananen gekauft?',
    flush: false,
    bulletpoint: false,
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
    <ifx-list-notification slot="list-notification" title="${args.title}">${args.description}</ifx-list-notification>
    <ifx-list-notification slot="list-notification" title="${args.title}">${args.description}</ifx-list-notification>
    <ifx-list-notification slot="list-notification" title="${args.title}">${args.description}</ifx-list-notification>
    <ifx-list-notification slot="list-notification" title="${args.title}">${args.description}</ifx-list-notification>
    <ifx-list-notification slot="list-notification" title="${args.title}">${args.description}</ifx-list-notification>
  </ifx-list-group>`;


export const Notifications = NotificationTemplate.bind({});
Notifications.argTypes={
  bulletpoint: {
    table: {
      disable: true
    }
  },
}

