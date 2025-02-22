import Link from 'next/link'
import { Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import PageHeader from 'src/@core/components/page-header'
import CardSnippet from 'src/@core/components/card-snippet'
import SwiperLoop from 'src/views/components/swiper/SwiperLoop'
import SwiperZoom from 'src/views/components/swiper/SwiperZoom'
import SwiperFader from 'src/views/components/swiper/SwiperFader'
import SwiperDefault from 'src/views/components/swiper/SwiperDefault'
import SwiperSpacing from 'src/views/components/swiper/SwiperSpacing'
import SwiperFreeMode from 'src/views/components/swiper/SwiperFreeMode'
import SwiperCentered from 'src/views/components/swiper/SwiperCentered'
import SwiperVertical from 'src/views/components/swiper/SwiperVertical'
import SwiperControls from 'src/views/components/swiper/SwiperControls'
import SwiperThumbnails from 'src/views/components/swiper/SwiperThumbnails'
import SwiperAutoSwitch from 'src/views/components/swiper/SwiperAutoSwitch'
import SwiperMultipleSlides from 'src/views/components/swiper/SwiperMultipleSlides'
import SwiperMutationObserver from 'src/views/components/swiper/SwiperMutationObserver'
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import * as source from 'src/views/components/swiper/SwiperSourceCode'
import { useSettings } from 'src/@core/hooks/useSettings'

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))
const Swiper = () => {
  const {
    settings: { direction }
  } = useSettings()

  return (
    <KeenSliderWrapper>
      <Grid container spacing={6} className='match-height'>
        <PageHeader
          subtitle={<Typography variant='body2'>Easily create sliders, carousels and much more</Typography>}
          title={
            <Typography variant='h5'>
              <LinkStyled href='https://github.com/rcbyr/keen-slider' target='_blank'>
                Keen Slider
              </LinkStyled>
            </Typography>
          }
        />
        <Grid item xs={12}>
          <CardSnippet
            title='Default'
            code={{
              tsx: null,
              jsx: source.SwiperDefaultJSXCode
            }}
          >
            <SwiperDefault direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title='Loop'
            code={{
              tsx: null,
              jsx: source.SwiperLoopJSXCode
            }}
          >
            <SwiperLoop direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title='Multiple Slides'
            code={{
              tsx: null,
              jsx: source.SwiperMultipleSlidesJSXCode
            }}
          >
            <SwiperMultipleSlides direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title='Spacing'
            code={{
              tsx: null,
              jsx: source.SwiperSpacingJSXCode
            }}
          >
            <SwiperSpacing direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title='FreeMode'
            code={{
              tsx: null,
              jsx: source.SwiperFreeModeJSXCode
            }}
          >
            <SwiperFreeMode direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title='Centered'
            code={{
              tsx: null,
              jsx: source.SwiperCenteredJSXCode
            }}
          >
            <SwiperCentered direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title='Vertical'
            code={{
              tsx: null,
              jsx: source.SwiperVerticalJSXCode
            }}
          >
            <SwiperVertical />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title='Controls'
            code={{
              tsx: null,
              jsx: source.SwiperControlsJSXCode
            }}
          >
            <SwiperControls direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title='Thumbnails'
            code={{
              tsx: null,
              jsx: source.SwiperThumbnailsJSXCode
            }}
          >
            <SwiperThumbnails direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title='Fader'
            code={{
              tsx: null,
              jsx: source.SwiperFaderJSXCode
            }}
          >
            <SwiperFader direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title='Zoom'
            code={{
              tsx: null,
              jsx: source.SwiperZoomJSXCode
            }}
          >
            <SwiperZoom direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title='Auto Switch'
            code={{
              tsx: null,
              jsx: source.SwiperAutoSwitchJSXCode
            }}
          >
            <SwiperAutoSwitch direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title='Mutation Observer'
            code={{
              tsx: null,
              jsx: source.SwiperMutationObserverJSXCode
            }}
          >
            <SwiperMutationObserver direction={direction} />
          </CardSnippet>
        </Grid>
      </Grid>
    </KeenSliderWrapper>
  )
}

export default Swiper
