'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

/** Quanto tempo o aviso de sucesso fica visível. */
const FEEDBACK_MS = 1800;

export type CopyStatus = 'idle' | 'copied' | 'unsupported';

export interface CopyToClipboardResult {
  readonly status: CopyStatus;
  readonly copy: (text: string) => Promise<void>;
}

/**
 * Copia um texto para a área de transferência e devolve o estado do retorno
 * visual.
 *
 * Quando a API não está disponível — contexto sem HTTPS, navegador antigo — o
 * estado vira `unsupported`, e o componente orienta a seleção manual.
 */
export function useCopyToClipboard(): CopyToClipboardResult {
  const [status, setStatus] = useState<CopyStatus>('idle');
  const timeoutRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    },
    [],
  );

  const copy = useCallback(async (text: string) => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    try {
      await navigator.clipboard.writeText(text);
      setStatus('copied');
      timeoutRef.current = window.setTimeout(() => setStatus('idle'), FEEDBACK_MS);
    } catch {
      setStatus('unsupported');
    }
  }, []);

  return { status, copy };
}
