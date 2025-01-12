import { getNodeLabel } from '@ory/integrations/ui';
import { Button } from '@chakra-ui/react';

import { NodeInputProps } from './helpers';

export function NodeInputSubmit<T>({
  node,
  attributes,
  setValue,
  disabled,
  dispatchSubmit
}: NodeInputProps) {
  return (
    <>
      <Button
        name={attributes.name}
        onClick={(e) => {
          // On click, we set this value, and once set, dispatch the submission!
          setValue(attributes.value).then(() => dispatchSubmit(e))
        }}
        value={attributes.value || ''}
        disabled={attributes.disabled || disabled}
      >
        {getNodeLabel(node)}
      </Button>
    </>
  )
}
