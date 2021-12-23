import { useEffect } from "react";
import Link from "next/link";
import Nevbar from "../pages/component/Nevbar";
import { useRouter } from "next/router";

const ErrorPage = () => {
    const router = useRouter();

    const handleInput = ()=> {
        router.push("/");
    };

    useEffect(() => {
      setTimeout(()=> {
        router.push("/");
      }, 5000);
    }, [])
    
    return (
        <>
        <Nevbar />
            <div id= "notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>We are sorry, You are in outer Space!</h2>
                    <p>
                        The page you are looing for might have....
                    </p>
                    {/* <Link href to ="/">
                        <a>Back To Homepage</a>
                    </Link> */}
                    {/* <a onClick={()=> router.push("/")}>Back To Homepage</a> */}
                    <a onClick={handleInput}>Back To Homepage</a>
                </div>
            </div>
        </>
    )
}

export default ErrorPage;
