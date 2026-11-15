import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { collections, projectCategories, projects } from "@/data/projectsData";

export default function Projects() {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage === "zh" ? "zh" : "en";
  const [category, setCategory] = useState("all");
  const visible = projects.filter((project) => category === "all" || project.category === category);

  return (
    <div className="space-y-8">
      <motion.header initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
        <p className="font-mono text-sm text-cyan-500">{t("projects.title")}</p>
        <h1 className="text-3xl font-semibold tracking-tight">{t("projects.heading")}</h1>
        <p className="max-w-2xl text-muted-foreground">{t("projects.intro")}</p>
      </motion.header>
      <div className="flex flex-wrap gap-2" role="group" aria-label={t("projects.filter")}>
        {["all", ...projectCategories].map((id) => (
          <button key={id} type="button" aria-pressed={category === id} onClick={() => setCategory(id)}
            className={`min-h-11 rounded-full border px-4 py-2 text-sm transition-colors ${category === id ? "border-cyan-500 bg-cyan-500/10 text-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}>
            {t(`projects.categories.${id}`)}
          </button>
        ))}
      </div>
      <p className="text-sm text-muted-foreground" role="status">{t("projects.count", { count: visible.length })}</p>
      <div className="space-y-6">
        {visible.map((project) => (
          <article key={project.id} id={project.id} className="overflow-hidden rounded-2xl border border-border bg-card/70">
            <div className="grid lg:grid-cols-2">
              <div className="space-y-4 p-5 sm:p-7">
                <p className="font-mono text-xs text-cyan-500">{project.product}</p>
                <h2 className="text-2xl font-semibold">{project.name[lang]}</h2>
                <p className="text-lg leading-relaxed">{project.question[lang]}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{project.problem[lang]}</p>
                <p className="text-xs text-muted-foreground">{project.requirement[lang]}</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a href={project.showcase ? `https://github.com/Bill306/Bill306/blob/main/projects/tripsplit/${lang === "zh" ? "README.zh-CN.md" : "README.md"}` : `https://github.com/Bill306/${project.repo}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-cyan-500/40 px-4 py-2 text-sm hover:bg-cyan-500/10">
                    <Github className="h-4 w-4" /> {t("projects.source")}<ExternalLink className="h-3 w-3" />
                  </a>
                  {!project.showcase && <a href={`https://github.com/Bill306/${project.repo}/blob/main/${lang === "zh" ? "README.zh-CN.md" : "README.md"}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 px-1 text-sm text-muted-foreground hover:text-foreground">
                    {t("projects.guide")}<ArrowUpRight className="h-4 w-4" />
                  </a>}
                </div>
              </div>
              {project.image ? (
                <figure className="flex flex-col justify-center border-t border-border bg-muted/30 p-4 lg:border-l lg:border-t-0">
                  <img src={project.image} alt={`${project.product} — ${t("projects.preview")}`} loading="lazy" width="1280" height="900" className="h-auto w-full rounded-lg border border-border" />
                  <figcaption className="mt-3 text-xs text-muted-foreground">{t("projects.preview")}</figcaption>
                </figure>
              ) : (
                <div className="flex flex-col justify-center gap-4 border-t border-border bg-muted/30 p-6 lg:border-l lg:border-t-0" aria-label={t("projects.journey")}>
                  {["invite", "expense", "settle"].map((step, index) => (
                    <div key={step} className="rounded-xl border border-border bg-card p-4">
                      <span className="mr-3 font-mono text-cyan-500">0{index + 1}</span>{t(`projects.tripSteps.${step}`)}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="grid gap-6 border-t border-border p-5 sm:p-7 md:grid-cols-2">
              <section>
                <h3 className="mb-3 text-sm font-semibold">{t("projects.decisions")}</h3>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                  {project.decisions[lang].map((decision) => <li key={decision}>{decision}</li>)}
                </ul>
              </section>
              <section>
                <h3 className="mb-3 text-sm font-semibold">{t("projects.evidence")}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{project.evidence[lang]}</p>
              </section>
            </div>
          </article>
        ))}
      </div>
      <section className="space-y-4" aria-labelledby="collection-title">
        <h2 id="collection-title" className="text-2xl font-semibold">{t("projects.collections")}</h2>
        <p className="text-sm text-muted-foreground">{t("projects.collectionIntro")}</p>
        <div className="grid gap-4 md:grid-cols-2">
          {collections.map((collection) => (
            <article key={collection.id} className="rounded-xl border border-border bg-card/60 p-5">
              <h3 className="font-semibold">{collection.name[lang]}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{collection.description[lang]}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {collection.repos.map((repo) => (
                  <li key={repo}><a href={repo === "tripsplit-wechat-miniprogram" ? `https://github.com/Bill306/Bill306/blob/main/projects/tripsplit/${lang === "zh" ? "README.zh-CN.md" : "README.md"}` : `https://github.com/Bill306/${repo}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-9 items-center rounded-md border border-border px-2 py-1 text-xs hover:bg-muted break-all">{repo === "tripsplit-wechat-miniprogram" ? "TripSplit · 喵喵旅账" : repo}</a></li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <a href={`https://github.com/Bill306/Bill306/blob/main/${lang === "zh" ? "COLLECTIONS.zh-CN.md" : "COLLECTIONS.md"}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm text-cyan-500">{t("projects.collectionGuide")}<ArrowUpRight className="h-4 w-4" /></a>
      </section>
    </div>
  );
}
