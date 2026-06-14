import { JobCard } from "@/components/job-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { jobs } from "@/data/jobs";

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="text-sm font-semibold text-violet-700">
            Public job board
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            Browse available jobs
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Explore sample vacancies for candidates. In the next stages, these
            jobs will come from the database and support real search filters.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">{jobs.length} jobs found</h2>
            <p className="mt-1 text-sm text-slate-500">
              Showing currently available opportunities.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500">
            Search and filters coming soon
          </div>
        </div>

        <div className="grid gap-5">
          {jobs.map((job) => (
            <JobCard job={job} key={job.id} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}