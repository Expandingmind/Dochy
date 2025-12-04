import { ProductGrid } from "@/components/ProductGrid";

export default function VendorsPage() {
  return (
    <div className="pt-8">
      <ProductGrid initialFilter="Vendor Lists" title="Our Vendors" />
    </div>
  );
}
