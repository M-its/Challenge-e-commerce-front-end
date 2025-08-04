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
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-3 bg-slate-800 border border-gray-700 rounded-lg text-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="">Select type</option>
        <option value="Prime">Prime</option>
        <option value="Zoom">Zoom</option>
      </select>
    </div>
  )
}
