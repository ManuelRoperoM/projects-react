import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useActionsTranslate } from './hooks/useActionTranslate'
import { Container, Row, Col } from 'react-bootstrap'
import { AUTO_LANGUAGE } from './constants'
function App () {
  const { fromLanguage, toLanguage, interchangeLanguages } = useActionsTranslate()
  return (
    <>
      <Container>
        <h1>Translate</h1>
        <Row>
          <Col>
            <h2>From</h2>
            {fromLanguage}
          </Col>
          <Col>
            <button disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
              intercambiar
            </button>
          </Col>
          <Col>
            <h2>To</h2>
            {toLanguage}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
