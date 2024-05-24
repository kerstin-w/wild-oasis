import { useQuery } from '@tanstack/react-query';
import { getSettings } from '../../services/apiSettings';

/**
 * The useSettings function retrieves settings data using a query and returns isLoading, error, and settings.
 * @returns The `useSettings` function is returning an object with three properties: `isLoading`,`error`, and `settings`. These properties are obtained from the `useQuery` hook, which fetches settings data using the `getSettings` function. The `isLoading` property indicates whether the data is currently being loaded, the `error` property contains any error messages, and the `settings`property holds
 */
export function useSettings() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({ queryKey: ['settings'], queryFn: getSettings });
  return { isLoading, error, settings };
}
