"use client";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import LeadGenPage from '@/components/leadgen/Leadgen';
import QAPage from '@/components/qa/Qa';
import RealtorPage from '@/components/realtor/Realtor';
import SupportPage from '@/components/support/Support';
import SalesPage from '@/components/sales/Sales';
import SuperAdminPage from '@/components/super-admin1/SuperAdmin';
import AdminPage from '@/components/admin/components/AdminPage';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  if (!session) {
    return null;
  }

  const renderDashboard = () => {
    switch (session.user.role) {
      case 'super-admin':
        return <SuperAdminPage />
      case 'admin':
        return <AdminPage />;
      case 'leadgen':
        return <LeadGenPage />;
      case 'qa':
        return <QAPage />;
      case 'realtor':
        return <RealtorPage />;
      case 'support':
        return <SupportPage />;
      case 'sales':
        return <SalesPage />;
      default:
        return <div>No dashboard available for this role.</div>;
    }
  };

  return (
    <div>
      {renderDashboard()}
    </div>
  );
}