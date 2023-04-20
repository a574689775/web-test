import { useRouter } from "next/router";
import React from "react";

function UserDetail() {

    const router = useRouter();
    return <div>UserDetail{router.query.id}</div>
}

export default UserDetail;
