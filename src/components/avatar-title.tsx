import { AnimatePresence, motion } from "motion/react";
import { generateUserDataFromId } from "@/lib/user-data-generator";

export function AvatarTitle({ id, hoveredId }: { 
  id: number; 
  hoveredId: number | null; 
}) {
  const userData = generateUserDataFromId(id);

  return (
    <AnimatePresence>
      {hoveredId === id && (
        <motion.div
          key="tooltip"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{
            type: "spring",
            duration: 0.3,
            bounce: 0.2,
            stiffness: 500,
            damping: 20,
            delay: 0.1,
          }}
          className=
          "absolute left-1/2 bottom-[110%] z-30 mb-1 -translate-x-1/2 px-4 py-2 shadow-lg *:whitespace-nowrap border-b border-b-transparent bg-border-90 from-transparent via-blue-400 to-transparent border-background-white dark:border-background-black rounded dark:mask-border-neutral-900"
        >
          <div className="font-semibold">{userData.name}</div>
          <div className="text-xs opacity-80">{userData.role}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

