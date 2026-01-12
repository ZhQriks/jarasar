/* eslint-disable @next/next/no-img-element */
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function Projects() {
  return <div></div>;
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const ImageContainer = ({ src, onClick }) => (
  <img
    alt="image"
    onClick={onClick}
    src={src}
    className="w-full h-full object-cover rounded-xl"
  />
);

const items = [
  {
    title: "alivepic.com",
    description: "Bringing photos to life.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Joined Zimran as a frontend dev",
    description: (
      <div>
        <p className="text-[10px] mb-1 text-neutral-500 uppercase tracking-widest">
          Aug 2024 - Aug 2025
        </p>
        <p>
          One of the best development teams I&apos;ve been on so far. Kind and
          business-oriented team
        </p>
      </div>
    ),
    header: (
      <ImageContainer
        onClick={() => {}}
        src={"https://i.imgur.com/FTXtFNA.jpeg"}
      />
    ),
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Made a Roadmap generator using AI with friends",
    description:
      "NodeMap isn't just another fancy, GPT-based AI app; it's your key to mastering any of over 2,000,000 skills",
    header: <ImageContainer src={"https://i.imgur.com/1NlgHsR.png"} />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
