export function Post(props) {
    return (
        <>
            <strong>Post by {props.author}</strong  >
            <p>{props.content}</p>
        </>
    )
}

//default export vs name exports


// function Post(){
//     return (
//         <h1>Post</h1>
//     )
// }

// export default Post