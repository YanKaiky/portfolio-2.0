import { FC } from "react";
import { TechStack } from "./tech.stack";

const Stack: FC = () => {
  return (
    <section id="stack" className="py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <h2 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#00467F] to-[#00bf8f] font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          Tech Stack
        </h2>
        <TechStack />
      </div>
    </section>
  );
};

export default Stack;
