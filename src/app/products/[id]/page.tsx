"use client"
import { useRouter } from "next/navigation"

const Products =({params}:{params:{id:string}})=>{
  const {id} =  params
  const router = useRouter()
  return (
    <>
      <h1>Products of name:  {id}</h1>
      <button onClick={()=>{
        router.push("/")
      }}>go home</button>
    </>
  )
}

export default Products