type PriceTagProps = {
  amount: number;
  currency: Currency;
  discount?: number;
};

type Currency = "USD" | "EUR" | "GBP";

const currencySymbol: Record<Currency, string> = {
  USD: "$",
  EUR: "€",
  GBP: "£",
};

export default function PriceTag({ amount, currency, discount }: PriceTagProps) {
  const symbol = currencySymbol[currency];
  const hasDiscount = discount !== undefined && discount > 0;
  const discountedPrice = hasDiscount ? amount - (amount * discount) / 100 : null;
  return (
    <div className="inline-flex items-center gap-2">
      {/* Original price — struck through if discounted */}
      <span className={hasDiscount ? "line-through text-gray-400" : ""}>
        {symbol}
        {amount.toFixed(2)}
      </span>

      {/* Discounted price — only shown when discount exists */}
      {discountedPrice !== null && (
        <span className="text-red-600 font-bold">
          {symbol}
          {discountedPrice.toFixed(2)}
        </span>
      )}
    </div>
  );
}
