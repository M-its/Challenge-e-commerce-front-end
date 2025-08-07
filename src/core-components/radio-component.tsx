interface radioOption {
  label: string
  value: boolean
}

interface RadioGroupFieldProps {
  label: string
  name: string
  value?: boolean | null
  onChange?: (value: boolean) => void
  options: radioOption[]
}

export default function RadioGroupField({
  label,
  name,
  value,
  onChange,
  options,
}: RadioGroupFieldProps) {
  return (
    <div className="flex flex-row items-center justify-between">
      <label className="font-medium text-md text-slate-200 mt-4">{label}</label>
      <div className="flex items-center mt-4 gap-4">
        {options.map((option) => (
          <label
            key={String(option.value)}
            className="flex items-center text-md"
          >
            <input
              type="radio"
              name={name}
              className="mr-2"
              checked={value === option.value}
              onChange={() => onChange?.(option.value)}
            />
            <span className="text-slate-200">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
