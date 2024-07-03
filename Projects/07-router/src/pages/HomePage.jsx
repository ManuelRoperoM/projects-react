import { Link } from '../link'
export default function HomePage () {
  return (
    <>
      <h2>home</h2>
      <p>Esta es mi pagina para crear una copia de React-Router</p>
      <Link to='/about'>sobre nosotros</Link>
    </>
  )
}
