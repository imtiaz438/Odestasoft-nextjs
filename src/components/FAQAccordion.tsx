"use client";

import { useState } from "react";
import { FaqItem } from "@/types";

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className="cursor-pointer border-b border-line py-5" onClick={() => setOpenIndex(isOpen ? null : i)}>
            <div className="flex items-center justify-between gap-4 text-[15.5px] font-bold text-ink">
              {item.question}
              <span
                className="flex-shrink-0 text-xl text-brand transition-transform duration-200"
                style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                +
              </span>
            </div>
            <div
              className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
              style={{ maxHeight: isOpen ? "220px" : "0px" }}
            >
              <p className="pt-3 text-sm text-body">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
