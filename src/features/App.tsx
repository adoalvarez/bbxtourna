import type React from "react"

interface AppProps {
  children: React.ReactNode
}

const App = (props: AppProps) => {
  return (
    <div className="body">
      {props.children}
    </div>
)
}

export default App;