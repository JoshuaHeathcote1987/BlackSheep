import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import { IoIosCreate } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";

export default function Index({ auth }) {

    const [values, setValues] = useState({
        receiver_id: '',
        receiver_name: '',

    });

    const [conversations, setConversations] = useState([
        {
            id: 1,
            sender_id: 1,
            receiver_id: 2,
            sender_name: "John Hardy",
            receiver_name: "Alice Johnson",
            messages: [
                {
                    id: 1,
                    sender_name: "John Hardy",
                    body: "Hi, how are you?",
                },
                {
                    id: 2,
                    sender_name: "Alice Johnson",
                    body: "I'm great thanks!",
                }
            ],
        },
    ]);

    const [messages, setMessages] = useState([]);
    const [contact, setContact] = useState({});

    // Toggles

    const [toggleWriter, setToggleWriter] = useState(false);


    // Functions

    function onLoad() {
        updateConversations();
    }

    function updateConversations() {

    }

    function updateMessages() {

    }

    function updateContact(contact) {
        setContact(contact);
        setMessages(contact.messages);
        if (!toggleWriter) {
            setToggleWriter(true);
        }
    }

    useEffect(() => {
        onLoad();
    });

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Messages" />

            <div className="py-12 h-screen">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 h-full">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6 h-full">
                        <div className="grid grid-cols-3 gap-8 h-full">
                            <div className="col-span-1 border-r pr-4 space-y-4 flex flex-col h-full">
                                <div className="flex flex-row justify-between items-center text-2xl">
                                    <div>Chats</div>
                                    <div className="flex flex-row justify-between items-center gap-4">
                                        <div className="cursor-pointer" onClick={() => setToggleWriter(true)}><IoIosCreate /></div>
                                        <div className="cursor-pointer"><HiDotsHorizontal /></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="relative">
                                        <input className="rounded-lg w-full" type="text" placeholder="Search Messenger" />
                                        <div className="absolute top-3 right-5">
                                            <FaSearch />
                                        </div>
                                    </div>
                                </div>
                                <div className="h-96 overflow-y-auto flex-grow">
                                    {
                                        conversations.length > 0 ? (
                                            conversations.map((contact, i) => (
                                                <div onClick={() => updateContact(contact)} key={i} className="hover:bg-gray-200 cursor-pointer p-3 rounded-l-lg">
                                                    {contact.receiver_name}
                                                </div>
                                            ))
                                        ) : (
                                            <div className="text-gray-500 p-3">No conversations available.</div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className={`flex flex-col justify-between h-full space-y-4 ${toggleWriter ? '' : 'hidden'}`}>
                                    <input type="text" className="w-full rounded-lg" placeholder="To:" value={contact.receiver_name} />
                                    <div className="h-full px-2">
                                        {
                                            messages.length > 0 ? (
                                                messages.map((message, i) => (
                                                    <div key={i} className="p-2">
                                                        <span className="font-bold">{message.sender_name}:</span> {message.body}
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="text-gray-500 p-3">No messages available.</div>
                                            )
                                        }
                                    </div>
                                    <input type="text" className="rounded-lg w-full" placeholder="Aa" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
