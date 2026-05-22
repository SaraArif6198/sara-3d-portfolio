// Simple banner — can be dismissed
type BannerProps = { hide: boolean; setHide: (v: boolean) => void };

const Banner = ({ hide, setHide }: BannerProps) => {
  if (hide) return null;
  return (
    <div className="w-full bg-[#915EFF] py-2 px-4 flex justify-center items-center gap-4 relative">
      <p className="text-white text-sm text-center">
        Sara Arif — Compiler Engineer · ML Developer · Lahore, Pakistan
      </p>
      <button onClick={() => setHide(true)} className="absolute right-4 text-white hover:text-white/60 text-lg">×</button>
    </div>
  );
};

export default Banner;
