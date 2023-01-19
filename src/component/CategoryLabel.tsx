import * as React from "react";
import { Link } from "react-router-dom";
import Label from "./Label";

export interface ICategoryLabelProps {
  categories: string[];
}

export default function CategoryLabel({ categories }: ICategoryLabelProps) {
  return (
    <div className="flex gap-3 justify-center">
      {categories?.length &&
        categories.map((category, index) => (
          <Link to="#" key={index}>
            <Label color={index}>{category}</Label>
          </Link>
        ))}
    </div>
  );
}
