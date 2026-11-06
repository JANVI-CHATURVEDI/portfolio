"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { SearchIcon } from "@/components/icons";
import { slugify } from "@/lib/meta";
import { portfolio, projects } from "@/lib/portfolio";
import { toggleTheme } from "@/lib/theme";

type PaletteItem = {
  label: string;
  hint: string;
  href?: string;
  external?: boolean;
  action?: "theme";
};

const navigationItems: PaletteItem[] = [
  { label: "Portfolio", hint: "Home", href: "/#top" },
  { label: "About", hint: "Who I am", href: "/#about" },
  { label: "Stack", hint: "Tools I use", href: "/#stack" },
  { label: "Projects", hint: "Selected work", href: "/#projects" },
  { label: "Experience", hint: "Where I have worked", href: "/#experience" },
  { label: "Education", hint: "Where I study", href: "/#education" },
  {
    label: "Email",
    hint: portfolio.email,
    href: `mailto:${portfolio.email}`,
    external: true,
  },
  {
    label: "Resume",
    hint: "Google Drive · PDF",
    href: portfolio.resume,
    external: true,
  },
];

const projectItems: PaletteItem[] = projects.map((project) => ({
  label: project.name,
  hint: project.year ?? "Project",
  href: `/projects/${slugify(project.name)}`,
}));

const themeItem: PaletteItem = {
  label: "Toggle theme",
  hint: "Appearance",
  action: "theme",
};

const allItems = [...navigationItems, ...projectItems, themeItem];

export function CommandPalette() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const rowRefs = useRef<Array<HTMLElement | null>>([]);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [modifier, setModifier] = useState("Ctrl");

  const close = () => dialogRef.current?.close();

  const open = () => {
    setQuery("");
    setActive(0);
    dialogRef.current?.showModal();
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (/Mac|iPhone|iPad/.test(navigator.userAgent)) setModifier("⌘");

    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (dialog.open) dialog.close();
        else open();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const needle = query.trim().toLowerCase();
  const filtered = needle
    ? allItems.filter((item) =>
        `${item.label} ${item.hint}`.toLowerCase().includes(needle),
      )
    : allItems;

  const handleListKeys = (event: ReactKeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((index) => Math.min(index + 1, filtered.length - 1));
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((index) => Math.max(index - 1, 0));
    }
    if (event.key === "Enter") {
      event.preventDefault();
      rowRefs.current[active]?.click();
    }
  };

  const activateTheme = () => {
    toggleTheme();
    close();
  };

  return (
    <>
      <button
        type="button"
        className="pill pill-search"
        aria-haspopup="dialog"
        onClick={open}
      >
        <SearchIcon aria-hidden="true" />
        <span className="sr-only">Search commands</span>
        <span className="kbd">{modifier}</span>
        <span className="kbd">K</span>
      </button>
      <dialog
        ref={dialogRef}
        className="palette"
        aria-label="Command palette"
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
      >
        <input
          ref={inputRef}
          className="palette-input"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActive(0);
          }}
          onKeyDown={handleListKeys}
          placeholder="Search for a command to run…"
          autoComplete="off"
          spellCheck={false}
          aria-label="Search commands"
        />
        <ul className="palette-list">
          {filtered.length === 0 && (
            <li className="palette-empty">No results for “{query}”.</li>
          )}
          {filtered.map((item, index) => {
            const content = (
              <>
                <span>{item.label}</span>
                <span className="palette-hint">{item.hint}</span>
              </>
            );

            if (item.action === "theme") {
              return (
                <li key={item.label}>
                  <button
                    ref={(node) => {
                      rowRefs.current[index] = node;
                    }}
                    type="button"
                    className="palette-row"
                    data-active={index === active ? "true" : undefined}
                    onMouseEnter={() => setActive(index)}
                    onClick={activateTheme}
                  >
                    {content}
                  </button>
                </li>
              );
            }

            if (item.external) {
              return (
                <li key={item.label}>
                  <a
                    ref={(node) => {
                      rowRefs.current[index] = node;
                    }}
                    className="palette-row"
                    data-active={index === active ? "true" : undefined}
                    onMouseEnter={() => setActive(index)}
                    href={item.href}
                    target={item.href?.startsWith("mailto") ? undefined : "_blank"}
                    rel="noreferrer"
                    onClick={close}
                  >
                    {content}
                  </a>
                </li>
              );
            }

            return (
              <li key={item.label}>
                <Link
                  ref={(node) => {
                    rowRefs.current[index] = node;
                  }}
                  className="palette-row"
                  data-active={index === active ? "true" : undefined}
                  onMouseEnter={() => setActive(index)}
                  href={item.href ?? "/"}
                  onClick={close}
                >
                  {content}
                </Link>
              </li>
            );
          })}
        </ul>
      </dialog>
    </>
  );
}
