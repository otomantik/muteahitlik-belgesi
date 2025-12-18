import { Hero } from "@/components/sections/Hero";
import { CoreFacts } from "@/components/sections/CoreFacts";
import { CommonMistakes } from "@/components/sections/CommonMistakes";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { AuthorizationGroups } from "@/components/sections/AuthorizationGroups";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreFacts />
      <CommonMistakes />
      <HowWeWork />
      <AuthorizationGroups />
      <FAQ />
      <FinalCTA />
    </>
  );
}

