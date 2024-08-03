import React, { Suspense } from "react";

import LoadComponent from "@/components/LoadComponent";
import QrComponent from "@/components/QrComponent";

export default function page() {
  return (
    <Suspense fallback={<LoadComponent />}>
      <QrComponent />
    </Suspense>
  );
}
