import { Link } from "react-router-dom";

export default function LinkItem(props) {
    return (
        <Link to={props.where} state={props.item}>
            {props.children}
        </Link>

    )
}