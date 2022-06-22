import Link from "next/link"
export default function GameInfo({info= '', content}){
    const link = [];
    console.log(arguments[0].content)
    return(
        <div className="container">
            <p>{info} : 
            {link}
            </p>
        </div>
    )
}