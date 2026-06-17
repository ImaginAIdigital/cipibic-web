import { SignIn } from "@clerk/nextjs";

export default function AreaSociosPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-16">
      <div className="w-full max-w-md mx-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#1A1A1A] mb-2">Área de Socios</h1>
          <p className="text-[#7A7A7A] text-sm">
            Ingresá con tus credenciales para acceder a los servicios exclusivos.
          </p>
        </div>
        <SignIn
          appearance={{
            variables: {
              colorPrimary: "#465FCB",
              borderRadius: "8px",
            },
          }}
        />
      </div>
    </section>
  );
}
