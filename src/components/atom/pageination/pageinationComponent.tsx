import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";

interface CustomPaginationProps {
  currentPage: number;
  totalItems: number; // Total number of items
  onPageChange: (page: number) => void;
}

const PaginationComponent: React.FC<CustomPaginationProps> = ({
  currentPage,
  totalItems,
  onPageChange,
}) => {
  const itemsPerPage = 2;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const getPaginationLinks = () => {
    const paginationLinks = [];

    if (totalPages <= 7) {
      // No truncation needed, just show all pages
      for (let i = 1; i <= totalPages; i++) {
        paginationLinks.push(i);
      }
    } else if (currentPage > 4 && currentPage < totalPages - 3) {
      // Double truncation
      paginationLinks.push(1, '...');
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        paginationLinks.push(i);
      }
      paginationLinks.push('...',  totalPages);
    } else if (currentPage <= 4) {
      // Single truncation at the end
      for (let i = 1; i <= Math.min(5, totalPages); i++) {
        paginationLinks.push(i);
      }
      paginationLinks.push('...', totalPages);
    } else {
      // Single truncation at the start
      paginationLinks.push(1, '...');
      for (let i = totalPages - 4; i <= totalPages; i++) {
        paginationLinks.push(i);
      }
    }

    return paginationLinks;
  };

  const paginationLinks = getPaginationLinks();

  return (
    <div className="flex flex-col items-center md:flex-row">
      {/* Display the pagination text */}
      <p className="mb-2 text-gray-600 flex-1">
        {startItem} to {endItem} of {totalItems}
      </p>

      {/* Pagination controls */}
      <Pagination className="max-w-[70%] mx-4">
        <PaginationContent>
          <PaginationPrevious
            className="text-black"
            onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          />
          {paginationLinks.map((link, idx) =>
            typeof link === "number" ? (
              <PaginationItem key={idx}>
                <PaginationLink
                  className="text-black"
                  isActive={currentPage === link}
                  onClick={() => onPageChange(link)}
                >
                  {link}
                </PaginationLink>
              </PaginationItem>
            ) : (
              <PaginationItem key={idx}>
                <PaginationEllipsis />
              </PaginationItem>
            )
          )}
          <PaginationNext
            className="text-black"
            onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          />
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
