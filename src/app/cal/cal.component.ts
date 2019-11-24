import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent {
  history = [];
  public age: number;
  public weight: number;
  public height: number;
  public BMI: number;
  lastValue: boolean;

  bmi()
  {
    this.BMI = 10000*this.weight / Math.pow(this.height,2) ;
    
    if (this.BMI < 16) {alert( 'Выраженный дефицит массы тела' );
    } else if (this.BMI < 18.5) {alert( 'Недостаточная (дефицит) масса тела' );
    } else if (this.BMI < 24.99) {alert( 'Нормальный вес' );
    } else if (this.BMI < 30) {alert( 'Избыточная масса тела (предожирение)' );
    } else if (this.BMI < 35) {alert( 'Ожирение' );
    } else if (this.BMI < 40) {alert( 'Ожирение резкое' );
    } else {alert( 'Очень резкое ожирение' )}

    this.history.push({
    age: this.age,
    weight: this.weight,
    height: this.height,
    });
  }
  story()
  {
    this.lastValue = !this.lastValue;
  }
}
