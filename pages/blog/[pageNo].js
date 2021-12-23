/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";

const pageNo = () => {
    const router = useRouter();
    const pageNumber = router.query.pageNo;
    return (
        <>
            <h1>my Blog {pageNumber} Content</h1>
        </>
    )
}

export default pageNo;
;