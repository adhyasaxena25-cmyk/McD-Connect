'use client';

import React, { useEffect } from 'react';
import { WidgetLayout } from '@nitrostack/widgets';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const ensureScrollable = () => {
      if (document.body.style.overflow === 'hidden' || document.body.style.overflowY === 'hidden') {
        document.body.style.removeProperty('overflow');
      }
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden';
      document.documentElement.style.overflowY = 'auto';
      document.documentElement.style.overflowX = 'hidden';
      document.documentElement.style.height = 'auto';
      document.documentElement.style.minHeight = '100%';
      document.body.style.height = 'auto';
      document.body.style.minHeight = '100%';

      const widgetContent = document.getElementById('nitro-widget-content');
      if (widgetContent) {
        widgetContent.style.overflowY = 'visible';
        widgetContent.style.height = 'auto';
        widgetContent.style.minHeight = '100%';
      }
    };

    ensureScrollable();

    // Use MutationObserver so if any runtime tries to set overflow = 'hidden' on body, we immediately clean it
    const observer = new MutationObserver(() => {
      if (document.body.style.overflow === 'hidden' || document.body.style.overflowY === 'hidden') {
        ensureScrollable();
      }
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['style'] });

    const interval = setInterval(ensureScrollable, 200);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <html lang="en" style={{ width: '100%', minHeight: '100%', overflowX: 'hidden', overflowY: 'auto' }}>
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, -apple-system, sans-serif', width: '100%', minHeight: '100%', overflowX: 'hidden', overflowY: 'auto' }}>
        <WidgetLayout>{children}</WidgetLayout>
      </body>
    </html>
  );
}

