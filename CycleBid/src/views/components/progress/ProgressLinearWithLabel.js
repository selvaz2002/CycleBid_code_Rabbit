import { useEffect, useState } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'

const LinearProgressWithLabel = props => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant='determinate' {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant='body2' color='text.secondary'>{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  )
}

export default function ProcessLinearWithLabel() {
  const [progress, setProgress] = useState(10)
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 100 ? 10 : prevProgress + 10))
    }, 800)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return <LinearProgressWithLabel value={progress} />
}
