# AGENTS.md - Project Rules for AI Coding Agents

Estas reglas aplican a todo `d:\neztep`. El objetivo es que cualquier agente trabaje sobre el estado real del repositorio, no sobre supuestos.

## 1. Identidad del proyecto

### Nombre y enfoque

- Nombre: `Neztep`
- Tipo: SaaS web para onboarding institucional en educacion superior
- Etapa: MVP / capstone / prototipo con arquitectura escalable
- Posicionamiento: serio, institucional, minimalista, accesible y SaaS B2B

### Problema que resuelve

- informacion institucional fragmentada;
- onboarding poco estructurado;
- desorientacion del estudiante de primer año;
- dificultad para ubicar espacios y recursos;
- dependencia de canales informales para soporte.

### No convertir el producto en

- app infantil o mascot-first;
- sistema de rankings;
- red social;
- plataforma sobreingenierizada fuera de alcance MVP.

## 2. Estado real de implementacion

Actualmente el repositorio SI implementa:

- App Router con route groups `(public)`, `(app)` y `(admin)`;
- landing page publica;
- paginas `login` y `register`;
- shell de estudiante con navegacion lateral;
- shell admin con navegacion lateral;
- pagina `/design-system`;
- componentes `auth`, `landing`, `layout`, `legal`, `student` y `ui`;
- features `auth`, `onboarding`, `resources`, `campus`, `chatbot` y `admin`;
- BFF stubs en `src/app/api`;
- validaciones de formularios en cliente;
- tests unitarios, de componentes y E2E basicos.

Actualmente el repositorio NO implementa:

- Firebase Authentication;
- Firebase Admin SDK;
- Cloud Firestore;
- sesiones reales;
- autorizacion por rol e `institutionId`;
- persistencia multitenant;
- CRUD reales para admin;
- chatbot funcional;
- integraciones externas de backend.

No documentes ni implementes esas capacidades como si ya existieran.

## 3. MVP y prioridad funcional

### Modulos objetivo del MVP

1. autenticacion;
2. registro / login;
3. asociacion a institucion;
4. onboarding guiado;
5. seguimiento de progreso;
6. centro de informacion institucional;
7. busqueda;
8. FAQ chatbot;
9. escalamiento a soporte;
10. mapa basico del campus;
11. puntos de interes;
12. dashboard estudiante;
13. dashboard admin.

### Fuera de alcance sin aprobacion explicita

- rankings;
- gamificacion avanzada;
- copilotos AI fuera del FAQ/chatbot institucional;
- analytics predictivo;
- apps nativas;
- migraciones a Supabase, Prisma o PostgreSQL;
- reestructuras grandes del stack.

Si una solicitud excede el MVP, reducirla a una alternativa compatible con el alcance actual.

## 4. Stack obligatorio

- TypeScript 5 en modo estricto
- Next.js 15 App Router
- React 19
- Tailwind CSS v4
- shadcn/ui + Radix UI
- Lucide React
- pnpm
- ESLint
- Vitest
- Playwright

### Integraciones futuras ya previstas

- Firebase Authentication
- Firebase Admin SDK
- Cloud Firestore
- Hosting en Vercel

Esas integraciones son futuras. No agregarlas ni migrarlas sin requerimiento explicito.

## 5. Arquitectura actual

### Flujo arquitectonico canonico

`Frontend -> Features -> Services -> BFF (src/app/api) -> Firebase Admin SDK (futuro) -> Firestore (futuro)`

### Significado practico

- La UI renderiza paginas y componentes.
- La logica por dominio vive en `src/features/*`.
- Los `services` de cada feature son el unico lugar permitido para hablar con la BFF.
- La BFF actual vive en `src/app/api/*`.
- Firebase y Firestore no existen todavia en el repo.

### Restriccion critica

No conectes componentes o hooks directamente a Firebase o Firestore desde cliente. Cuando llegue esa integracion, debe entrar por la BFF.

## 6. App Router, rutas y layouts

### Route groups existentes

- `src/app/(public)`
- `src/app/(app)`
- `src/app/(admin)`

Los route groups no forman parte de la URL.

### Layouts implementados

