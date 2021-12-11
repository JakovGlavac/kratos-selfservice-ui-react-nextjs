import { Input } from '@chakra-ui/react'

import { NodeInputProps } from './helpers'

export function NodeInputHidden<T>({ attributes }: NodeInputProps) {
  // Render a hidden input field
  return (
    <Input
      type={attributes.type}
      name={attributes.name}
      value={attributes.value || 'true'}
    />
  )
}
