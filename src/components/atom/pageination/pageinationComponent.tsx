import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationPrevious,
    PaginationNext,
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
    const itemsPerPage=5
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);
  
    return (
      <div className="flex flex-col  items-center md:flex-row">
        {/* Display the pagination text */}
        <p className="mb-2 text-gray-600 flex-1">
          {startItem} to {endItem} of {totalItems} 
        </p>
  
        {/* Pagination controls */}
        <Pagination className=" max-w-[70%] mx-4 ">
          <PaginationContent>
            <PaginationPrevious
              className="text-black"
              onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
            />
            {[...Array(totalPages)].map((_, idx) => (
              <PaginationItem key={idx}>
                <PaginationLink
                  className="text-black"
                  isActive={currentPage === idx + 1}
                  onClick={() => onPageChange(idx + 1)}
                >
                  {idx + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
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
  
  