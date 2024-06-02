import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header.jsx'
import App from './components/App.jsx'
import './styles/index.css'
import NewsList from './components/news_letter.jsx'
import Space from './components/space.jsx'
import Form from './components/form.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <NewsList/>
    <App/>
    <Form/>
    <Space/>
  </React.StrictMode>,
)
