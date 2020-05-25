import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Container} from 'reactstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Status from './components/Status'
import * as axios from 'axios'

function App() {
    const [items, setItems] = useState([])
    useEffect(() =>{
         axios("https://www.githubstatus.com/", {
            "credentials": "omit",
            "headers": {
                "accept": "application/json",
            },
            "referrer": "https://peterluczynski.github.io/github-status/",
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": null,
            "method": "GET",
            "mode": "cors"
        }).then(res =>{
            setItems(items.concat(res.data.components))
         }).catch(err =>{
             console.log(err)
         })
    },[])
    return (
        <div className="App">
            <h1 className="header">Github Status</h1>
            <Container className='status-container' fluid="lg">
                {items && items.map(obj =>{
                    console.log(obj.name)
                    return <Status name = {obj.name} status = {obj.status} />
                })}
            </Container>
        </div>
    );
}

export default App;
