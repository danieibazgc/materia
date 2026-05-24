// src/features/catalog/utils/filterProviders.ts
// Función pura de filtrado. Sin efectos secundarios. 100% testeable.
import type { Provider } from '@/types';
import { sanitizeInput } from '@/lib/sanitize';

/**
 * Filtra una lista de proveedores en base a una query de búsqueda.
 * Busca en nombre, ciudad, descripción y badges del proveedor.
 * @param providers - Lista completa de proveedores
 * @param query - Texto buscado por el usuario (se sanitiza internamente)
 * @returns Lista filtrada de proveedores
 */
export function filterProviders(providers: Provider[], query: string): Provider[] {
  const sanitized = sanitizeInput(query).toLowerCase();
  if (!sanitized) return providers;

  return providers.filter((provider) => {
    const searchTarget = [
      provider.name,
      provider.city,
      provider.description,
      ...provider.badges,
    ]
      .join(' ')
      .toLowerCase();

    return searchTarget.includes(sanitized);
  });
}
