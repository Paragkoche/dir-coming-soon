import Logo from "./_components/Logo";
import TypingAnimation from "./_components/TypingAnimation";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#fff3e2] flex-col text-[#241f1a]">
      <div className="w-[60%] h-[60%] justify-center items-center flex flex-col gap-4">
        <Logo />
        <div className="flex justify-around w-[50%] items-center gap-2 uppercase">
          <p>estd </p>
          <p>2025 </p>
        </div>
        <TypingAnimation delay={0} />
        <p className="text-center text-[1.5rem] font-semibold uppercase tracking-[5px]">
          Online <br /> directory
        </p>
      </div>
    </div>
  );
}
