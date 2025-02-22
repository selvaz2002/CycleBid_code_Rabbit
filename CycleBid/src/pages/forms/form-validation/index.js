import Link from 'next/link'
import { styled } from '@mui/material/styles'
import { Grid, Typography } from '@mui/material'
import PageHeader from 'src/@core/components/page-header'
import FormValidationBasic from 'src/views/forms/form-validation/FormValidationBasic'
import FormValidationAsync from 'src/views/forms/form-validation/FormValidationAsync'
import FormValidationSchema from 'src/views/forms/form-validation/FormValidationSchema'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FormValidation = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6} className='match-height'>
        <PageHeader
          title={
            <Typography variant='h5'>
              <LinkStyled href='https://github.com/react-hook-form/react-hook-form' target='_blank'>
                React Hook Form
              </LinkStyled>
            </Typography>
          }
          subtitle={<Typography variant='body2'>React Hooks for forms validation (Web + React Native)</Typography>}
        />
        <Grid item xs={12}>
          <FormValidationBasic />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormValidationSchema />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormValidationAsync />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default FormValidation
