import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store } from "./app/store"
import { Provider } from "react-redux"
import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import { darkTheme } from './components/themes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </Provider>,
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store} >
//       <App />
//     </Provider>
//   </React.StrictMode>,
// )
