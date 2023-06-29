const Error = ({children}) => {
  return (
    <div className=" bg-red-700 text-white text-center p-3 mb-2 uppercase font-bold rounded">
    <p>{children}</p>
    </div> 
  )
}

export default Error