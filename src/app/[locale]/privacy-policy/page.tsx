import { LegalPage } from "@/components/legal-page";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>Something is Wrong With My Dog Wiki is an independent fan resource that provides informational guides for the Roblox game Something is Wrong With My Dog. We do not request account credentials, Roblox passwords, or private payment information.</p>
      <p>Basic analytics, advertising, and hosting providers may process standard technical information such as device type, browser, approximate region, and visited pages.</p>
      <p>External links may lead to Roblox, YouTube, or other community resources. Those services are governed by their own privacy policies.</p>
      <p>Questions about this policy can be sent to <a className="font-semibold text-foreground underline" href="mailto:support@somethingiswrongwithmydog.top">support@somethingiswrongwithmydog.top</a>.</p>
    </LegalPage>
  );
}
