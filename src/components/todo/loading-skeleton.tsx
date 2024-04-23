import { Skeleton } from "@/components/ui/skeleton";

const LoadingSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-auto rounded-lg" />
    </div>
  );
};

export default LoadingSkeleton;
