import ControlledForm from "./components/ControlledForm"
import UncontrolledForm from "./components/UncontrolledForm"

const App = () => {
  return (
    <div>
      <UncontrolledForm />
      <hr />
      <ControlledForm />
    </div>
  )
}

export default App