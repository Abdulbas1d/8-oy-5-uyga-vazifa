import React, { useEffect, useState } from 'react'
import './index.css'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, deleteUser, editUser } from '../../store/userSlice'

function UserData() {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  const [editing, setEditing] = useState(null)

  useEffect(() => {
    if (editing) {
      const userToEdit = users.find(user => user.id === editing)
      if (userToEdit) {
        setName(userToEdit.name)
        setAge(userToEdit.age)
        setEmail(userToEdit.email)
      }
    }
  }, [editing, users])

  function validate() {
    if (!name) {
      alert("Ismingizni kiritishingiz kerak!")
      return false
    } else if (name.length < 3) {
      alert("Ism eng kamida 3 ta belgidan iborat bo'lishi kerak!")
      return false
    }

    if (!age) {
      alert("Yoshingizni kiritishingiz kerak!")
      return false
    }

    if (!email) {
      alert("Ismingizni kiritishingiz kerak!")
      return false
    } else if (name.endsWith("@gmail.com")) {
      alert(`Email ohiri "@gmail.com" bilan tugashi kerak!`)
      return false
    }

    return true
  }

  function handleAddUser(event) {
    event.preventDefault()

    let isValid = validate()
    if (!isValid) {
      return
    }

    const newUser = {
      id: Date.now(),
      name: name,
      age: age,
      email: email
    }

    dispatch(addUser(newUser))
    setName("")
    setAge("")
    setEmail("")
    toast.success("Foydalanuvchi muvaffaqiyatli qo'shildi!")
  }

  function handleDeleteUser(id) {
    const isDelete = confirm("Rostdan ham o'chirmoqchimisiz?")
    if (isDelete) {
      dispatch(deleteUser(id))
      toast.error("Foydalanuvchi o'chirildi!")
    }
  }

  function handleEditUser(event) {
    event.preventDefault()

    let isValid = validate()
    if (!isValid) {
      return
    }

    const updateEdit = {
      id: editing,
      name: name,
      age: age,
      email: email
    }

    dispatch(editUser(updateEdit))
    setName("")
    setAge("")
    setEmail("")
    setEditing(null)
    toast.success("Foydalanuvchi muvaffaqiyatli tahrirlandi!")
  }

  return (
    <div className='container-userdata'>
      <h1 className='title'>Foydalanuvchilar</h1>
      <form className="form">
        <label htmlFor="name">Ismingizni kiriting!</label>
        <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" name="name" id="name" placeholder='Enter name...' />
        <label htmlFor="age">Yoshingizni kiriting!</label>
        <input value={age} onChange={(e) => { setAge(e.target.value) }} type="number" name="age" id="age" placeholder='Enter age...' />
        <label htmlFor="email">Email Addressingizni kiriting!</label>
        <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" name="email" id="email" placeholder='Enter email address...' />
        <button onClick={editing ? handleEditUser : handleAddUser} className="add">
          {editing ? "Tahrir qilish" : "Qo'shish"}
        </button>
        <Toaster />
      </form>

      <div className="users">
        {
          users.length > 0 && users.map((user) => (
            <div className="user" key={user.id}>
              <p><strong>Ismi:</strong>{" "} {user.name}</p>
              <p><strong>Yoshi:</strong>{" "} {user.age}</p>
              <p><strong>Email Addressi:</strong>{" "} {user.email}</p>
              <div className="btns">
                <button onClick={() => setEditing(user.id)} className="edit">Edit</button>
                <button onClick={() => handleDeleteUser(user.id)} className="delete">Delete</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default UserData
