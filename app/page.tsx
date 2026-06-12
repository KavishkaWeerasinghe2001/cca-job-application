export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xl font-bold text-violet-700">CCA Job Portal</p>
            <p className="text-xs text-slate-500">
              Career opportunities made simple
            </p>
          </div>

          <nav className="flex items-center gap-4 text-sm font-medium">
            <a className="text-slate-700 hover:text-violet-700" href="#features">
              Features
            </a>

            <span className="rounded-lg border border-violet-200 px-4 py-2 text-violet-700">
              Login coming soon
            </span>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-4 inline-block rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
            Your next opportunity starts here
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight">
            Find the right job and build your career.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Browse vacancies, apply online, track your progress, and connect
            with recruiters through one simple job-application platform.
          </p>

          <a
            className="mt-8 inline-block rounded-lg bg-violet-700 px-6 py-3 font-semibold text-white shadow-sm hover:bg-violet-800"
            href="#features"
          >
            Explore Features
          </a>
        </div>

        <div className="rounded-3xl bg-violet-700 p-10 text-white shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-200">
            Platform preview
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            One portal for candidates, recruiters, and administrators.
          </h2>

          <p className="mt-4 leading-7 text-violet-100">
            The full system will include secure accounts, job listings,
            candidate applications, recruiter pipelines, and admin analytics.
          </p>
        </div>
      </section>

      <section
        className="border-t border-slate-200 bg-white py-16"
        id="features"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold">
            What the platform will provide
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <p className="text-lg font-bold text-violet-700">Candidates</p>
              <p className="mt-3 leading-7 text-slate-600">
                Create a profile, upload a CV, browse vacancies, apply for jobs,
                and track application progress.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <p className="text-lg font-bold text-violet-700">Recruiters</p>
              <p className="mt-3 leading-7 text-slate-600">
                Publish vacancies, review applicants, update statuses, and
                schedule interviews.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <p className="text-lg font-bold text-violet-700">
                Administrators
              </p>
              <p className="mt-3 leading-7 text-slate-600">
                Manage users, companies, categories, settings, and platform
                analytics.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}