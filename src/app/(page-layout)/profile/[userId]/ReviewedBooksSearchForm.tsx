"use client";

import { usePathname, useRouter } from "next/navigation";
import { Input } from "~/components/Input";
import { MagnifyingGlassIcon } from "~/components/icons/MagnifyingGlassIcon";

interface ReviewedBooksSearchFormProps {
  defaultSearch?: string;
}

export function ReviewedBooksSearchForm({
  defaultSearch,
}: ReviewedBooksSearchFormProps): JSX.Element | null {
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
    <Input.Root as="form" onSubmit={handleSearch}>
      <Input
        type="search"
        name="search"
        defaultValue={defaultSearch}
        placeholder="Buscar livro avaliado"
      />

      <Input.IconButton type="submit">
        <MagnifyingGlassIcon size={20} />
      </Input.IconButton>
    </Input.Root>
  );
}
