"use client";

import { Button, Column, Media, Text } from "@once-ui-system/core";
import { useState } from "react";
import { type Theme, assets, themeLabels } from "@/content/assets";

const filters: ("all" | Theme)[] = ["all", "children", "art", "made", "mothers", "community", "places"];

export function MomentsGallery() {
  const [filter, setFilter] = useState<"all" | Theme>("all");
  const shown = filter === "all" ? assets : assets.filter((a) => a.theme === filter);

  return (
    <Column gap="32">
      <div className="chip-row" role="group" aria-label="Filter photos">
        {filters.map((f) => (
          <Button
            key={f}
            className="filter-btn"
            size="m"
            variant={filter === f ? "primary" : "secondary"}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
          >
            {f === "all" ? `All (${assets.length})` : themeLabels[f]}
          </Button>
        ))}
      </div>
      <Text variant="label-default-s" onBackground="neutral-weak" aria-live="polite">
        {`Showing ${shown.length} photos`}
      </Text>
      <div className="masonry">
        {shown.map((a) => (
          <Column as="figure" key={a.id} gap="8" margin="0">
            <div className="frame">
              <Media src={a.src} alt={a.alt} aspectRatio={a.ratio} sizes="(max-width: 600px) 50vw, (max-width: 1200px) 33vw, 320px" enlarge />
            </div>
            <Text as="figcaption" variant="label-default-s" onBackground="neutral-weak">
              {a.caption}
            </Text>
          </Column>
        ))}
      </div>
    </Column>
  );
}
