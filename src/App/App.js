import React from 'react'
import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import theme from './Theme'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Clients from './pages/Clients/Clients'

function App() {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setIsOpen(open)
  }

  return (
    <ThemeProvider theme={theme}>
      <Header toggleDrawer={toggleDrawer}/>
      <SideBar toggleDrawer={toggleDrawer} isOpen={isOpen}/>
      <Clients />
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
