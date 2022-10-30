import React from 'react'
import { styled } from '@stitches/react'

const AdminNav = styled('nav', {
  height: '100vh',
  width: '200px',
  background: '#0D5474',
  position: 'fixed',
  left: 0,
  top: 60,
  color: 'white',
  zIndex: 1,

  listStyle: 'none',
  padding: 20,
  paddingTop: 30,
})

const ListElement = styled('li', {
  fontSize: '20px',
  height: '100px',
  marginTop: '10px',
  paddingLeft: 10,
  '&:hover': {
    borderBottom: '2px solid white',
    paddingBottom: '3px',
  },
})

function Sidebar() {
  return (
    <AdminNav>
      <ListElement>
        Velkommen, <strong>Duvara</strong>
      </ListElement>
      <ListElement>Kvitteringer</ListElement>
      <ListElement>Onlinefondet</ListElement>
      <ListElement>Fondet</ListElement>
    </AdminNav>
  )
}

export default Sidebar
