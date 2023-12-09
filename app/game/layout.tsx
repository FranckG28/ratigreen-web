"use server";

import Container from "../components/Container";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container>{children}</Container>;
}
