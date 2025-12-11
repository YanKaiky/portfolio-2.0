import { Button, Card, CardContent, CardFooter } from "@/components";
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
  tags?: string[];
}

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  image,
  github,
  link,
  tags = [],
}) => {
  const t = useTranslations("projectCard");

  return (
    <Card className="overflow-hidden rounded-2xl flex flex-col h-full hover:shadow-xl transition-all duration-300 border-border/50 group">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={`Imagem do projeto ${title}`}
          fill
          priority={title === "GramHub"} // Exemplo de priorização
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      <CardContent className="p-6 flex-grow">
        <h3 className="font-bold text-2xl mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 ring-1 ring-inset ring-emerald-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-wrap justify-between items-center gap-2 mt-auto">
        <div className="flex gap-3 w-full">
          {link ? (
            <Button
              asChild
              size="sm"
              className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md hover:shadow-emerald-500/20 group/btn"
            >
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                {t("view")}
                <span className="opacity-0 -ml-2 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all duration-300">
                  →
                </span>
              </Link>
            </Button>
          ) : (
            <Button size="sm" disabled className="flex-1 opacity-50 cursor-not-allowed">
              <Globe className="w-4 h-4 mr-2" />
              {t("view")}
            </Button>
          )}

          {github ? (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex-1 border-emerald-500/30 hover:border-emerald-500 hover:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 transition-all duration-300"
            >
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <GitHub />
                {t("gitHubView")}
              </Link>
            </Button>
          ) : (
            <Button
              variant="outline"
              size="sm"
              disabled
              className="flex-1 opacity-50 cursor-not-allowed border-emerald-500/30"
            >
              <GitHub className="mr-2" />
              {t("gitHubView")}
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};
