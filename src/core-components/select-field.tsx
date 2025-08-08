import { CaretDownIcon } from '@phosphor-icons/react'
import { useState } from 'react'

interface SelectFieldProps {
  label: string
  name?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function SelectField({
  label,
  name,
  value,
  onChange,
}: SelectFieldProps) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          onBlur={() => setIsFocused(false)}
          onClick={() => setIsFocused((prev) => !prev)}
          className={`w-full px-3 py-3 bg-slate-800 border border-gray-700 rounded-lg ${
            value === '' ? 'text-slate-500' : 'text-white'
          } focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none pr-10`}
        >
          <option value="">Select type</option>
          <option value="Prime">Prime</option>
          <option value="Zoom">Zoom</option>
        </select>

        <CaretDownIcon
          weight="bold"
          size={16}
          className={`pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 transition-transform duration-200 ${
            isFocused ? 'rotate-180' : ''
          }`}
        />
      </div>
    </div>
  )
}
