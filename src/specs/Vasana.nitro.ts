import type { HybridObject } from 'react-native-nitro-modules'

export interface Math extends HybridObject<{
  ios: 'swift'
  android: 'kotlin'
}> {
  add(a: number, b: number): number
}

export interface Haptic extends HybridObject<{
  ios: 'swift'
  android: 'kotlin'
}> {
  play(duration: number): void
  stop(): void
}
