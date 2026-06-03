# Neztep

Neztep es una plataforma SaaS de onboarding institucional para educacion superior. El repositorio actual implementa la base frontend del producto con App Router, paginas publicas, shells para estudiante y admin, formularios de autenticacion validados en cliente, un design system reutilizable y una capa BFF preparada en `src/app/api` para futuras integraciones con Firebase.

## Objetivo del MVP

El MVP busca centralizar el ingreso de estudiantes de primer año mediante:

- onboarding guiado;
- acceso a recursos institucionales;
- soporte conversacional y escalamiento;
- orientacion basica dentro del campus;
- paneles separados para estudiante y administracion.

La implementacion actual prepara esas superficies, pero todavia no conecta autenticacion, sesion ni persistencia real.

## Estado actual de implementacion

Implementado hoy:

- landing publica en `/`;
- paginas `/login` y `/register`;
- route groups `(public)`, `(app)` y `(admin)`;
- layouts separados para experiencia publica, estudiante y administracion;
- paginas shell para `/dashboard`, `/onboarding`, `/resources`, `/campus`, `/chatbot`, `/profile`, `/admin`, `/admin/content` y `/admin/analytics`;
- design system en `/design-system`;
- componentes UI reutilizables con Tailwind v4, Radix UI y Lucide;
- validaciones de auth en cliente;
- mocks institucionales para registro;
- features organizadas por dominio en `src/features/*`;
- endpoints BFF stub en `src/app/api/*`;
- tests unitarios con Vitest + Testing Library;
- smoke tests E2E con Playwright para landing, login y registro.

No implementado aun:

- Firebase Authentication;
- Firebase Admin SDK;
- Cloud Firestore;
- sesiones reales;
- guards de autenticacion y roles;
- logica real en `src/app/api`;
- integracion de chatbot con proveedor AI;
- persistencia multitenant;
- soporte, FAQ CRUD y mapas CRUD completos.

## Stack tecnologico real

### Aplicacion

- Next.js 15.5 App Router
- React 19
- TypeScript estricto
- Tailwind CSS v4
- shadcn/ui sobre Radix UI
- Lucide React

### Calidad y testing

- ESLint 9
- Vitest 2
- Testing Library
- Playwright

### Tooling

- pnpm
- alias `@/*` hacia `src/*`
- `components.json` de shadcn con `style: "new-york"` y variables CSS

## Arquitectura actual

El flujo previsto por la base actual es:

`Frontend -> Features -> Services -> BFF (src/app/api) -> Firebase Admin SDK (futuro) -> Firestore (futuro)`

### Que esta implementado hoy

- Las paginas App Router renderizan shells y componentes de UI.
- Cada feature expone `types`, `services` y en varios casos `hooks`.
- Los `services` documentan el contrato con la BFF y hoy retornan placeholders o lanzan `Not implemented`.
- `src/app/api` contiene endpoints stub (`501`) con comentarios que describen la futura integracion.

### Que aun no existe

- Ninguna feature habla con Firebase directamente.
- No existe `src/lib/firebase`.
- No hay middleware de auth, session cookies ni proteccion efectiva de rutas.

## App Router y Route Groups

### Route groups

- `(public)`: landing, login y register.
- `(app)`: superficie del estudiante.
- `(admin)`: superficie administrativa.

Los nombres entre parentesis organizan layouts y codigo, pero no forman parte de la URL final.

### Layouts implementados

- `src/app/layout.tsx`: shell raiz con fuentes Geist y `globals.css`.
- `src/app/(public)/layout.tsx`: layout passthrough para paginas publicas.
- `src/app/(app)/layout.tsx`: shell de estudiante con `AppNav`.
- `src/app/(admin)/layout.tsx`: shell administrativo con `AdminNav`.

### Rutas existentes hoy

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

### BFF actual bajo App Router

```txt
/api/auth
/api/onboarding
/api/resources
/api/campus
/api/chatbot
/api/admin
```

