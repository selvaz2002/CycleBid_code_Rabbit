import { useState } from 'react'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Collapse from '@mui/material/Collapse'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

import Icon from 'src/@core/components/icon'

const CardWithCollapse = () => {
  const [collapse, setCollapse] = useState(false)

  const handleClick = () => {
    setCollapse(!collapse)
  }

  return (
    <Card>
      <CardMedia sx={{ height: 195 }} image='/images/cards/orange-candy.png' />
      <CardContent sx={{ pb: 3 }}>
        <Typography variant='h6' sx={{ mb: 2 }}>
          Popular Uses Of The Internet
        </Typography>
        <Typography variant='body2'>
          Although cards can support multiple actions, UI controls, and an overflow menu.
        </Typography>
      </CardContent>
      <CardActions className='card-action-dense'>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Button onClick={handleClick}>Details</Button>
          <IconButton size='small' onClick={handleClick}>
            <Icon fontSize='1.875rem' icon={collapse ? 'mdi:chevron-up' : 'mdi:chevron-down'} />
          </IconButton>
        </Box>
      </CardActions>
      <Collapse in={collapse}>
        <Divider sx={{ m: '0 !important' }} />
        <CardContent>
          <Typography variant='body2'>
            I&prime;m a thing. But, like most politicians, he promised more than he could deliver. You won&prime;t have
            time for sleeping, soldier, not with all the bed making you&prime;ll be doing. Then we&prime;ll go with that
            data file! Hey, you add a one and two zeros to that or we walk! You&prime;re going to do his laundry?
            I&prime;ve got to find a way to escape.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default CardWithCollapse
