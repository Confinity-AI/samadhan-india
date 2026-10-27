import { Column, Heading, Text } from "@once-ui-system/core";
import { Brand } from "@/components/Header";
import { safeNextPath } from "@/lib/gate";
import { UnlockForm } from "./UnlockForm";

export const metadata = {
  title: "Preview",
  robots: { index: false, follow: false },
};

export default async function UnlockPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const next = safeNextPath((await searchParams).next);

  return (
    <Column fillWidth horizontal="center" vertical="center" padding="24" style={{ minHeight: "80vh" }}>
      <Column className="gate-card" gap="24">
        <Brand />
        <Column gap="8">
          <Text variant="label-strong-s" onBackground="accent-medium" style={{ textTransform: "uppercase", letterSpacing: "0.12em" }}>
            Preview
          </Text>
          <Heading as="h1" variant="display-strong-xs">
            This site is not public yet
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-medium">
            Enter the password to open the draft.
          </Text>
        </Column>
        <UnlockForm next={next} />
      </Column>
    </Column>
  );
}
