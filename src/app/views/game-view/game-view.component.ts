import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {

  squares = []
  arrInit() {
    let i = 0
    for (let index = 15; index > 0; index--) {
      this.squares[i] = index
      i++;
    }
  }
  movments = [1]
  dice = [1, 2, 3, 4, 5, 6]
  step = ''
  movementsNo = 0
  selectionFlag = false
  selectSteps() {
    // console.log(this.step)
    if (this.step != '') {
      // this.movments[0] += +this.step
      this.movments[this.movementsNo + 1] = this.movments[this.movementsNo] + (+this.step)
      if (this.movments[this.movementsNo + 1] > 15) this.movments[this.movementsNo + 1] = 15
      else if (this.movments[this.movementsNo + 1] == 15) this.router.navigate(['/congrats/'])
      else this.movementsNo += 1
      this.step = ''
      this.selectionFlag = false
      console.log(this.movments)
    }
  }
  questions = [
    {
      q:''
    },
    {
      q: 'اطول جسر بحري في العالم جسر الملك فهد؟',
      a: true
    },
    {
      q: 'الصقر هو شعار دولة الولايات المتحده الامريكيه؟',
      a: false
    },
    {
      q:''
    },
    {
      q: 'ساعة بيج بن تقع في مدينة لندن؟',
      a: true
    },
    {
      q:''
    },
    {
      q: 'يشير مصطلح الذهب الأسود الي البترول؟',
      a: true
    },
    {
      q: 'تنقسم مصر الي اكثر من 30 محافظه؟',
      a: false
    },
    {
      q: 'الدولفين هو اكثر الحيوانات البحرية ذكاء؟',
      a: true
    },
    {
      q:''
    },
    {
      q: 'الكويت يقع فيها جامع الزيتون؟',
      a: false
    },
    {
      q: 'تشير كلمة الفلسفة للشخص المحب للحكمة؟',
      a: true
    },
    {
      q: 'ثمانية هو عدد الجيوب الانفية في جسم الانسان؟',
      a: true
    },
    {
      q:''
    },
    {
      q: 'الاسد هو الحيوان الذي اذا اصابه الجوع اكل صغاره؟',
      a: false
    },
    {
      q: 'تعد قطر اصغر الدول العربية من حيث المساحة؟',
      a: false
    },
  ]
  answer(a: boolean) {
    if (this.questions[this.movementsNo].a == a && this.movments[this.movments.length - 1] < 15) {
      this.selectionFlag = true
    }
  }
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.arrInit()
  }

}
