# Vetur Terminal Interface

🚧 WIP. This feature is not stable yet. 🚧

VTI is a CLI that exposes some of Vetur's language features:

- [x] Diagnostic errors
- [ ] Formatting

## Usage

```bash
npm i -g vti
# or yarn global add vti
# In your Vue project root
vti diagnostics
```

## settings

### exclude

```js
// vetur.config.js
/** @type {import('vls').VeturConfig} */
module.exports = {
  // **optional** default: `{}`
  // override vscode settings
  // Notice: It only affects the settings used by Vetur.
  settings: {
    'vetur.useWorkspaceDependencies': true,
    'vetur.experimental.templateInterpolationService': true
  },
  // **optional** default: `[{ root: './' }]`
  // support monorepos
  projects: ['./'],
  // support exclude
  exclude: ['src/test/**']
};
```
