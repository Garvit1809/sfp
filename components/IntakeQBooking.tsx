"use client";

import { useEffect } from "react";
import { INTAKEQ_ACCOUNT_ID, INTAKEQ_WIDGET_SRC } from "@/lib/site";

declare global {
  interface Window {
    intakeq?: string;
  }
}

/* IntakeQ online booking widget — the same one used on the main site, so bookings land in the practice's CRM.
   It renders into #intakeq; IntakeQ supports only one widget per page. */
export default function IntakeQBooking() {
  useEffect(() => {
    if (document.querySelector(`script[src="${INTAKEQ_WIDGET_SRC}"]`)) return;
    window.intakeq = INTAKEQ_ACCOUNT_ID;
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = INTAKEQ_WIDGET_SRC;
    document.head.appendChild(s);
  }, []);

  return <div id="intakeq" className="iq-widget" />;
}
