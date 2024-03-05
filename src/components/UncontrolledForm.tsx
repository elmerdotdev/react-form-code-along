import { useRef, FormEvent } from 'react'

const UncontrolledForm = () => {
  const firstnameRef = useRef<HTMLInputElement>(null)
  const lastnameRef = useRef<HTMLInputElement>(null)
  const middlenameRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log({
      firstname: firstnameRef.current?.value,
      lastname: lastnameRef.current?.value,
      middlename: middlenameRef.current?.value
    })
  }

  return (
    <div>
      <h2>Uncontrolled Form</h2>
      <form onSubmit={handleSubmit}>
        <input ref={firstnameRef} type="text" name="firstname" placeholder="First name" />
        <input ref={lastnameRef} type="text" name="lastname" placeholder="Last name" />
        <input ref={middlenameRef} type="text" name="middlename" placeholder="Middle name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UncontrolledForm