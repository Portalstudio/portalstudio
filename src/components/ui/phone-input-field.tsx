import { useState, useEffect } from "react"
import PhoneInput, { type Value, type Country } from "react-phone-number-input"
import "react-phone-number-input/style.css"

interface PhoneInputFieldProps {
  required?: boolean
}

const COUNTRIES: Country[] = [
  "GF", "FR", "GP", "MQ", "SR", "GY",
]

export function PhoneInputField({ required }: PhoneInputFieldProps) {
  const [value, setValue] = useState<Value | undefined>()

  useEffect(() => {
    const hidden = document.getElementById("phone-hidden") as HTMLInputElement | null
    if (hidden) {
      hidden.value = value ?? ""
    }
  }, [value])

  return (
    <PhoneInput
      defaultCountry="GF"
      countries={COUNTRIES}
      value={value}
      onChange={setValue}
      numberInputProps={{
        required,
      }}
      addInternationalOption={false}
      className="phone-input-wrapper"
    />
  )
}
