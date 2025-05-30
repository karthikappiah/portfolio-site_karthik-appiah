import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/shadcn/avatar";

export const Headline = ({ src, alt }: { src: string; alt: string }) => {
  const getPacificTime = () => {
    return new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "America/Los_Angeles",
      hour12: true,
    });
  };
  return (
    <div className="flex items-center space-x-4">
      <Avatar className="size-20">
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback>{getPacificTime()}</AvatarFallback>
      </Avatar>
      <div>
        <h1 className="text-lg leading-relaxed font-medium">
          Karthik Gnanakumar Appiah
        </h1>
        <p className="text-sm leading-relaxed opacity-75">
          Cloud ⦁ Database ⦁ Web ⦁ Mobile
        </p>
      </div>
    </div>
  );
};
