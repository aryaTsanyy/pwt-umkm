// --- 1. Tipe Data Dasar & Union ---

// Daftar kategori yang digunakan untuk filter. Tambahkan jika ada kategori lain!
export type Category = "Makanan" | "Minuman" | "Jasa" | "Oleh-oleh" | "Kosmetik" | "Lainnya";

// --- 2. Interface Bersarang (Nested Data) ---

// Struktur untuk setiap item menu/layanan
export interface ProductService {
  name: string;
  // Jika ingin menambah harga di masa depan: price?: number;
}

// Struktur untuk ulasan statis
export interface Review {
  id: number;
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
  date: string;
}

// Struktur untuk data Lokasi
export interface LocationData {
  lat: number;
  lng: number;
  googleMapsUrl: string;
}

// --- 3. Interface UMKM Utama ---

export interface Umkm {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  categories: Category[];
  description: string;
  story?: string;
  searchKeywords: string[];
  averageRating: number;
  /* reviews: Review[]; */
  address: string;
  phone: string;
  instagram: string;
  operatingHours: string;
  productsAndServices: ProductService[];
  location: LocationData;
  photos: string[];
}
