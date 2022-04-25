import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {getcontacts} from './redux/action/action'
import './App.css';
import ContactCard from './component/ContactCard';
import {Link, Route, Routes} from 'react-router-dom'

function App() {
  const dispatch=useDispatch()
  const contacts=useSelector(state=>state.contacts)
  useEffect(()=>{
    dispatch(getcontacts())
  },[])
  const [name, setName]=useState("")
  const [emil, setEmail]=useState("")
  const [phone, setPhone]=useState("")
  const [id, setId]=useState(0)
  const getuser=(contact)=>{
    setName(contact.name)
    setEmail(contact.email)
    setPhone(contact.phone)
    setId(contact._id)
  }
  
  return (
    <div className="App">
      <Link to={"/"}><button> contact list</button></Link>  <Link to={"/add-contact"}><button>add contact</button></Link>
     
     
      <Routes>
        <Route path="/" element={contacts.map(el=><ContactCard el={el}/>)}
        />
        <Route path="/add-contact" element={<AddContact
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        />}/>
        <Route path='/edit-contact/:id' element={<EditContact
        
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        />}  
        id={id}
        
        />

      </Routes>
     
    </div>

  );
}

export default App;
