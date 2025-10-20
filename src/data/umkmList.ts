// Pastikan Anda mengimpor interface dari file types/umkm.ts
import { Umkm } from "@/pages/api/umkm";

export const umkmList: Umkm[] = [
  {
    id: 1,
    slug: "link-coffee-barber",
    name: "Link Coffee & Barber",
    tagline: "Satu Tempat, Dua Kebutuhan: Kopi dan Cukur Terbaik.",
    categories: ["Jasa", "Minuman"],
    description:
      "Konsep unik yang menggabungkan kedai kopi modern dengan barbershop profesional. Cocok untuk bersantai sambil menunggu giliran cukur atau sekadar WFC.",
    story:
      "Didirikan dengan ide efisiensi waktu, Link Coffee & Barber menjadi favorit mahasiswa dengan suasana yang nyaman dan pelayanan cukur yang detail.",
    searchKeywords: [
      "cukur rambut",
      "barbershop",
      "potong rambut",
      "kopi murah",
      "kopi susu",
      "wfc",
      "jasa pangkas",
    ],
    averageRating: 4.5,
    address: "Jl. HR Boenyamin No. 25, Grendeng, Purwokerto Utara",
    phone: "0811223344",
    instagram: "@linkcoffee_barber",
    operatingHours: "10:00 - 22:00 WIB",
    location: {
      lat: -7.4215,
      lng: 109.231,
      googleMapsUrl: "https://goo.gl/maps/contohlinknavigasi",
    },
    productsAndServices: [
      { name: "Haircut Pria (Reguler)" },
      { name: "Haircut Pria + Cuci" },
      { name: "Pewarnaan Rambut" },
      { name: "Shaving Kumis & Jenggot" },
      { name: "Es Kopi Lokal Signature" },
      { name: "Manual Brew V60" },
      { name: "Roti Panggang Keju" },
    ],
    photos: [
      "/images/link-barber-cover.jpg",
      "/images/link-coffee-area.jpg",
      "/images/link-cukur-interior.jpg",
    ],
  },
  {
    id: 2,
    slug: "patawi-coffee",
    name: "Patawi Coffee",
    tagline: "Rasakan Sensasi Kopi Asli dari Perkebunan Lokal.",
    categories: ["Minuman"],
    description:
      "Nikmati kopi berkualitas tinggi yang diproduksi secara lokal dengan cita rasa yang kaya dan aroma yang menggugah selera. Patawi Coffee berkomitmen untuk mendukung petani kopi lokal dan menyajikan secangkir kopi yang tidak hanya enak, tetapi juga berkelanjutan.",
    story:
      "Didirikan oleh sekelompok pecinta kopi, Patawi Coffee bertujuan untuk memperkenalkan kopi lokal ke panggung yang lebih luas. Dengan fokus pada kualitas dan keberlanjutan, kami bekerja langsung dengan petani untuk memastikan setiap biji kopi diperlakukan dengan baik dari perkebunan hingga cangkir Anda.",
    searchKeywords: [
      "Beans Export",
      "Kopi Lokal",
      "Kopi Arabica",
      "Kopi Robusta",
    ],
    averageRating: 4.7,
    address: "Jl. Jend. Sudirman No.45, Purwokerto Selatan",
    phone: "0822334455",
    instagram: "@patawi_coffee",
    operatingHours: "08:00 - 20:00 WIB",
    location: {
      lat: -7.4315,
      lng: 109.241,
      googleMapsUrl: "https://goo.gl/maps/contohlinknavigasi2",
    },
    productsAndServices: [
      { name: "Kopi Arabica Bubuk" },
      { name: "Kopi Robusta Bubuk" },
      { name: "Kopi Espresso" },
      { name: "Kopi Cold Brew" },
    ],
    photos: [
      "/images/patawi-coffee-cover.jpg",
      "/images/patawi-coffee-beans.jpg",
      "/images/patawi-coffee-shop.jpg",
    ],
  },
  // ... UMKM selanjutnya
];
