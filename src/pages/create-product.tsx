import { useState } from 'react'
import { useNavigate } from 'react-router'

import Button from '../components/button'
import Card from '../components/card'
import Container from '../components/container'
import Text from '../components/text'

import FormField from '../core-components/form-field'
import SelectField from '../core-components/select-field'
import RadioGroupField from '../core-components/radio-component'
import { XIcon } from '@phosphor-icons/react'

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

    function extractZodMessages(errorData: { message: string }): string {
      try {
        const parsedErrors = JSON.parse(errorData.message)
        console.log(parsedErrors)
        if (Array.isArray(parsedErrors)) {
          return parsedErrors.map((err) => err.message).join('; ')
        }
      } catch (parsedError) {
        console.error('Fail to parse JSON error message: ', parsedError)
      }
      return errorData.message || 'Unknow error'
    }

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      })

      if (!res.ok) {
        const errorData = await res.json()
        console.log(errorData)
        const msg = extractZodMessages(errorData)
        console.error('Error while creating lens: ', msg)
        alert(`Error while creating lens: ${msg}`)
        return
      }

      navigate('/')
    } catch (err) {
      console.error('Request error:', err)
      alert('Error while creating lens. check data.')
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
            onChange={(e) => {
              const onlyNumbers = e.target.value.replace(/\D/g, '')
              setWeight(onlyNumbers)
            }}
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

          <Button type="submit" size="md" variant="tertiary">
            Save
          </Button>
          <Button
            type="button"
            icon={XIcon}
            size="md"
            variant="secondary"
            className="w-full"
            onClick={() => navigate('/')}
          >
            Cancel
          </Button>
        </form>
      </Card>
    </Container>
  )
}
