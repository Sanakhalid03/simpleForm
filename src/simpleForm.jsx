import { useState } from "react"

function Simpleform() {
  const [form,setForm]=useState({name:"",password:""})
  const [errors,setErrors]=useState({name:"",password:""})

  function prevent(e){
    e.preventDefault()
  }

  function handleChange(){
    let nameValue=form.name
    let passwordValue=form.password
    let newErrors ={name:"",password:""}

    // Name Validation
    if(nameValue===""){
      newErrors.name="This field is required"
    } else if (nameValue.length < 4){
      newErrors.name="Write at least 4 digits"
    } else if (nameValue.length > 6){
      newErrors.name="You can only write 6 digits"
    }

    // Password Validation
    if(passwordValue===""){
      newErrors.password="This field is required"
    } else if (passwordValue.length < 4){
      newErrors.password="Write at least 4 Numbers"
    } else if (passwordValue.length > 6){
      newErrors.password="You can only write 6 Numbers"
    }

    setErrors(newErrors)

    if(!newErrors.name && !newErrors.password){
      console.log(form)
    }
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-center p-4 bg-blue-50">
   
      <form 
        className="border-blue-800 border-2 w-full max-w-md p-6 flex flex-col items-center rounded-md bg-white shadow-md"
        onSubmit={prevent}
      >
        <h1 className="text-3xl text-blue-800 font-medium mb-4 text-center">Form</h1>

        <div className="w-full mb-4">
          <label className="text-blue-950 text-[16px] font-medium block mb-1">Name:</label>
          <input 
            type="text" 
            className="border-blue-600 border-2 w-full p-2 rounded text-blue-950 font-medium" 
            onChange={(e)=>setForm({...form,name:e.target.value})}
          />
          {errors.name && <p className="text-red-600 mt-1 text-sm">{errors.name}</p>}
        </div>

   
        <div className="w-full mb-4">
          <label className="text-blue-950 text-[16px] font-medium block mb-1">Password:</label>
          <input 
            type="password" 
            className="border-blue-600 border-2 w-full p-2 rounded text-blue-950 font-medium" 
            onChange={(e)=>setForm({...form,password:e.target.value})}
          />
          {errors.password && <p className="text-red-600 mt-1 text-sm">{errors.password}</p>}
        </div>

        <button 
          type="submit" 
          className="border-blue-600 border-2 bg-blue-200 w-full p-2 rounded-md text-blue-950 text-[16px] font-medium hover:bg-blue-400 transition duration-300"
          onClick={handleChange}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Simpleform
