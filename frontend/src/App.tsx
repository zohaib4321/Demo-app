import {useState} from "react"
import './App.css'
import axios from "axios"

function App() {

  // const [userData, setUserData]  = useState(null)
  const [loading, setLoading] = useState(false)

    ;(
      async function GetUserData() {
        try {
          setLoading(true)
          await axios.get('/api/users').then((data) => {
            console.log(data);
          })
          setLoading(false);
        } catch (error: any) {
          console.log(error.message);
        }
      }
    )()

    if (loading) return <h1>Loading...</h1>
  return (
    <>
      <h1>Frontend</h1>
    </>
  )
}

export default App
