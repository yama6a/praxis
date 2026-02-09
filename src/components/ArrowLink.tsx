import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

type ArrowLinkProps = {
  href: string;
  label: string;
};

export function ArrowLink({ href, label }: ArrowLinkProps) {
  return (
    <div className="mt-8">
      <Link
        href={href}
        className="text-primary font-semibold hover:text-opacity-80 flex items-center group"
      >
        {label}
        <MdArrowForward className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
