import { useEffect, useState } from "react"

function App() {
  const [respLogin, setRespLogin] = useState(null)

  useEffect(() => {
    fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserName: "c.com@unidigital.global",
        Password: "7l4ixpkezdvEGqq0BbCo",
      }),
    })
      .then(async (resp) => {
        const response = await resp.json()
        setRespLogin(response)
        console.log(response)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div style={{ display: "flex", justifyItems: "center", alignItems: "center", width: "100%" }}>
      {JSON.stringify(respLogin, null, 2)}
    </div>
  )
}

export default App
