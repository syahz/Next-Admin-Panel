/** @format */

// components/Breadcrumb.tsx
import React from "react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { SlashIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";

const Breadcrumbs: React.FC = () => {
  const pathnames = usePathname()
    .split("/")
    .filter(x => x);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathnames.map((pathname, index) => {
          const href = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const label = pathname.charAt(0).toUpperCase() + pathname.slice(1);
          const itemClass = index === 0 ? "text-primary" : "";

          return (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink href={href} className={itemClass}>
                  {label}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {!isLast && (
                <BreadcrumbSeparator>
                  <SlashIcon />
                </BreadcrumbSeparator>
              )}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
