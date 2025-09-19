"use client";
import React, {useState} from "react";
import SignInForm from "@/features/AuthPage/components/SignInForm";
import OtpForm from "@/features/AuthPage/components/OtpForm";
import {AuthView} from "@/lib/type";


const AuthPage = () => {
    const [authView, setAuthView] = useState<AuthView>('login');

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-300 p-8 px-4 flex items-center justify-center">
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto p-4 sm:p-6 md:p-8">
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

    );

};

export default AuthPage;