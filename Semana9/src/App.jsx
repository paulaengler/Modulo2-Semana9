import { useState } from 'react'
import { AuthProvider } from './contexts/AuthContext'
import './App.css'
import Cadastro from './components/Cadastro'
import { SignIn } from '../src/components/SignIn'
import { SignOut } from '../src/components/SignOut'

function App() {


  return (
    <>
   

    <AuthProvider>

    <h1> Exercicio 1 e 3 </h1>
    <Cadastro></Cadastro>

      <SignIn> </SignIn>
      <SignOut></SignOut>

    </AuthProvider>

    </>
  )
}

export default App
