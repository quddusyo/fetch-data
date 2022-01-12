import Button from "./Button"

const Form = ({ reqType, setReqType }) => {
    return (
        <form className="formButtons" onSubmit={(e) => e.preventDefault()}>
            <Button 
                buttonText='users'
                reqType={reqType}
                setReqType={setReqType}
            />
            <Button
                buttonText='posts'
                reqType={reqType}
                setReqType={setReqType}
            />
            <Button
                buttonText='comments'
                reqType={reqType}
                setReqType={setReqType}
            />
        </form>
    )
}

export default Form
