import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardImgTop = () => {
  return (
    <Card>
      <CardMedia sx={{ height: 201 }} image='/images/cards/cherry.png' />
      <CardContent sx={{ pt: 4 }}>
        <Typography variant='h6' sx={{ mb: 2 }}>
          Influencing The Influencer
        </Typography>
        <Typography variant='body2'>
          Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism minister
          predicts Cancun will draw as many visitors in 2006 as it did two years ago.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardImgTop
