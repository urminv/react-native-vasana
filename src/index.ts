// TODO: Export all HybridObjects here for the user

import { NitroModules } from 'react-native-nitro-modules'
import type { Haptic, Math } from './specs/Vasana.nitro'

export const HybridMath = NitroModules.createHybridObject<Math>('Math')

export const HybridHaptic = NitroModules.createHybridObject<Haptic>('Haptic')
