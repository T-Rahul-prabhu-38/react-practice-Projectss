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

  const getKeyWords = (event)=>{
    let keyWords = (event.target.value);
    let filtered = newsData.filter(items =>{
      return items.title.indexOf(keyWords) >-1;
    })
    updateNews(filtered);
  }

  return (
    <>
      <React.StrictMode>
        <Header getKeyWords={getKeyWords}/>
        <NewsList news={news}>
          <div>
            <b>
              I am the Child
            </b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestias nam culpa nobis, quibusdam blanditiis praesentium. Inventore pariatur quo optio ab, dignissimos, sint vitae error explicabo exercitationem asperiores dolore ratione suscipit. Recusandae est corrupti beatae veritatis eum eveniet consectetur suscipit quae! Pariatur delectus soluta tempore harum commodi veniam, maxime vero?</p>
          </div>
        </NewsList>
        <App />
        <Form />
        <StatePlayground />
        <Space />
      </React.StrictMode>
    </>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(<Main/>)