Todos esos endpoints son stubs arquitectonicos y responden `501 Not Implemented`.

## Arquitectura feature-based

Cada dominio vive en `src/features/<feature>` con esta estructura actual:

```txt
src/features/<feature>/
  hooks/
  services/
  types/
  index.ts
```

Features presentes hoy:

- `auth`
- `onboarding`
- `resources`
- `campus`
- `chatbot`
- `admin`

Reglas observadas en el codigo actual:

- `index.ts` exporta solo tipos seguros para server y client.
- Los hooks son client-only.
- Los services encapsulan la futura llamada a BFF.
- La UI no debe hablar con `src/app/api` directamente; debe hacerlo via `services`.

## Futura arquitectura BFF

La capa BFF ya esta preparada en `src/app/api`, pero no implementada funcionalmente. La intencion documentada en el codigo es:

- `auth`: sesion y cookies via Firebase Auth.
- `onboarding`: progreso del estudiante en Firestore.
- `resources`: recursos institucionales filtrados por tenant.
- `campus`: edificios y puntos del campus por institucion.
- `chatbot`: historial y mensajes, potencialmente con proveedor AI + Firestore.
- `admin`: metricas y contenido con validacion de rol admin en servidor.

Cuando Firebase exista, la validacion de auth, role e `institutionId` debe vivir en esta capa, no en `features/*`.

## Estructura de carpetas actual

```txt
src/
  app/
    (admin)/
    (app)/
    (public)/
    api/
    design-system/
    globals.css
    layout.tsx
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
    utils.ts
    utils.test.ts
  tests/
    fixtures/
    setupTests.ts
  types/
tests/
  e2e/
```

## Componentes principales

### UI

- `alert`
- `avatar`
- `badge`
- `button`
- `card`
- `dialog`
- `dropdown-menu`
- `form-field`
- `input`
- `progress-bar`
- `select`
- `separator`
- `skeleton`
- `stepper`
- `table`
- `tabs`

### Layout y experiencia

- `Navbar`
- `Sidebar`
- `AppNav`
- `AdminNav`
- `EmptyState`
- `AuthShell`
- `AuthCard`
- componentes de landing

## Dependencias relevantes

- `next`, `react`, `react-dom`
- `tailwindcss`, `@tailwindcss/postcss`
- `@radix-ui/react-dialog`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-slot`
- `class-variance-authority`, `clsx`, `tailwind-merge`
- `lucide-react`
- `vitest`, `@vitejs/plugin-react`, `jsdom`
- `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`
- `@playwright/test`

## Scripts disponibles

```bash
pnpm dev
pnpm build
pnpm lint
pnpm test
pnpm test:unit
pnpm test:e2e
pnpm test:all
```

## Instalacion

```bash
pnpm install
```

## Desarrollo local

```bash
pnpm dev
```

La aplicacion corre con Next.js en desarrollo. Los tests E2E usan su propio `webServer` de Playwright en `http://127.0.0.1:4173`.

## Estrategia de testing actual

### Unit y component tests

- Vitest con entorno `jsdom`
- setup en `src/tests/setupTests.ts`
- incluye `src/**/*.test.{ts,tsx}`
- hoy cubre:
  - `src/lib/utils.test.ts`
  - `src/lib/validation/auth.test.ts`
  - `src/components/auth/login-form.test.tsx`
  - `src/components/auth/register-form.test.tsx`

### E2E

- Playwright en `tests/e2e`
- smoke coverage de:
  - landing publica
  - login
  - registro

## Convenciones del proyecto

- App Router como punto de entrada unico.
- Alias `@/` para imports internos.
- Organizacion principal por `app`, `components`, `features`, `lib`, `hooks` y `types`.
- Las features encapsulan dominio; los componentes encapsulan presentacion reutilizable.
- Las llamadas a backend deben pasar por `services` y luego por la BFF.
- Firebase/Auth/Firestore siguen siendo integraciones futuras; no deben documentarse como existentes.
- El tono visual debe mantenerse institucional, minimalista y accesible.

