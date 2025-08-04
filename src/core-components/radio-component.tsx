interface RadioGroupFieldProps {
  label: string
  name: string
  value?: boolean
  onChange?: (value: boolean) => void
}

export default function RadioGroupField({
  label,
  name,
  value,
  onChange,
}: RadioGroupFieldProps) {
  return (
    <div className="flex flex-row items-center pt-8 gap-4">
      <label className="text-sm font-medium text-slate-200">{label}</label>
      <div className="flex gap-4 items-center">
        <label className="flex items-center">
          <input
            type="radio"
            name={name}
            className="mr-2"
            checked={value === true}
            onChange={() => onChange?.(true)}
          />
          <span className="text-slate-200">Yes</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name={name}
            className="mr-2"
            checked={value === false}
            onChange={() => onChange?.(false)}
          />
          <span className="text-gray-300">No</span>
        </label>
      </div>
    </div>
  )
}
