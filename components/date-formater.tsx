import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string
}

const DateFormater = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'yyyy/MM/dd')}</time>
}

export default DateFormater
