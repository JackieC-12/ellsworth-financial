import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import AboutPage from '../components/AboutPage'
import SchedulePage from '../components/SchedulePage'
import ServicesPage from '../components/Services'
import AnnuitiesPage from '../components/Services/AnnuitiesPage';
import AssetManagementPage from '../components/Services/AssetManagementPage'
import FinancialPlanningPage from '../components/Services/FinancialPlanningPage'
import LifeInsurancePage from '../components/Services/LifeInsurancePage'
import BlogPage from '../components/BlogPage'
import ContactUsPage from '../components/ContactUsPage'
import PrivacyPolicyPage from '../components/PrivacyPolicyPage'
import HomePage from '../components/HomePage'
import Layout from './Layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />
      },
      {
        path: "/financial-planning",
        element: <FinancialPlanningPage />
      },
      {
        path: "/life-insurance",
        element: <LifeInsurancePage />
      },
      {
        path: "/annuities",
        element: <AnnuitiesPage />
      },
      {
        path: "/asset-management",
        element: <AssetManagementPage />
      },
      {
        path: "/schedule",
        element: <SchedulePage />
      },
      {
        path: "/blog",
        element: <BlogPage />
      },
      {
        path: "/contact-us",
        element: <ContactUsPage />
      },
      {
        path: "/privacy",
        element: <PrivacyPolicyPage />
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
    ],
  },
]);
