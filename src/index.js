import { render } from 'react-dom'
import App from './App'
import { ThemeProvider } from './contexts/theme'
import './index.css'

render(

  <ThemeProvider base='/'>
    <App />
  </ThemeProvider>,

  document.getElementById('root')
)
