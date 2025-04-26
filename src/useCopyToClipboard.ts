import { useCallback, useState } from "react";

export interface CopyStatus {
  success: boolean;
  error: string | null;
}

export function useCopyToClipboard() {
  const [status, setStatus] = useState<CopyStatus>({
    success: false,
    error: null,
  });

  const copy = useCallback(async (text: string) => {
    try {
      if (!navigator?.clipboard) {
        throw new Error("Clipboard API not supported");
      }

      await navigator.clipboard.writeText(text);
      setStatus({ success: true, error: null });
    } catch (err: any) {
      setStatus({ success: false, error: err?.message || "Failed to copy" });
    }
  }, []);

  return { copy, status };
}
