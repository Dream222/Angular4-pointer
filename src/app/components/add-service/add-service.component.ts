import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { AddServiceInfo, ServiceCategory, ServicePrice, ServiceFulfillmentMethod } from './../../models/add-service-info';
import { ServiceService } from './../../services/service.service';



@Component({
  selector: "add-service",
  templateUrl: "./add-service.component.html",
  styleUrls: ["./add-service.component.css"]
})

export class AddServiceComponent implements OnInit {

  form: FormGroup;
  form_pricing: FormGroup;
  form_fulfillmentMethod: FormGroup;


  constructor(
    private serviceService: ServiceService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    let _serviceInfo = new AddServiceInfo();
    this.form = this._formBuilder.group({
      category: [_serviceInfo.category, Validators.required],
      description: [_serviceInfo.description, Validators.required],
      fulfillmentMethod: this._formBuilder.group(_serviceInfo.fulfillmentMethod),
      location: this._formBuilder.array(_serviceInfo.location),
      media: this._formBuilder.array(_serviceInfo.media),
      pricing: this._formBuilder.group(_serviceInfo.pricing)
    });
  }

  selectValue(event) {
    this.form.controls['category'].setValue({
      id: event.srcElement.selectedIndex,
      name: event.srcElement.value
    });
  }

  setTime(event, type: string) {
    this.form.controls['pricing']['controls']['time'].setValue(event.srcElement.value);
    this.form.controls['pricing']['controls']['timeUnitOfMeasure'].setValue(type);
  }

  onSubmit() {
    this.serviceService.insertService(this.form.value).subscribe((res) => {
      console.log(res);
    },
  (err) => {
    console.log(err);
  })
  }
}
