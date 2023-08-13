"use client";

import { usePathname, useRouter } from "next/navigation";
import { Input } from "~/components/Input";
import { MagnifyingGlassIcon } from "~/components/icons/MagnifyingGlassIcon";

interface SearchFormProps {
  className?: string;
  placeholder: string;
  defaultSearch?: string;
}

export function SearchForm({
  className,
  placeholder,
  defaultSearch,
}: SearchFormProps): JSX.Element | null {
  const router = useRouter();
  const pathname = usePathname();

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const search = formData.get("search")?.toString();
    const searchParams = new URLSearchParams();

    if (search) {
      searchParams.set("search", search);
    }

    router.replace(`${pathname}?${searchParams}`);
  }

  return (
    <Input.Root as="form" onSubmit={handleSearch} className={className}>
      <Input
        type="search"
        name="search"
        placeholder={placeholder}
        defaultValue={defaultSearch}
      />

      <Input.IconButton type="submit">
        <MagnifyingGlassIcon size={20} />
      </Input.IconButton>
    </Input.Root>
  );
}
