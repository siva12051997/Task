import { useNavigate } from "react-router";
import User from "./User";
export const withRouter = (User) => {
	const Wrapper = (props) => {
		const history = useNavigate();
		return <User history={history} {...props} />;
	};
	return Wrapper;
};
