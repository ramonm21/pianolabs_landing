import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Piano,
  AudioWaveformIcon as Waveform,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Piano className="h-8 w-8 text-indigo-400" />
              <span className="text-xl font-light tracking-wide">
                PianoLabs
              </span>
            </Link>
            <div className="flex items-center space-x-8">
              <Button
                variant="ghost"
                className="text-white/60 hover:text-indigo-400 transition-colors"
              >
                Join the Evolution
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-32">
        <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-start">
          <div className="space-y-12">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-extralight leading-[1.1]">
              where human creativity meets{" "}
              <span className="text-indigo-400">artificial intelligence</span>
            </h1>
            <p className="text-xl font-light text-white/60 max-w-xl">
              Step into a new era of music creation. No more writer's block. No
              more technical barriers. Just pure, uninhibited creative flow.
            </p>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-2xl" />
            <div className="relative space-y-6 bg-black/50 backdrop-blur-sm rounded-lg p-8">
              {["Compose", "Transform", "Evolve"].map((text, i) => (
                <div key={i} className="flex items-center gap-4 text-lg">
                  <ArrowRight className="h-5 w-5 text-indigo-400" />
                  <span className="font-light">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="relative border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/[0.03] to-transparent" />
        <div className="container mx-auto px-4 py-16 md:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-extralight">
                Your musical companion, powered by{" "}
                <span className="text-indigo-400">artificial intelligence</span>
              </h2>
              <div className="h-px w-24 bg-gradient-to-r from-indigo-400 to-purple-500" />
              <p className="text-white/60 text-lg leading-relaxed">
                Like having a seasoned producer by your side, PianoLabs
                anticipates your needs, suggests creative directions, and helps
                you break through creative barriers.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
              <Feature
                icon={<Waveform className="h-5 w-5 text-indigo-400" />}
                label="Real-time Processing"
                value="0.2ms Latency"
              />
              <Feature
                icon={<Sparkles className="h-5 w-5 text-purple-400" />}
                label="AI Suggestions"
                value="98% Accuracy"
              />
              <Feature
                icon={<Piano className="h-5 w-5 text-indigo-400" />}
                label="MIDI Integration"
                value="Universal"
              />
              <Feature
                icon={<ArrowRight className="h-5 w-5 text-purple-400" />}
                label="Export Options"
                value="Multiple Formats"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="border-t border-white/10">
        <div className="container mx-auto px-4 py-16 md:py-32">
          <div className="space-y-24">
            <ExperienceStep
              number="01"
              title="Begin with a single note"
              description="Every masterpiece starts somewhere. Play a note, and watch as PianoLabs begins to understand your musical direction."
            />
            <ExperienceStep
              number="02"
              title="Let AI expand your horizons"
              description="Our AI suggests complementary chords and progressions, opening up new creative pathways you might never have considered."
              align="right"
            />
            <ExperienceStep
              number="03"
              title="Shape your sonic landscape"
              description="Fine-tune every aspect of your creation with intuitive controls and real-time feedback."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-white/10">
        <div className="container mx-auto px-4 py-16 md:py-32">
          <div className="max-w-lg mx-auto text-center space-y-8">
            <h2 className="text-3xl font-light">Ready to evolve?</h2>
            <p className="text-white/60">
              Join the next generation of music creators who are pushing the
              boundaries of what's possible with AI-assisted composition.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0"
            >
              Request Early Access
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function Feature({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="space-y-2 p-4 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
      <div className="flex items-center gap-2 text-white/60">
        {icon}
        <span>{label}</span>
      </div>
      <div className="font-light text-lg">{value}</div>
    </div>
  );
}

function ExperienceStep({
  number,
  title,
  description,
  align = "left",
}: {
  number: string;
  title: string;
  description: string;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`grid lg:grid-cols-[1fr_2fr] gap-8 items-center ${align === "right" ? "lg:grid-cols-[2fr_1fr]" : ""}`}
    >
      <div className={`space-y-6 ${align === "right" ? "lg:order-2" : ""}`}>
        <div className="text-6xl font-extralight text-indigo-400">{number}</div>
        <h3 className="text-2xl font-light">{title}</h3>
        <p className="text-white/60 leading-relaxed">{description}</p>
      </div>
      <div
        className={`aspect-[4/3] relative overflow-hidden rounded-lg ${align === "right" ? "lg:order-1" : ""}`}
      >
        <Image
          src={`/images/photo-${number}.png`}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
