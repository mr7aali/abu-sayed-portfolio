export function Logo() {
  return (
    <a
      className="inline-flex items-center gap-3 text-slate-950"
      href="#home"
      aria-label="Abu Sayed home"
    >
      <span
        className="grid size-10 place-items-center rounded-lg border border-primary/20 bg-primary text-sm font-black text-white shadow-[0_12px_30px_rgba(15,141,232,0.24)]"
        aria-hidden="true"
      >
        AS
      </span>
      <span className="grid leading-none">
        <span className="text-base font-bold">Abu Sayed</span>
        <span className="text-xs font-medium text-slate-500">
          UI/UX Designer
        </span>
      </span>
    </a>
  );
}
