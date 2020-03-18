import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
import Avatarlist from './Avatarlist';
import NavbarPage from './NavbarPage';

class Home extends Component{
    render (){
        
        const avaratlistarray = [
            {
                id:1,
                name: "suraj",
                work: "System"
            },
            {
                id:2,
                name: "suraj",
                work: "System"
            },
            {
                id:3,
                name: "suraj",
                work: "System"
            },
            {
                id:4,
                name: "suraj",
                work: "System"
            }
        ]


        
        const arrayavaratcard = avaratlistarray.map( (avatarcard,i) => {
            return <Avatarlist 
                        id   = {avaratlistarray[i].id}
                        name = {avaratlistarray[i].name}
                        work = {avaratlistarray[i].work}/>
        })

        return (
            <>
            <NavbarPage />
            <div className="mainpage">
                 
                 <h1> Home page </h1>
                 {arrayavaratcard}
            </div>
            </>
        )
    }
}

export default Home;