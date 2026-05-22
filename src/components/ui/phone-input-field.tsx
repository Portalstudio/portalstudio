import { useState } from "react"
import PhoneInput, { type Value, type Country } from "react-phone-number-input"
import "react-phone-number-input/style.css"

interface PhoneInputFieldProps {
  name?: string
  required?: boolean
}

const COUNTRIES: Country[] = [
  "GF", "FR", "GP", "MQ", "SR", "GY",
]

export function PhoneInputField({ name, required }: PhoneInputFieldProps) {
  const [value, setValue] = useState<Value | undefined>()

  return (
    <PhoneInput
      defaultCountry="GF"
      countries={COUNTRIES}
      value={value}
      onChange={setValue}
      numberInputProps={{
        name,
        required,
      }}
      addInternationalOption={false}
      className="phone-input-wrapper"
    />
  )
}
