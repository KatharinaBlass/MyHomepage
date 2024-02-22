import styled from 'styled-components'
import EduListItem from '../components/EduListItem'
import React from 'react'

const EducationContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export type Edu = {
  universityName: string
  universityLocation: string
  degreeType?: string
  studySubject: string
  grade?: number
  start: Date
  end: Date
}

const eduCareer: Edu[] = [
  {
    universityName: 'Hochschule für Technik und Wirtschaft Berlin',
    universityLocation: 'Berlin',
    degreeType: 'Master of Science',
    studySubject: 'International Media Informatics',
    grade: 1.1,
    start: new Date(2020, 9, 1),
    end: new Date(2023, 10, 23),
  },
  {
    universityName: 'Udacity',
    universityLocation: 'Online',
    degreeType: 'Nanodegree',
    studySubject: 'User Experience Design',
    start: new Date(2020, 11, 1),
    end: new Date(2021, 1, 27),
  },
  {
    universityName: 'Hasso-Plattner-Institut',
    universityLocation: 'Potsdam',
    degreeType: 'Bachelor of Science',
    studySubject: 'IT-Systems Engineering',
    grade: 1.8,
    start: new Date(2016, 9, 1),
    end: new Date(2020, 2, 31),
  },
  {
    universityName: 'Friedrich-Schiller-Gymnasium',
    universityLocation: 'Königs Wusterhausen',
    studySubject: 'A-Levels',
    grade: 1.0,
    start: new Date(2010, 7, 1),
    end: new Date(2016, 5, 25),
  },
]

export default function Education({ id }: { id: string }) {
  return (
    <EducationContent id={id}>
      <h1>Education</h1>
      <div>
        {eduCareer.map((edu) => (
          <EduListItem {...edu} key={edu.studySubject} />
        ))}
      </div>
    </EducationContent>
  )
}
