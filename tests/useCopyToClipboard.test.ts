import { act, renderHook } from "@testing-library/react-hooks";
import { describe, expect, it, vi } from "vitest";
import { useCopyToClipboard } from "../src/useCopyToClipboard";

describe("useCopyToClipboard", () => {
  it("should copy text successfully", async () => {
    const { result } = renderHook(() => useCopyToClipboard());

    // Mock the clipboard API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });

    await act(async () => {
      await result.current.copy("Hello world!");
    });

    expect(result.current.status.success).toBe(true);
    expect(result.current.status.error).toBeNull();
  });

  it("should handle clipboard API error", async () => {
    const { result } = renderHook(() => useCopyToClipboard());

    // Mock clipboard API to throw error
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockRejectedValue(new Error("Copy failed")),
      },
    });

    await act(async () => {
      await result.current.copy("Hello error!");
    });

    expect(result.current.status.success).toBe(false);
    expect(result.current.status.error).toBe("Copy failed");
  });
});
