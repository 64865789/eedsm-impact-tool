import React, { useState } from "react";

export default function ImpactForm() {
  const [form, setForm] = useState({
    attendees: "",
    energyAwarenessScore: "",
    radioListeners: "",
    socialMediaReach: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Impact calculation will be handled here.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded">
      <div>
        <label className="block text-sm font-medium">Event Attendees</label>
        <input type="number" name="attendees" value={form.attendees} onChange={handleChange} className="mt-1 block w-full border rounded p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">Awareness Score (%)</label>
        <input type="number" name="energyAwarenessScore" value={form.energyAwarenessScore} onChange={handleChange} className="mt-1 block w-full border rounded p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">Radio Listeners</label>
        <input type="number" name="radioListeners" value={form.radioListeners} onChange={handleChange} className="mt-1 block w-full border rounded p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">Social Media Reach</label>
        <input type="number" name="socialMediaReach" value={form.socialMediaReach} onChange={handleChange} className="mt-1 block w-full border rounded p-2" />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Calculate Impact
      </button>
    </form>
  );
}
