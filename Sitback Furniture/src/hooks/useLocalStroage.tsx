import { useState, useEffect } from 'react'

const getSavedValue = (key: string, initialValue: any) => {
  const savedValue = localStorage.getItem(key)
  if (savedValue !== null) return JSON.parse(savedValue)
  if (initialValue instanceof Function) return initialValue()
  return initialValue
}

const useLocalStorage = (key: string, initialValue?: any) => {
  const [value, setValue] = useState(() => getSavedValue(key, initialValue))

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value)) // Save updated value
  }, [value])

  return [value, setValue] as const
}

export default useLocalStorage
