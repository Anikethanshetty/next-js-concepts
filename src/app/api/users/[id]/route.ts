import { users } from "../route"

export async function GET(req:Request,{params}:{params:{id:string}}){
      const {id} = params
      const user = users.find(users => users.id === parseInt(id))
      return Response.json(user)
}