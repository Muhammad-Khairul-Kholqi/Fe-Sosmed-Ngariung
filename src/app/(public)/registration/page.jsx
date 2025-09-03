'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function RegistrationPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="bg-black h-screen flex items-center justify-center p-5">
            <form className="bg-white w-full max-w-[500px] p-10 rounded-xl space-y-6">
                <h2 className="text-2xl font-semibold text-center">Welcome to Ngariung</h2>
                <p className="text-center text-gray-600 -mt-4">
                    Sign Up to getting started
                </p>

                <div className="relative">
                    <Mail
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-md outline-none"
                    />
                </div>

                <div className="relative">
                    <Lock
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                    />
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter Password"
                        className="pl-10 pr-12 py-2 w-full border border-gray-200 rounded-md outline-none"
                    />
                    <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-black"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>

                <button
                    type="submit"
                    className="w-full bg-black hover:bg-black/80 disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer text-white py-3 rounded-md transition-colors flex items-center justify-center"
                >
                    Sign Up
                </button>

                <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="text-gray-500 text-sm">or</span>
                    <div className="hidden sm:flex flex-1 h-px bg-gray-200" />
                </div>

                <button
                    type="button"
                    className="w-full border border-gray-300 hover:bg-gray-50 py-3 rounded-md flex items-center justify-center gap-2 transition cursor-pointer"
                >
                    <Image
                        src="https://www.svgrepo.com/show/355037/google.svg"
                        alt="Google"
                        width={20}
                        height={20}
                    />
                    <span className="text-sm font-medium">Continue with Google</span>
                </button>

                <p className="text-center text-sm">
                    Have an account yet? <Link href="/" className="font-semibold hover:underline">Sign In</Link>
                </p>
            </form>
        </div>
    )
}