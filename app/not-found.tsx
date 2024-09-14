"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 py-20 sm:p-20 bg-background font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="text-8xl font-semibold">
          404
        </div>
        <div className="text-base text-stone-400 max-w-lg mb-1">
          The page you are looking for does not exist.
          It might have been moved or deleted.
          Check the link you entered, or click below to return
          to the last page you were on.
        </div>
        <Button variant="secondary" onClick={() => window.history.back()}>
          <ArrowLeft size={15} className="mr-1" /> Return to last page
        </Button>
      </div>
    </div>
  );
}

export default NotFoundPage;
