import { useState } from 'react'
import { useNavigate } from 'react-router'

import Button from '../components/button'
import Card from '../components/card'
import Container from '../components/container'
import Text from '../components/text'

import FormField from '../core-components/form-field'
import SelectField from '../core-components/select-field'
import RadioGroupField from '../core-components/radio-component'
import { TrashIcon } from '@phosphor-icons/react'

export default function CreateProduct() {
  const [model, setModel] = useState<string>('')
  const [brand, setBrand] = useState<string>('')
  const [type, setType] = useState<string>('')
  const [focalLength, setFocalLength] = useState<string>('')
  const [maxAperture, setMaxAperture] = useState<string>('')
  const [mount, setMount] = useState<string>('')
  const [weight, setWeight] = useState<string>('')
  const [active, setActive] = useState<boolean>(true)
  const [hasStabilization, setHasStabilization] = useState<boolean | undefined>(
    undefined
  )

  const navigate = useNavigate()
  const url = 'http://localhost:3333/products'

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const product = {
      model,
      brand,
      type,
      focalLength,
      maxAperture,
      mount,
      weight: Number(weight),
      hasStabilization,
      active,
    }

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      })

      if (!res.ok) throw new Error('Erro ao criar lente')

      navigate('/')
    } catch (err) {
      console.error(err)
      alert('Erro ao criar lente. Verifique os dados.')
    }
  }

  return (
    <Container>
      <Text as="h1" variant="text-xl-bold" className="text-slate-300 mb-4">
        Create Lens
      </Text>

      <Card className="p-8">
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          <FormField
            label="Model"
            placeholder="NIKKOR Z 24-70mm f/2.8 S"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
          <FormField
            label="Brand"
            placeholder="Nikon"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          <SelectField
            label="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />

          <FormField
            label="Focal Length"
            placeholder="24-70mm"
            value={focalLength}
            onChange={(e) => setFocalLength(e.target.value)}
            onBlur={() => {
              if (focalLength && !focalLength.toLowerCase().includes('mm')) {
                setFocalLength((prev) => `${prev}mm`)
              }
            }}
          />
          <FormField
            label="Max Aperture"
            placeholder="f/2.8"
            value={maxAperture}
            onChange={(e) => setMaxAperture(e.target.value)}
            onBlur={() => {
              if (maxAperture && !maxAperture.toLowerCase().startsWith('f/')) {
                setMaxAperture((prev) => `f/${prev}`)
              }
            }}
          />
          <FormField
            label="Mount"
            placeholder="Nikon Z Mount"
            value={mount}
            onChange={(e) => setMount(e.target.value)}
          />
          <FormField
            label="Weight (grams)"
            placeholder="800"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <div>
            <RadioGroupField
              label="Image Stabilization"
              name="stabilization"
              value={hasStabilization}
              onChange={setHasStabilization}
              options={[
                { label: 'Yes', value: true },
                { label: 'No', value: false },
              ]}
            />
            <RadioGroupField
              label="Status"
              name="active"
              value={active}
              onChange={setActive}
              options={[
                { label: 'Active', value: true },
                { label: 'Inactive', value: false },
              ]}
            />
          </div>

          <Button size="md" variant="tertiary" type="submit">
            Save
          </Button>
          <Button
            icon={TrashIcon}
            size="md"
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
