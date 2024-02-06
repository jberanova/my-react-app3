import "./MainPage.css";
import Contents from "../../components/MainPage/Content";
import { Link } from "react-router-dom";

export default function MainPage() {

    return(
        <>
            <h1>Main page</h1>
            <Link to={"about"}>
                <p>Go to about page</p>
            </Link>
            <Contents></Contents>
            <Link to={"/creatcat"}>
                <p>Go to about CatCreateForm</p>
            </Link>
            <Link to={"/updatecat/51120020"}>
                <p>Go to about CatUpdateForm</p>
            </Link>
            <Link to={"/cat/14220070"}>
                <p>Go to about CatView</p>
            </Link>
            <Link to={"/cats"}>
                <p>Go to about CatList</p>
            </Link>
        </>
    )
}