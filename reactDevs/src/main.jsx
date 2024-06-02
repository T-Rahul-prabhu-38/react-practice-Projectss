import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header.jsx'
import App from './components/App.jsx'
import NewsList from './components/news_letter.jsx'
import Space from './components/space.jsx'
import Form from './components/form.jsx'
import StatePlayground from './components/playroom.jsx'
import './styles/index.css'
import { newsData } from './data.js'


const Main = () => {

  const[news,updateNews] = useState(newsData);

  // console.log(news);
  return (
    <>
      <React.StrictMode>
        <Header />
        <NewsList news={news}/>
        <App />
        <Form />
        <StatePlayground />
        <Space />
      </React.StrictMode>
    </>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(<Main/>)
