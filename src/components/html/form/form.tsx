import React from 'react'
import Navigation from './Navigation'

type props = {
  onSubmit: React.FormEventHandler<HTMLFormElement>
  saveStep: () => boolean
  children: React.ReactNode
  className?: string
  navigation?: React.ComponentProps<typeof Navigation>
}

const Form = ({
  onSubmit,
  children,
  className,
  navigation,
  saveStep,
}: props) => {
  const transformedNavigation = {
    ...navigation,
    setStep: (step: number) => {
      if (step > navigation.step && saveStep()) {
        navigation.setStep(step)
      } else if (step < navigation.step) {
        saveStep()
        navigation.setStep(step)
      }
    },
  }
  return (
    <form
      className={
        'max-w-lg w-full flex flex-col justify-center  rounded-lg ' + className
      }
      onSubmit={onSubmit}
    >
      {children}
      <Navigation {...transformedNavigation} />
    </form>
  )
}

export default Form
