import React from 'react'

const Patient = ({patient, setEdits, deletePat}) => {

const handleDelete = () => {
  const confirmDelete = confirm('Deseas Eliminar este paciente?')
if(confirmDelete){
  deletePat(id)
}else{
  alert('Paciente NO se eliminó')
}
}

  const {name, owner, email, date, symptoms, id} = patient
  return (
    <div className="mx-10 my-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre paciente: {" "}
        <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {" "}
        <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Email: {" "}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {" "}
        <span className="font-normal normal-case">{date}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {" "}
        <span className="font-normal normal-case">{symptoms}</span>
      </p>
      <div className='flex justify-between mt-10'>
        <button type='btn' onClick={() => setEdits(patient)}
        className="py-2 px-10 bg-indigo-700 text-white font-bold uppercase rounded-lg">Editar</button>
        <button type='btn' onClick={handleDelete} className="py-2 px-10 bg-red-700 text-white font-bold uppercase rounded-lg">Eliminar</button>
      </div>
    </div>
  )
}

export default Patient