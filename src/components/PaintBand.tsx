"use client";

import { IconButton } from "@once-ui-system/core";
import { useState } from "react";
import { artworks } from "@/content/assets";

export function PaintBand() {
  const [paused, setPaused] = useState(false);
  const loop = [...artworks, ...artworks];
  return (
    <div className="paint-band" data-paused={paused}>
      <div className="paint-band__track" role="img" aria-label="A strip of children's paintings made at SAMADHAN: fish, flowers, brushstrokes and trees">
        {loop.map((a, i) => (
          // biome-ignore lint/performance/noImgElement: decorative strip, natural width
          <img key={`${a.id}-${i}`} src={a.src} alt="" width={a.width} height={a.height} loading="lazy" />
        ))}
      </div>
      <div className="paint-band__toggle">
        <IconButton
          icon={paused ? "play" : "pause"}
          variant="secondary"
          size="m"
          ariaLabel={paused ? "Play the moving paintings" : "Pause the moving paintings"}
          onClick={() => setPaused((p) => !p)}
        />
      </div>
    </div>
  );
}
