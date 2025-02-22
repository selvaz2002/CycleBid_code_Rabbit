import MuiChip from '@mui/material/Chip'
import clsx from 'clsx'
import useBgColor from 'src/@core/hooks/useBgColor'

const Chip = props => {
  const { sx, skin, color, rounded } = props
  const bgColors = useBgColor()

  const colors = {
    primary: { ...bgColors.primaryLight },
    secondary: { ...bgColors.secondaryLight },
    success: { ...bgColors.successLight },
    error: { ...bgColors.errorMessage },
    warning: { ...bgColors.warningLight },
   
    info: { ...bgColors.warningFilled }
  }
  const propsToPass = { ...props }
  propsToPass.rounded = undefined

  return (
    <MuiChip
      {...propsToPass}
      variant='filled'
      className={clsx({
        'MuiChip-rounded': rounded,
        'MuiChip-light': skin === 'light'
      })}
      sx={skin === 'light' && color ? Object.assign(colors[color], sx) : sx}
    />
  )
}

export default Chip