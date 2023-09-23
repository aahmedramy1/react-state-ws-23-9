import PersonCard from "./components/PersonCard";
import Button from 'react-bootstrap/Button';
import {useEffect, useState} from "react";

const people = [
    {
        fullName: "John Doe",
        imageSrc: "https://st.depositphotos.com/1770836/1372/i/450/depositphotos_13720689-stock-photo-young-businesswoman.jpg",
        profession: "Web Developer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    },
    {
        fullName: "Sarah Doe",
        imageSrc: "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
        profession: "Web Designer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    }

    ];


const App = () => {
    const [show, setShow] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        if(!show)
        {
            setTime(0);
            return
        }
        const interval = setInterval(() => {
            setTime(time => time + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [show])

    const handleShow = () => setShow(!show);

  return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}><Button variant="primary" onClick={handleShow}>{show ? 'hide' : 'show'}</Button>
          {show && <h1>{time}</h1>}
    <div style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center", gap: '2rem',
        alignItems: "center",
    }}>

        { show &&
            people.map((person, index) => (
                <PersonCard key={index} fullName={person.fullName} profession={person.profession} bio={person.bio} imageSrc={person.imageSrc}/>
            ))
        }

    </div>
      </div>
    );
}

export default App;