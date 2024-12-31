export const users = [
  {id:1,name:"anikethan"},
  {id:2,name:"ashith"}
]

export async function GET(){
  return Response.json(users)
}

export async function POST(req:Request){
 const user =  await req.json()
 const newUser = {
   id:user.id,
   name:user.name
 }
 users.push(newUser)
 
 return Response.json({"messaage":"craeted user" , 
   "valid":true
 })
}