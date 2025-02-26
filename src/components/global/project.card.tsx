import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { GitHub } from "@/icons";
import { Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  github?: string;
  link?: string;
  tags: string[];
}

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  image,
  github,
  link,
  tags,
}) => {
  const t = useTranslations("projectCard");

  return (
    <Card className="overflow-hidden rounded-2xl flex flex-col h-full">
      <div className="relative aspect-video">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4 flex-grow">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0 flex justify-between items-center mt-auto">
        {link ? (
          <Link
            href={link}
            target="_blank"
            className="inline-flex items-center gap-1 text-sm hover:underline"
          >
            <Globe />
            {t("view")}
          </Link>
        ) : (
          <div
            aria-disabled={!link}
            className="inline-flex items-center gap-1 text-sm text-gray-500"
          >
            <Globe />
            {t("view")}
          </div>
        )}

        {github ? (
          <Link
            href={github}
            target="_blank"
            className="inline-flex items-center gap-1 text-sm hover:underline"
          >
            <GitHub />
            {t("gitHubView")}
          </Link>
        ) : (
          <div
            aria-disabled={!link}
            className="inline-flex items-center gap-1 text-sm text-gray-500"
          >
            <GitHub />
            {t("gitHubView")}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};
