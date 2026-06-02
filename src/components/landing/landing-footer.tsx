import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LANDING_FOOTER_COLUMNS } from "@/components/landing/landing-data";
import Image from "next/image";

/**
 * Renders the footer links and institutional product statement.
 */
export function LandingFooter() {
  return (
    <footer className="bg-[#0f172a] px-8 pb-7 pt-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 grid grid-cols-2 gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="space-y-3">
            <div className="w-fit">
              <Image
                src="/logowhite.png"
                alt="Neztep"
                width={1200}
                height={500}
                className="h-8 w-auto"
              />
            </div>
            <div className="text-[13px] leading-[1.6] text-[#64748b] ml-2">
              Acompañando a los estudiantes desde el día cero.
            </div>
          </div>

          {LANDING_FOOTER_COLUMNS.map(({ title, links }) => (
            <div key={title}>
              <div className="mb-3.5 text-[12px] font-bold uppercase tracking-[0.06em] text-[#94a3b8]">
                {title}
              </div>
              <div className="flex flex-col gap-2.5">
                {title === "Legal" ? (
                  <>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div
                          className="cursor-pointer text-[14px] text-[#64748b] transition-colors hover:text-white"
                        >
                          Privacidad
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>Política de Privacidad</DialogTitle>
                          <DialogDescription>
                            Neztep recopila y procesa datos personales con el objetivo de proporcionar acceso a la plataforma, personalizar la experiencia de usuario y facilitar los procesos de orientación e integración estudiantil.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="mt-4 space-y-4 text-sm leading-6 text-text-secondary">
                          <div>
                            <h3 className="mb-2 font-semibold">1. Tratamiento de datos personales</h3>
                            <p>
                              El tratamiento de los datos se realiza conforme a la Ley N.º 19.628 sobre Protección de la Vida Privada y demás normativa aplicable en la República de Chile.
                            </p>
                          </div>
                          <div>
                            <h3 className="mb-2 font-semibold">2. Información recopilada</h3>
                            <p>La plataforma podrá recopilar información como:</p>
                            <ul className="mt-2 list-disc space-y-1 pl-5 text-[#334155]">
                              <li>Nombre y apellidos.</li>
                              <li>Correo electrónico.</li>
                              <li>Institución educacional asociada.</li>
                              <li>Información de perfil.</li>
                              <li>Actividad y uso de la plataforma.</li>
                              <li>Progreso dentro de módulos y procesos de onboarding.</li>
                            </ul>
                          </div>
                          <div>
                            <h3 className="mb-2 font-semibold">3. Finalidad de los datos</h3>
                            <p>Los datos recopilados serán utilizados exclusivamente para:</p>
                            <ul className="mt-2 list-disc space-y-1 pl-5 text-[#334155]">
                              <li>Gestionar el acceso a la plataforma.</li>
                              <li>Proporcionar funcionalidades personalizadas.</li>
                              <li>Mejorar la experiencia del usuario.</li>
                              <li>Generar métricas de uso y desempeño.</li>
                              <li>Mantener la seguridad y correcto funcionamiento del servicio.</li>
                            </ul>
                          </div>
                          <div>
                            <h3 className="mb-2 font-semibold">4. Protección de la información</h3>
                            <p>
                              Neztep implementa medidas razonables de seguridad para proteger la confidencialidad, integridad y disponibilidad de los datos almacenados.
                            </p>
                          </div>
                          <div>
                            <h3 className="mb-2 font-semibold">5. Derechos del usuario</h3>
                            <p>
                              Los titulares de los datos podrán solicitar acceso, rectificación, actualización o eliminación de su información conforme a la legislación vigente.
                            </p>
                          </div>
                          <div>
                            <h3 className="mb-2 font-semibold">6. Contacto</h3>
                            <p>
                              Para consultas relacionadas con privacidad y protección de datos, el usuario podrá comunicarse a través de los canales de contacto definidos por la plataforma.
                            </p>
                          </div>
                        </div>
                        <DialogClose asChild>
                          <button
                            type="button"
                            className="mt-6 w-full rounded-md border border-border bg-surface px-4 py-2 text-sm font-semibold text-text-primary hover:bg-muted"
                          >
                            Cerrar
                          </button>
                        </DialogClose>
                      </DialogContent>
                    </Dialog>

                    <Dialog>
                      <DialogTrigger asChild>
                        <div
                          className="cursor-pointer text-[14px] text-[#64748b] transition-colors hover:text-white"
                        >
                          Términos y Condiciones
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>Términos y Condiciones de Uso</DialogTitle>
                          <DialogDescription>
                            Al registrarse o utilizar Neztep, el usuario acepta los presentes términos y condiciones.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="mt-4 space-y-4 text-sm leading-6 text-text-secondary">
                          <div>
                            <h3 className="mb-2 font-semibold">1. Aceptación</h3>
                            <p>Al registrarse o utilizar Neztep, el usuario acepta los presentes términos y condiciones.</p>
                          </div>
                          <div>
                            <h3 className="mb-2 font-semibold">2. Objeto del servicio</h3>
                            <p>
                              Neztep es una plataforma digital orientada a facilitar procesos de orientación, onboarding e integración de estudiantes de educación superior.
                            </p>
                            <p className="mt-2">
                              La plataforma constituye una herramienta complementaria de apoyo y no reemplaza los canales oficiales de comunicación de las instituciones educacionales.
                            </p>
                          </div>
                          <div>
                            <h3 className="mb-2 font-semibold">3. Obligaciones del usuario</h3>
                            <p>El usuario se compromete a:</p>
                            <ul className="mt-2 list-disc space-y-1 pl-5 text-[#334155]">
                              <li>Proporcionar información veraz.</li>
                              <li>Mantener la confidencialidad de sus credenciales.</li>
                              <li>Utilizar la plataforma de forma responsable.</li>
                              <li>Respetar la normativa vigente.</li>
                            </ul>
                          </div>
                          <div>
                            <h3 className="mb-2 font-semibold">4. Restricciones de uso</h3>
                            <p>Queda prohibido:</p>
                            <ul className="mt-2 list-disc space-y-1 pl-5 text-[#334155]">
                              <li>Acceder a información sin autorización.</li>
                              <li>Alterar o interferir con el funcionamiento del sistema.</li>
                              <li>Utilizar la plataforma para fines ilícitos.</li>
                              <li>Suplantar la identidad de terceros.</li>
                            </ul>
                          </div>
                          <div>
                            <h3 className="mb-2 font-semibold">5. Disponibilidad</h3>
                            <p>
                              Neztep procurará mantener la disponibilidad continua del servicio, sin garantizar funcionamiento ininterrumpido debido a mantenciones, actualizaciones o eventos fuera de su control.
                            </p>
                          </div>
                          <div>
                            <h3 className="mb-2 font-semibold">6. Propiedad intelectual</h3>
                            <p>
                              Los contenidos, diseños, marcas y componentes tecnológicos de la plataforma se encuentran protegidos por la normativa aplicable sobre propiedad intelectual.
                            </p>
                          </div>
                          <div>
                            <h3 className="mb-2 font-semibold">7. Modificaciones</h3>
                            <p>
                              Neztep podrá actualizar estos términos cuando resulte necesario para mejorar el servicio o adaptarse a cambios legales y tecnológicos.
                            </p>
                          </div>
                          <div>
                            <h3 className="mb-2 font-semibold">8. Legislación aplicable</h3>
                            <p>Estos términos se rigen por las leyes de la República de Chile.</p>
                          </div>
                        </div>
                        <DialogClose asChild>
                          <button
                            type="button"
                            className="mt-6 w-full rounded-md border border-border bg-surface px-4 py-2 text-sm font-semibold text-text-primary hover:bg-muted"
                          >
                            Cerrar
                          </button>
                        </DialogClose>
                      </DialogContent>
                    </Dialog>
                  </>
                ) : (
                  links.map((link) => {
                    const href = link === "Funcionalidades" ? "#funcionalidades" : link === "Descargar" ? "#descargar" : "#";
                    return (
                      <a
                        key={link}
                        className="text-[14px] text-[#64748b] transition-colors hover:text-white"
                        href={href}
                      >
                        {link}
                      </a>
                    );
                  })
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#1e293b] pt-5 text-[12px] text-[#475569]">
          <span>(c) 2026 Neztep. Todos los derechos reservados.</span>
          <span>Hecho en Chile para la educación superior</span>
        </div>
      </div>
    </footer>
  );
}
