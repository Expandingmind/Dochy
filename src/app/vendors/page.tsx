import { ProductGrid } from "@/components/ProductGrid";

export default function VendorsPage() {
  return (
    <div className="pt-20">
      <ProductGrid initialFilter="Vendor Lists" hideFilters={true} title="Our Vendors" />
    </div>
  );
}

