"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";

import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Icon, Share2Icon, UsersIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { AnimatedList } from "../ui/animated-list";
import Marquee from "@/components/ui/marquee";

import { AnimatedBeamDemo } from "../ui/integration-beam";
import { Button } from "../ui/button";
import Autoplay from "embla-carousel-autoplay";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}
let notifications = [
  {
    name: "Payment received",
    description: "Magic UI",
    time: "15m ago",

    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Magic UI",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Magic UI",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Magic UI",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();
const files = [
  {
    name: "training.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];
const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col items-start overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex max-h-[280px] h-full w-full flex-col overflow-hidden rounded-lg  bg-[#0B252A] md:shadow-xl",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}

export function MarqueeDemo() {
  return (
    <Marquee
      pauseOnHover
      className="[--duration:20s] max-w-[400px] max-h-[280px] rounded-xl overflow-clip py-0"
    >
      {files.map((f, idx) => (
        <figure
          key={idx}
          className={cn(
            "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
            "border-gray-950/[.1] bg-white",
            "group-hover:[&:not(:hover)]:blur-[1px]",
            "transform-gpu transition-all duration-300 ease-out hover:blur-none"
          )}
        >
          <div className="flex flex-row items-center gap-2">
            <div className="flex flex-col">
              <figcaption className="text-sm font-medium">{f.name}</figcaption>
            </div>
          </div>
          <blockquote className="mt-2 text-xs">{f.body}</blockquote>
        </figure>
      ))}
    </Marquee>
  );
}

const features = [
  {
    Icon: FileTextIcon,
    name: "Reinforcement Fine-Tuning",
    description:
      "Learning from every interaction, adapting to meet your organization’s objectives.",
    href: "#",
    cta: "Learn more",
    background: <MarqueeDemo />,
  },
  {
    Icon: BellIcon,
    name: "Human in the loop",
    description:
      "Easily route challenging tasks to humans and refine AI performance over time.",
    href: "#",
    cta: "Learn more",
    background: <AnimatedListDemo />,
  },
  {
    Icon: Share2Icon,
    name: "Deeply Integrated",
    description:
      "Seamlessly integrate with your tech stack, connecting to any CRM or telephony.",
    href: "#",
    cta: "Learn more",
    background: <AnimatedBeamDemo />,
  },
  {
    Icon: UsersIcon,
    name: "Autonomous Intelligence",
    description:
      "Autonomous agents collaborate seamlessly to execute complex tasks and drive results.",
    href: "#",
    cta: "Learn more",
    background: <AnimatedBeamDemo />,
  },
  {
    Icon: CalendarIcon,
    name: "Enterprise Ready",
    description:
      "Built-in guardrails ensure AI is trustworthy and always in compliance with your standards.",
    href: "#",
    cta: "Learn more",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="  rounded-md max-h-[280px] w-full flex items-center justify-center transition-all duration-300 ease-out  group-hover:scale-105 bg-white text-primary"
      />
    ),
  },
];

export default function CarouselSize() {
  return (
    <section className="text-white flex flex-col items-center justify-center gap-12 py-16 px-4 text-center h-[100vh_-_56px] w-full bg-[#0B252A]">
      <div className="flex flex-col justify-center items-center gap-4 pb-16">
        <h2 className="text-4xl text-center font-semibold">
          Digital Workers Transform Your Contact Center
        </h2>
        <p className="text-center max-w-2xl">
          Intelligent, enterprise-ready, and always learning—Buildnow AI&apos;s
          Digital Workers seamlessly integrate into your contact center systems,
          scaling effortlessly to deliver real results and drive productivity.
        </p>
        {/* <Button>Try it now</Button> */}
      </div>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[Autoplay()]}
        className="w-full items-center justify-center h-[376px]"
      >
        <CarouselContent>
          {features.map((feature, index) => (
            <CarouselItem
              key={index}
              className="border-none md:basis-1/2 lg:basis-1/3 items-center justify-center select-none"
            >
              <div className="p-1">
                <Card className="bg-whtie">
                  <CardContent className="flex border-none  items-center justify-center p-6">
                    <CarouselItem className="flex flex-col items-center justify-center bg-[#0B252A] gap-4">
                      <div className="flex w-full rounded-xl  items-start max-h-[300px] h-full justify-center overflow-clip ">
                        {feature.background}
                      </div>
                      <div className="flex text-white flex-col items-center justify-center">
                        <h2 className="text-2xl font-semibold text-center">
                          {feature.name}
                        </h2>
                        <p className="text-center text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </CarouselItem>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </section>
  );
}
