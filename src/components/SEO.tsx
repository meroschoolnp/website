import React, { useEffect, useMemo } from 'react';
import { SCHOOL_CONTACT } from '@/src/config/contactInfo';
import { useLanguage } from '@/src/context/LanguageContext';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  keywords?: string;
  ogType?: 'website' | 'article';
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const DEFAULT_DESCRIPTION =
  'Run 44 school modules 100% offline on Windows, macOS & Linux. Manage fee ledgers, NEB/CBSE broadsheets, school calendars, and receipts with zero cloud fees.';

const DEFAULT_KEYWORDS =
  'offline school management system, desktop school ERP, school software Windows Linux macOS, local offline school database, student fee ledger, ESC POS thermal receipt, NEB CBSE broadsheet, school calendar B.S. A.D., library barcode software, MeroSchool';

function resolveSiteOrigin(): string {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin;
  }
  return SCHOOL_CONTACT.canonicalUrl;
}

function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  return path.startsWith('/') ? path : `/${path}`;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = DEFAULT_DESCRIPTION,
  canonicalPath = '',
  keywords = DEFAULT_KEYWORDS,
  ogType = 'website',
  image,
  imageAlt = 'MeroSchool Offline Desktop School Management System',
  noindex = false,
  breadcrumbs,
  structuredData,
}) => {
  const { isNepali } = usePublicLanguage();

  const fullTitle = useMemo(() => {
    if (!title) return 'MeroSchool — Offline Desktop School Management ERP';
    return title.includes('MeroSchool') ? title : `${title} — MeroSchool`;
  }, [title]);

  const resolvedPath = useMemo(() => {
    if (canonicalPath) return normalizePath(canonicalPath);
    if (typeof window !== 'undefined' && window.location?.pathname) {
      return normalizePath(window.location.pathname);
    }
    return '/';
  }, [canonicalPath]);

  const siteOrigin = resolveSiteOrigin();
  const canonicalUrl = resolvedPath === '/' ? `${siteOrigin}/` : `${siteOrigin}${resolvedPath}`;
  const resolvedImage = image
    ? image.startsWith('http')
      ? image
      : `${siteOrigin}${normalizePath(image)}`
    : `${siteOrigin}/og-image.jpg`;

  const serializedJsonLd = useMemo(() => {
    const graph: Array<Record<string, unknown>> = [];

    if (breadcrumbs && breadcrumbs.length > 0) {
      graph.push({
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, idx) => {
          const itemPath = normalizePath(item.path);
          const itemUrl = itemPath === '/' ? `${siteOrigin}/` : `${siteOrigin}${itemPath}`;
          return {
            '@type': 'ListItem',
            position: idx + 1,
            name: item.name,
            item: itemUrl,
          };
        }),
      });
    }

    if (structuredData) {
      if (Array.isArray(structuredData)) {
        graph.push(...structuredData);
      } else {
        graph.push(structuredData);
      }
    }

    if (graph.length === 0) return null;

    return JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': graph,
    });
  }, [breadcrumbs, structuredData, siteOrigin]);

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Helper to set or create meta tag
    const setMetaTag = (attribute: 'name' | 'property', value: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${value}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Helper to set or create link tag
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Standard Meta & Canonical
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag(
      'name',
      'robots',
      noindex
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );
    setLinkTag('canonical', canonicalUrl);

    // OpenGraph
    setMetaTag('property', 'og:site_name', SCHOOL_CONTACT.appName);
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', resolvedImage);
    setMetaTag('property', 'og:image:alt', imageAlt);
    setMetaTag('property', 'og:locale', isNepali ? 'ne_NP' : 'en_US');
    setMetaTag('property', 'og:locale:alternate', isNepali ? 'en_US' : 'ne_NP');

    // Twitter / X
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:url', canonicalUrl);
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', resolvedImage);
    setMetaTag('name', 'twitter:image:alt', imageAlt);

    // Dynamic Page-Level Schema.org JSON-LD
    const existingScript = document.querySelector('script[data-seo-dynamic="true"]');
    if (serializedJsonLd) {
      let scriptEl = existingScript as HTMLScriptElement | null;
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.type = 'application/ld+json';
        scriptEl.setAttribute('data-seo-dynamic', 'true');
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = serializedJsonLd;
    } else if (existingScript) {
      existingScript.remove();
    }

    return () => {
      const dynamicScript = document.querySelector('script[data-seo-dynamic="true"]');
      if (dynamicScript) {
        dynamicScript.remove();
      }
    };
  }, [
    fullTitle,
    description,
    keywords,
    noindex,
    canonicalUrl,
    ogType,
    resolvedImage,
    imageAlt,
    isNepali,
    serializedJsonLd,
  ]);

  return null;
};
