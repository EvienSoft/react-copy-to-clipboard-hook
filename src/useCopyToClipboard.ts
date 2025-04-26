import { useState, useCallback, useRef, useEffect } from 'react';

export interface CopyStatus {
  success: boolean;
  error: string | null;
}

export interface UseCopyToClipboardOptions {
  resetDelayMs?: number; // Optional, defaults to 3000ms
}

export function useCopyToClipboard(options?: UseCopyToClipboardOptions) {
  const { resetDelayMs = 3000 } = options || {};
  const [status, setStatus] = useState<CopyStatus>({ success: false, error: null });
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = useCallback(async (text: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    try {
      if (!navigator?.clipboard) {
        throw new Error('Clipboard API not supported');
      }

      await navigator.clipboard.writeText(text);
      setStatus({ success: true, error: null });

      timeoutRef.current = setTimeout(() => {
        resetStatus();
      }, resetDelayMs);

    } catch (err: any) {
      setStatus({ success: false, error: err?.message || 'Failed to copy' });

      timeoutRef.current = setTimeout(() => {
        resetStatus();
      }, resetDelayMs);
    }
  }, [resetDelayMs]);

  const resetStatus = useCallback(() => {
    setStatus({ success: false, error: null });
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return { copy, status, resetStatus };
}
