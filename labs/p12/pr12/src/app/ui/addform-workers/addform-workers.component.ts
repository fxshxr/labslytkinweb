import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-addform-workers',
  templateUrl: './addform-workers.component.html',
  styleUrls: ['./addform-workers.component.css'],
})
export class AddformWorkersComponent implements OnInit {
  myWorkerType = MyWorkerType;
  name: string;
  surname: string;
  type = 0;
  


  @Output() addWorker = new EventEmitter<MyWorker>();
  disabledForms = false;
  personForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.personForm = new FormGroup({
      // firstName: new FormControl()
      // firstName: new FormControl('Чем инициализируется')
      firstName: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required,
      ]),
      lastName: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required,
      ]),
      middleName: new FormControl({ value: '', disabled: this.disabledForms }),
      seriaP: new FormControl({ value: '0000', disabled: this.disabledForms }, [
        Validators.maxLength(4),
        Validators.minLength(4),
      ]),
      numberP: new FormControl(
        { value: '000000', disabled: this.disabledForms },
        [Validators.maxLength(6), Validators.minLength(6)]
      ),
      inn: new FormControl(
        { value: '00000000000000', disabled: this.disabledForms },
        [Validators.maxLength(14), Validators.minLength(14)]
      ),
      email: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.email,
      ]),
      phone: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required,
      ]),
    });
    // this.personForm.patchValue({
    //   firstName: 'значение'
    // });
    console.log(this.personForm.value);
  }


  onAddWorkers() {

    if(this.name=='' || this.name==undefined || this.surname == '' || this.surname==undefined){
    
    }
    else{
      this.addWorker.emit({
        name: this.name,
        surname: this.surname,
        type: this.type,
        edit: false
      });
    }
    
  }
}
