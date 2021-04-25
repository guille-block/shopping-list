import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import List from './components/list';
import {useState, useEffect} from 'react'

function App() {

  const [lista, setLista] = useState([])
  const [cantidades, setCantidades] = useState([])
  const [valorCant, setValCant] = useState(1)
  const [value, setValue] = useState('')
  const [activo, setActivo] = useState(false)


  useEffect(() => {
    if(activo) {
    agregarALista()
    }
    setActivo(false)
  }, [activo])

  
  const agregarALista = () => {
    const nuevaLista = [...lista, value]
    setLista(nuevaLista)
    setValue('')
    const nuevasCant = [...cantidades, valorCant]
    setCantidades(nuevasCant)
    setValCant(1)
    console.log(cantidades)
    console.log(valorCant)
  }


 const removerDeLista = val => {
   const fake = [...lista]
   const fakeCant = [...cantidades]
  const index = fake.indexOf(val);
  if (index > -1) {
    fake.splice(index, 1);
    fakeCant.splice(index, 1)
  }
  setLista(fake)
  setCantidades(fakeCant)
 }


  const cambiarValue = e => {
    e.preventDefault()
    setValue(e.target.value)
    
  }

  const cambiarCant = e => {
    e.preventDefault()
    const numero = e.target.value
    console.log(typeof numero)
    setValCant(e.target.value)  

  }

  const sumarCantidad = i => {
    const fakeCantidades = [...cantidades]
    fakeCantidades[i] = Number(fakeCantidades[i]) + 1
    setCantidades(fakeCantidades)
  }

  const restarCantidad = i => {
    const fakeCantidades = [...cantidades]
    fakeCantidades[i] = (Number(fakeCantidades[i])<1) ? 0 : Number(fakeCantidades[i])-1 
    setCantidades(fakeCantidades)
  }

  const Activar = e => {
    e.preventDefault()
    setActivo(true)
  }



  return (
    <div className="App">
      <h1>El super de las Heras</h1>
      <Header 
        activar = {Activar}
        cambiar = {cambiarValue}
        cambiarCant = {cambiarCant}
        cantidades = {valorCant}
        valor = {value}/>
      <List 
        component= {lista}
        sumarCant = {sumarCantidad}
        restarCant = {restarCantidad}
        componentCant= {cantidades}
        remover = {removerDeLista}/>
    </div>
  );
}

export default App;
