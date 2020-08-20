import React from 'react'

type JokeObj = {
    id: number;
    joke: string;
    categories: string[];
}

const Joke = (props: JokeObj) => {
    return (
        <div key={props.id}>
            <p>{props.joke}</p>
        </div>
    )
}

export default Joke