import { ThemeProvider } from '@material-ui/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { theme } from './Theme'
import { QueryClient, QueryClientProvider } from 'react-query'
import '../index.css';
import 'nprogress/nprogress.css'
import App from './App'
import  AOS  from 'aos'
AOS.init()


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true
    }
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
)
