import InputText from '../components/input'

interface FormFieldProps {
  label: string
  placeholder?: string
  name?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export default function FormField({
  label,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
}: FormFieldProps) {
  return (
    <div>
      <InputText
        size="md"
        label={label}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  )
}
