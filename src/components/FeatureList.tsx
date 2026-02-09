import type { IconType } from "react-icons";

type FeatureListProps = {
  icon: IconType;
  items: string[];
};

export function FeatureList({ icon: Icon, items }: FeatureListProps) {
  return (
    <ul className="mt-8 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start">
          <Icon className="h-5 w-5 text-primary mr-2 mt-1 shrink-0" />
          <span className="text-gray-600">{item}</span>
        </li>
      ))}
    </ul>
  );
}
