import React from 'react'
import { Button } from "@/components/ui/button"
import LogoutButton from '@/components/LogoutButton';
import Image from "next/image"

interface SidebarProps {
    activeView: 'assigned-leads'
    setActiveView: (view: 'assigned-leads') => void
}

export const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
    return (
        <div className="w-64 bg-white shadow-md">
            <div className="p-4">
                <div className='flex mx-auto justify-center my-10'>
                    <Image src="/LeadLynx - logo.png" width={"120"} height={"120"} alt="Lead Lynx" />
                </div>
                <h2 className="text-2xl font-bold mb-6">My Dashboard</h2>
                <nav>
                    <Button
                        variant={activeView === 'assigned-leads' ? 'default' : 'ghost'}
                        className="w-full justify-start mb-2"
                        onClick={() => setActiveView('assigned-leads')}
                    >
                        Assigned Prospects
                    </Button>
                    <LogoutButton />
                </nav>
            </div>
        </div>
    )
}