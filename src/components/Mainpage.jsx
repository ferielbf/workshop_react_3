import React from 'react'
import {Row,Col,Card} from 'react-bootstrap'
import CustomCard from './CustomCard'
function Mainpage({data}) {
    return (
        <div>
            <Row xs={1} md={3} className="g-7">
                {data.map(el =><CustomCard el={el}/>)}
                
            </Row>
        </div>
    ) 
}

export default Mainpage