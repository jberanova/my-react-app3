import { Link, useParams } from "react-router-dom";

export default function CatUpdateForm() {
    const { id } = useParams();

    return (
        <>
        <h1>Cat update</h1>
        <p>{id}</p>
        <Link to= {"/"}>go back</Link>
        </>
    )
}