// src/features/catalog/hooks/useCatalog.ts
import { useState, useMemo } from 'react';
import { providers as allProviders } from '@/data/providers';
import { filterProviders } from '../utils/filterProviders';
import { useDebounce } from '@/hooks/useDebounce';
import { VALIDATION } from '@/lib/constants';

/**
 * Hook que encapsula toda la lógica del catálogo de proveedores:
 * estado de búsqueda, filtrado y resultados.
 * Separa la lógica del componente de visualización (Clean Architecture).
 */
export function useCatalog() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, VALIDATION.DEBOUNCE_MS);

  const filteredProviders = useMemo(
    () => filterProviders(allProviders, debouncedQuery),
    [debouncedQuery]
  );

  /**
   * Actualiza la query con protección de longitud máxima.
   * OWASP A03: Evita inputs de longitud arbitraria.
   */
  const handleSearch = (value: string) => {
    if (value.length <= VALIDATION.MAX_SEARCH_LENGTH) {
      setQuery(value);
    }
  };

  return {
    query,
    handleSearch,
    filteredProviders,
    hasResults: filteredProviders.length > 0,
    isFiltering: debouncedQuery.length > 0,
    resultCount: filteredProviders.length,
  };
}
