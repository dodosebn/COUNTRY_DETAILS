import { useEffect, useRef, useState } from "react";
import { ForAllProps } from "@/types";

const useVirtualization = (initialData: ForAllProps[] = []) => {
  const ITEMS_PER_PAGE = 20;
  const [items, setItems] = useState<ForAllProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loadingRef = useRef<HTMLDivElement | null>(null);
  const currentPage = useRef(1);

  useEffect(() => {
    if (initialData?.length > 0) {
      setItems(initialData.slice(0, ITEMS_PER_PAGE));
      currentPage.current = 1;
      setHasMore(initialData.length > ITEMS_PER_PAGE);
    }
  }, [initialData]);

  const loadMoreItems = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const startIndex = currentPage.current * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      const newItems = initialData?.slice(startIndex, endIndex);

      if (!newItems?.length) {
        setHasMore(false);
      } else {
        setItems((prev) => [...prev, ...newItems]);
        currentPage.current += 1;
        setHasMore(endIndex < initialData?.length);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMoreItems();
        }
      },
      { threshold: 0.1 }
    );

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => {
      if (loadingRef.current) {
        observer.unobserve(loadingRef.current);
      }
      observer.disconnect();
    };
  }, [hasMore, loading]);

  return {
    items,
    loading,
    hasMore,
    loadingRef,
  };
};

export default useVirtualization;
