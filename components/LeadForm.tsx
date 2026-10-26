"use client";

import { useState, type FormEvent } from "react";
import { PHONE_DISPLAY } from "@/lib/site";
import CallLink from "./CallLink";

const TRACKING_KEYS = ["gclid", "utm_source", "utm_medium", "utm_campaign", "utm_term"] as const;

const ERROR_TEXT = "Please add your name, a phone number, an email and pick one option.";

export type Concern = { value: string; label: string };

type Props = {
  id?: string;
  /** Prefix for input ids, e.g. "h" → "h-name". */
  idPrefix: string;
  title: React.ReactNode;
  sub: string;
  concerns: Concern[];
  /** Value of the hidden "page" field. */
  page: string;
  showOrCall?: boolean;
  thanksText: string;
};

function submitLead(data: Record<string, FormDataEntryValue>): Promise<unknown> {
  /* WEBSITE TEAM: send `data` to your form handler / CRM here, e.g.
     return fetch("/api/lead", {method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(data)});
     Conversion tracking will be added later at the "LEAD SUBMITTED" point below. */
  void data;
  return Promise.resolve();
}

export default function LeadForm({ id, idPrefix, title, sub, concerns, page, showOrCall, thanksText }: Props) {
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const ok = form.checkValidity() && form.querySelector('input[name="concern"]:checked');
    if (!ok) {
      setError(ERROR_TEXT);
      form.querySelector<HTMLElement>(":invalid")?.focus();
      return;
    }
    setError(null);
    const data: Record<string, FormDataEntryValue> = Object.fromEntries(new FormData(form).entries());
    /* Capture Google Ads click ID + UTM values from the ad click */
    const q = new URLSearchParams(window.location.search);
    TRACKING_KEYS.forEach((k) => {
      data[k] = q.get(k) ?? "";
    });
    setSending(true);
    submitLead(data)
      .then(() => setDone(true) /* LEAD SUBMITTED */)
      .catch(() => {
        setSending(false);
        setError(`That didn’t send. Please try again, or call us at ${PHONE_DISPLAY}.`);
      });
  }

  return (
    <form className={`form-card lead-form${done ? " done" : ""}`} id={id} noValidate onSubmit={onSubmit}>
      <div className="form-body">
        <h2>{title}</h2>
        <p className="sub">{sub}</p>
        <div className="field">
          <label htmlFor={`${idPrefix}-name`}>Your name</label>
          <input id={`${idPrefix}-name`} name="name" type="text" autoComplete="name" required />
        </div>
        <div className="two">
          <div className="field">
            <label htmlFor={`${idPrefix}-phone`}>Phone number</label>
            <input id={`${idPrefix}-phone`} name="phone" type="tel" inputMode="tel" autoComplete="tel" required />
          </div>
          <div className="field">
            <label htmlFor={`${idPrefix}-email`}>Email</label>
            <input id={`${idPrefix}-email`} name="email" type="email" inputMode="email" autoComplete="email" required />
          </div>
        </div>
        <fieldset>
          <legend>What would you like help with?</legend>
          <div className="chips">
            {concerns.map((c, i) => (
              <label className="chip" key={c.value}>
                <input type="radio" name="concern" value={c.value} required={i === 0} />
                <span>{c.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <p className={`err${error ? " show" : ""}`} role="alert">
          {error ?? ERROR_TEXT}
        </p>
        <input type="hidden" name="page" value={page} />
        <button className="btn btn-sun" type="submit" disabled={sending}>
          {sending ? "Sending…" : "Request my callback"}
        </button>
        <p className="fine">
          By submitting, you agree to be contacted by Solid Foundation Psychiatry by phone, text or email about your
          request.
        </p>
        {showOrCall && (
          <div className="or-call">
            or call now <CallLink />
          </div>
        )}
      </div>
      <div className="thanks" aria-live="polite">
        <h3>Thank you — we’ve got it.</h3>
        <p>{thanksText}</p>
        <CallLink className="btn btn-sun" prefix="Call" />
      </div>
    </form>
  );
}
