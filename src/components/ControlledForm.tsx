import { useState, ChangeEvent, FormEvent } from "react"
import DisplayUser from "./DisplayUser"

type FormTypes = {
  firstname: string,
  lastname: string,
  middlename: string,
  job: string,
  status: string,
  message: string
}

const ControlledForm = () => {
  const [formData, setFormData] = useState<FormTypes>({
    firstname: 'Johnny',
    lastname: 'Cash',
    middlename: '',
    job: '',
    status: 'single',
    message: ''
  })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const inputName = event.target.name 
    const inputValue = event.target.value

    setFormData(currentFormData => ({
      ...currentFormData,
      [inputName]: inputValue
    }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (formData.firstname === '') {
      console.log('First name field is empty')
    } else {
      console.log(formData) // API to send data
      handleClear()
    }
  }

  const handleClear = () => {
    setFormData({
      firstname: 'Johnny',
      lastname: 'Cash',
      middlename: '',
      job: '',
      status: 'single',
      message: ''
    })

  }

  return (
    <div>
      <h2>Controlled Form</h2>
      <DisplayUser firstname={formData.firstname} lastname={formData.lastname} />
      <form onSubmit={handleSubmit} style={{ 'display': 'flex', 'gap': '1rem', 'flexDirection': 'column' }}>
        <input type="text" name="firstname" value={formData.firstname} placeholder="First name" onChange={handleInputChange} />
        <input type="text" name="lastname" value={formData.lastname} placeholder="Last name" onChange={handleInputChange} />
        <input type="text" name="middlename" value={formData.middlename} placeholder="Middle name" onChange={handleInputChange} />
        <input type="text" name="job" value={formData.job} placeholder="Job" onChange={handleInputChange} />
        <select name="status" value={formData.status} onChange={handleInputChange}>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
        </select>
        <textarea name="message" value={formData.message} onChange={handleInputChange}></textarea>
        <button onClick={handleClear}>Clear</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ControlledForm