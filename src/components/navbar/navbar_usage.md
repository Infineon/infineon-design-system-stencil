# Header Navigation
The header navigation is the essential component of our design system as it represents the brand identity of our products. It is also the primary way users navigate through the website or applications.

## Elements of a desktop header
![Image](/usage/navbar/inf-header-default-anatomy_=1440px.png)

**Logo (1)**
The header always starts with the brand logo. Usually the logo is left aligned.

**Application name (2)**
The application name is shown right after the brand logo .
 
**Divider (3)**
Show the separator after the application name if a main navigation is to be shown afterwards.

**Main navigation (4)**
The main navigation enables users to find the information they are looking for. To sustain usability we recommend a **maximum of 7 menu items**.

**Search field (5)**
Optional: Use a search field if you want to enable users to search the entire website for relevant content.

**Secondary navigation (6)**
The secondary menu offers the possibility of displaying further important functions of an application. Every application should design their secondary menu items to its needs. To sustain usability we recommend a **maximum of 6 menu items**.

**Border (7)**
A 1px border indicates the bottom edge of the header at anytime.

## Elements of a mobile header
![Image](/usage/navbar/inf-header-default-anatomy_=720px.png)

**Logo (1)**
Mandatory: On any breakpoint, the brand logo is always shown as a crucial part of the header.

**Application name (2)**
Optional: The application name **can be** shown right after the brand logo.

**Secondary navigation (3)**
It is not necessary to have the same amount of menu items on mobile headers as on desktop headers. Try to move unnecessary menu items into the mobile menu. To sustain usability we recommend a **maximum of 4 menu items**.

**Divider (4)**
If the mobile menu ist not active, a 1 px border is always visible right before the burger menu icon.

**Burger menu icon (5)**
The burger menu icon represents a collapsible menu with additional navigation options.

**Border (6)**
Just like the desktop view, the mobile view has a 1px border below the header.

## Placement
When placing menu items, it is important to consider their relative importance and frequency of use.

### Main navigation
![Image](/usage/navbar/inf-header-main-items-example.png)

**Text link (1)**
These text links should be placed prominently in the header. They should be concise and represent the most important pages or sections of the website.

**Expandable Sub menu (2)**
A text item with a chevron-down icon that points to a mega-menu or a simple drop-down menu and contains further subordinate menu items. This item does not lead to a different page.

**Expanded Sub menu (3)**
A text link with a chevron-up icon which hints that a mega-menu or a simple drop-down menu is collapsible. This item does not lead to a different page.

**More Sub menu (4)**
Due to space or smaller breakpoints it is possible to use a "More" text item which indicates there are more options in the 1st level navigation. Those text items should be placed inside a dropdown menu.

### Secondary navigation
![Image](/usage/navbar/inf-header-secondary-navigation-items-example.png)

The content of the secondary navigation items depends on the needs of your application. To establish consistency across applications we apply a basic set of rules regarding the placement of the items: 

**Search (1)**
Always positioned at the **leftmost** position. To underline its functionality we recommend to add a "Search" label to the icon.

**Other (2)**
Special or less important functions, which you can't fit into the menu, can be positioned right next to the search.

**Notification (3)**
The notification icon is actually right aligned. But cart (4), profile (5) and button (6) have priority regarding the alignment.

**Cart (4)**
For product websites with shopping-like functions, the cart icon is a critical item. It should be placed **third from the right**.

**Profile (5)**
The profile icon is a key item of many websites, so it should be easily accessible. Place it **second from the right**.

**Button (6)**
Depending on the context, the button can be used for a variety of functions such as initiating an action. Place it **rightmost** for easy accessibility.

### Placement by priority
The table below gives you an overview and guidance regarding the placement priorities.  you can use to decide on the composition of the header.

| Breakpoint | Logo      | Application name | Main navigation | Secondary navigation | Search field |
|------------|-----------|------------------|-----------------|----------------------|--------------|
| ≥1440px    | Mandatory | High             | High            | High                 | High         |
| ≥1200px    | Mandatory | High             | High            | High                 | Low          |
| ≥1024px    | Mandatory | High             | n/c             | High                 | n/c          |
| ≥720px     | Mandatory | Low              | n/c             | High                 | n/c          |
| <720px     | Mandatory | Low              | n/c             | High                 | n/c          |

## Breakpoints
![Image](/usage/navbar/inf-header-overview-breakpoints.png)

**≥1440px**
A large header with lots of space and the possibility to display each element.

**≥1200px**
At this width you can decide by priority what to display. 

**≥1024px**
At this width you should change your visible search bar into an icon with a label localized in the secondary navigation. Furthermore it is possible to move less important text links into a collapsible "More" text link.

**≥720px**
At this width the header is simplified even further. Text links are moved into the burger menu.

**<720px**
At his width you should use the most crucial functions in the secondary navigation. Avoid using a "Search "label after the icon.

## Mobile navigation
Below the breakpoint of 1024px the header navigation becomes mobile. This ensures that users with smaller devices like tablets or smartphones get the same user experience as the ones with larger devices.
> By triggering the burger menu icon the menu icon becomes a cross icon. To apply the focus on usability and clarity all other elements except the logo and/or the application name become invisible.

![Image](/usage/navbar/inf-header-overview-breakpoints-1.png)
![Image](/usage/navbar/inf-header-overview-breakpoints-2.png)

## Sticky header
In some situations our websites and applications provide a lot of content on a page and space on a screen is crucial. In those cases, we recommend to use a hidden header that only appears and stays sticky when the user scrolls/swipes up.

### When to use
   - If the header contains important navigation or branding elements that the user needs to access quickly.

### When not to use
   - If a website or application only has a few pages or a small amount of content.
   - If a page has a specific goal, such as completing a form or making a purchase, a sticky header can be distracting and take the user's attention away from the task. In this case, it may be better to deactivate the sticky behaviour or remove the entire header.