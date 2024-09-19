import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async (request: Request, response: Response) => {
    console.log("GET REQUEST");
    return NextResponse.json({response: "Excellent Connection", status: 201})
};

// const handleSubmit = async () => {
//     try {
//         const res = await axios.post()
//     } catch (error) {
        
//     }
// }

// import axios from "axios";


// axios.get('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     console.log(response)
//   })
//   .catch(error => {
//     console.log(error)
//   });


// const GET = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users")
//     const parsedJSON = await res.json()
//     return Response.json(parsedJSON);
// }

// const POST = () => {
//     return Response.json({'message' : 'POST data'})
// }

// const PATCH = () => {
//     return Response.json({'message' : 'PATCH data'})
// }

// const DELETE = () => {
//     return Response.json({'message' : 'DELETE data'})
// }
// export {GET, POST, PATCH, DELETE}