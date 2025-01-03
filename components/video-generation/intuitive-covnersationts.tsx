// // "use client";

// // import { useState } from "react";
// // import { Button } from "@/components/ui/button";
// // import { cn } from "@/lib/utils";
// // import { motion, AnimatePresence } from "motion/react";
// // import Image from "next/image";

// // interface type {
// //   stepNo: number;
// //   title: string;
// //   description: string;
// //   picture: string;
// // }

// // const steps = [
// //   {
// //     stepNo: 1,
// //     title: "Type a Question",
// //     description:
// //       "Type a question and get instant answers from our AI-powered video generator.",
// //     picture: "/videos/step-1.mp4",
// //   },
// //   {
// //     stepNo: 2,
// //     title: "AI Processes the Query",
// //     description:
// //       "Buildnow AI fetches relevant information from your knowledge base.",
// //     picture: "/videos/step-2.mp4",
// //   },
// //   {
// //     stepNo: 3,
// //     title: "Receive a Video Answer",
// //     description:
// //       "A personalized video with an AI avatar explains the answer, guiding the employee step-by-step.",
// //     picture: "/videos/step-3.mp4",
// //   },
// // ];

// // export function IntuitiveConversations() {
// //   // const [activeTab, setActiveTab] = useState(features[0].id);

// //   return (
// //     <section className="py-24">
// //       <div className="container mx-auto px-4">
// //         <div className="flex items-center justify-center flex-col gap-4 pb-16">
// //           <h2 className="text-4xl  text-center  font-semibold">
// //             Get Answers Instantly with AI Video Guidance
// //           </h2>
// //           <p className="max-w-2xl text-center">
// //             No more delays or confusion—employees get the guidance they need
// //             instantly with AI-generated video answers.
// //           </p>
// //         </div>
// //       </div>
// //       <div className="grid grid-cols-3 w-full px-5 items-center justify-center gap-12">
// //         {steps.map((step, index) => (
// //           <div
// //             key={index}
// //             className="border border-black w-auto rounded-lg justify-start px-4 items-start flex flex-col"
// //           >
// //             <p className="text-4xl">{step.stepNo}</p>
// //             <h3 className="text-xl font-bold">{step.title}</h3>
// //             <p className="text-sm">{step.description}</p>
// //             <div className="flex w-full items-center justify-center">
// //               <video
// //                 className="w-full h-full items-center justify-center object-cover "
// //                 src={step.picture}
// //                 autoPlay
// //                 loop
// //                 muted
// //                 height={472}
// //                 width={472}
// //               />
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// interface Step {
//   stepNo: number;
//   title: string;
//   description: string;
//   picture: string;
// }

// const steps: Step[] = [
//   {
//     stepNo: 1,
//     title: "Type a Question",
//     description:
//       "Type a question and get instant answers from our AI-powered video generator.",
//     picture: "/videos/step-1.mp4",
//   },
//   {
//     stepNo: 2,
//     title: "AI Processes the Query",
//     description:
//       "Buildnow AI fetches relevant information from your knowledge base.",
//     picture: "/videos/step-2.mp4",
//   },
//   {
//     stepNo: 3,
//     title: "Receive a Video Answer",
//     description:
//       "A personalized video with an AI avatar explains the answer, guiding the employee step-by-step.",
//     picture: "/videos/step-3.mp4",
//   },
// ];

// export function IntuitiveConversations() {
//   const [activeStep, setActiveStep] = useState(0);

//   return (
//     <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
//       <div className="container mx-auto px-4">
//         <motion.div
//           className="flex items-center justify-center flex-col gap-4 pb-16"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-4xl text-center font-semibold text-gray-800">
//             Get Answers Instantly with AI Video Guidance
//           </h2>
//           <p className="max-w-2xl text-center text-gray-600">
//             No more delays or confusion—employees get the guidance they need
//             instantly with AI-generated video answers.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-8 md:gap-12">
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               className={cn(
//                 "border border-gray-200 rounded-lg p-6 flex flex-col items-start justify-between",
//                 "transition-all duration-300 ease-in-out",
//                 "hover:shadow-lg hover:border-muted/90",
//                 activeStep === index ? "border-muted shadow-md" : ""
//               )}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               onMouseEnter={() => setActiveStep(index)}
//             >
//               <div>
//                 <p className="text-4xl font-bold text-black">{step.stepNo}</p>
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">
//                   {step.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 mb-4">{step.description}</p>
//               </div>
//               <div className="w-full aspect-square rounded-lg overflow-hidden">
//                 <video
//                   className="w-full h-full object-cover"
//                   src={step.picture}
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           className="mt-12 text-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//         >
//           <Button size="lg">Try AI Video Generation Now</Button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";
import { Play } from "lucide-react";

interface Video {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: "Create your script",
    description:
      "Generate it from a link, doc, or even just an idea with the help of AI.",
    videoUrl:
      "https://player.vimeo.com/video/123456789?autoplay=1&loop=1&muted=1",
  },
  {
    id: 2,
    title: "Customize your video",
    description: "Easily replace the AI avatar, colors, fonts, and layouts.",
    videoUrl:
      "https://player.vimeo.com/video/123456790?autoplay=1&loop=1&muted=1",
  },
  {
    id: 3,
    title: "Collaborate",
    description: "Share your videos and let others comment and collaborate.",
    videoUrl:
      "https://player.vimeo.com/video/123456791?autoplay=1&loop=1&muted=1",
  },
  {
    id: 4,
    title: "Share and export",
    description: "Download your video, get a share link, or embed it anywhere.",
    videoUrl:
      "https://player.vimeo.com/video/123456792?autoplay=1&loop=1&muted=1",
  },
];

export function IntuitiveConversations() {
  const [activeStep, setActiveStep] = React.useState(1);

  return (
    <div className="bg-[#0B252A] min-h-screen w-full text-white py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-[#163A42] rounded-full px-4 py-1.5 mb-4 sm:mb-6">
            <span className="text-sm font-medium text-white">
              FROM IDEA TO VIDEO IN MINUTES
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-8 text-white">
            How BuildNow works
          </h2>
        </div>

        <div className="flex flex-col gap-8 sm:gap-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {videos.map((video) => (
              <button
                key={video.id}
                onClick={() => setActiveStep(video.id)}
                className={`p-4 rounded-xl transition-all duration-200 text-center ${
                  activeStep === video.id
                    ? "bg-[#163A42] shadow-lg scale-105 border border-white/30"
                    : "bg-[#163A42]/50 hover:bg-[#163A42] border border-transparent hover:border-white/20"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 ${
                    activeStep === video.id
                      ? "bg-white text-[#0B252A]"
                      : "bg-white/20 text-white"
                  }`}
                >
                  {video.id}
                </div>
                <h3 className="text-sm font-semibold mb-2 text-white">
                  {video.title}
                </h3>
                <p className="text-xs text-white/70">{video.description}</p>
              </button>
            ))}
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-[#163A42] aspect-video">
            <iframe
              src={videos.find((v) => v.id === activeStep)?.videoUrl}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <Play className="w-12 h-12 sm:w-16 sm:h-16 text-white opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
