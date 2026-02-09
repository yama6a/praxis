import type { IconType } from "react-icons";

type SectionHeadingProps = {
  icon: IconType;
  title: string;
};

export function SectionHeading({ icon: Icon, title }: SectionHeadingProps) {
  return (
    <div className="flex items-center mb-4">
      <span className="flex items-center justify-center h-10 w-10 rounded-full bg-secondary text-primary mr-3">
        <Icon className="h-5 w-5" />
      </span>
      <h2 className="text-3xl font-display font-bold text-gray-900">{title}</h2>
    </div>
  );
}
