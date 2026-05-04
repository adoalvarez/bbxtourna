import type React from "react"

interface AppProps {
  children: React.ReactNode
}

const App = (props: AppProps) => {
  return (
    <div className="Page">
      <div className="body">
        {props.children}
      </div>
    </div>
  )
}

export default App;