import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-xl font-bold text-violet-700">CCA Job Portal</p>
          <p className="text-xs text-slate-500">
            Career opportunities made simple
          </p>
        </div>

        <nav className="flex items-center gap-4 text-sm font-medium">
          <Link className="text-slate-700 hover:text-violet-700" href="/">
            Home
          </Link>

          <Link className="text-slate-700 hover:text-violet-700" href="/jobs">
            Jobs
          </Link>

          <a
            className="text-slate-700 hover:text-violet-700"
            href="/#features"
          >
            Features
          </a>

          <span className="rounded-lg border border-violet-200 px-4 py-2 text-violet-700">
            Login coming soon
          </span>
        </nav>
      </div>
    </header>
  );
}