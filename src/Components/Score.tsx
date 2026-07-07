import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import PermissionTree from './PermissionTree';
import myJsonData from '../Components/PermissionTree/data.json';

const initialScore = [
    { id: 1, checked: false, name: "John", about: "So, a class is a template for objects, and an object is an instance of a class." },
    { id: 2, checked: false, name: "Sally", about: "When the individual objects are created, they inherit all the variables and methods from the class." }
];

export default function Score() {
    const [score, setScore] = useState(initialScore || []);

    const handleCheck = (e: any, item: any) => {
        setScore(prevState => prevState.map((o: any) => o.id === item.id ? { ...o, checked: e.target.checked } : o));
    }

    return (
        <Container fluid className='mt-4'>
            {score.map(item => (
                <div key={item.id} className='mb-2'>
                    <Form.Check
                        id={`id_${item.id}`}
                        label={`${item.name} ${item.checked ? "A" : "Ina"}ctive`}
                        onChange={(e: any) => handleCheck(e, item)}
                        checked={item.checked}
                    />
                </div>
            ))}

            {score.filter((o: any) => o.checked).length > 0 && (<h4>Active Users</h4>)}

            {score.filter((o: any) => o.checked).map(item => (
                <div key={item.id} className='mb-2'>
                    <p>
                        <strong>{item.name} </strong><br />
                        {item.about}
                    </p>
                </div>
            ))}

            <PermissionTree apiData={myJsonData} />


        </Container>
    )
}
