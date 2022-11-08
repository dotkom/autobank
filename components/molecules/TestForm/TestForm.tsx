export const TestForm = () => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data: any) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register({ required: true })} />
      {errors.firstName && <span>This field is required</span>}

      <input type="submit" />
    </form>
  )
}

function useForm(): { register: any; handleSubmit: any; errors: any } {
  throw new Error('Function not implemented.')
}
