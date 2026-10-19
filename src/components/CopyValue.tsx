"use client";

import { IconButton } from "@once-ui-system/core";
import { useState } from "react";

export function CopyValue({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <IconButton
      icon={copied ? "copied" : "copy"}
      variant="tertiary"
      size="s"
      tooltip={copied ? "Copied" : `Copy ${label.toLowerCase()}`}
      ariaLabel={`Copy ${label.toLowerCase()}`}
      onClick={() => {
        navigator.clipboard?.writeText(value).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
      }}
    />
  );
}
