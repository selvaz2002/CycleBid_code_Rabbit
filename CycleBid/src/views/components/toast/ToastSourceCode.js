export const ToastCustomJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import Icon from 'src/@core/components/icon'

// ** Third Party Components
import toast from 'react-hot-toast'

const ToastCustom = () => {
  const handleClick = () => {
    return toast(
      t => (
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar alt='Victor Anderson' src='/images/avatars/1.png' sx={{ mr: 3, width: 40, height: 40 }} />
            <div>
              <Typography sx={{ fontWeight: 500 }}>John Doe</Typography>
              <Typography variant='caption'>Sure! 8:30pm works great!</Typography>
            </div>
          </Box>
          <IconButton onClick={() => toast.dismiss(t.id)}>
            <Icon icon='mdi:close' fontSize={20} />
          </IconButton>
        </Box>
      ),
      {
        style: {
          minWidth: '300px'
        }
      }
    )
  }

  return (
    <Box
      sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column', '& svg': { mb: 2 } }}
    >
      <Icon icon='mdi:pencil-outline' fontSize='2rem' />
      <Typography sx={{ mb: 4, fontWeight: 600 }}>Custom</Typography>
      <Typography sx={{ mb: 3 }}>Make a toast using any custom content</Typography>
      <Button sx={{ mb: 8 }} variant='contained' onClick={handleClick}>
        Custom
      </Button>
    </Box>
  )
}

export default ToastCustom
`}</code></pre>)

export const ToastCustomPositionJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import Icon from 'src/@core/components/icon'

// ** Third Party Components
import toast from 'react-hot-toast'

const ToastCustomPosition = () => {
  const handleClick = () => {
    return toast.success('Always at the bottom.', {
      position: 'bottom-right'
    })
  }

  return (
    <Box
      sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column', '& svg': { mb: 2 } }}
    >
      <Icon icon='mdi:view-grid-plus-outline' fontSize='2rem' />
      <Typography sx={{ mb: 4, fontWeight: 600 }}>Custom Position</Typography>
      <Typography sx={{ mb: 3 }}>You can change the toast's position as you like.</Typography>
      <Button sx={{ mb: 8 }} variant='contained' onClick={handleClick}>
        Position
      </Button>
    </Box>
  )
}

export default ToastCustomPosition
`}</code></pre>)

export const ToastEmojiJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import Icon from 'src/@core/components/icon'

// ** Third Party Components
import toast from 'react-hot-toast'

const ToastEmoji = () => {
  return (
    <Box
      sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column', '& svg': { mb: 2 } }}
    >
      <Icon icon='mdi:sticker-emoji' fontSize='2rem' />
      <Typography sx={{ mb: 4, fontWeight: 600 }}>Emoji</Typography>
      <Typography sx={{ mb: 3 }}>Add any emoji instead of an icon</Typography>
      <Button sx={{ mb: 8 }} variant='contained' onClick={() => toast('Good Job!', { icon: '👏' })}>
        Emoji
      </Button>
    </Box>
  )
}

export default ToastEmoji
`}</code></pre>)

export const ToastBlankJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import Icon from 'src/@core/components/icon'

// ** Third Party Components
import toast from 'react-hot-toast'

const ToastSimple = () => {
  return (
    <Box
      sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column', '& svg': { mb: 2 } }}
    >
      <Icon icon='mdi:checkbox-blank-outline' fontSize='2rem' />
      <Typography sx={{ mb: 4, fontWeight: 600 }}>Blank</Typography>
      <Typography sx={{ mb: 3 }}>The most basic variant does not have an icon.</Typography>
      <Button sx={{ mb: 8 }} variant='contained' onClick={() => toast('Blank Toast')}>
        Blank
      </Button>
    </Box>
  )
}

export default ToastSimple
`}</code></pre>)

export const ToastErrorJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import Icon from 'src/@core/components/icon'

// ** Third Party Components
import toast from 'react-hot-toast'

