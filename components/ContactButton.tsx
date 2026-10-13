"use client"; // Hanya komponen ini yang Client Component

import { useState } from 'react';

export default function ContactButton() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="pt-2">
      <button 
        onClick={() => setShowContact(!showContact)}
        className="text-xs bg-slate-700 hover:bg-slate-600 text-slate-200 px-3 py-1 rounded transition-all"
      >
        {showContact ? "Sembunyikan Kontak" : "Tampilkan Kontak"}
      </button>
      {showContact && (
        <p className="text-sm text-blue-400 font-mono mt-2">
          Email: andrew.maramis@student.ac.id
        </p>
      )}
    </div>
  );
}
