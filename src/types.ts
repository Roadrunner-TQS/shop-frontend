export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
}

export interface Author {
    id: string;
    firstName: string;
    lastName: string;
    bio: string;
}

export interface Book {
    id: string;
    title: string;
    author: Author;
    price: number;
    discount: number;
    publisher: string;
    year: number;
    pages: number;
    description: string;
    imageUrl: string;
    categories: Category[];
}

export interface Category {
    id: string;
    name: string;
    slug: string;
}

export interface Client {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    role: Role;
}

enum Role {
    ROLE_ADMIN = "ROLE_ADMIN",
    ROLE_USER = "ROLE_USER",
}

export interface Payment {
    id: string;
    name: string;
    cardNumber: number;
    expirationDate: string;
    cvv: number;
}

export interface OrderItem {
    book: Book;
    quantity: number;
}

export interface OrderStatus {
    id: string;
    status: string;
    timestamp: string;
}
export interface PickUpService {
    id: string;
    name: string;
    slug: string;
}

export interface PickUpLocation {
    id: string;
    name: string;
    slug: string;
    latitude: number;
    longitude: number;
    address: string;
    pickUpService: PickUpService;
}

export interface Order {
    id: string;
    client: Client;
    date: string;
    payment: Payment;
    items: OrderItem[];
    orderStatus: OrderStatus[];
    pickUpLocation: PickUpLocation;
    pickUpService: PickUpService;
    trackingId: string;
    status: string;
}