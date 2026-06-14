import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { jobs } from "@/data/jobs";

type JobDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function JobDetailsPage({ params }: JobDetailsPageProps) {
  const { id } = await params;
  const job = jobs.find((item) => item.id === id);

  if (!job) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <Link
            className="text-sm font-semibold text-violet-700 hover:text-violet-900"
            href="/jobs"
          >
            ← Back to jobs
          </Link>

          <p className="mt-6 text-sm font-semibold text-violet-700">
            {job.company}
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            {job.title}
          </h1>

          <p className="mt-4 text-slate-600">
            {job.location} • {job.workMode} • {job.type}
          </p>

          <p className="mt-2 text-slate-600">{job.salary}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 lg:grid-cols-[1fr_320px]">
        <div className="space-y-8">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">About this role</h2>
            <p className="mt-4 leading-8 text-slate-600">{job.description}</p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Responsibilities</h2>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-600">
              {job.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Requirements</h2>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-600">
              {job.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Required skills</h2>

          <div className="mt-4 flex flex-wrap gap-2">
            {job.skills.map((skill) => (
              <span
                className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700"
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>

          <button className="mt-8 w-full rounded-lg bg-violet-700 px-5 py-3 font-semibold text-white hover:bg-violet-800">
            Apply coming soon
          </button>
        </aside>
      </section>

      <SiteFooter />
    </main>
  );
}