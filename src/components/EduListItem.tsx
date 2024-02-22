import styled from 'styled-components'
import { Edu } from '../page/Education'

const ItemLayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem 0;
`
const DateRange = styled.div`
  min-width: 10rem;
`
const Subject = styled.p`
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-weight: 600;
`
const Details = styled.p`
  margin: 0;
`

export default function EduListItem(props: Edu) {
  const startDate = formatDate(props.start)
  const endDate = formatDate(props.end)
  return (
    <ItemLayoutWrapper>
      <DateRange>{startDate + ' - ' + endDate}</DateRange>
      <div>
        <Subject>{props.studySubject}</Subject>
        <Details>
          {props.universityName}, {props.degreeType}{' '}
          {props.grade && <span> - Grade: {props.grade}</span>}
        </Details>
      </div>
    </ItemLayoutWrapper>
  )
}

function formatDate(date: Date) {
  return date.getMonth() + 1 + '/' + date.getFullYear()
}
