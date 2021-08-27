import React from 'react';
import {useHistory} from 'react-router-dom';
import {Button, Form, Input, SearchContainer} from "../style";

const Search = ({searchQuery, setSearchQuery}) => {

    const history = useHistory();
    const onSubmit = e => {
        history.push(`?s=${searchQuery}`)
        e.preventDefault()
    };

    return (
        <SearchContainer>
            <Form action="/" method="get" onSubmit={onSubmit} style={{width: '100%'}}>
                <Input
                    value={searchQuery}
                    onInput={e => setSearchQuery(e.target.value)}
                    type="text"
                    placeholder="Search posts"
                    name="s"
                />
                <Button type="submit">Search</Button>
            </Form>
        </SearchContainer>
    );
};

export default Search;
