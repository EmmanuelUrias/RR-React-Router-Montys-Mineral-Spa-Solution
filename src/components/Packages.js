import { useState } from 'react'

import { Card, ListGroup } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function Packages(props) {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const displayPackages = props.packages.map((eachPackage) => <ListGroup.Item  >{eachPackage}</ListGroup.Item>)
    

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>
                        Our Packages
                    </Card.Title>
                    <Card.Text>
                        Check out some of our packages! Every package is ethically source and organic!
                    </Card.Text>
                </Card.Body>
            <ListGroup>
                {displayPackages}
            </ListGroup>  
            </Card>  
            <Button variant="primary" onClick={handleShow}>
                Learn More
            </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>For more imformation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Go to 4545 washington drive in StressVille, Texas. Knock on the door and ask for Monty. He will answer all your questions about the packages for free!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

        </Container>
    )
}