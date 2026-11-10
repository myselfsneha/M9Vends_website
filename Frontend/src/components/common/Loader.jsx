
export default function Loader() {
  return (
    <div
      className="m9-loader fixed inset-0 z-[100] flex min-h-screen items-center justify-center bg-[#F8F5E9]"
      role="status"
      aria-label="Loading M9VENDS"
    >
      <div className="flex flex-col items-center">
        <div className="m9-loader-mark relative flex h-20 w-20 items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-[#C8D2C2]" />

          <div className="m9-loader-ring absolute inset-0 rounded-full border-2 border-transparent border-t-[#063D2B]" />

          <span className="text-2xl font-semibold tracking-[-0.08em] text-[#063D2B]">
            M9
          </span>
        </div>

        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.3em] text-[#063D2B]">
          M9VENDS
        </p>

        <div className="m9-loader-progress mt-5 h-[2px] w-28 overflow-hidden bg-[#D8DDCE]">
          <div className="m9-loader-progress-bar h-full w-full origin-left bg-[#063D2B]" />
        </div>

        <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.16em] text-[#64816B]">
          Preparing your experience
        </p>
      </div>
    </div>
  );
}