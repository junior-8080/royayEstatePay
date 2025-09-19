import React from "react";
import {AuthTileType} from "@/lib/type";
import Link from "next/link";


const AuthTitle = ({title,subtitle}:AuthTileType) => {
    return <div className="text-center mb-4">
        <Link href="/" className="flex justify-center mb-6">
            <img src="/logo.png" className="w-[80px] rounded-full" alt="logo"/>
        </Link>
        <h2 className="font-semibold">{title}</h2>
        <p className="text-sm text-gray-400">{subtitle}</p>
    </div>
}

export default  AuthTitle