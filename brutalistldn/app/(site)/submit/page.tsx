"use client";
import { useEffect, useState } from "react";
import { Section } from "@/components/Section";

const initial = {
  name: "",
  email: "",
  buildingName: "",
  address: "",
  borough: "",
  architect: "",
  year: "",
  type: "Residential",
  status: "",
  description: "",
  links: "",
  photoCredit: "",
  imageUrls: "",
};

export default function SubmitPage() {
  const [form, setForm] = useState(initial);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("submit-form");
    if (saved) setForm(JSON.parse(saved));
  }, []);

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const next = { ...form, [e.target.name]: e.target.value };
    setForm(next);
    localStorage.setItem("submit-form", JSON.stringify(next));
  }

  function onGenerate() {
    const json = {
      title: form.buildingName,
      borough: form.borough,
      address: form.address,
      architect: form.architect,
      year: Number(form.year) || undefined,
      type: form.type,
      status: form.status,
      description: form.description,
      references: form.links.split(/\s+/).filter(Boolean),
      gallery: form.imageUrls.split(/\s+/).filter(Boolean),
      credit: form.photoCredit,
      submittedBy: { name: form.name, email: form.email },
    };
    setPreview(JSON.stringify(json, null, 2));
  }

  return (
    <Section kicker="Contribute" title="Submit a Building">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
        {Object.entries({
          name: "Name",
          email: "Email",
          buildingName: "Building Name",
          address: "Address",
          borough: "Borough",
          architect: "Architect",
          year: "Year",
          status: "Listing Status",
          photoCredit: "Photo Credit",
        }).map(([key, label]) => (
          <label key={key} className="flex flex-col gap-1 text-sm">
            <span className="kicker">{label}</span>
            <input name={key} value={(form as any)[key] || ""} onChange={onChange} className="bg-transparent border border-[var(--hairline)] rounded px-2 py-1" />
          </label>
        ))}
        <label className="flex flex-col gap-1 text-sm">
          <span className="kicker">Type</span>
          <select name="type" value={form.type} onChange={onChange} className="bg-transparent border border-[var(--hairline)] rounded px-2 py-1">
            {['Residential','Civic','Culture','Education','Infrastructure'].map(t => <option key={t}>{t}</option>)}
          </select>
        </label>
        <label className="md:col-span-2 flex flex-col gap-1 text-sm">
          <span className="kicker">Description</span>
          <textarea name="description" value={form.description} onChange={onChange} className="min-h-24 bg-transparent border border-[var(--hairline)] rounded px-2 py-1" />
        </label>
        <label className="md:col-span-2 flex flex-col gap-1 text-sm">
          <span className="kicker">Links (space-separated)</span>
          <textarea name="links" value={form.links} onChange={onChange} className="min-h-24 bg-transparent border border-[var(--hairline)] rounded px-2 py-1" />
        </label>
        <label className="md:col-span-2 flex flex-col gap-1 text-sm">
          <span className="kicker">Image URLs (space-separated)</span>
          <textarea name="imageUrls" value={form.imageUrls} onChange={onChange} className="min-h-24 bg-transparent border border-[var(--hairline)] rounded px-2 py-1" />
        </label>
        <div className="md:col-span-2 flex items-center gap-3">
          <button onClick={onGenerate} className="underline decoration-[var(--accent)]">Generate JSON</button>
          <span className="text-[var(--muted)]">Copy-paste into a new MDX file.</span>
        </div>
      </form>

      {preview && (
        <pre className="mt-6 whitespace-pre-wrap break-all bg-[var(--ink)] text-[var(--paper)] p-4 rounded text-xs">{preview}</pre>
      )}
    </Section>
  );
}