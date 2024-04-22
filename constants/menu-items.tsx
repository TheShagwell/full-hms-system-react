import { routes } from '@/config/routes';

import { 
  Home,
  HeartPulse,
  Contact2,
  Ribbon,
  Ambulance,
  Pill,
  ActivityIcon,
  Users2,
  Settings,
  CreditCard,
  UserRound,
  Target
} from 'lucide-react';

export const sidebaNavLinks = [
    {
      label: "Dashboard Overview",
      route: routes.dashboard.dashboard,
      icon: <Home />,
      alt: "Home",
    },
    {
      label: "Patient Registration",
      route: routes.dashboard.patientRegistration,
      icon: <Contact2 />,
      alt: "Patient Registration",
    },
    {
      label: "Consultation",
      route: "/dashboard/consultation",
      icon: <Ribbon />,
      alt: "Consultation",
    },
    {
      label: "Treatment",
      route: "/dashboard/treatment",
      icon: <Ambulance/>,
      alt: "Treatment",
    },
    {
      label: "Pharmacy",
      route: "/dashboard/pharmacy",
      icon: <Pill/>,
      alt: "Pharmacy",
    },
    {
      label: "Diagnostics",
      route: "/dashboard/diagnostics",
      icon: <HeartPulse/>,
      alt: "Diagnostics",
    },
    {
      label: "Inpatients",
      route: "/dashboard/inpatients",
      icon: <Users2/>,
      alt: "Inpatients",
    },
    {
      label: "Settings",
      route: "/dashboard/settings",
      icon: <Settings/>,
      alt: "Settings",
    },
    {
      label: "Billing",
      route: "/dashboard/billing",
      icon: <CreditCard/>,
      alt: "Billing",
    },
    {
      label: "Profile",
      route: "/dashboard/profile",
      icon: <UserRound/>,
      alt: "Profile",
    },
    {
      label: "Logout",
      route: "/dashboard/logout",
      icon: <Target/>,
      alt: "Logout",
    },
  ];