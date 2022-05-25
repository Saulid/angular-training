import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-assignment-day27',
  templateUrl: './assignment-day27.component.html',
  styleUrls: ['./assignment-day27.component.scss']
})
export class AssignmentDay27Component implements OnInit {

  movieList = [
    { name: 'From Bangkok to Mandalay', order_key: 1, type: "drama", description: "From Bangkok to Mandalay is the film cast by Myanmar and Thailand for the goodwill..." },
    { name: 'Mya Mya', order_key: 1, type: "horror", description: "Mya Mya is a 2020 Burmese horror film starring Thinzar Wint Kyaw, Min Taw Win, Dee Dee, and Win Tha Pyay Tun..." },
    { name: 'The Dark Cinema', order_key: 1, type: "comedy", description: "Four filmmaker friends rent a once grand but long decommissioned cinema which is steeped in a dark and horrific history that they are not fully aware of..." },
    { name: 'CODA', order_key: 1, type: "drama", description: "CODA is a 2021 coming-of-age comedy-drama film written and directed by Sian Heder. An English-language remake of the 2014 French-Belgian film..." },
    { name: '1917', order_key: 1, type: "drama", description: "1917 is a 2019 war film directed and produced by Sam Mendes, who co-wrote the film with Krysty Wilson-Cairns. Partially inspired by stories... " },
    { name: 'Scream', order_key: 1, type: "horror", description: "Scream (also known as Scream 5) is a 2022 American slasher film directed by Radio Silence..." },
    { name: 'Lamb', order_key: 1, type: "horror", description: "Lamb (Icelandic: Dýrið 'The animal') is a 2021 folk horror film[7] directed by Valdimar..." },
    { name: 'Free Guy', order_key: 1, type: "comedy", description: "Free Guy is a 2021 American science fiction action comedy film directed and produced by Shawn Levy from..." },
    { name: 'Red Notice', order_key: 1, type: "comedy", description: "ed Notice is a 2021 American action comedy film written, directed, and produced by Rawson Marshall Thurber. Dwayne Johnson..." },
    
  ];
  drama: any = [];
  horror: any = [];
  comedy: any = [];
  allList: any  = [];

  constructor() {
    const hasMovie = JSON.parse(localStorage.getItem("movie") || "[]");
    if (hasMovie.length === 0) {
      localStorage.setItem('movie', JSON.stringify(this.movieList));
    }
  }

  ngOnInit(): void {
    this.allList = JSON.parse(localStorage.getItem("movie") || "[]");
    this.getMovie();
  }

  getMovie() {
    this.drama = this.allList.filter((data: any) => {
      return data.type === 'drama';
    });
    this.drama.sort((a: any, b: any) => a.order_key > b.order_key ? 1 : -1);
    this.horror = this.allList.filter((data: any) => {
      return data.type === 'horror';
    });
    this.horror.sort((a: any, b: any) => a.order_key > b.order_key ? 1 : -1);
    this.comedy = this.allList.filter((data: any) => {
      return data.type === 'comedy';
    });
    this.comedy.sort((a: any, b: any) => a.order_key > b.order_key ? 1 : -1);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex)
    } else {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    this.applySortedChange();
  }

  applySortedChange() {
    if (this.drama.length > 0) {
      this.drama = this.drama.map((item: any, index: any) => {
        return Object.assign({ ...item, type: 'drama', order_key: index + 1 });
      })
    }
    if (this.horror.length > 0) {
      this.horror = this.horror.map((item: any, index: any) => {
        return Object.assign({ ...item, type: 'horror', order_key: index + 1 });
      })
    }
    if (this.comedy.length > 0) {
      this.comedy = this.comedy.map((item: any, index: any) => {
        return Object.assign({ ...item, type: 'comedy', order_key: index + 1 });
      })
    }
    this.allList = [...this.drama, ...this.horror, ...this.comedy];
    localStorage.setItem('movie', JSON.stringify(this.allList));
  }

}
