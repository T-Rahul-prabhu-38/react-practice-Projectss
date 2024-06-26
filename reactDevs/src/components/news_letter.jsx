import NewsListItem from '../components/news_letter_item'

const NewsList = (props) => {

    const newsHandler = props.news.map( item =>(
       <NewsListItem key={item.id} item={item}/>
    ));
    return(
        <>
            { newsHandler }
            {props.children}
        </>
    )
}

export default NewsList;