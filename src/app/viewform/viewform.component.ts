import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss']
})
export class ViewformComponent implements OnInit {

  details = [
    {
      catalogue_name: 'Software Development',
      status: 'in_progress',
      createdOn: 'a 1month ago',
      category_details: [{
        category: 'data structure 1',
        sub_category: 'data structure 11',
        super_sub_category: 'data structure 111'
      },
      {
        category: 'data structure 2',
        sub_category: 'data structure 22',
        super_sub_category: 'data structure 222'

      }]
    },
    {
      catalogue_name: 'Website Development',
      status: 'completed',
      createdOn: 'a 4month ago',
      category_details: [{
        category: 'data structure 1',
        sub_category: 'data structure 11',
        super_sub_category: 'data structure 111'
      },
      {
        category: 'data structure 2',
        sub_category: 'data structure 22',
        super_sub_category: 'data structure 222'

      }]
    }];
  displayMode: number;
  constructor() { }

  ngOnInit(): void {
  }
  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }
}
