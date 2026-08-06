"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface NavItemProps {
  href: string;
  label: string;
  icon: LucideIcon;
}

export function NavItem({ href, label, icon: Icon }: NavItemProps) {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center gap-3 rounded-lg px-4 py-3 font-medium transition-colors",
        active
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
      )}
    >
      <Icon size={20} />

      <span className="font-medium">{label}</span>
    </Link>
  );
}
