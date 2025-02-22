import { useState } from 'react'

import Box from '@mui/material/Box'

import subDays from 'date-fns/subDays'
import addDays from 'date-fns/addDays'
import DatePicker from 'react-datepicker'

import CustomInput from './PickersCustomInput'

const PickersMinMax = ({ popperPlacement }) => {
  const [minDate, setMinDate] = useState(new Date())
  const [maxDate, setMaxDate] = useState(new Date())

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
      <div>
        <DatePicker
          id='min-date'
          selected={minDate}
          minDate={subDays(new Date(), 5)}
          popperPlacement={popperPlacement}
          onChange={date => setMinDate(date)}
          customInput={<CustomInput label='Min Date' />}
        />
      </div>
      <div>
        <DatePicker
          id='max-date'
          selected={maxDate}
          maxDate={addDays(new Date(), 5)}
          popperPlacement={popperPlacement}
          onChange={date => setMaxDate(date)}
          customInput={<CustomInput label='Max Date' />}
        />
      </div>
    </Box>
  )
}

export default PickersMinMax
