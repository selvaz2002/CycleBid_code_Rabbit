import { useState } from 'react'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Switch from '@mui/material/Switch'
import Dialog from '@mui/material/Dialog'
import AlertTitle from '@mui/material/AlertTitle'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import LinearProgress from '@mui/material/LinearProgress'

import Icon from 'src/@core/components/icon'

import CustomChip from 'src/@core/components/mui/chip'

import PricingPlans from 'src/views/pages/pricing/PricingPlans'

const CurrentPlanCard = ({ data }) => {
  const [open, setOpen] = useState(false)
  const [userInput, setUserInput] = useState('yes')
  const [plan, setPlan] = useState('annually')
  const [secondDialogOpen, setSecondDialogOpen] = useState(false)
  const [openPricingDialog, setOpenPricingDialog] = useState(false)

  const handleChange = e => {
    if (e.target.checked) {
      setPlan('annually')
    } else {
      setPlan('monthly')
    }
  }
  const handleClose = () => setOpen(false)
  const handleSecondDialogClose = () => setSecondDialogOpen(false)

  const handleConfirmation = value => {
    handleClose()
    setUserInput(value)
    setSecondDialogOpen(true)
  }

  return (
    <>
      <Card>
        <CardHeader title='Current Plan' />
        <CardContent>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 6 }}>
                <Typography sx={{ mb: 2, fontWeight: 500 }}>Your Current Plan is Basic</Typography>
                <Typography sx={{ color: 'text.secondary' }}>A simple start for everyone</Typography>
              </Box>
              <Box sx={{ mb: 6 }}>
                <Typography sx={{ mb: 2, fontWeight: 500 }}>Active until Dec 09, 2021</Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  We will send you a notification upon Subscription expiration
                </Typography>
              </Box>
              <div>
                <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ mr: 2, fontWeight: 500 }}>$199 Per Month</Typography>
                  <CustomChip label='Popular' size='small' color='primary' skin='light' />
                </Box>
                <Typography sx={{ color: 'text.secondary' }}>Standard plan for small to medium businesses</Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Alert severity='warning' icon={false} sx={{ mb: 6 }}>
                <AlertTitle sx={{ fontWeight: 700 }}>We need your attention!</AlertTitle>
                Your plan requires update
              </Alert>

              <div>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>Days</Typography>
                  <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>24 of 30 Days</Typography>
                </Box>
                <LinearProgress
                  value={75}
                  variant='determinate'
                  sx={{ my: 1, height: 12, borderRadius: 6, '& .MuiLinearProgress-bar': { borderRadius: 6 } }}
                />
                <Typography sx={{ color: 'text.secondary' }}>
                  6 days remaining until your plan requires update
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ mt: 3, gap: 3, display: 'flex', flexWrap: 'wrap' }}>
                <Button variant='contained' onClick={() => setOpenPricingDialog(true)}>
                  Upgrade Plan
                </Button>
                <Button variant='outlined' color='secondary' onClick={() => setOpen(true)}>
                  Cancel Subscription
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Dialog fullWidth maxWidth='xs' open={open} onClose={handleClose}>
        <DialogContent
          sx={{
            pb: theme => `${theme.spacing(6)} !important`,
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <Box
            sx={{
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              '& svg': { mb: 6, color: 'warning.main' }
            }}
          >
            <Icon icon='mdi:alert-circle-outline' fontSize='5.5rem' />
            <Typography>Are you sure you would like to cancel your subscription?</Typography>
          </Box>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'center',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <Button variant='contained' sx={{ mr: 2 }} onClick={() => handleConfirmation('yes')}>
            Yes
          </Button>
          <Button variant='outlined' color='secondary' onClick={() => handleConfirmation('cancel')}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog fullWidth maxWidth='xs' open={secondDialogOpen} onClose={handleSecondDialogClose}>
        <DialogContent
          sx={{
            pb: theme => `${theme.spacing(6)} !important`,
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              '& svg': {
                mb: 8,
                color: userInput === 'yes' ? 'success.main' : 'error.main'
              }
            }}
          >
            <Icon
              fontSize='5.5rem'
              icon={userInput === 'yes' ? 'mdi:check-circle-outline' : 'mdi:close-circle-outline'}
            />
            <Typography variant='h4' sx={{ mb: 5 }}>
              {userInput === 'yes' ? 'Unsubscribed!' : 'Cancelled'}
            </Typography>
            <Typography>
              {userInput === 'yes' ? 'Your subscription cancelled successfully.' : 'Unsubscription Cancelled!!'}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'center',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <Button variant='contained' color='success' onClick={handleSecondDialogClose}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        fullWidth
        scroll='body'
        maxWidth='lg'
        open={openPricingDialog}
        onClose={() => setOpenPricingDialog(false)}
        onBackdropClick={() => setOpenPricingDialog(false)}
      >
        <DialogContent
          sx={{
            position: 'relative',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            py: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <IconButton
            size='small'
            onClick={() => setOpenPricingDialog(false)}
            sx={{ position: 'absolute', right: '1rem', top: '1rem' }}
          >
            <Icon icon='mdi:close' />
          </IconButton>
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Typography variant='h5' sx={{ mb: 3 }}>
              Find the right plan for your site
            </Typography>
            <Typography variant='body2'>
              Get started with us - it's perfect for individuals and teams. Choose a subscription plan that meets your
              needs.
            </Typography>
          </Box>
          <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <InputLabel
              htmlFor='modal-pricing-switch'
              sx={{ fontWeight: 600, cursor: 'pointer', fontSize: '0.875rem', color: 'text.secondary' }}
            >
              Monthly
            </InputLabel>
            <Switch onChange={handleChange} id='modal-pricing-switch' checked={plan === 'annually'} />
            <InputLabel
              htmlFor='modal-pricing-switch'
              sx={{ fontWeight: 600, cursor: 'pointer', fontSize: '0.875rem', color: 'text.secondary' }}
            >
              Annually
            </InputLabel>
          </Box>
          <PricingPlans data={data} plan={plan} />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CurrentPlanCard
