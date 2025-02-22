import Link from 'next/link'
import { Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import PageHeader from 'src/@core/components/page-header'
import CardSnippet from 'src/@core/components/card-snippet'
import DropzoneWrapper from 'src/@core/styles/libs/react-dropzone'
import FileUploaderSingle from 'src/views/forms/form-elements/file-uploader/FileUploaderSingle'
import FileUploaderMultiple from 'src/views/forms/form-elements/file-uploader/FileUploaderMultiple'
import FileUploaderRestrictions from 'src/views/forms/form-elements/file-uploader/FileUploaderRestrictions'
import * as source from 'src/views/forms/form-elements/file-uploader/FileUploaderSourceCode'

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))
const FileUploader = () => {
  return (
    <DropzoneWrapper>
      <Grid container spacing={6} className='match-height'>
        <PageHeader
          title={
            <Typography variant='h5'>
              <LinkStyled href='https://github.com/react-dropzone/react-dropzone/' target='_blank'>
                React Dropzone
              </LinkStyled>
            </Typography>
          }
          subtitle={<Typography variant='body2'>Simple HTML5 drag-drop zone with React.js</Typography>}
        />
        <Grid item xs={12}>
          <CardSnippet
            title='Upload Multiple Files'
            code={{
              tsx: null,
              jsx: source.FileUploaderMultipleJSXCode
            }}
          >
            <FileUploaderMultiple />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title='Upload Single Files'
            code={{
              tsx: null,
              jsx: source.FileUploaderSingleJSXCode
            }}
          >
            <FileUploaderSingle />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title='Upload Files with Restrictions'
            code={{
              tsx: null,
              jsx: source.FileUploaderRestrictionsJSXCode
            }}
          >
            <FileUploaderRestrictions />
          </CardSnippet>
        </Grid>
      </Grid>
    </DropzoneWrapper>
  )
}

export default FileUploader
