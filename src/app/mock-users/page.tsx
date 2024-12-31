import axios from "axios"

import { revalidatePath } from "next/cache"
import { auth,currentUser } from "@clerk/nextjs/server"

type MockUser = {
  id: number
  name: string
}



export default async function MockUser() {
  const authObj = await auth()
  const cureentObj = await currentUser()
  console.log({
    authObj,
    cureentObj
  })
  
  const res = await axios.get<MockUser[]>("https://67726a73ee76b92dd49236d4.mockapi.io/users")
  const users = res.data
  
  async function addUser(formData:FormData){
    "use server"
      const name = formData.get("name")
       await axios.post("https://67726a73ee76b92dd49236d4.mockapi.io/users",{
        name
      })
       revalidatePath("/mock-users")
  }

  return (
    <div>
      <form action={addUser}>
        <input type="text" placeholder="Enter then name" className="text-black" name="name"/>
        <button type="submit" className="bg-red-800">Add name</button>
      </form>
    <div className="text-white">
      {users.map((user: MockUser) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
    </div>
  )
}
