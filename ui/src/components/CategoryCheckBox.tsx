"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";

type CategoryCheckboxProps = {
  name: string;
  category?: string;
};

export const CategoryCheckbox = ({ name, category }: CategoryCheckboxProps) => {
  const router = useRouter();
  const isSelected = name?.toLowerCase() === category?.toLowerCase();

  const onPushCategoryPage = () => {
    router.push(`/category/${name}`);
  };

  return (
    <div
      className="flex p-4 items-center space-x-2 cursor-pointer"
      onClick={onPushCategoryPage}
    >
      <Checkbox id="terms" checked={isSelected} />
      <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {name}
      </p>
    </div>
  );
};
