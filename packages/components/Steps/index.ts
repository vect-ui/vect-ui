import Steps from './Steps.vue'
import Step from './Step.vue'
import { withInstall } from '@vect-ui/utils'

export const VSteps = withInstall(Steps, { Step })
export const VStep = Step

export default Steps
