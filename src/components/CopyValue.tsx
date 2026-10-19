"use client";

import { IconButton } from "@once-ui-system/core";
import { useState } from "react";

export function CopyValue({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <IconButton
      icon={copied ? "copied" : "copy"}
      variant="tertiary"
      size="l"
      tooltip={copied ? "Copied" : `Copy ${label}`}
      ariaLabel={copied ? `${label} copied` : `Copy ${label}`}
      onClick={() => {
        navigator.clipboard?.writeText(value).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
      }}
    />
  );
}
