import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from 'src/app/models/Product';
import { ReaddataService } from 'src/app/services/readdata.service';

@Component({
  selector: 'app-productregistration',
  templateUrl: './productregistration.component.html',
  styleUrls: ['./productregistration.component.scss'],
})
export class ProductregistrationComponent implements OnInit {
  form: FormGroup;
  product: Product;
  imageData: string;
  price: Number;

  constructor(private readdataService: ReaddataService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null),
      image: new FormControl(null),
      extra: new FormControl(null),
      price: new FormControl(null),
    });
  }

  onSubmit() {
    this.readdataService.addProduct(
      this.form.value.name,
      this.form.value.image,
      this.form.value.extra,
      this.form.value.price,
    );
    this.form.reset();
    this.imageData = '';
  }

  onFIleSelect(event: Event) {
    let filetarget = event.target as HTMLInputElement;
    if (!filetarget.files) {
    } else {
      const file = filetarget.files[0];
      console.log(file);
      this.form.patchValue({ image: file });
      const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];
      if (file && allowedMimeTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageData = reader.result as string;
        };
        reader.readAsDataURL(file);
      }
    }
  }
}
