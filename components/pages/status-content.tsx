import { CheckCircle, AlertCircle, Clock } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { FinalCta } from "@/components/home/final-cta";

type ServiceStatus = "operational" | "degraded" | "down" | "maintenance";

const SERVICES = [
  { name: "Veb ilova (app.enwis.uz)", status: "operational" },
  { name: "API endpointlari", status: "operational" },
  { name: "Imtihon yaratish tizimi", status: "operational" },
  { name: "Yuklab olish xizmati", status: "operational" },
  { name: "Elektron pochta xabarlari", status: "operational" },
];

const INCIDENTS: {
  date: string;
  title: string;
  description: string;
  severity: ServiceStatus;
}[] = [
  {
    date: "2026-07-08",
    title: "Rejalashtirilgan texnik xizmat",
    description: "Serverlar yangilanishi — 02:00 dan 03:00 gacha. Barcha xizmatlar normal ishladi.",
    severity: "maintenance",
  },
];

const STATUS_CONFIG: Record<ServiceStatus, { icon: React.ComponentType<{ className?: string }>; label: string; color: string; bg: string }> = {
  operational: { icon: CheckCircle, label: "Ishlayapti", color: "text-emerald-600", bg: "bg-emerald-50" },
  degraded: { icon: AlertCircle, label: "Sekinlashgan", color: "text-amber-600", bg: "bg-amber-50" },
  down: { icon: AlertCircle, label: "To'xtagan", color: "text-red-600", bg: "bg-red-50" },
  maintenance: { icon: Clock, label: "Texnik xizmat", color: "text-blue-600", bg: "bg-blue-50" },
};

export function StatusContent() {
  return (
    <>
      {/* Services */}
      <section className="section-pad bg-[var(--color-mist)]">
        <div className="container-editorial max-w-2xl">
          <SectionHeading
            align="center"
            eyebrow="Xizmatlar"
            title="Platforma ishlash holati"
            description="So'nggi 30 kunda uptime: 99.98%"
          />

          <div className="mt-12 overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-line)] bg-white shadow-[var(--shadow-soft-md)]">
            {SERVICES.map((service, i) => {
              const config = STATUS_CONFIG[service.status as ServiceStatus];
              const Icon = config.icon;
              return (
                <div
                  key={service.name}
                  className={`flex items-center justify-between px-7 py-5 transition-colors duration-200 hover:bg-[var(--color-mist)]/50 ${i < SERVICES.length - 1 ? "border-b border-[var(--color-line)]" : ""}`}
                >
                  <span className="text-sm font-medium text-[var(--color-ink)]">{service.name}</span>
                  <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${config.bg} ${config.color}`}>
                    <Icon className="h-3.5 w-3.5" />
                    {config.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Incidents */}
      <section className="section-pad">
        <div className="container-editorial max-w-2xl">
          <SectionHeading
            align="center"
            eyebrow="Hodisalar"
            title="So&apos;nggi hodisalar"
          />

          <div className="mt-12 space-y-4">
            {INCIDENTS.length === 0 ? (
              <div className="rounded-[var(--radius-2xl)] border border-[var(--color-line)] bg-white p-8 text-center shadow-[var(--shadow-soft-sm)]">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50">
                  <CheckCircle className="h-6 w-6 text-emerald-500" />
                </div>
                <p className="text-sm font-medium text-[var(--color-ink)]">
                  Barcha tizimlar barqaror ishlayapti
                </p>
                <p className="mt-1 text-xs text-[var(--color-slate)]">
                  So&apos;nggi 90 kunda hech qanday hodisa qayd etilmadi.
                </p>
              </div>
            ) : (
              INCIDENTS.map((incident) => {
                const config = STATUS_CONFIG[incident.severity];
                return (
                  <div
                    key={incident.date}
                    className="group overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-line)] bg-white p-7 shadow-[var(--shadow-soft-sm)] transition-all duration-300 hover:shadow-[var(--shadow-soft-md)]"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ${config.bg} ${config.color}`}>
                        <config.icon className="h-3 w-3" />
                        {config.label}
                      </span>
                      <span className="text-xs font-mono text-[var(--color-slate-light)]">
                        {incident.date}
                      </span>
                    </div>
                    <p className="mt-3 font-display text-sm font-medium text-[var(--color-ink)]">
                      {incident.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-slate)]">
                      {incident.description}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
