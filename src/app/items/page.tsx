import { ProductGrid } from "@/components/ProductGrid";

export default function ItemsPage() {
  return (
    <div className="pt-20">
      <ProductGrid initialFilter="Bundles" hideFilters={true} title="Featured Items" />
    </div>
  );
}

