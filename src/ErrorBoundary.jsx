import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
    state = { hasError: false };
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        // to track js or new relic
        console.error("Error Boundry", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <h2>
                    There was error with this Listing.{" "}
                    <Link to="/">
                        Click to go back to home
                    </Link>
                </h2>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary