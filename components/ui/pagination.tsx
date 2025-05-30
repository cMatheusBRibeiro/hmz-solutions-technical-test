import { useCallback, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface PaginationProps {
  page: number;
  perPage: number;
  totalElements: number;
  totalPages: number;
  onNextPage?: () => void;
  onPreviousPage?: () => void;
}

const Pagination = ({
  page,
  perPage,
  totalElements,
  totalPages,
  onNextPage = () => {},
  onPreviousPage = () => {},
}: PaginationProps) => {
  const initialElement = useMemo(() => page * perPage + 1, [page, perPage]);
  const finalElement = useMemo(() => {
    const totalCalculated = page * perPage + perPage;
    return totalCalculated < totalElements ? totalCalculated : totalElements;
  }, [page, perPage, totalElements]);

  const previousPage = useCallback(() => {
    if (page > 0) {
      onPreviousPage();
    }
  }, [page, onPreviousPage]);

  const nextPage = useCallback(() => {
    if (page < totalPages - 1) {
      onNextPage();
    }
  }, [page, onNextPage, totalPages]);

  return (
    <div className="flex gap-4 items-center">
      <span>
        {initialElement}-{finalElement} de {totalElements}
      </span>
      <ChevronLeft className="cursor-pointer" onClick={previousPage} />
      <ChevronRight className="cursor-pointer" onClick={nextPage} />
    </div>
  );
};

export interface RowsPerPageProps {
  onChange?: (rowsPerPage: string) => void;
  value?: string;
}

const RowsPerPage = ({ onChange = () => {}, value }: RowsPerPageProps) => {
  return (
    <div className="flex gap-4 items-center">
      <span>Linhas por página:</span>
      <Select onValueChange={onChange} value={value}>
        <SelectTrigger className="w-[80px]">
          <SelectValue placeholder="Selecione a quantidade de linhas por página" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Linhas por página</SelectLabel>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="25">25</SelectItem>
            <SelectItem value="50">50</SelectItem>
            <SelectItem value="100">100</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export { RowsPerPage, Pagination };
