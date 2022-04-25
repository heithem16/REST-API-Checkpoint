import React from 'react'
import { useDispatch } from 'react-redux'
import { editcontacts } from '../redux/action/action'

const EditContact = ({name, email,phone,setName,setEmail,setPhone,id}) => {
    const dispatch= useDispatch()
    const handleEdit=()=>{
        dispatch(editcontacts({name,email,phone}, id))
    }
  return (
    <div>

        <input type='text' placeholder='enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type='text' placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type='text' placeholder='enter your phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        <link><button onClick={handleEdit}>submit edit</button></link>

    </div>
  )
}

export default EditContact