CONTRIBUTING
============

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Getting started](#getting-started)
  - [Useful Commands](#useful-commands)
- [Workflow](#workflow)
- [Accessibility](#accessibility)
  - [Role and aria props](#role-and-aria-props)
  - [Focus](#focus)
  - [Keyboard handling](#keyboard-handling)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Getting started

Make sure you have [Node.js][1] version v8 or later installed.

You can contribute to Stardust by being an official [contributor](setup-local-development.md#contributors) or without permissions, as a [collaborator](setup-local-development.md#collaborators)

### Useful Commands

>This list contains the most useful commands. You should run `yarn run` to see all scripts.

```sh
yarn generate:component    // generates a new component. Will ask for the name of the component

yarn start                 // run doc site

yarn test                  // test once
yarn test:watch            // test on file change

yarn build                 // build everything, will run `gulp build`
yarn build:dist            // build dist
yarn build:docs            // build docs

yarn deploy:docs           // deploy gh-pages doc site

yarn lint                  // lint once
yarn lint:fix              // lint and attempt to fix

yarn prettier              // `prettier --list-different "**/*.{ts,tsx}"`
yarn prettier:fix          // prettier and attempt to fix

yarn ci                    // lint, prettier and test
```

## Workflow

These guides will walk your through various activities for contributing:

- [Setup Local Development](setup-local-development.md)
- [Add a feature](add-a-feature.md)
- [Test a feature](test-a-feature.md)
- [Document a feature](document-a-feature.md)
- [Release a new package version](release-a-package.md)

## Accessibility

Stardust implements accessibility using accessibility behaviors. The behaviors add attributes to the DOM elements (mainly role and aria-* properties) as well as handle keyboard interaction and focus. Every accessible component has a default behavior, which can be overriden using the `accessibility` prop. You can choose a behavior from the ones provided by Stardust or you can implement a new behavior.

Behaviors apply properties, focus handling and keyboard handlers to the component slots. When developing a component, the properties and keyboard handlers need to be spread to the corresponding slots.

For complete accessibility contributing guide, requirements and testing, see [Accessibility][2]

- [Role and aria props](#role-and-aria-props)
- [Focus](#focus)
- [Keyboard handling](#keyboard-handling)

### Role and aria props

ARIA [roles][3] and [attributes][4] provide necessary semantics for assistive technologies that allow persons with disabilities to navigate in the page/application.

In addition to behaviors, ARIA [landmarks][5] and [naming props][6] need to be added to the components/elements to form the page structure and provide textual information.

For example, to make an icon-only Button accessible, `aria-label` prop needs to be used:
```html
  <Button icon="star" iconOnly aria-label='Favorites' primary />
```

### Focus

An application should always have an element with [focus][7] when in use. The user can change the focused element by:
- pressing TAB/shift+TAB keys to navigate through the components
- pressing arrow keys to navigate through children (for example menu items in menu)
- using the screen reader with or without virtual cursor

Stardust uses Office UI Fabric [FocusZone][8] for basic TAB and arrow key focus handling. To use the focus zone, you can use the `focusZone` configuration in the behavior (for example see [MenuItemBehavior][9]).

Focused component needs to be clearly visible. This is handled in Stardust by focus indicator functionality. Focus indicator will be displayed only if the application is in keyboard mode. Application switches to keyboard mode when a key relevant to navigation is pressed. It disables keyboard mode on mouse click events.

 To style the focused component, you can use the `isFromKeyboard` utility and prop. See [Button component][10] and [Button style][11] for reference.

### Keyboard handling

In addition to basic focus handling, specific keyboard handlers can be added to the behaviors. These keyboard handlers call actions defined in the components, when corresponding keys are pressed by the user. For reference, see `keyActions` in [MenuItemBehavior][12] and `actionHandlers` in [MenuItem component][13].

[1]: https://nodejs.org/
[2]: https://github.com/stardust-ui/accessibility/blob/master/CONTRIBUTING.md
[3]: https://www.w3.org/TR/wai-aria-1.1/#usage_intro
[4]: https://www.w3.org/TR/wai-aria-1.1/#introstates
[5]: https://www.w3.org/TR/wai-aria-1.1/#landmark_roles
[6]: https://www.w3.org/TR/wai-aria-1.1/#namecalculation
[7]: https://www.w3.org/TR/wai-aria-1.1/#managingfocus
[8]: https://developer.microsoft.com/en-us/fabric#/components/focuszone
[9]: https://github.com/stardust-ui/react/blob/master/src/lib/accessibility/Behaviors/Menu/MenuBehavior.ts
[10]: https://github.com/stardust-ui/react/blob/master/src/components/Button/Button.tsx
[11]: https://github.com/stardust-ui/react/blob/master/src/themes/teams/components/Button/buttonStyles.ts
[12]: https://github.com/stardust-ui/react/blob/master/src/lib/accessibility/Behaviors/Menu/MenuItemBehavior.ts
[13]: https://github.com/stardust-ui/react/blob/master/src/components/Menu/MenuItem.tsx