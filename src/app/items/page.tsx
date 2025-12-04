import { ProductGrid } from "@/components/ProductGrid";

export default function ItemsPage() {
  return (
    <div className="pt-8">
      <ProductGrid initialFilter="Bundles" title="Featured Items" />
    </div>
  );
}
