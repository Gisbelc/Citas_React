import Patient from "./Patient";

export const PacientList = ({ patient, setEdits, deletePat }) => {

  return (
   
    <div className="md:w-1/2 lg:w-2/5 md:h-screen overflow-y-scroll">
      {patient && patient.length ? (
        <>
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Aministra tus{" "}
        <span className="text-indigo-600 font-bold">Pacientes y citas</span>
      </p>

      {patient.map((p) => (
     <Patient
     key={p.id}
     patient={p}
     setEdits={setEdits}
     deletePat={deletePat}
     />
      ))}
      </>
      ) : <>
      
      <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Comienza agregando pacientes y{" "}
        <span className="text-indigo-600 font-bold">apareceran en este lugar</span>
      </p>
      </> }
    </div>
  );
};
export default PacientList;
