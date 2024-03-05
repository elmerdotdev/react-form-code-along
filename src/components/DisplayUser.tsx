type Props = {
  firstname: string,
  lastname: string
}

const DisplayUser = ({ firstname, lastname }: Props) => {
  return (
    <div>
      <h3>{firstname}</h3>
      <h3>{lastname}</h3>
    </div>
  )
}

export default DisplayUser