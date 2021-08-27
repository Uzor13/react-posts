import React, {useEffect, useState} from 'react'
import './App.css';

//Router
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

//Components
import Header from "./components/Header/Header";
import Search from "./components/Search";
import Posts from "./components/Posts/Posts";
import PostDetail from "./components/Posts/PostDetail";

function App() {

    const [posts, setPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const filterPosts = (posts, query) => {
        if (!query) {
            return posts;
        }

        return posts.filter((posts) => {
            const postName = posts.title.toLowerCase();
            return postName.includes(query);
        });
    };

    const {search} = window.location;
    const query = new URLSearchParams(search).get('s');
    const filteredPosts = filterPosts(posts, searchQuery);

    const getPosts = () => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(err => console.log(err.message))
        setLoading(false)
    }

    useEffect(() => {
        getPosts()
    }, [])


    return (
        <>
            <Router>
                <Header/>
                <Switch>
                    <Route path='/' exact>
                        <Search
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                        />
                        {loading ? <h1>Loading</h1> :
                            <Posts posts={filteredPosts}/>
                        }

                    </Route>
                    {loading  ? <h1>Loading</h1> :
                        <Route path='/post/:id' component={PostDetail}/>
                    }

                </Switch>
            </Router>
        </>
    );
}

export default App;
