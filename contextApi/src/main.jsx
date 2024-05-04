import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ThemeContextProvider } from './context/ThemeContextProvider.jsx'
import { AppContextProvider } from './context/AppContextProvider.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
<ThemeContextProvider>
<AppContextProvider>
<App />
</AppContextProvider>

</ThemeContextProvider>

 

)
