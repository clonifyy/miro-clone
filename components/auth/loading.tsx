import Image from "next/image";

export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image src="/logo.svg" width={80} height={80} alt="Loading..." />
    </div>
  );
};
