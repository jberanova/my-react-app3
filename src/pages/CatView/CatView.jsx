import { Link, useParams } from "react-router-dom";


export default function CatView() {
    const { id } = useParams();

    return (
        <>
        <h1>Cat view</h1>
        <p>{id}</p>
        <Link to= {"/"}>go back</Link>
        </>
    )
}