
import { useState } from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import MuiToggleButton from '@mui/material/ToggleButton'
import Icon from 'src/@core/components/icon'

const ToggleButton = styled(MuiToggleButton)(({ theme }) => ({
  margin: theme.spacing(1),
  border: 'none !important',
  padding: theme.spacing(2),
  '&:not(:first-of-type)': {
    borderRadius: `${theme.shape.borderRadius}px !important`
  },
  '&:first-of-type': {
    borderRadius: `${theme.shape.borderRadius}px !important`
  }
}))

const ButtonToggleCustomized = () => {
  const [alignment, setAlignment] = useState('left')
  const [formats, setFormats] = useState(() => ['italic'])

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment)
  }

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats)
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <ToggleButtonGroup exclusive value={alignment} onChange={handleAlignment} aria-label='text alignment'>
        <ToggleButton value='left' aria-label='left aligned'>
          <Icon icon='mdi:format-align-left' />
        </ToggleButton>
        <ToggleButton value='center' aria-label='center aligned'>
          <Icon icon='mdi:format-align-center' />
        </ToggleButton>
        <ToggleButton value='right' aria-label='right aligned'>
          <Icon icon='mdi:format-align-right' />
        </ToggleButton>
        <ToggleButton value='justify' aria-label='justified' disabled>
          <Icon icon='mdi:format-align-justify' />
        </ToggleButton>
      </ToggleButtonGroup>
      <Divider flexItem orientation='vertical' sx={{ m: 1 }} />
      <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label='text alignment'>
        <ToggleButton value='bold' aria-label='bold'>
          <Icon icon='mdi:format-bold' />
        </ToggleButton>
        <ToggleButton value='italic' aria-label='italic'>
          <Icon icon='mdi:format-italic' />
        </ToggleButton>
        <ToggleButton value='underlined' aria-label='underlined'>
          <Icon icon='mdi:format-underline' />
        </ToggleButton>
        <ToggleButton value='color' aria-label='color' disabled>
          <Icon icon='mdi:format-color-fill' />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  )
}

export default ButtonToggleCustomized
