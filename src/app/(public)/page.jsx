'use client'

import Image from "next/image";
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="hidden md:flex flex-1 bg-white items-center justify-center p-8">
                <Image
                    width={800}
                    height={600}
                    alt="Login Illustration"
                    src="https://img.freepik.com/free-vector/selfisolation-party-abstract-concept-vector-illustration-celebration-online-video-call-happy-friend-quarantine-fun-coronavirus-outbreak-zoom-videoconference-virtual-chat-abstract-metaphor_335657-6264.jpg?t=st=1756813417~exp=1756817017~hmac=e412516dc970830dcd8d2d3d853573db79e277df6605fd7f700de0057649aecc&w=1480"
                    className="w-full max-w-[600px] rounded-lg object-contain"
                    unoptimized
                    draggable="false"
                />
            </div>

            <div className="flex-1 flex items-center justify-center bg-black p-8">
                <form className="w-full bg-white rounded-xl p-10 max-w-lg space-y-6">
                    <h2 className="text-2xl font-semibold text-center">Welcome back</h2>
                    <p className="text-center text-gray-600 -mt-5">
                        Login to access your account
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
                        Sign In
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
                        Don't have an account yet? <Link href="/registration" className="font-semibold hover:underline">Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
