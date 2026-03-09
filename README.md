# react-native-vasana

A Nitro Module package for React Native.

## Install

```bash
npm i react-native-vasana react-native-nitro-modules
```

For iOS:

```bash
cd ios && pod install
```

## TypeScript API

```ts
import {
  HybridMath,
  HybridHaptic,
  type Math,
  type Haptic,
} from 'react-native-vasana'
```

## Expo support

This package supports Expo prebuild/dev-client workflows, not Expo Go.

1. Add the plugin in your app config:

```json
{
  "expo": {
    "plugins": ["react-native-vasana"]
  }
}
```

2. Run prebuild and rebuild native projects:

```bash
npx expo prebuild --clean
npx expo run:android
# or
npx expo run:ios
```

The included config plugin enables `newArchEnabled` automatically, which Nitro requires.