- `src/app/layout.tsx`: shell global, fuentes Geist, `globals.css`
- `src/app/(public)/layout.tsx`: passthrough
- `src/app/(app)/layout.tsx`: shell estudiante con `AppNav`
- `src/app/(admin)/layout.tsx`: shell admin con `AdminNav`

### Rutas existentes

```txt
/
/login
/register
/design-system
/dashboard
/onboarding
/resources
/campus
/chatbot
/profile
/admin
/admin/content
/admin/analytics
```

### Regla de App Router

- Cada `page.tsx` debe ser composicion de vista.
- La logica reusable debe salir a `components`, `features`, `lib` o `hooks`.
- Si una pagina crece, dividirla antes de que se vuelva un archivo monolitico.

## 7. Organizacion de carpetas

La estructura actual valida es:

```txt
src/
  app/
    (admin)/
    (app)/
    (public)/
    api/
    design-system/
  components/
    auth/
    design-system/
    landing/
    layout/
    legal/
    student/
    ui/
  features/
    admin/
    auth/
    campus/
    chatbot/
    onboarding/
    resources/
  hooks/
  lib/
    mock/
    validation/
  tests/
  types/
tests/
  e2e/
```

### Reglas de organizacion

- `src/app`: routing, layouts y entry points de BFF.
- `src/components`: UI y presentacion reutilizable.
- `src/features`: dominio por feature.
- `src/hooks`: hooks compartidos cross-feature.
- `src/lib`: utilidades, mocks y validaciones agnosticas.
- `src/types`: tipos compartidos globales.
- `tests/e2e`: Playwright.

No mover dominio de negocio a `components`.

## 8. Convenciones de imports

- Usar alias `@/` para imports internos (`tsconfig.json`).
- Preferir imports absolutos dentro de `src`.
- Mantener imports relativos cortos solo dentro de la misma feature cuando agregan claridad.
- No cruzar capas con imports arbitrarios.

### Reglas de capa

- `app/*` puede importar `components`, `features`, `lib`, `types`.
- `components/*` puede importar `components/ui`, `lib`, `types` y hooks estrictamente necesarios.
- `features/*/hooks` puede importar `features/*/services` y `features/*/types`.
- `features/*/services` puede importar solo `features/*/types` y utilidades neutrales.
- `features/*/types` no debe depender de UI.

## 9. Convenciones para features

Cada feature debe seguir esta forma:

```txt
src/features/<feature>/
  hooks/
  services/
  types/
  index.ts
```

### Reglas para features

- `index.ts` exporta solo tipos seguros para server y client.
- Los hooks deben ser `client-only` si usan estado o efectos.
- Los services describen y encapsulan el contrato con BFF.
- No hacer `fetch` desde `page.tsx` si el dominio ya tiene `service`.
- No duplicar tipos entre features si pertenecen claramente al mismo dominio.

### Features existentes hoy

- `auth`
- `onboarding`
- `resources`
- `campus`
- `chatbot`
- `admin`

## 10. Convenciones para API Routes

### Estado actual

`src/app/api` contiene endpoints stub:

- `auth`
- `onboarding`
- `resources`
- `campus`
- `chatbot`
- `admin`

### Reglas obligatorias

- Tratar `src/app/api` como capa BFF, no como backend generico.
- Toda validacion de auth, role e `institutionId` debe vivir aqui cuando exista backend real.
- La capa `features/*` nunca debe validar permisos como sustituto del servidor.
- Responder con contratos consistentes y explicitamente tenant-scoped.
- Mientras sigan siendo stubs, mantener mensajes `Not implemented` claros y no fingir persistencia.

### Direccion futura obligatoria

- `auth` -> Firebase Auth / cookies de sesion
- `onboarding` -> progreso en Firestore
- `resources` -> recursos por institucion
- `campus` -> edificios y POI por institucion
- `chatbot` -> historial y mensajes + proveedor AI
- `admin` -> contenido y metricas con rol admin validado en servidor

## 11. Convenciones para componentes

### Categorias reales

- `components/ui`: primitives y wrappers reutilizables
- `components/layout`: navegacion y shell blocks
- `components/auth`: formularios y piezas de autenticacion
- `components/landing`: bloques de marketing publico
- `components/design-system`: showcases y documentacion visual
- `components/legal`: dialogos legales
- `components/student`: bloques especificos de experiencia estudiante

