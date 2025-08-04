import { useState } from 'react'

import Button from '../components/button'
import Card from '../components/card'
import Container from '../components/container'
import Text from '../components/text'

import FormField from '../core-components/form-field'
import SelectField from '../core-components/select-field'
import RadioGroupField from '../core-components/radio-component'
import { TrashIcon } from '@phosphor-icons/react'

export default function EditProduct() {
  const [hasStabilization, setHasStabilization] = useState<boolean | undefined>(
    undefined
  )
  return (
    <Container>
      <Text as="h1" variant="text-xl-bold" className="text-slate-300 mb-4">
        Edit Lens
      </Text>

      <Card className="p-8">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField label="Model" placeholder="NIKKOR Z 24-70mm f/2.8 S" />
          <FormField label="Brand" placeholder="Nikon" />
          <SelectField label="Type" />
          <FormField label="Focal Length" placeholder="24-70mm" />
          <FormField label="Max Aperture" placeholder="f/2.8" />
          <FormField label="Mount" placeholder="Nikon Z Mount" />
          <FormField label="Weight (grams)" placeholder="800" />

          <RadioGroupField
            label="Image Stabilization"
            name="stabilization"
            value={hasStabilization}
            onChange={setHasStabilization}
          />

          <Button size="sm" variant="tertiary" type="submit">
            Save
          </Button>
          <Button
            icon={TrashIcon}
            size="sm"
            variant="secondary"
            className="w-full"
          >
            Delete
          </Button>
        </form>
      </Card>
    </Container>
  )
}
