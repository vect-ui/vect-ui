import type { Plugin } from 'vue'

import { VButton } from '@vect-ui/components/Button'
import { VBreadcrumb } from '@vect-ui/components/Breadcrumb'
import { VBreadcrumbItem } from '@vect-ui/components/BreadcrumbItem'
import { VIcon } from '@vect-ui/components/Icon'
import { VLink } from '@vect-ui/components/Link'
import { VRadio } from '@vect-ui/components/Radio'
import { VRadioGroup } from '@vect-ui/components/RadioGroup'
import { VStep, VSteps } from '@vect-ui/components/Steps'

export default [
  VButton,
  VIcon,
  VLink,
  VBreadcrumb,
  VBreadcrumbItem,
  VRadioGroup,
  VRadio,
  VSteps,
  VStep
] as Plugin[]
