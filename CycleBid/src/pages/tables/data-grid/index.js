import Link from 'next/link'
import { styled } from '@mui/material/styles'
import { Grid, Typography } from '@mui/material'
import PageHeader from 'src/@core/components/page-header'
import TableBasic from 'src/views/table/data-grid/TableBasic'
import TableFilter from 'src/views/table/data-grid/TableFilter'
import TableColumns from 'src/views/table/data-grid/TableColumns'
import TableEditable from 'src/views/table/data-grid/TableEditable'
import TableBasicSort from 'src/views/table/data-grid/TableBasicSort'
import TableSelection from 'src/views/table/data-grid/TableSelection'
import TableServerSide from 'src/views/table/data-grid/TableServerSide'

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const DataGrid = () => {
  return (
    <Grid container spacing={6}>
      <PageHeader
        title={
          <Typography variant='h5'>
            <LinkStyled href='https://mui.com/x/react-data-grid/' target='_blank'>
              Data Grid
            </LinkStyled>
          </Typography>
        }
        subtitle={
          <Typography variant='body2'>
            Data Grid is a fast and extendable react data table and react data grid.
          </Typography>
        }
      />
      <Grid item xs={12}>
        <TableBasic />
      </Grid>
      <Grid item xs={12}>
        <TableEditable />
      </Grid>
      <Grid item xs={12}>
        <TableColumns />
      </Grid>
      <Grid item xs={12}>
        <TableBasicSort />
      </Grid>
      <Grid item xs={12}>
        <TableFilter />
      </Grid>
      <Grid item xs={12}>
        <TableSelection />
      </Grid>
      <Grid item xs={12}>
        <TableServerSide />
      </Grid>
    </Grid>
  )
}

export default DataGrid
