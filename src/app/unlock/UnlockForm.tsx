"use client";

import { Button, Column, Text } from "@once-ui-system/core";
import { useActionState } from "react";
import { type UnlockState, unlockSite } from "./actions";

const initial: UnlockState = { error: null };

export function UnlockForm({ next }: { next: string }) {
  const [state, action, pending] = useActionState(unlockSite, initial);

  return (
    <form action={action}>
      <Column gap="16">
        <input type="hidden" name="next" value={next} />
        <label htmlFor="password">
          <Text variant="label-strong-s">Password</Text>
        </label>
        <input
          id="password"
          className="gate-input"
          name="password"
          type="password"
          autoComplete="current-password"
          autoFocus
          required
        />
        {state.error && (
          <Text as="p" variant="body-default-m" role="alert" style={{ color: "#9b2c2c" }}>
            {state.error}
          </Text>
        )}
        <Button type="submit" size="l" fillWidth disabled={pending}>
          {pending ? "Opening…" : "Open the site"}
        </Button>
      </Column>
    </form>
  );
}
