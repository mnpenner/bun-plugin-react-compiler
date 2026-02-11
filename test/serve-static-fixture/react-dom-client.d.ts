declare module "react-dom/client" {
  import type { ReactNode } from "react";

  interface Root {
    render(children: ReactNode): void;
    unmount(): void;
  }

  interface RootOptions {
    identifierPrefix?: string;
    onRecoverableError?: (
      error: unknown,
      errorInfo: { componentStack?: string }
    ) => void;
  }

  export function createRoot(
    container: Element | DocumentFragment,
    options?: RootOptions
  ): Root;
}
