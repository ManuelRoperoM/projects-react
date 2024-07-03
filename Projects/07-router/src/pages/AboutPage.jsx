import { Link } from '../link'

export default function AboutPage () {
  return (
    <>
      <h2>About</h2>
      <div>
        <p>Hola, este es un clon de react-router</p>
        <Link to='/'>ir a home</Link>
      </div>
    </>
  )
}
