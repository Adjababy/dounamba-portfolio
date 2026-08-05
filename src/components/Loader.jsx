import { motion, AnimatePresence } from "framer-motion";

function Loader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#070B1D]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.img
            src="/logo.png"
            alt="Logo"
            className="w-40 h-40"
            initial={{ scale: 0.7, rotate: -15, opacity: 0 }}
            animate={{
              scale: 1,
              rotate: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          />

          <motion.div
            className="absolute w-56 h-56 rounded-full bg-purple-500/20 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;