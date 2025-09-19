'use client'
import {FaFileMedicalAlt} from "react-icons/fa";
import {MdDashboard} from "react-icons/md";
import {useState} from "react";
import Link from "next/link";


const Sidebar = () => {
    const tabs = [
        {title: "Dashboard", icon: <MdDashboard/>, path: "/dashboard"},
        {title: "Transactions", icon: <FaFileMedicalAlt/>, path: "/transactions"},
        // {title: "Monitor patient", icon: <FaChartLine/>,path:"monitor-patient"},

    ]
    const [activeTab, setActiveTab] = useState('/dashboard');

    return <aside className="w-full bg-gray-50 border-r border-gray-200 min-h-screen">
        <div className="p-6">
            <div className="flex items-center justify-center mb-8">
                <img src={"/logo.png"} className="w-[120px]" alt="logo"/>
            </div>
            <nav className="space-y-2">
                {tabs.map(tab => <Link href={tab.path} onClick={() => setActiveTab(tab.path)} key={tab.path}
                                       className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left ${
                                           activeTab === tab.path ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                                       }`}
                >
                    {tab.icon}
                    <span>{tab.title}</span>
                </Link>)}
            </nav>
        </div>
    </aside>
}

export default Sidebar