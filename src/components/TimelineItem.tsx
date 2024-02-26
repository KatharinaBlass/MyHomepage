import styled from 'styled-components'

const ItemLayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const DateRange = styled.div`
  min-width: 9rem;
  text-align: right;
  align-self: center;

  @media (max-width: 600px) {
    display: none;
  }
`
const MobileDateRange = styled.p`
  font-size: ${(props) => props.theme.fontSizes.s};
  margin: 0;

  @media (min-width: 600px) {
    display: none;
  }
`
const InfoWrapper = styled.div`
  padding: ${(props) => props.theme.spacings.m} 0;
  max-width: 600px;
`
const Title = styled.p`
  margin: ${(props) => props.theme.spacings.s} 0;
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSizes.l};
`
const Subtitle = styled.p`
  margin: 0;
`
const Description = styled.p`
  margin-bottom: 0;
  margin-top: ${(props) => props.theme.spacings.s};
`
const BulletPointContainer = styled.div`
  margin: 0 ${(props) => props.theme.spacings.l};
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 600px) {
    margin: 0 ${(props) => props.theme.spacings.l} 0
      ${(props) => props.theme.spacings.m};
  }
`
const BulletPoint = styled.span<{ $accentColor: string }>`
  width: 0.8rem;
  height: 0.8rem;
  background: ${(props) => props.$accentColor};
  border-radius: 50%;
  z-index: 2;
`
const BulletPointShadow = styled(BulletPoint)`
  width: 1.4rem;
  height: 1.4rem;
  opacity: 0.25;
  z-index: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
const Line = styled.span<{ $accentColor: string }>`
  border: 1px solid;
  border-color: ${(props) => props.$accentColor};
  width: 0px;
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

export type TimelineItemType = {
  title: string
  organizationName: string
  start: Date
  end: Date
  degree?: string
  grade?: number
  description?: string
}

export default function TimelineItem(
  props: TimelineItemType & { bulletColor: string }
) {
  const startDate = formatDate(props.start)
  const endDate = formatDate(props.end)

  return (
    <ItemLayoutWrapper>
      <DateRange>{startDate + ' - ' + endDate}</DateRange>
      <BulletPointContainer>
        <BulletPointShadow $accentColor={props.bulletColor} />
        <BulletPoint $accentColor={props.bulletColor} />
        <Line $accentColor={props.bulletColor} />
      </BulletPointContainer>
      <InfoWrapper>
        <MobileDateRange>{startDate + ' - ' + endDate}</MobileDateRange>
        <Title>{props.title}</Title>
        <Subtitle>
          {props.organizationName}
          {props.degree && <span>, {props.degree}</span>}
          {props.grade && <span> - Grade: {props.grade.toFixed(1)}</span>}
        </Subtitle>
        {props.description && <Description>{props.description}</Description>}
      </InfoWrapper>
    </ItemLayoutWrapper>
  )
}

function formatDate(date: Date) {
  return date.getMonth() + 1 + '/' + date.getFullYear()
}
