import React from 'react'
import { Container , Row , Col} from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (

    <Container fluid>
        <Row>
            <Col>
                <Outlet />
            </Col>
        </Row>
    </Container>

  )
}

export default Layout