### Reglas

- Mantener componentes pequenos y composables.
- Si un componente representa un patron transversal, ubicarlo en `components`.
- Si representa logica de dominio, evaluar moverlo a una feature o dejar la logica fuera del componente.
- Respetar accesibilidad: labels visibles, foco, estados disabled y mensajes de error.
- No hardcodear design tokens fuera del sistema de variables / Tailwind / componentes base.

## 12. Convenciones para hooks

### Hooks compartidos

- Van en `src/hooks`.
- Hoy existe `useInstitution` como placeholder cross-feature.

### Hooks por feature

- Van en `src/features/<feature>/hooks`.
- Deben orquestar estado de UI y uso de `services`.
- No deben contener detalles de infraestructura Firebase.

### Regla

Si un hook solo aplica a una feature, no subirlo a `src/hooks`.

## 13. Convenciones para types

- Usar `interface` para object shapes.
- Usar `type` para unions e intersecciones.
- Tipos de dominio van dentro de su feature.
- Tipos compartidos entre modulos van en `src/types`.
- Evitar tipos duplicados o ambiguos entre `components` y `features`.

## 14. Convenciones para tests

### Estado actual

- Vitest configurado con `jsdom`
- Testing Library configurado en `src/tests/setupTests.ts`
- Playwright configurado en `tests/e2e`

### Archivos de prueba existentes

- `src/lib/utils.test.ts`
- `src/lib/validation/auth.test.ts`
- `src/components/auth/login-form.test.tsx`
- `src/components/auth/register-form.test.tsx`
- `tests/e2e/public.spec.ts`

### Reglas

- Tests unitarios o de componentes junto al codigo en `src/**/*.test.ts(x)`.
- E2E solo en `tests/e2e`.
- Nuevas validaciones de formularios deben cubrir casos validos e invalidos.
- Nuevas paginas publicas o shells importantes deben sumar al menos smoke coverage cuando tenga sentido.

## 15. Convenciones para Firebase futuro

Cuando se implemente Firebase:

- `src/lib/firebase` sera la ubicacion esperada para inicializacion compartida.
- El SDK Admin debe usarse solo en servidor/BFF.
- El cliente no debe usar credenciales administrativas.
- La sesion debe resolverse via BFF y cookies/headers seguros.
- Firestore debe respetar aislamiento por `institutionId` en toda lectura y escritura.

No adelantar integraciones parciales que rompan esta direccion.

## 16. Restricciones arquitectonicas

- Nunca bypass de `institutionId`.
- Nunca leakage cross-tenant.
- Nunca acceso directo desde UI a Firestore.
- Nunca almacenar secretos en cliente.
- Nunca escribir "mock" como si fuera dato real.
- No documentar features como implementadas si solo existen como shell o stub.
- Mantener separacion entre presentacion y dominio.
- Preferir cambios pequenos y consistentes con la estructura actual.

## 17. UI/UX y design system

### Direccion visual

- seria
- institucional
- minimalista
- accesible
- escalable

### Referencias de tono

- Notion
- Stripe Dashboard
- Coursera
- Linear
- Canvas LMS

### Evitar

- estetica infantil
- interfaces ruidosas
- gamificacion dominante
- componentes "mascota"

## 18. Safety guardrails

- Nunca desplegar sin aprobacion.
- Nunca borrar archivos sin aprobacion.
- Nunca commitear `.env`.
- Nunca hardcodear credenciales.
- Validar inputs de usuario.
- Encapsular integraciones externas con manejo de error cuando existan.
- Proteger futuras rutas admin desde servidor.

## 19. Git y cambios

- Conventional commits: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`
- Preferir diffs pequenos y focalizados.
- No force push a `main` o `master`.
- Si README o AGENTS quedan desalineados del codigo, corregirlos.

## 20. Definicion de done

Una tarea esta completa solo si:

- refleja el estado real del codigo;
- respeta esta arquitectura;
- mantiene accesibilidad y tono institucional;
- no inventa backend inexistente;
- preserva seguridad y direccion multitenant;
- incluye tests cuando el cambio funcional lo requiera;
- no introduce deuda tecnica innecesaria.
