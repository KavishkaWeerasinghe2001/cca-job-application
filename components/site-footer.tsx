export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">CCA Job Portal</p>
          <p className="mt-1 text-slate-400">
            A modern job-application platform for candidates and recruiters.
          </p>
        </div>

        <p className="text-slate-400">
          © 2026 CCA Job Portal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}