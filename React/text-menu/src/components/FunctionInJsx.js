import {useState} from "react"

const FunctionInJsx = () => {

    const [stat, setStat] = useState("")

    function name(params) {
        console.log("first")

        // setStat("thi")
        return "I'm from external"
    }

    return (
        <>
            <p onClick={name()}></p>
            this in internal
            {name()}
        </>
    )
}


export { FunctionInJsx }
