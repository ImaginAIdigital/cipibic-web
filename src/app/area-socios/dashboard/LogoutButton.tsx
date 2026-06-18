"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/area-socios");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 border border-white/30 text-white text-sm rounded-md hover:bg-white/10 transition-colors"
    >
      Cerrar sesión
    </button>
  );
}
