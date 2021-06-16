import Article from './Article';

function ArticleList({posts}) {
    const articles = posts.map(element => <Article key={element.id} title={element.title} date={element.date} preview={element.preview} />)
    return <main>{articles}</main>
}

export default ArticleList;