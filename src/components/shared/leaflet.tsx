import { useEffect, useRef, ReactNode, Dispatch, SetStateAction } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';

export default function Leaflet({
  setShow,
  children,
}: {
  setShow: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}) {
  const leafletRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const transitionProps = { type: "spring", stiffness: 500, damping: 30 };
  useEffect(() => {
    controls.start({
      y: 20,
      transition: transitionProps,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleDragEnd(_: any, info: any) {
    const offset = info.offset.y;
    const velocity = info.velocity.y;
    const height = leafletRef.current?.getBoundingClientRect().height || 0;
    if (offset > height / 2 || velocity > 800) {
      await controls.start({ y: "100%", transition: transitionProps });
      setShow(false);
    } else {
      controls.start({ y: 0, transition: transitionProps });
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        ref={leafletRef}
        key="leaflet"
        className="fixed inset-x-0 bottom-0 z-40 w-screen pb-5 bg-white dark:bg-gray-500 group cursor-grab active:cursor-grabbing sm:hidden"
        initial={{ y: "100%" }}
        animate={controls}
        exit={{ y: "100%" }}
        transition={transitionProps}
        drag="y"
        dragDirectionLock
        onDragEnd={handleDragEnd}
        dragElastic={{ top: 0, bottom: 1 }}
        dragConstraints={{ top: 0, bottom: 0 }}
      >
        <div
          className={`rounded-t-4xl -mb-1 flex h-7 w-full items-center justify-center border-t border-gray-400 dark:border-white`}
        >
          <div className="w-6 h-1 -mr-1 transition-all rounded-full bg-sky-900 dark:bg-white group-active:rotate-12" />
          <div className="w-6 h-1 transition-all rounded-full bg-sky-900 dark:bg-white group-active:-rotate-12" />
        </div>
        {children}
      </motion.div>
      <motion.div
        key="leaflet-backdrop"
        className="fixed inset-0 bg-gray-100 z-39 bg-opacity-10 backdrop-blur"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setShow(false)}
      />
    </AnimatePresence>
  );
}
