import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import AboutPage from '../components/AboutPage'
import SchedulePage from '../components/SchedulePage'
import ServicesPage from '../components/ServicesPage'
import AdvisorsPage from '../components/AdvisorsPage'
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
      // {
      //   path: "/education",
      //   children: [
      //     {
      //       index: true,
      //       element: <EducationPage />
      //     },
      //     {
      //       path: '/education/life-insurance',
      //       element: <LifeInsurancePage />
      //     },
      //     // {
      //     //   path: '/annuities',
      //     //   element: <AnnuitiesPage />
      //     // },
      //     // {
      //     //   path: '/ira',
      //     //   element: <IRAPage />
      //     // },
      //     // {
      //     //   path: '/hsa',
      //     //   element: <HSAPage />
      //     // },
      //     // {
      //     //   path: '/structured-notes',
      //     //   element: <StructuredNotesPage />
      //     // },
      //     // {
      //     //   path: '/calculators',
      //     //   element: <CalculatorsPage />
      //     // }
      //   ]
      //   // element: <EducationPage />,
      // },
      {
        path: "/services",
        element: <ServicesPage />
      },
      {
        path: "/schedule",
        element: <SchedulePage />
      },
      {
        path: "/advisors",
        element: <AdvisorsPage />
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
