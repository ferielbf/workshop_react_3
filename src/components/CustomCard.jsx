import React from 'react'
import {Row, Col, Card} from 'react-bootstrap'
function CustomCard({el}) {
  return (
    <div>
<Col>
      <Card>
        <Card.Img variant="top" src={el.imgUrl} />
        <Card.Body>
          <Card.Title>{el.title} </Card.Title>
          <Card.Text>
            {el.description}
            {el.category}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  

    </div>
  )
}

export default CustomCard