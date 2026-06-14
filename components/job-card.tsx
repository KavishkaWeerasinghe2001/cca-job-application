import Link from "next/link";
import type { Job } from "@/data/jobs";

type JobCardProps = {
  job: Job;
};

export function JobCard({ job }: JobCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold text-violet-700">
            {job.company}
          </p>

          <h2 className="mt-2 text-xl font-bold text-slate-950">
            {job.title}
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            {job.location} • {job.workMode} • {job.type}
          </p>

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
        </div>

        <Link
          className="rounded-lg border border-violet-200 px-4 py-2 text-center text-sm font-semibold text-violet-700 hover:bg-violet-50"
          href={`/jobs/${job.id}`}
        >
          View Details
        </Link>
      </div>
    </article>
  );
}