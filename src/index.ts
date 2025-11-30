// TODO: Export all HybridObjects here for the user

import { NitroModules } from 'react-native-nitro-modules'
import type { Math } from './specs/Vasana.nitro'

export const HybridMath = NitroModules.createHybridObject<Math>('Math')
