import {HTMLAttributes} from 'react'

export function Stack(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5em',
        alignItems: 'center',
      }}
    />
  )
}
