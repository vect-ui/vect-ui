import { withInstall } from '@vect-ui/utils'
import Checkbox from './src/checkbox.vue'
import CheckboxGroup from './src/checkbox-group.vue'

export const VCheckbox = withInstall(Checkbox, {
  CheckboxGroup
})
export const VCheckboxGroup = withInstall(CheckboxGroup)
export default VCheckbox

export * from './src/checkbox'
export * from './src/checkbox-group'
