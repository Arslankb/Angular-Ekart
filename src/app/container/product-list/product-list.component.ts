import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  selectedProduct: Product;

  products = [
    {
      id:1,
      name: 'Nike React Infinity Run Flyknit',
      description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6,7,8,9],
      color: ["white", "blue", "black"],
      price: 160,
      discountPrice: 140,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "/assets/image-1.jpg",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id:2,
      name: 'Nike React Infinity Run Flyknit',
      description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6,7,8,9],
      color: ["white", "blue", "black"],
      price: 160,
      is_in_inventory: false,
      items_left: 3,
      imageURL: "/assets/image-2.jpg",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id:3,
      name: 'Nike React Infinity Run Flyknit',
      description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6,7,8,9],
      color: ["white", "blue", "black"],
      price: 160,
      discountPrice: 140,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "/assets/image-3.jpg",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id:4,
      name: 'Nike React Infinity Run Flyknit',
      description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6,7,8,9],
      color: ["white", "blue", "black"],
      price: 160,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "/assets/image-4.jpg",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id:5,
      name: 'Nike React Infinity Run Flyknit',
      description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6,7,8,9],
      color: ["white", "blue", "black"],
      price: 160,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "/assets/image-5.jpg",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id:6,
      name: 'Nike React Infinity Run Flyknit',
      description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6,7,8,9],
      color: ["white", "blue", "black"],
      price: 160,
      discountPrice: 140,
      is_in_inventory: false,
      items_left: 3,
      imageURL: "/assets/image-5.jpg",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id:7,
      name: 'Nike React Infinity Run Flyknit',
      description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6,7,8,9],
      color: ["white", "blue", "black"],
      price: 160,
      discountPrice: 140,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "/assets/image-1.jpg",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id:8,
      name: 'Nike React Infinity Run Flyknit',
      description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6,7,8,9],
      color: ["white", "blue", "black"],
      price: 160,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "/assets/image-2.jpg",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id:9,
      name: 'Nike React Infinity Run Flyknit',
      description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6,7,8,9],
      color: ["white", "blue", "black"],
      price: 160,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "/assets/image-3.jpg",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id:10,
      name: 'Nike React Infinity Run Flyknit',
      description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6,7,8,9],
      color: ["white", "blue", "black"],
      price: 160,
      discountPrice: 140,
      is_in_inventory: false,
      items_left: 3,
      imageURL: "/assets/image-4.jpg",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id:11,
      name: 'Nike React Infinity Run Flyknit',
      description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6,7,8,9],
      color: ["white", "blue", "black"],
      price: 160,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "/assets/image-5.jpg",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id:12,
      name: 'gucci',
      description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6,7,8,9],
      color: ["white", "blue", "black"],
      price: 160,
      discountPrice: 140,
      is_in_inventory: false,
      items_left: 3,
      imageURL: "/assets/image-5.jpg",
      slug: "nike-react-infinity-run-flyknit"
    },
  ];

  totalProductCount = this.products.length;
  totalProductInStock = this.products.filter( p => p.is_in_inventory === true).length;
  totalProductOutOfStock = this.products.filter( p => p.is_in_inventory === false).length;

  @Input()
  searchText: string = '';

  selectedFilterRadioButton: string = 'all';

  onFilterChanged(value: string){
    this.selectedFilterRadioButton = value;
  }

}
