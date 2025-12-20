/**
 * Formats a number as currency using Intl.NumberFormat
 * @example formatCurrency(1999) => "₦1,999.00"
 * @example formatCurrency(19.99, 'USD') => "$19.99"
 */
export const formatCurrency = (
  amount: number | null | undefined,
  currency: string = 'NGN', // 👈 Default to Nigerian Naira
  locale: string = 'en-NG'  // 👈 Nigerian locale
): string => {
  if (amount == null) return '—';

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};