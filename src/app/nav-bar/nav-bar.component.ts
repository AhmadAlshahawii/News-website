import { NavService } from './../nav.service';
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';


declare var $: any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  get countries() {
    return this._navService.countries;
  }
  get categories() {
    return this._navService.categories;
  }
  get newsContainer() {
    return this._navService.newsContainer;
  }
  get changeCode() {
    return this._navService.changeCode;
  }
  get changeCategory() {
    return this._navService.changeCategory;
  }
  get getNews() {
    return this._newsService.getNews;
  }
  

  myDate:any = '';

  getDate()
  {
    setInterval(() => {         
      this.myDate = new Date();
      
    }, 1000);
  }



  
  





  constructor(private _navService : NavService , private _newsService : NewsService) {
    this.getDate();

    
    

   }
 
    
    
  
    
       

  ngOnInit() {
    
    $("#dropdownId").click(function(){
      $(".dropdown-menu").fadeToggle(200);
    })

      
    $(window).click(function(e){
    
        $(".dropdown-menu").hide(200);
      
    })
    

  }

}
