import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/shadcn/avatar";

export const Headline = ({
  src,
  alt,
  fallback,
}: {
  src: string;
  alt: string;
  fallback: string;
}) => {
  return (
    <div className="flex items-center space-x-4">
      <Avatar className="size-11">
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
      <div>
        <h1 className="text-sm leading-relaxed font-medium">
          Karthik Gnanakumar Appiah
        </h1>
        <p className="text-sm leading-relaxed opacity-75">
          Dev ⦁ Cloud ⦁ Database
        </p>
      </div>
    </div>
  );
};
