import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import customParseFormat from 'dayjs/plugin/customParseFormat' // load on demand

import 'dayjs/locale/vi' // load on demand
dayjs.locale('vi')
dayjs.extend(relativeTime)
dayjs.extend(customParseFormat)
