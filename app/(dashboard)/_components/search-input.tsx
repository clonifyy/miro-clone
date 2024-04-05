"use client";

import { Input } from "@/components/ui/input";
import { useDebounceValue } from "usehooks-ts";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import queryString from "query-string";

export default function SearchInput() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const debouncedValue = useDebounceValue(value, 500);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: {
          search: debouncedValue[0],
        },
      },
      {
        skipEmptyString: true,
        skipNull: true,
      }
    );
    router.push(url);
  }, [debouncedValue, router]);
  return (
    <div className="w-full relative">
      <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
      <Input
        onChange={handleChange}
        value={value}
        className="w-full max-w-[516px] pl-9"
        placeholder="Search Board"
      />
    </div>
  );
}
