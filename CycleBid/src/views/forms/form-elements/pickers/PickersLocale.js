import { useState } from 'react'

import Box from '@mui/material/Box'
import fr from 'date-fns/locale/fr'
import ar from 'date-fns/locale/ar-SA'
import en from 'date-fns/locale/en-US'
import { useTranslation } from 'react-i18next'
import DatePicker, { registerLocale } from 'react-datepicker'

import CustomInput from './PickersCustomInput'

const langObj = { fr, ar, en }

const PickersLocale = ({ popperPlacement }) => {
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(new Date())

  const { i18n } = useTranslation()
  registerLocale(i18n.language, langObj[i18n.language])

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
      <div>
        <DatePicker
          selected={date}
          id='locale-picker'
          locale={i18n.language}
          popperPlacement={popperPlacement}
          onChange={date => setDate(date)}
          customInput={<CustomInput label='Locale Dates' />}
        />
      </div>
      <div>
        <DatePicker
          showTimeSelect
          selected={time}
          id='locale-time'
          locale={i18n.language}
          dateFormat='MM/dd/yyyy h:mm aa'
          popperPlacement={popperPlacement}
          onChange={date => setTime(date)}
          customInput={<CustomInput label='Locale Time' />}
        />
      </div>
    </Box>
  )
}

export default PickersLocale
