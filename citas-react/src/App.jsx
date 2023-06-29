import { useState, useEffect } from 'react';
import Formulario from "./components/Form"
import Header from "./components/Header"
import PatientList from "./components/PatientList"

function App() {

  const [patient, setPatient] = useState([]);
  const [edits, setEdits] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('patient'));
      if(pacientesLS >= 0){
        setPatient(pacientesLS)
      }
    }
    obtenerLS()
  }, [])

  useEffect(() => {
   localStorage.setItem('patient', JSON.stringify( patient ));
  }, [patient])


const deletePat = (id) => {
const patAct = patient.filter(patient => patient.id !== id);
setPatient(patAct)
  }

  return (
<div className="container mx-auto mt-20">
<Header/>
<div className="mt-12 md:flex">
<Formulario
setPatient={setPatient}
patient={patient}
edits={edits}
setEdits={setEdits}
/>
<PatientList
patient={patient}
setEdits={setEdits}
deletePat={deletePat}
/>
</div>
</div>
  )
}

export default App
