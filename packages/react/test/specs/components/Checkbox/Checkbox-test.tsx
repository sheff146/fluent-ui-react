import * as React from 'react'
import Checkbox from 'src/components/Checkbox/Checkbox'
import CheckboxBase from 'src/components/Checkbox/CheckboxBase'
import {
  isConformant,
  handlesAccessibility,
  htmlIsAccessibilityCompliant,
} from 'test/specs/commonTests'

describe('Checkbox', () => {
  isConformant(Checkbox, { baseComponent: CheckboxBase })
  handlesAccessibility(Checkbox, { defaultRootRole: 'checkbox' })

  describe('HTML accessibility rules validation', () => {
    describe('icon button must have textual representation for screen readers', () => {
      test('base state', async () =>
        await htmlIsAccessibilityCompliant(<Checkbox label="test label" />))

      test('checked', async () =>
        await htmlIsAccessibilityCompliant(<Checkbox label="test label" checked />))

      test('checked and disabled', async () =>
        await htmlIsAccessibilityCompliant(<Checkbox label="test label" checked disabled />))
    })
  })
})
