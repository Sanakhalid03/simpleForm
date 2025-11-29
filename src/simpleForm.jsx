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
//Name Validation
if(nameValue==""){
    newErrors.name="This field is required"
}
else if (nameValue.length < 4){
    newErrors.name="Write Atleast 4 digits"
}
else if (nameValue.length > 6){
    newErrors.name="You can only write 6 digits"
}
//Password Validation
if(passwordValue ==""){
    newErrors.password="This field is required"
}
else if (passwordValue.length < 4){
    newErrors.password="Write Atleast 4 Numbers"
}
else if (passwordValue.length > 6){
    newErrors.password="You can only write 6 Numbers"
}

setErrors(newErrors)

if(!newErrors.name && !newErrors.password){
    console.log (form)
}

}
    
  return (
    <div className="h-screen w-full flex justify-center items-center">
  
    <form className=" border-blue-800 border-2 w-90  p-6 flex items-center flex-col  bg-blue-50 rounded-md  " onSubmit={prevent}>
        <h1 className="text-3xl text-blue-800 font-medium mb-2" >Form</h1>
   <div >
    <label className="text-blue-950 text-[18px] font-medium">Name: </label>
    <input type="text" className="border-blue-600 border-2 mt-5 bg-white p-1 text-blue-950 font-medium"  onChange={(e)=>setForm ({...form,name:e.target.value})}/>
    {errors.name && <p className="text-red-600 text-center" >{errors.name}</p>}
    </div>
    <div>
    <label className="text-blue-950 text-[18px] font-medium" >Password: </label>
    <input type="password" className="border-blue-600 border-2 mt-5 bg-white p-1 text-blue-950 font-medium" onChange={(e)=>setForm ({...form,password:e.target.value})}/>
    {errors.password && <p className="text-red-600 text-center">{errors.password}</p>}
    </div>
    <button type="submit" className="border-blue-600 border-2 bg-blue-200 p-2 w-40 rounded-md mt-6 text-blue-950 text-[18px] font-medium hover:bg-blue-400 transition duration-500" onClick={handleChange}>Submit</button>
    </form>
    </div>
  
  )
}

export default Simpleform