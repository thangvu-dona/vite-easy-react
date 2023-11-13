import { Student } from '@/models'
import * as React from 'react'

export interface StudentCardProps {
  student: Student
  onClick?: (student: Student) => void // 'on...': passive <> 'handle...' active
  onEditClick?: () => void
  onDeleteClick?: () => void
}

// Props are READ ONLY
// DO NOT MUTATE Props
// Props are immutable
export function StudentCard({ student, onClick }: StudentCardProps) {
  let { name, isHero } = student

  return (
    <div onClick={() => onClick?.(student)}>
      Student : {name} {isHero ? 'hero' : 'no-hero'}
    </div>
  )
}
