
import Link from 'next/link'
import { Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import PageHeader from 'src/@core/components/page-header'
import CardSnippet from 'src/@core/components/card-snippet'
import ToastBlank from 'src/views/components/toast/ToastBlank'
import ToastError from 'src/views/components/toast/ToastError'
import ToastEmoji from 'src/views/components/toast/ToastEmoji'
import ToastThemed from 'src/views/components/toast/ToastThemed'
import ToastCustom from 'src/views/components/toast/ToastCustom'
import ToastSuccess from 'src/views/components/toast/ToastSuccess'
import ToastPromise from 'src/views/components/toast/ToastPromise'
import ToastMultiLine from 'src/views/components/toast/ToastMultiLine'
import ToastCustomPosition from 'src/views/components/toast/ToastCustomPosition'
import * as source from 'src/views/components/toast/ToastSourceCode'

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))
const ReactHotToasts = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <PageHeader
        subtitle={<Typography variant='body2'>Smoking hot React notifications.</Typography>}
        title={
          <Typography variant='h5'>
            <LinkStyled href='https://github.com/timolins/react-hot-toast' target='_blank'>
              React Hot Toasts
            </LinkStyled>
          </Typography>
        }
      />
      <Grid item xs={12} sm={6} md={4}>
        <CardSnippet
          title=''
          code={{
            tsx: null,
            jsx: source.ToastBlankJSXCode
          }}
        >
          <ToastBlank />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardSnippet
          title=''
          code={{
            tsx: null,
            jsx: source.ToastMultiLineJSXCode
          }}
        >
          <ToastMultiLine />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardSnippet
          title=''
          code={{
            tsx: null,
            jsx: source.ToastSuccessJSXCode
          }}
        >
          <ToastSuccess />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardSnippet
          title=''
          code={{
            tsx: null,
            jsx: source.ToastErrorJSXCode
          }}
        >
          <ToastError />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardSnippet
          title=''
          code={{
            tsx: null,
            jsx: source.ToastPromiseJSXCode
          }}
        >
          <ToastPromise />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardSnippet
          title=''
          code={{
            tsx: null,
            jsx: source.ToastEmojiJSXCode
          }}
        >
          <ToastEmoji />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardSnippet
          title=''
          code={{
            tsx: null,
            jsx: source.ToastThemedJSXCode
          }}
        >
          <ToastThemed />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardSnippet
          title=''
          code={{
            tsx: null,
            jsx: source.ToastCustomJSXCode
          }}
        >
          <ToastCustom />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardSnippet
          title=''
          code={{
            tsx: null,
            jsx: source.ToastCustomPositionJSXCode
          }}
        >
          <ToastCustomPosition />
        </CardSnippet>
      </Grid>
    </Grid>
  )
}

export default ReactHotToasts
