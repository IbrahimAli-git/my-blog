import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import NotFoundPage from "./NotFoundPage";
import articles from "./article-content";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import useUser from "../hooks/useUser";

const ArticlePage = () => {
    // when using axios make sure server is running and proxy exists
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [], canUpvote: false });
    const { canUpvote } = articleInfo;
    const { articleID } = useParams();

    const { user, isLoading } = useUser();
    
    useEffect(() => {
        const loadArticleInfo = async () => {
            const token = user && await user.getIdToken();
            const headers = token ? { authtoken: token } : {};
            const response = await axios.get(`/api/articles/${articleID}`, {headers });
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo);
        }
        if (isLoading){
            loadArticleInfo();
        }
    }, [isLoading, user]);
    
    const article = articles.find(article => article.name === articleID);

    const addUpvote = async () => {
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token } : {};
        const response = await axios.put(`/api/articles/${articleID}/upvote`, null, { headers });
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    }

    if (!article) {
        return <NotFoundPage />
    }
    return (
        <>
            <h1>{article.title}</h1>
            <div className="upvotes-section">
                {user 
                ?    <button onClick={addUpvote}>{canUpvote ? 'Upvote ' : 'Already Upvoted'}</button>
                :    <button>log in to upvote</button>}
                <p>This article has {articleInfo.upvotes} upvotes</p>
            </div>
            {article.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
            ))}

            {user
                ? <AddCommentForm
                articleName={articleID}
                onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)}/>
                : <button>Log in to add a comment</button>
            }
            <CommentsList comments={articleInfo.comments} />

        </>
    );
}

export default ArticlePage;