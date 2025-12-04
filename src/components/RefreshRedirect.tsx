"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export function RefreshRedirect() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;
    
    // Check if this is a page refresh (not initial load or navigation)
    const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    const isRefresh = navEntries.length > 0 && navEntries[0].type === "reload";
    
    // If it's a refresh and not already on home page, redirect to home
    if (isRefresh && pathname !== "/") {
      router.replace("/");
    }
  }, [router, pathname]);

  return null;
}

