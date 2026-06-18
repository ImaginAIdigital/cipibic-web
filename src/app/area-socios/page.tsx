"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function AreaSociosPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError("Email o contraseña incorrectos.");
      setLoading(false);
    } else {
      router.push("/area-socios/dashboard");
      router.refresh();
    }
  }

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-16">
      <div className="w-full max-w-md mx-4">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-[#465FCB] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl">🔒</div>
            <h1 className="text-2xl font-bold text-[#1A1A1A] mb-2">Área de Socios</h1>
            <p className="text-[#7A7A7A] text-sm">Ingresá con tus credenciales para acceder a los servicios exclusivos.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#54595F] mb-1">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#465FCB] focus:ring-1 focus:ring-[#465FCB] transition"
                placeholder="tu@empresa.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#54595F] mb-1">Contraseña</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#465FCB] focus:ring-1 focus:ring-[#465FCB] transition"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#465FCB] text-white font-semibold rounded-md hover:bg-[#3a4fb5] transition-colors disabled:opacity-60"
            >
              {loading ? "Ingresando..." : "Ingresar"}
            </button>
          </form>

          <p className="text-center text-xs text-[#7A7A7A] mt-6">
            ¿No tenés acceso?{" "}
            <a href="/contacto" className="text-[#465FCB] hover:underline">Contactá a CIPIBIC</a>
          </p>
        </div>
      </div>
    </section>
  );
}
