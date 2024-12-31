"use client"

import { useAuth } from "@clerk/nextjs"
import { useEffect, useState } from "react"

const Click = () => {
  const { isLoaded, userId, getToken } = useAuth()
  
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    const getUserToken = async () => {
      if (!userId) {
        console.log("user not authenticated")
        return
      }
      
      try {
        const token = await getToken()
        console.log(token)
      }
      catch (error) {
        console.log(error)
      }
      
    }
      getUserToken()
  },[getToken,userId]
 )
  
  if (!isLoaded || !userId) {
    return null
  }
    return (
      <>
        <button onClick={() => { setCount(count + 1) }}>Cliked {count} times</button>
      </>
    )
  }

  
export default Click