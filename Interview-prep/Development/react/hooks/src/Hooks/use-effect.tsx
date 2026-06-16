import * as React from "react";

export const useEffect = () => {
    React.useEffect(() => {
        console.log("on mount");

        return () => {
            console.log("it will run on unmount")
        }
    }, [])// when we don't pass any dependency then it runs one time on mount otherwise it consider dependecy as well when they triggers update

    return (
        <div>

        </div>
    )
}