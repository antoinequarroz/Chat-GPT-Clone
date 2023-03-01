'use client'
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
    return (

        <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">

            <h1 className="text-white font-bold text-5xl">
                Bienvenu sur la ChatGPT d'Antoine Quarroz
            </h1>

            <Image
                src="https://links.papareact.com/2i6"
                width={300}
                height={300}
                alt="logo"
            />
        <button onClick={() => signIn("google")} className="text-white font-bold text-3xl animate-pulse">
            Se connecter pour utiliser ChatGPT
        </button>

            <div className="text-white/50 absolute inset-x-0 bottom-0 h-16">© Antoine Quarroz 2023</div>
        </div>
    );
}
export default Login;