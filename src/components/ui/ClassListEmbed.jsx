import { STUDIO } from "../../data/classes";

/*
 * Live Studio Pro class list. The widget ships its own search + age filter and
 * its own Register / Wait List / Schedule Trial buttons, so we frame it rather
 * than rebuild it.
 *
 * Caveats worth knowing:
 *   - Cross-origin, so the frame cannot auto-size to its content and we cannot
 *     restyle the inside. Hence the fixed height and internal scrolling.
 *   - The widget carries Studio Pro's own styling, which will not match the
 *     rest of the site.
 */
export default function ClassListEmbed({ height = "h-[42rem]", className = "" }) {
  return (
    <div className={className}>
      {/*
        Plain white card rather than .glass-card — the widget paints its own
        opaque background, so the glass treatment is invisible behind it and
        only adds a backdrop-filter layer for nothing.
      */}
      <div
        className={`rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm ${height}`}
      >
        {/*
          No loading="lazy": the frame loads a shell and only then fetches its
          rows over AJAX, so deferring it stacks two round trips before a
          parent sees anything.
        */}
        <iframe
          title="Dance Academy West class list and registration"
          src={STUDIO.classList}
          className="w-full h-full border-0"
        />
      </div>
      <p className="text-center text-xs text-slate-400 mt-3">
        Class list and registration are powered by Studio Pro.{" "}
        <a
          href={STUDIO.classList}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-dark font-semibold hover:underline"
        >
          Open in a new tab
        </a>{" "}
        if it doesn't load.
      </p>
    </div>
  );
}
