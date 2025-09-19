"use client";
import React, {useEffect, useState} from "react";
import SignInForm from "@/features/AuthPage/components/SignInForm";
import OtpForm from "@/features/AuthPage/components/OtpForm";
import {AuthView} from "@/lib/type";



const AuthPage = () => {
    const [authView,setAuthView] = useState<AuthView>('login');

    return (
        <div className="h-screen bg-white">
            <div className="w-full md:max-w-md mx-auto mt-12 md:my-20 shadow-md">
                <div className="p-6">
                    {authView === "login" &&
                        <SignInForm
                            onSubmit={async () => console.log("")}
                            setAuthView={(view) => setAuthView(view)}
                            isSubmitting={false}
                        />
                    }
                    {authView === "verify" && (
                        <OtpForm onSubmit={() => console.log("")} loading={false}/>)}
                </div>
            </div>
        </div>
    );

};

export default AuthPage;