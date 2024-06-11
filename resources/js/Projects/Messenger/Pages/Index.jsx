import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Index({ auth }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div className="flex justify-between items-center border-l-2 border-black p-4">
                            <h1 className="font-bold text-2xl">Purpose</h1>
                            <span className="font-thin text-sm pl-4">Tuesday, 11th June 2024</span>
                        </div>
                        <p className="p-4 pt-4 font-thin">
                            The objective of this project is to exhibit various types of functional websites that have been empirically validated over time, thereby showcasing my proficiency in web development. This endeavor aims to demonstrate my capabilities to potential employers, providing assurance of my value within a company.
                            <br /><br />
                            Additionally, the project seeks to develop distinct applications under a unified domain while preserving their individual functionalities. This design ensures ease of replication and integration into other projects in an efficient and timely manner.
                            <br /><br />
                            The applications were constructed using Laravel as the backend framework, with InertiaJS facilitating the frontend, which employs ReactJS. All requests within the project are executed using JavaScript's async and await functionalities to maintain a clear separation between the frontend and backend.
                        </p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
