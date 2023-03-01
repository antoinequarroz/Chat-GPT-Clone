'use client'

import NewChat from "./NewChat";
import {useSession, signOut} from "next-auth/react";
import {useCollection} from "react-firebase-hooks/firestore";
import {collection, orderBy, query} from "@firebase/firestore";
import {db} from "../firebase";
import React from "react";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";

function SideBar() {
    const { data: session } = useSession();

    const [chats, loading, error] = useCollection(
        session && query(collection(db, 'users', session.user?.email!, 'chats'), orderBy("createdAt", "asc"))
    );

    return (
        <div className="p-2 flex flex-col h-screen">
            <div className="flex-1">
                {/* NewChat */}
                <NewChat />
                <div>
                    <div className="hidden sm:inline">
                        <ModelSelection />
                    </div>
                </div>

                <div className="flex flex-col space-y-2 my-2">
                    {loading && (
                        <div className="animate-pulse text-center text-white">
                            <p>Chargement des chats...</p>
                        </div>
                    )}
                    {chats?.docs.map((chat) => (
                        <ChatRow key={chat.id} id={chat.id} />
                    ))}
                </div>
            </div>
            {session && (
                <div className="flex flex-row p-2 cursor-pointer hover:opacity-50"
                     onClick={() => signOut()}>
                    <button className="text-white pl-5 pb-2">Déconnexion</button>
                    <img
                        src={session.user?.image!}
                        alt="Profile pic"
                        className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
                    />
                </div>
            )}
        </div>
    );
}
export default SideBar;