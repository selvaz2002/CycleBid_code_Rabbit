import Link from 'next/link'
import { Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import PageHeader from 'src/@core/components/page-header'
import CardSnippet from 'src/@core/components/card-snippet'
import { EditorWrapper } from 'src/@core/styles/libs/react-draft-wysiwyg'
import EditorControlled from 'src/views/forms/form-elements/editor/EditorControlled'
import EditorUncontrolled from 'src/views/forms/form-elements/editor/EditorUncontrolled'
import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const Editors = () => {
  return (
    <EditorWrapper>
      <Grid container spacing={6} className='match-height'>
        <PageHeader
          title={
            <Typography variant='h5'>
              <LinkStyled href='https://jpuri.github.io/react-draft-wysiwyg/#/' target='_blank'>
                React Draft Wysiwyg
              </LinkStyled>
            </Typography>
          }
          subtitle={<Typography variant='body2'>A Wysiwyg Built on ReactJS and DraftJS</Typography>}
        />
        <Grid item xs={12}>
          <CardSnippet
            sx={{ overflow: 'visible' }}
            title='Controlled Wysiwyg Editor'
            code={{
              tsx: null,
              jsx: source.EditorControlledJSXCode
            }}
          >
            <EditorControlled />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            sx={{ overflow: 'visible' }}
            title='Uncontrolled Wysiwyg Editor'
            code={{
              tsx: null,
              jsx: source.EditorUncontrolledJSXCode
            }}
          >
            <EditorUncontrolled />
          </CardSnippet>
        </Grid>
      </Grid>
    </EditorWrapper>
  )
}

export default Editors
