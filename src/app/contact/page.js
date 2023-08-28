import Link from "next/link";

export default function Contact(){
    return(
        <>
        
        <h1>This is Contact Page</h1>
        <Link href={'/about'}>About</Link>
        </>
        

    )
}