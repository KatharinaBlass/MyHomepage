import styled from 'styled-components'
import { Edu } from '../page/Education'
import React from 'react'

const ItemLayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const DateRange = styled.div`
  min-width: 9rem;
  text-align: right;
  align-self: center;
`
const InfoWrapper = styled.div`
  padding: 1rem 0;
  max-width: 600px;
`
const Subject = styled.p`
  margin-top: 0;
  margin-bottom: 0.25rem;
  font-weight: 600;
  font-size: 1.2rem;
`
const Details = styled.p`
  margin: 0;
`
const BulletPointContainer = styled.div`
  margin: 0 2rem;
  display: flex;
  align-items: center;
  position: relative;
`
const BulletPoint = styled.span`
  width: 0.8rem;
  height: 0.8rem;
  background: #33a8c5;
  border-radius: 50%;
  z-index: 2;
`
const BulletPointShadow = styled.span`
  width: 1.4rem;
  height: 1.4rem;
  background: #bde4ed;
  border-radius: 50%;
  z-index: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
const Line = styled.span`
  border: 1px solid #33a8c5;
  width: 0px;
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

export default function EduListItem(props: Edu) {
  const startDate = formatDate(props.start)
  const endDate = formatDate(props.end)
  return (
    <ItemLayoutWrapper>
      <DateRange>{startDate + ' - ' + endDate}</DateRange>
      <BulletPointContainer>
        <BulletPointShadow />
        <BulletPoint />
        <Line />
      </BulletPointContainer>
      <InfoWrapper>
        <Subject>{props.studySubject}</Subject>
        <Details>
          {props.universityName}
          {props.degreeType && <span>, {props.degreeType}</span>}
          {props.grade && <span> - Grade: {props.grade.toFixed(1)}</span>}
        </Details>
      </InfoWrapper>
    </ItemLayoutWrapper>
  )
}

function formatDate(date: Date) {
  return date.getMonth() + 1 + '/' + date.getFullYear()
}
