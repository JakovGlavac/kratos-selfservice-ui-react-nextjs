// import { Alert, AlertContent } from '@ory/themes'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react'
import { UiText } from '@ory/kratos-client'

interface MessageProps {
  message: UiText
}

export const Message = ({ message }: MessageProps) => {
  return (
    <Alert status={message.type === 'error' ? 'error' : 'info'} my="5">
      <AlertDescription data-testid={`ui/message/${message.id}`}>
        {message.text}
      </AlertDescription>
    </Alert>
  )
}

interface MessagesProps {
  messages?: Array<UiText>
}

export const Messages = ({ messages }: MessagesProps) => {
  if (!messages) {
    // No messages? Do nothing.
    return null
  }

  return (
    <div>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  )
}
