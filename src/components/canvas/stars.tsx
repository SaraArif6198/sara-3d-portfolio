import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-expect-error no types
import * as random from "maath/random/dist/maath-random.esm.js";

const StarBackground = ({ isMobile }: { isMobile: boolean }) => {
  const ref = useRef<any>();
  // Reduce number of stars from 5001 to 1200 on mobile to drastically improve performance
  const numStars = isMobile ? 1200 : 5001;
  const sphere = random.inSphere(new Float32Array(numStars), { radius: 1.2 });

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial transparent color="#f272c8" size={isMobile ? 0.004 : 0.002} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 500px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }} dpr={isMobile ? [1, 1] : [1, 2]}>
        <Suspense fallback={null}>
          <StarBackground isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};
