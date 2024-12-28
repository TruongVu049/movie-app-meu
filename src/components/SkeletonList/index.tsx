import { cn } from "@/utils";
import CardSkeleton from "../CardSkeleton";
import { SkeletonListProps } from "./lib/types";

const SkeletonList = ({ className, amount = 6 }: SkeletonListProps) => {
  return (
    <div className={cn("grid  gap-4", className)}>
      {new Array(amount).fill(amount).map((item, index) => (
        <CardSkeleton key={item + index} />
      ))}
    </div>
  );
};

export default SkeletonList;
