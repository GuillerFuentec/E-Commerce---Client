import { Confirm as ConfirmUI } from "semantic-ui-react";

export function Confirm(props) {
    const {...rest} = props;

    return <ConfirmUI className="confirm" size="mini" {...props} />
}
