import React from 'react'
import { Card,  CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

import JokeData from './JokeInfo';

const JokeCard = () => {
    return (
        <>
            <Card>
                <CardBody>
                    <CardSubtitle>Warning: Chuck Norris may be monitoring your reaction. Viewer discretion is advised.</CardSubtitle>
                    <JokeData />
                </CardBody>
            </Card>
        </>
    )
}

export default JokeCard;