const ToastError = () => {
  return (
    <Box
      sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column', '& svg': { mb: 2 } }}
    >
      <Icon icon='mdi:close' fontSize='2rem' />
      <Typography sx={{ mb: 4, fontWeight: 600 }}>Error</Typography>
      <Typography sx={{ mb: 3 }}>Creates a notification with an animated error icon.</Typography>
      <Button sx={{ mb: 8 }} color='error' variant='contained' onClick={() => toast.error("This didn't work.")}>
        Error
      </Button>
    </Box>
  )
}

export default ToastError
`}</code></pre>)

export const ToastPromiseJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import Icon from 'src/@core/components/icon'

// ** Third Party Components
import toast from 'react-hot-toast'

const ToastPromise = () => {
  const handleClick = () => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve('foo')
        } else {
          reject('fox')
        }
      }, 1000)
    })

    return toast.promise(myPromise, {
      loading: 'Loading',
      success: 'Got the data',
      error: 'Error when fetching'
    })
  }

  return (
    <Box
      sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column', '& svg': { mb: 2 } }}
    >
      <Icon icon='mdi:timer-sand' fontSize='2rem' />
      <Typography sx={{ mb: 4, fontWeight: 600 }}>Promise</Typography>
      <Typography sx={{ mb: 3 }}>Update automatically when promise resolves / fails.</Typography>
      <Button sx={{ mb: 8 }} variant='contained' onClick={handleClick}>
        Promise
      </Button>
    </Box>
  )
}

export default ToastPromise
`}</code></pre>)

export const ToastThemedJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

import Icon from 'src/@core/components/icon'

// ** Third Party Components
import toast from 'react-hot-toast'

const ToastThemed = () => {

  const theme = useTheme()

  const handleClick = () => {
    return toast.success('Look at me, I have brand styles.', {
      style: {
        padding: '16px',
        color: theme.palette.primary.main,
        border: 1px solid {theme.palette.primary.main}
      },
      iconTheme: {
        primary: theme.palette.primary.main,
        secondary: theme.palette.primary.contrastText
      }
    })
  }

  return (
    <Box
      sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column', '& svg': { mb: 2 } }}
    >
      <Icon icon='mdi:palette-outline' fontSize='2rem' />
      <Typography sx={{ mb: 4, fontWeight: 600 }}>Themed</Typography>
      <Typography sx={{ mb: 3 }}>Customize the default styles the way you want.</Typography>
      <Button sx={{ mb: 8 }} variant='contained' onClick={handleClick}>
        Themed
      </Button>
    </Box>
  )
}

export default ToastThemed
`}</code></pre>)

export const ToastSuccessJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import Icon from 'src/@core/components/icon'

// ** Third Party Components
import toast from 'react-hot-toast'

const ToastSuccess = () => {
  return (
    <Box
      sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column', '& svg': { mb: 2 } }}
    >
      <Icon icon='mdi:check-circle-outline' fontSize='2rem' />
      <Typography sx={{ mb: 4, fontWeight: 600 }}>Success</Typography>
      <Typography sx={{ mb: 3 }}>Creates a notification with an animated checkmark.</Typography>
      <Button sx={{ mb: 8 }} color='success' variant='contained' onClick={() => toast.success('Successfully toasted!')}>
        Success
      </Button>
    </Box>
  )
}

export default ToastSuccess
`}</code></pre>)

export const ToastMultiLineJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import Icon from 'src/@core/components/icon'

// ** Third Party Components
import toast from 'react-hot-toast'

const ToastMultiLine = () => {
  const handleClick = () => {
    return toast(
      "This toast is super big. I don't think anyone could eat it in one bite. It's larger than you expected. You eat it but it does not seem to get smaller."
    )
  }

  return (
    <Box
      sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column', '& svg': { mb: 2 } }}
    >
      <Icon icon='mdi:text-box-outline' fontSize='2rem' />
      <Typography sx={{ mb: 4, fontWeight: 600 }}>Multi Line</Typography>
      <Typography sx={{ mb: 3 }}>The most basic variant with longer texts</Typography>
      <Button sx={{ mb: 8 }} variant='contained' onClick={handleClick}>
        Multi Line
      </Button>
    </Box>
  )
}

export default ToastMultiLine
`}</code></pre>)

