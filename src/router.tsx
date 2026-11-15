import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { Layout } from "@/src/components/Layout";
import { HomePage } from "@/src/pages/HomePage";
import { AboutPage } from "@/src/pages/AboutPage";
import { FeaturesPage } from "@/src/pages/FeaturesPage";
import { ContactPage } from "@/src/pages/ContactPage";
import { PrivacyPolicyPage } from "@/src/pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "@/src/pages/TermsOfServicePage";
import { TestimonialsPage } from "@/src/pages/TestimonialsPage";
import { FaqPage } from "@/src/pages/FaqPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <Navigate to="/" replace /> },
      { path: "about", element: <AboutPage /> },
      { path: "architecture", element: <Navigate to="/about" replace /> },
      { path: "features", element: <FeaturesPage /> },
      { path: "modules", element: <Navigate to="/features" replace /> },
      { path: "testimonials", element: <TestimonialsPage /> },
      { path: "reviews", element: <Navigate to="/testimonials" replace /> },
      { path: "clients", element: <Navigate to="/testimonials" replace /> },
      { path: "faqs", element: <FaqPage /> },
      { path: "faq", element: <Navigate to="/faqs" replace /> },
      { path: "help", element: <Navigate to="/faqs" replace /> },
      { path: "demo", element: <Navigate to="/contact?type=demo" replace /> },
      { path: "downloads", element: <Navigate to="/features" replace /> },
      { path: "download", element: <Navigate to="/features" replace /> },
      { path: "install", element: <Navigate to="/features" replace /> },
      { path: "contact", element: <ContactPage /> },
      { path: "contacts", element: <Navigate to="/contact" replace /> },
      { path: "support", element: <Navigate to="/contact" replace /> },
      { path: "privacy", element: <PrivacyPolicyPage /> },
      { path: "privacy-policy", element: <Navigate to="/privacy" replace /> },
      { path: "terms", element: <TermsOfServicePage /> },
      { path: "terms-of-service", element: <Navigate to="/terms" replace /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
