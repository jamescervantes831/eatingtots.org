// src/components/SuccessClient.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import confetti from "canvas-confetti";

type Props = {
  fireConfetti: boolean;
  shareUrl: string;
  shareText: string;
};

export default function SuccessClient({
  fireConfetti,
  shareUrl,
  shareText,
}: Props) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const canNativeShare = typeof navigator !== "undefined" && !!navigator.share;

  const shareLinks = useMemo(() => {
    const url = encodeURIComponent(shareUrl);
    const text = encodeURIComponent(shareText);

    return {
      x: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };
  }, [shareUrl, shareText]);

  useEffect(() => {
    if (!fireConfetti) return;

    confetti({ particleCount: 140, spread: 80, origin: { y: 0.65 } });

    const end = Date.now() + 900;
    const tick = () => {
      confetti({
        particleCount: 10,
        spread: 65,
        startVelocity: 20,
        origin: { x: Math.random(), y: 0.55 },
      });
      if (Date.now() < end) requestAnimationFrame(tick);
    };
    tick();
  }, [fireConfetti]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const fallbackCopy = async (text: string) => {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.top = "0";
    ta.style.left = "0";
    ta.style.opacity = "0";
    document.body.appendChild(ta);

    ta.focus();
    ta.select();

    try {
      document.execCommand("copy");
    } finally {
      document.body.removeChild(ta);
    }
  };

  const onCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        await fallbackCopy(shareUrl);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      try {
        await fallbackCopy(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      } catch {
        // ignore
      }
    }
  };

  const onNativeShare = async () => {
    try {
      if (!navigator.share) return;
      await navigator.share({
        title: "Eating Tots",
        text: shareText,
        url: shareUrl,
      });
    } catch {
      // ignore
    }
  };

  const btnBase =
    "rounded-full border-4 border-lime-300 bg-white px-3 py-2 text-xs sm:text-sm font-extrabold shadow-sm transition hover:scale-[1.02] whitespace-nowrap";

  return (
    <>
      {open && (
        <button
          aria-label="Close share menu"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/10"
        />
      )}

      {/* Bubble + expanding menu (top-right) */}
      <div className="fixed z-50 top-4 right-4">
        <div className="relative">
          {open && (
            <div
              id="share-menu"
              className="
                absolute right-0 top-[calc(100%+12px)]
                w-[calc(100vw-2rem)] max-w-sm
                rounded-3xl border-4 border-lime-300 bg-white/95 p-3 shadow-lg
                flex flex-wrap items-center justify-end gap-2
                md:w-[520px] md:max-w-none
              "
              role="menu"
              aria-label="Share options"
            >
              {canNativeShare && (
                <button
                  onClick={() => {
                    void onNativeShare();
                    setOpen(false);
                  }}
                  className={`${btnBase} text-[#0da84a]`}
                  role="menuitem"
                >
                  Share…
                </button>
              )}

              <a
                href={shareLinks.x}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnBase} text-green-900`}
                role="menuitem"
              >
                X
              </a>

              <a
                href={shareLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnBase} text-green-900`}
                role="menuitem"
              >
                Facebook
              </a>

              <a
                href={shareLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnBase} text-green-900`}
                role="menuitem"
              >
                LinkedIn
              </a>

              <button
                onClick={() => void onCopy()}
                className={`${btnBase} text-green-900`}
                role="menuitem"
              >
                {copied ? "Copied!" : "Copy link"}
              </button>
            </div>
          )}

          {/* Bubble */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="share-menu"
            className="
              rounded-full border-4 border-lime-300 bg-white
              px-6 py-4 text-base sm:text-lg font-extrabold text-[#0da84a]
              shadow-lg transition hover:scale-[1.03]
            "
          >
            {open ? "Close ✕" : "Share 💚"}
          </button>
        </div>
      </div>
    </>
  );
}
