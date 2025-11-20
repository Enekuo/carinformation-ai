import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  forwardRef,
} from "react";
import clsx from "clsx";

const AccordionContext = createContext(null);

export function Accordion({ type = "single", collapsible = false, className = "", children, ...props }) {
  const [openItem, setOpenItem] = useState(null);

  const value = useMemo(
    () => ({
      type,
      collapsible,
      openItem,
      setOpenItem,
    }),
    [type, collapsible, openItem]
  );

  return (
    <AccordionContext.Provider value={value}>
      <div
        className={clsx(
          "w-full rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-700/70 divide-y divide-slate-200 dark:divide-slate-700",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ value, className = "", children, ...props }) {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error("AccordionItem must be used within Accordion");
  }

  const { openItem } = ctx;
  const isOpen = openItem === value;

  return (
    <div
      data-state={isOpen ? "open" : "closed"}
      className={clsx("group", className)}
      {...props}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { "data-item-value": value })
          : child
      )}
    </div>
  );
}

export const AccordionTrigger = forwardRef(function AccordionTrigger(
  { className = "", children, ...props },
  ref
) {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error("AccordionTrigger must be used within Accordion");
  }

  const { openItem, setOpenItem, collapsible } = ctx;
  const itemValue = props["data-item-value"];
  const isOpen = openItem === itemValue;

  const handleClick = () => {
    if (isOpen && collapsible) {
      setOpenItem(null);
    } else {
      setOpenItem(itemValue);
    }
  };

  return (
    <button
      ref={ref}
      type="button"
      onClick={handleClick}
      className={clsx(
        `
        flex w-full items-center justify-between
        px-6 py-4 text-left
        text-[15px] md:text-[16px]
        text-slate-800 dark:text-slate-200
        bg-transparent
        hover:bg-slate-50 dark:hover:bg-slate-800
        transition-colors
      `,
        className
      )}
      {...props}
    >
      <span className="flex-1">{children}</span>
      <span
        className={clsx(
          `
          ml-4 inline-flex items-center justify-center
          h-6 w-6 rounded-full
          border border-slate-300 dark:border-slate-600
          text-slate-500 dark:text-slate-200
          text-sm font-semibold
        `
        )}
      >
        {isOpen ? "−" : "+"}
      </span>
    </button>
  );
});

export function AccordionContent({ className = "", children, ...props }) {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error("AccordionContent must be used within Accordion");
  }

  const { openItem } = ctx;
  const itemValue = props["data-item-value"];
  const isOpen = openItem === itemValue;

  if (!isOpen) return null;

  return (
    <div
      className={clsx(
        "px-6 pb-5 bg-slate-50/80 dark:bg-slate-900/70 text-[15px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
