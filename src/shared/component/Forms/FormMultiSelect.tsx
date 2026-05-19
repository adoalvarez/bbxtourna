import { useEffect, useMemo, useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface SelectOption {
  label: string;
  value: string;
}

interface FormMultiSelectProps {
  id: string;
  label: string;
  options: SelectOption[];
  wrapperClassName?: string;
  className?: string;
  isRequired?: boolean;
  placeholder?: string;
  hints?: string;
  disabled?: boolean;
}

const FormMultiSelect = ({
  id,
  label,
  options,
  wrapperClassName,
  className,
  isRequired = false,
  placeholder = "Search...",
  hints,
  disabled = false,
}: FormMultiSelectProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const error = errors[id];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Reset highlighted index when filtered options change
  useEffect(() => {
    setHighlightedIndex(-1);
  }, [query]);

  return (
    <Controller
      name={id}
      control={control}
      defaultValue={[]}
      rules={{
        required: isRequired ? `${label} is required` : false,
      }}
      render={({ field }) => {
        const selectedValues: string[] = field.value ?? [];

        // Safe to call here — this is the component body, not inside a callback
        const filteredOptions = useMemo(
          () =>
            options.filter(
              (option) =>
                !selectedValues.includes(option.value) &&
                option.label.toLowerCase().includes(query.toLowerCase())
            ),
          [query, selectedValues, options]
        );

        const addItem = (value: string) => {
          field.onChange([...selectedValues, value]);
          setQuery("");
          setIsOpen(false);
          setHighlightedIndex(-1);
          inputRef.current?.focus();
        };

        const removeItem = (value: string) => {
          field.onChange(selectedValues.filter((item) => item !== value));
        };

        const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
          if (!isOpen && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
            setIsOpen(true);
            return;
          }

          switch (e.key) {
            case "ArrowDown":
              e.preventDefault();
              setHighlightedIndex((prev) =>
                prev < filteredOptions.length - 1 ? prev + 1 : 0
              );
              break;
            case "ArrowUp":
              e.preventDefault();
              setHighlightedIndex((prev) =>
                prev > 0 ? prev - 1 : filteredOptions.length - 1
              );
              break;
            case "Enter":
              e.preventDefault();
              if (highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
                addItem(filteredOptions[highlightedIndex].value);
              }
              break;
            case "Escape":
              setIsOpen(false);
              setHighlightedIndex(-1);
              break;
            case "Backspace":
              if (query === "" && selectedValues.length > 0) {
                removeItem(selectedValues[selectedValues.length - 1]);
              }
              break;
          }
        };

        return (
          <div
            ref={containerRef}
            className={`fieldset relative ${wrapperClassName ?? ""}`}
          >
            <label className="fieldset-legend block">
              {label}
              {isRequired && <span className="text-error ml-1">*</span>}
            </label>

            <div
              className={`border rounded-box bg-base-100 p-2 min-h-14 cursor-text ${
                error ? "border-error" : isOpen ? "border-primary" : "border-base-300"
              } ${disabled ? "opacity-60 cursor-not-allowed" : ""} ${className ?? ""}`}
              onClick={() => !disabled && inputRef.current?.focus()}
            >
              {/* Input */}
              {!disabled && (
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  placeholder={selectedValues.length === 0 ? placeholder : ""}
                  className="input input-ghost w-full focus:outline-none"
                  onFocus={() => setIsOpen(true)}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setIsOpen(true);
                  }}
                  onKeyDown={handleKeyDown}
                  aria-expanded={isOpen}
                  aria-haspopup="listbox"
                  aria-autocomplete="list"
                  role="combobox"
                />
              )}
              
              {/* Selected chips */}
              <div className="flex flex-wrap gap-2 mb-2">
                {selectedValues.map((value) => {
                  const option = options.find((o) => o.value === value);
                  return (
                    <div key={value} className="badge badge-primary gap-2 p-4">
                      {option?.label}
                      {!disabled && (
                        <button
                          type="button"
                          aria-label={`Remove ${option?.label}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            removeItem(value);
                          }}
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dropdown */}
            {isOpen && !disabled && (
              <ul
                role="listbox"
                className="menu absolute z-50 top-full mt-1 w-full rounded-box bg-base-100 shadow border border-base-300 max-h-60 overflow-auto"
              >
                {filteredOptions.length > 0 ? (
                  filteredOptions.map((option, index) => (
                    <li key={option.value} role="option" aria-selected={false}>
                      <button
                        type="button"
                        className={index === highlightedIndex ? "active" : ""}
                        onMouseEnter={() => setHighlightedIndex(index)}
                        onClick={() => addItem(option.value)}
                      >
                        {option.label}
                      </button>
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-base-content/50 text-sm select-none">
                    {query ? `No results for "${query}"` : "No options available"}
                  </li>
                )}
              </ul>
            )}

            {/* Hint / Error */}
            {error ? (
              <p className="label text-error">{String(error.message)}</p>
            ) : (
              hints && <p className="label">{hints}</p>
            )}
          </div>
        );
      }}
    />
  );
};

export default FormMultiSelect;
