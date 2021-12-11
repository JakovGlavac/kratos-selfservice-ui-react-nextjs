import { Input } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Text
} from '@chakra-ui/react'
import { getNodeLabel } from '@ory/integrations/ui'
import { Button, TextInput } from '@ory/themes'

import { NodeInputButton } from './NodeInputButton'
import { NodeInputCheckbox } from './NodeInputCheckbox'
import { NodeInputHidden } from './NodeInputHidden'
import { NodeInputSubmit } from './NodeInputSubmit'
import { NodeInputProps } from './helpers'

export function NodeInputDefault<T>(props: NodeInputProps) {
  const { node, attributes, value = '', setValue, disabled } = props

  // Some attributes have dynamic JavaScript - this is for example required for WebAuthn.
  const onClick = () => {
    // This section is only used for WebAuthn. The script is loaded via a <script> node
    // and the functions are available on the global window level. Unfortunately, there
    // is currently no better way than executing eval / function here at this moment.
    if (attributes.onclick) {
      const run = new Function(attributes.onclick)
      run()
    }
  }
  console.log('attributes', attributes)

  // Render a generic text input field.
  return (
    <FormControl isRequired={attributes.required}>
      <FormLabel>{node.meta.label?.text}</FormLabel>

      <Input
        title={node.meta.label?.text}
        onClick={onClick}
        onChange={(e) => {
          setValue(e.target.value)
        }}
        type={attributes.type}
        name={attributes.name}
        value={value}
        disabled={attributes.disabled || disabled}
        help={node.messages.length > 0}
        state={
          node.messages.find(({ type }) => type === 'error')
            ? 'error'
            : undefined
        }
        // isInvalid={}
        subtitle={
          <>
            {node.messages.map(({ text, id }, k) => (
              <Text key={`${id}-${k}`} data-testid={`ui/message/${id}`}>
                {text}
              </Text>
            ))}
          </>
        }
      />
      {/* <Input type="email" /> */}
      {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
    </FormControl>
  )
}
